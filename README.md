# ecb-exchangerate
Small wrapper for the ecb currency exchnage rate api.

## Install
Currently not on npm, so this is propably the easy aproach
```bash
npm install --save "https://github.com/semklauke/ecb-exchangerate.git"
```
## Usage
You can import all at once or just the parts you need
```typescript
import * as ecb from 'ecb-exchangerate';
let resultPromise = ecb.rate( ecb.currencies["USD"] );
```
```typescript
// or with selective import
import { rate } from 'ecb-exchangerate';
let resultPromise = rate({ code: "USD" });
```

## Functions

```typescript
rate(target: Currency | Currency[], opt?: ExchangeRateOptions) : Promise<ExchangeRateData>
rateAt(target: Currency | Currency[], date: Date, options?: ExchangeRateOptions) : Promise<ExchangeRateData>
rateBetween(target: Currency | Currency[], startDate: Date, endDate: Date, options?: ExchangeRateOptions) : Promise<ExchangeRateData>

codesToCurrencies(x: string[]) : Currency[];
```

## Options
The options parameter gets an object of type `ExchangeRateOptions`. It is optional.<br/>
All options have default values and are optional, so you only have to specify the options you want to chnage from the default values.
#### `frequency?: Frequency`
&emsp;Default: `Frequency.Daily` 
#### `dataType?: DataType`
&emsp;Default: `DataType.Average`
#### `startDate?: Date`
&emsp;If you want a single Value at a specific Date, use this parameter (UTC)<br />
&emsp;Default: `new Date()`
#### `endDate?: Date`
&emsp;For a period of values (UTC)<br />
&emsp;Default: `null`
#### `mostRecent?: boolean`
&emsp;ECB only publishes values on workdays. If this is **true** the library gives you the most recent result for the date of `startDate` back (may be some days before `startDate`). This does not apply to periods (so `startDate` and `endDate` are set<br />
&emsp;Default: `true`
#### `baseCurrency?: Currency`
&emsp;Currently ECB only supports Euro as base currency (dah!)<br />
&emsp;Default: `{ code: 'EUR' }`
#### `exchnageRateType?: string`
&emsp;Dont know what this does tho. Look [here](https://sdw.ecb.europa.eu/datastructure.do?conceptMnemonic=EXR_TYPE&datasetinstanceid=120#cl)  
&emsp;Default:`'SP00'`

 

## Exampels
#### Get most recent EUR/USD exchangrate
```typescript
import { currencies, rate, ExchangeRate } from 'ecb-exchangerate';

rate( currencies["USD"] ).then(data => {
	let euro_usd: ExchangeRate = data.currencies["USD"].values[0];
	console.log(`Most recent EUR/USD rate at ${ euro_usd.date } is ${ euro_usd.value });
}).catch(err => {
	if (err === null) {
		// ECB API gave no values back
	} else {
		// Bad Request. Check error message from the err: Error object
	}
});
```

#### Get most recent EUR/USD and EUR/CAD exchangrate
```typescript
import { currencies, rate, ExchangeRate } from 'ecb-exchangerate';

rate( [currencies["USD"], currencies["CAD"]] ).then(data => {
	let euro_usd: ExchangeRate = data.currencies["USD"].values[0];
	let euro_cad: ExchangeRate = data.currencies["CAD"].values[0];
	console.log(`Most recent EUR/USD rate at ${ euro_usd.date } is ${ euro_usd.value });
	console.log(`Most recent EUR/CAD rate at ${ euro_cad.date } is ${ euro_cad.value });
}).catch(err => {
	...
});
```

#### Get Average EUR/USD exchangerate over the last year (2019)
```typescript
import { currencies, rate, ExchangeRate, Frequency } from 'ecb-exchangerate';
let options = {
	frequency: Frequency.Annual,
	startDate: new Date('2019-01-01'),
	mostRecent: false
}
rate( currencies["USD"], options).then(data => {
	let euro_usd: ExchangeRate = data.currencies["USD"].values[0];
	console.log(`Average EUR/USD exchangrate over the last year is ${ euro_usd.value });
}).catch(err => {
	...
});
```

#### Get Period over one Week EUR/USD
```typescript
import { currencies, rateBetween, ExchangeRate } from 'ecb-exchangerate';

let lastWeek: Date = new Date();
lastWeek.setUTCDate(new Date().getUTCDate() - 7);

rateBetween(currencies["USD"], lastWeek, new Date()).then(data => {
	let euro_usd: ExchangeRate[] = data.currencies["USD"].values;
	for (let er of euro_usd) {
		console.log(`EUR/USD rate at ${ er.date } is ${ er.value });
	}
}).catch(err => {
	...
});
```

## Types
### enum `Frequency`
Values: `Annual` | `Daily` | `HalfYearly` | `Semester` | `Monthly` | `Quarterly` | `Weekly`
<br/>[ref](https://sdw.ecb.europa.eu/datastructure.do?conceptMnemonic=FREQ&datasetinstanceid=120#cl)

### enum `DataType`
Values: `Average` | `EndOfPeriod` | `Growth` | `AnnualChange` | `PercentageSince1998` | `Percentage3Years`
<br/>[ref](https://sdw.ecb.europa.eu/datastructure.do?conceptMnemonic=EXR_SUFFIX&datasetinstanceid=120#cl)

### interface `Currency`
`code: string`  
`name?: string`  

The ECB will only accept currency codes they think are reasonable (not conform to ISO 4217).  
A list can be found [here](https://sdw.ecb.europa.eu/datastructure.do?conceptMnemonic=CURRENCY&datasetinstanceid=120#cl).  
The same list is stored as `Currency` object in the export `currencies` from the module. You can acces them via
```typescript
import { currencies } from 'ecb-exchangerate';
let dollar: Currency = currencies["USD"];
console.log(dollar);
// {
//     code: "USD",
//     name: "US dollar"
// } 
```

### interface `ExchangeRate`
`value: number`  
`date: Date`

This object contain a exchangerate given back from the api. The date comes for the ECB API.
### interface `ExchangeRateData`
```typescript
frequency: Frequency,
dataType: DataType,
currencies: {
    [currency_code: string]: {
       currency: Currency,
       values: ExchangeRate[]
    }
}
```
This object is the return value of the `rate` function.


