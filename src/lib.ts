import { Currency, ExchangeRate, ExchangeRateOptions } from './types';
import { currencies }  from './currencies';


export function rate(base: Currency, target: Currency, options?: ExchangeRateOptions) : ExchangeRate;
export function rate(base: Currency, targets: Currency[], options?: ExchangeRateOptions) : ExchangeRate[];
export function rate(b: Currency, t: Currency | Currency[], o?: ExchangeRateOptions) : ExchangeRate | ExchangeRate[] {
    
}