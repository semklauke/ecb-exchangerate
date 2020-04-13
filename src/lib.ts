import { RequestOptions, request as https_request, get as https_get } from 'https';

import { Currency, ExchangeRate, ExchangeRateOptions, ExchangeRateData } from './types';
import { Frequency } from './codelists/frequencies';
import { DataType } from './codelists/datatype';
import { currencies }  from './codelists/currencies';
import './date.extensions';


/*
    This is a dirty hack to get arround the problem that TS does
    not work very well with Object.assign90 or object rest 
    (https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#object-spread-and-rest). 
    So the static analyser needs to be told that the properties of the object are now no longer optional.frequency
    I dont know any other way around than to issue a bug report or du this.
*/

interface FixedExchangeRateOptions {
    frequency: Frequency,
    dataType: DataType,
    startDate: Date,
    endDate: Date | null,
    mostRecent: boolean,
    baseCurrency: Currency,
    exchangeRateType: string,
}


export const codesToCurrencies: (x: string[]) => Currency[] = x => x.map(c => currencies[c]);

export function defaults() : FixedExchangeRateOptions {
    return <FixedExchangeRateOptions> {
        frequency: Frequency.Daily,
        dataType: DataType.Average,
        startDate: new Date(),
        endDate: null,
        mostRecent: true,
        baseCurrency: currencies["EUR"],
        exchangeRateType: 'SP00'
    };
}


export function rate(target: Currency | Currency[], opt?: ExchangeRateOptions) : Promise<ExchangeRateData> {
    
    if (target === undefined)
        return new Promise(function(resolve, reject){
            reject(new Error("no currency was defined"));
        });
    // apply default options
    let options: FixedExchangeRateOptions =  { ...defaults(), ...opt };

    // build key
    let key: string = "";
    key += options.frequency + ".";

    if (target instanceof Array) {
        const clength: number = target.length;
        for (let i = 0; i < clength; i++) {
            if (target[i] === undefined)
                return new Promise(function(resolve, reject){
                    reject(new Error("some currency was undefined"));
                });
            key += target[i].code;
            if (i != clength-1) key += "+";
            else key += ".";
        }
    } else {
        key += target.code + ".";
    }

    key += options.baseCurrency.code + ".";
    key += options.exchangeRateType + ".";
    key += options.dataType;


    // date formatting
    let endPeriod: string | null = null;
    let startPeriod: string;

    if (options.mostRecent && options.endDate === null) {
        // we want the most recent single value
        // shift startPeriod 2 months back and endPeriod to the startDate
        endPeriod = dateToECBDateFormat(options.startDate, options.frequency);
        let newStartDate: Date = new Date(options.startDate);
        newStartDate.setUTCDate(1);
        newStartDate.setUTCMonth(newStartDate.getUTCMonth() - 2);
        startPeriod = dateToECBDateFormat(newStartDate, options.frequency);
    } else {
        // dont entsure we get the most recent result beasue either the user does not wanto to (mostRecent === false)
        // or the users wanst a period of values   
        startPeriod = dateToECBDateFormat(options.startDate, options.frequency);
        if (options.endDate !== null)
            endPeriod = dateToECBDateFormat(options.endDate, options.frequency);
    } 

    let path_extension = key + "?startPeriod=" + startPeriod;
    if (endPeriod !== null) path_extension += "&endPeriod=" + endPeriod;
    if (options.mostRecent && options.endDate === null) path_extension += "&lastNObservations=1"
    path_extension += "&detail=dataonly";

    // this function parses s series of data from the api return values
    const parseValues = (d: object, series: number) : { er: ExchangeRate[], cur: Currency } | null => {
        //@ts-ignore
        let obs = d.dataSets[0].series["0:"+series+":0:0:0"].observations;
        //@ts-ignore
        let structures = d.structure.dimensions;
        let dates = structures.observation[0].values;

        let result: { er: ExchangeRate[], cur: Currency } = {
            er: [],
            cur: currencies[structures.series[1].values[series].id as string]
        }

        let counter = 0;
        while (obs[""+counter]) {
            result.er.push({
                value: <number> obs[""+counter][0],
                date: new Date(dates[""+counter].start as string),
            });
            counter++;

        }

        if (counter === 0)
            return null;
        else 
            return result;
    }

    // node https.get parameter setup
    const baseUrl: string = "https://a-sdw-wsrest.ecb.int/service/data/ECB,EXR,1.0/";
    const request_options: RequestOptions = {
      headers: {
        'Accept' : 'application/json'
      },
      host: 'a-sdw-wsrest.ecb.int',
      path: '/service/data/ECB,EXR,1.0/'+path_extension
    }

    return new Promise<ExchangeRateData>(function(resolve, reject) {
        const req = https_get(request_options, (resp) => {

            if (resp.statusCode === 400 ||
                resp.statusCode === 403 ||
                resp.statusCode === 406 ||
                resp.statusCode === 414    ) {

                reject(new Error("Bad Request"));

            } else if (resp.statusCode === 401)
                reject(new Error("Login needed"));
            else if (resp.statusCode === 413)
                reject(new Error("Results too large"));
            else if (resp.statusCode === 500 ||
                     resp.statusCode === 501 ||
                     resp.statusCode === 503) {
                reject(new Error("Server error"));
            } else if (resp.statusCode === 404)
                 reject(null);
            else {

                let data: string = '';
                resp.on('data', (chunk: string) => {
                    data += chunk;
                });
      
                resp.on('end', () => {
                    if (data === 'No results found.')
                        reject(null);
                    else if (data === 'No match found.')
                        reject(new Error("Bad Request"));
                    else if (data === '')
                        reject(null);
                    else {
                        const jsonData: object = JSON.parse(data);
                        let final: ExchangeRateData = {
                            frequency: options.frequency,
                            dataType: options.dataType,
                            currencies: {}
                        };

                        let a: Currency[] = target instanceof Array ? target : [target];

                        for (let i = 0; i<a.length; i++) {
                            let series_data = parseValues(jsonData, i);
                            if (series_data) {
                                final.currencies[series_data.cur.code] = {
                                    currency: series_data.cur,
                                    values: series_data.er
                                } 
                            } else
                                reject(null);
                        }

                        resolve(final);
                    }
                });
            }

        }).on("error", (err) => {
            reject(err);
        });
    });

        

}

// warpper for values at specific date (shorter synatx)
export function rateAt(target: Currency | Currency[], date: Date, options?: ExchangeRateOptions) : Promise<ExchangeRateData> {
    let opt: ExchangeRateOptions =  Object.assign({ startDate: date, mostRecent: false }, options);
    if (!isToday(date) && opt.mostRecent === false ) {
        let d = new Date();
        d.setUTCDate(date.getUTCDate() + 1);
        opt.endDate = d;
    }
    return rate(target, opt);
}

// warpper for values in a period (shorter synatx)
export function rateBetween(target: Currency | Currency[], startDate: Date, endDate: Date, options?: ExchangeRateOptions) : Promise<ExchangeRateData> {
    let opt: ExchangeRateOptions =  Object.assign({ startDate, endDate, mostRecent: false }, options);
    return rate(target, opt);
}




function dateToECBDateFormat(d: Date, f: Frequency) : string {
    let period: string = "" + d.getUTCFullYear();
    const month: number = d.getUTCMonth() + 1;
    switch (f) {
        case Frequency.Annual:
            break;
        case Frequency.HalfYearly:
        case Frequency.Semester:
            if (month < 5) period += "-S1";
            else period += "-S2";
            break;
        case Frequency.Quarterly:
            if (month < 4) period += "-Q1";
            else if (month < 7) period += "-Q2";
            else if (month < 10) period += "-Q3";
            else period += "-Q4";
            break;
        case Frequency.Monthly:
            period += "-" + ("00" + month).slice(-2);
            break;
        case Frequency.Weekly:
            period += "-W" + ("00" + d.getISO8601Week()).slice(-2);
            break;
        case Frequency.Daily: 
            period += "-" + ("00" + month).slice(-2);
            period += "-" + ("00" + d.getDate()).slice(-2);
            break
        default:
            period = d.toISOString();
            break;
    }
    return period;
}

function isToday(d: Date) : boolean {
  const today = new Date()
  return d.getUTCDate() == today.getUTCDate() &&
         d.getUTCMonth() == today.getUTCMonth() &&
         d.getUTCFullYear() == today.getUTCFullYear();
}