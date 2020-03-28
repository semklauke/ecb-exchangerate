import https from 'https';

import { Currency, ExchangeRate, ExchangeRateOptions, ExchangeRateData } from './types';
import { Frequency } from './codelists/frequencies';
import { DataType } from './codelists/datatype';
import { currencies }  from './codelists/currencies';
import './date.extensions';

const baseUrl: string = "/service/data/ECB,EXR,1.0/";

interface FixedExchangeRateOptions {
    frequency: Frequency,
    dataType: DataType,
    startDate: Date,
    endDate: Date,
    exchnageRateType: string,
}




export function defaults() : FixedExchangeRateOptions {
    return <FixedExchangeRateOptions> {
        frequency: Frequency.Daily,
        dataType: DataType.Average,
        startDate: new Date(),
        exchnageRateType: 'SP00'
    };
}


export function rate(base: Currency, target: Currency, options?: ExchangeRateOptions) : Promise<ExchangeRateData>;
export function rate(base: Currency, targets: Currency[], options?: ExchangeRateOptions) :  Promise<ExchangeRateData>;
export function rate(b: Currency, t: Currency | Currency[], o?: ExchangeRateOptions) : Promise<ExchangeRateData> {
    
    
    // apply default options
    let options: FixedExchangeRateOptions =  Object.assign(defaults(), o);

    // build key
    let key: string = "";
    key += options.frequency + ".";
    if (t instanceof Array) {
        const clength: number = t.length;
        for (let i = 0; i < clength; i++) {
            key += t[i].code;
            if (i != clength-1) key += "+";
            else key += ".";
        }

    }
    key += b.code + ".";
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
    if (options.endDate)
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
    const request_options: https.RequestOptions = {
      hostname: "a-sdw-wsrest.ecb.int",
      port: 443,
      path: '/service/data/ECB,EXR,1.0/' + path_extension,
      method: 'GET',
      headers: {
        'Accept' : 'application/json'
      }
    }

    return new Promise<ExchangeRateData>(function(resolve, reject) {
        const req = https.request(request_options, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });
      
            resp.on('end', () => {
                const jsonData = JSON.parse(data);
                let final: ExchangeRateData = {
                    frequency: options.frequency,
                    dataType: options.dataType,
                    currencies: {}
                };

                let a: Currency[] = t instanceof Array ? t : [t];

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
            });

        }).on("error", (err) => {
            reject(err);
        });
    });

        

}




function dateToECBBullshit(d: Date, f: Frequency) : string {
    let period: string = "" + d.getFullYear();
    const month: number = d.getMonth();
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
            period += ("00" + month).slice(-2);
            break;
        case Frequency.Weekly:
            period += "-W" + ("00" + d.getISO8601Week()).slice(-2);
            break;
        case Frequency.Daily: 
            period += ("00" + month).slice(-2);
            period += ("00" + d.getDate()).slice(-2);
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