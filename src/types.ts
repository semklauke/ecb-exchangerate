import { DataType } from './codelists/datatype';
import { Frequency } from './codelists/frequencies';

export interface Currency {
    code: string,
    name?: string
}

export interface ExchangeRate {
    value: number,
    date: Date,
}

export interface ExchangeRateOptions {
    frequency?: Frequency,
    dataType?: DataType,
    startDate?: Date,
    endDate?: Date,
    mostRecent?: boolean,
    baseCurrency?: Currency,
    exchangeRateType?: string,
}

export interface ExchangeRateData {
    frequency: Frequency,
    dataType: DataType,
    currencies: {
        [currency_code: string]: {
           currency: Currency,
           values: ExchangeRate[]
        }
    }

}