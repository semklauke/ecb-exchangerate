import { RequestOptions, request as https_request, get as https_get } from 'https';

import { Currency, ExchangeRate, ExchangeRateOptions, ExchangeRateData } from './types';
import { Frequency } from './codelists/frequencies';
import { DataType } from './codelists/datatype';
import { currencies }  from './codelists/currencies';
import './date.extensions';

interface FixedExchangeRateOptions {
    frequency: Frequency,
    dataType: DataType,
    startDate: Date,
    endDate: Date | null,
    baseCurrency: Currency,
    exchnageRateType: string,
}




export function defaults() : FixedExchangeRateOptions {
    return <FixedExchangeRateOptions> {
        frequency: Frequency.Daily,
        dataType: DataType.Average,
        startDate: new Date(),
        endDate: null,
        baseCurrency: currencies["EUR"],
        exchnageRateType: 'SP00'
    };
}


export function rate(target: Currency | Currency[], opt?: ExchangeRateOptions) : Promise<ExchangeRateData> {
    
    
    // apply default options
    let options: FixedExchangeRateOptions =  Object.assign(defaults(), opt);

    // build key
    let key: string = "";
    key += options.frequency + ".";
    if (target instanceof Array) {
        const clength: number = target.length;
        for (let i = 0; i < clength; i++) {
            key += target[i].code;
            if (i != clength-1) key += "+";
            else key += ".";
        }
    } else {
        key += target.code + ".";
    }
    key += options.baseCurrency.code + ".";
    key += options.exchnageRateType + ".";
    key += options.dataType;

    if (isToday(options.startDate)) {
        if (options.startDate.getUTCHours() < 15) {
            options.startDate.setUTCDate(options.startDate.getUTCDate() - 1);
        }
        const day = options.startDate.getUTCDayMonday();
        if (day === 6) {
            options.startDate.setUTCDate(options.startDate.getUTCDate() - 2);
        } else if (day === 5) {
            options.startDate.setUTCDate(options.startDate.getUTCDate() - 1);
        } 
    }

    // startPeriod
    let startPeriod: string = dateToECBBullshit(options.startDate, options.frequency);

    // endPeriod
    let endPeriod: string | null = null;
    if (options.endDate !== null)
        endPeriod = dateToECBBullshit(options.endDate, options.frequency);

    let path_extension = key + "?startPeriod=" + startPeriod;
    if (endPeriod !== null) path_extension += "&endPeriod=" + endPeriod;
    path_extension += "&detail=dataonly";

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

    // get data
    const baseUrl: string = "https://a-sdw-wsrest.ecb.int/service/data/ECB,EXR,1.0/";
    const request_options: RequestOptions = {
      headers: {
        'Accept' : 'application/json'
      }
    }

    return new Promise<ExchangeRateData>(function(resolve, reject) {
        const req = https_get(baseUrl+path_extension, request_options, (resp) => {

            if (resp.statusCode === 400)
                reject(new Error("Bad Request"));
            else if (resp.statusCode === 404)  {
                reject(null);
            } else {


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




function dateToECBBullshit(d: Date, f: Frequency) : string {
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
  return d.getDate() == today.getDate() &&
         d.getMonth() == today.getMonth() &&
         d.getFullYear() == today.getFullYear();
}