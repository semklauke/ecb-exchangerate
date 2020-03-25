export interface Currency {
    code: string,
    name?: string
}

export interface ExchangeRate {
    currency: Currency,
    rate: number
}

export interface ExchangeRateOptions {
}