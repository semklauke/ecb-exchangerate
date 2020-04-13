import { currencies, rate, rateBetween, ExchangeRate, codesToCurrencies } from './lib/index';

let myCurrencies: string[] = ["USD", "CHF", "CAD", "HKD"];

rate( codesToCurrencies(myCurrencies) ).then(data => {
    console.log("Single Value: \n");
    for (let currency of myCurrencies) {
        let er: ExchangeRate = data.currencies[currency].values[0];
        console.log(`Most recent EUR/${ currency } rate at ${ er.date.toLocaleDateString("DE") } is ${ er.value }`);
    }


}).catch(err => {
    if (err === null) {
        console.error("No data avaiable");
    } else {
        console.error("Error:");
        console.error(err);
    }
});


// Output:
//
// Most recent EUR/USD rate at 6.4.2020 is 1.0791
// Most recent EUR/CHF rate at 6.4.2020 is 1.056
// Most recent EUR/CAD rate at 6.4.2020 is 1.528
// Most recent EUR/HKD rate at 6.4.2020 is 8.3651



/* ----------------------------------------------------------------------------------------------------------------------- */

rateBetween( codesToCurrencies(myCurrencies), new Date("04/01/2020 UTC") , new Date()).then(data => {
    console.log("\n\nMuliple Values: \n");
    for (let currency of myCurrencies) {
        let ers: ExchangeRate[] = data.currencies[currency].values;
        for (let er of ers) {
            console.log(`Most recent EUR/${ currency } rate at ${ er.date.toLocaleDateString("DE") } is ${ er.value }`);
        }
    }


}).catch(err => {
    if (err === null) {
        console.error("No data avaiable");
    } else {
        console.error("Error:");
        console.error(err);
    }
});

// Output:
//
// Most recent EUR/USD rate at 1.4.2020 is 1.0936
// Most recent EUR/USD rate at 2.4.2020 is 1.0906
// Most recent EUR/USD rate at 3.4.2020 is 1.0785
// Most recent EUR/USD rate at 6.4.2020 is 1.0791
// Most recent EUR/CHF rate at 1.4.2020 is 1.0564
// Most recent EUR/CHF rate at 2.4.2020 is 1.0551
// Most recent EUR/CHF rate at 3.4.2020 is 1.0547
// Most recent EUR/CHF rate at 6.4.2020 is 1.056
// Most recent EUR/CAD rate at 1.4.2020 is 1.5601
// Most recent EUR/CAD rate at 2.4.2020 is 1.5451
// Most recent EUR/CAD rate at 3.4.2020 is 1.5299
// Most recent EUR/CAD rate at 6.4.2020 is 1.528
// Most recent EUR/HKD rate at 1.4.2020 is 8.4781
// Most recent EUR/HKD rate at 2.4.2020 is 8.4545
// Most recent EUR/HKD rate at 3.4.2020 is 8.3625
// Most recent EUR/HKD rate at 6.4.2020 is 8.3651 