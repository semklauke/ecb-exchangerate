import * as ecb from './../src/index';

describe('rate success, no period', () => {
    test('rate defaults, 1 currecy', async () => {
        const defaults = ecb.defaults();
        const res = await ecb.rate(ecb.currencies['USD']);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(typeof res).toBe("object");
        expect(Array.isArray(res.currencies['USD'].values)).toBe(true);
        expect(res.currencies['USD'].values.length).not.toBe(0);
        expect(res.frequency).toBe(defaults.frequency);
        expect(res.dataType).toBe(defaults.dataType);
        expect(res.currencies["USD"].currency).toMatchObject(ecb.currencies['USD']);
    });

    test('rate defaults, 3 currecies', async () => {
        const defaults = ecb.defaults();
        const res = await ecb.rate([ecb.currencies['CHF'], ecb.currencies['USD'], ecb.currencies['CAD']]);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(typeof res).toBe("object");
        expect(Array.isArray(res.currencies['USD'].values)).toBe(true);
        expect(Array.isArray(res.currencies['CHF'].values)).toBe(true);
        expect(Array.isArray(res.currencies['CAD'].values)).toBe(true);
        expect(res.currencies['USD'].values.length).not.toBe(0);
        expect(res.currencies['CAD'].values.length).not.toBe(0);
        expect(res.currencies['CHF'].values.length).not.toBe(0);
        expect(res.frequency).toBe(defaults.frequency);
        expect(res.dataType).toBe(defaults.dataType);
        expect(res.currencies["USD"].currency).toMatchObject(ecb.currencies['USD']);
        expect(res.currencies["CHF"].currency).toMatchObject(ecb.currencies['CHF']);
        expect(res.currencies["CAD"].currency).toMatchObject(ecb.currencies['CAD']);
    });

    test('rate endOfPeriod, 1 currecy', async () => {
        const defaults = ecb.defaults();
        const res = await ecb.rate(ecb.currencies['USD']);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(typeof res).toBe("object");
        expect(Array.isArray(res.currencies['USD'].values)).toBe(true);
        expect(res.currencies['USD'].values.length).not.toBe(0);
        expect(res.frequency).toBe(defaults.frequency);
        expect(res.dataType).toBe(defaults.dataType);
        expect(res.currencies["USD"].currency).toMatchObject(ecb.currencies['USD']);
    });

    test('rate options (EndOfPeriod), 1 currecy', async () => {
        let d: Date = new Date();
        d.setUTCMonth(new Date().getUTCMonth() -1 );
        const options: ecb.ExchangeRateOptions = {
            dataType: ecb.DataType.EndOfPeriod,
            frequency: ecb.Frequency.Monthly,
            startDate: d
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(res.currencies['USD'].values.length).not.toBe(0);
    });

    test('rate options (Annual), 1 currecy', async () => {
        let d: Date = new Date();
        d.setUTCFullYear(new Date().getUTCFullYear() -1 );
        const options: ecb.ExchangeRateOptions = {
            frequency: ecb.Frequency.Annual,
            startDate: d
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(res.currencies['USD'].values.length).not.toBe(0);
    });

    /*test('rate options (Weekly), 1 currecy', async () => {
        let d: Date = new Date();
        d.setUTCDate(new Date().getUTCDate() -8);
        const options: ecb.ExchangeRateOptions = {
            frequency: ecb.Frequency.Weekly,
            startDate: d
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(res.currencies['USD'].values.length).not.toBe(0);
    });*/

    test('rate options (Monthly), 1 currecy', async () => {
        let d: Date = new Date();
        d.setUTCMonth(new Date().getUTCMonth() - 2);
        const options: ecb.ExchangeRateOptions = {
            frequency: ecb.Frequency.Monthly,
            startDate: d
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(res.currencies['USD'].values.length).not.toBe(0);
    });

    test('rate options (Quarterly), 1 currecy', async () => {
        let d: Date = new Date();
        d.setUTCMonth(new Date().getUTCMonth() - 5);
        const options: ecb.ExchangeRateOptions = {
            frequency: ecb.Frequency.Quarterly,
            startDate: d
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(res.currencies['USD'].values.length).not.toBe(0);
    });

    test('rate options (HalfYearly), 1 currecy', async () => {
        let d: Date = new Date();
        d.setUTCFullYear(new Date().getUTCFullYear() - 1);
        const options: ecb.ExchangeRateOptions = {
            frequency: ecb.Frequency.HalfYearly,
            startDate: d
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(res.currencies['USD'].values.length).not.toBe(0);
    });
    
});



describe('rate error, no period', () => {
    test('next day', async () => {
        let d: Date = new Date();
        d.setUTCDate(new Date().getUTCDate() + 1 );
        const options: ecb.ExchangeRateOptions = {
            startDate: d,
            mostRecent: false
        };
        await expect(ecb.rate(ecb.currencies['USD'], options)).rejects.toThrow();
    });

    test('mid week', async () => {
        let d: Date = new Date();
        const options: ecb.ExchangeRateOptions = {
            startDate: d,
            frequency: ecb.Frequency.Weekly,
            mostRecent: false
        };
        await expect(ecb.rate(ecb.currencies['USD'], options)).rejects.toBeNull();
    });

    test('mid month', async () => {
        let d: Date = new Date();
        const options: ecb.ExchangeRateOptions = {
            startDate: d,
            frequency: ecb.Frequency.Monthly,
            mostRecent: false
        };
        await expect(ecb.rate(ecb.currencies['USD'], options)).rejects.toBeNull();
    });

    test('mid year', async () => {
        let d: Date = new Date();
        const options: ecb.ExchangeRateOptions = {
            startDate: d,
            frequency: ecb.Frequency.Annual,
            mostRecent: false
        };
        await expect(ecb.rate(ecb.currencies['USD'], options)).rejects.toBeNull();
    });


    test('bullshit currency', async () => {
        let d: Date = new Date();
        const options: ecb.ExchangeRateOptions = {
            startDate: d,
            frequency: ecb.Frequency.Annual,
            mostRecent: false
        };
        const cur: ecb.Currency = {
            code: "XYZ",
            name: "Bullshit"
        }
        await expect(ecb.rate(cur, options)).rejects.toBeNull();
    });

});




describe('rate success, period', () => {
    test('rate today, 1 currecy', async () => {
        const options: ecb.ExchangeRateOptions = {
            startDate: new Date()
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(Array.isArray(res.currencies['USD'].values)).toBe(true);
        expect(res.currencies['USD'].values.length).toBe(1);
    });

    test('rate -5 days, 1 currecy', async () => {
        let d: Date = new Date();
        d.setUTCDate(new Date().getUTCDate() -5);
        const options: ecb.ExchangeRateOptions = {
            startDate: d
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(Array.isArray(res.currencies['USD'].values)).toBe(true);
        expect(res.currencies['USD'].values.length).not.toBe(0);
    });

    test('rate 3 weeks daily 1 currecy', async () => {
        let d: Date = new Date();
        d.setUTCDate(new Date().getUTCDate() - 21);
        const options: ecb.ExchangeRateOptions = {
            startDate: d,
            endDate: new Date()
        };
        const res = await ecb.rate(ecb.currencies['USD'], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(Array.isArray(res.currencies['USD'].values)).toBe(true);
        expect(res.currencies['USD'].values.length).toBeGreaterThanOrEqual(2); 
    });

    test('rate period, 3 currecies', async () => {
        let d: Date = new Date();
        d.setUTCDate(new Date().getUTCDate() - 21);
        const options: ecb.ExchangeRateOptions = {
            startDate: d,
            endDate: new Date()
        };
        const res = await ecb.rate([ecb.currencies['CHF'], ecb.currencies['USD'], ecb.currencies['CAD']], options);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(typeof res).toBe("object");
        expect(res.currencies['USD'].values.length).toBeGreaterThanOrEqual(2);
        expect(res.currencies['CHF'].values.length).toBeGreaterThanOrEqual(2);
        expect(res.currencies['CAD'].values.length).toBeGreaterThanOrEqual(2);
    });

   
});

describe('wrapper functions', () => {

    test('rateAt', async () => {
        const defaults = ecb.defaults();
        let d: Date = new Date('2020-01-01');
        const res = await ecb.rateAt([ecb.currencies['CHF'], ecb.currencies['USD'], ecb.currencies['CAD']], d);
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(typeof res).toBe("object");
        expect(Array.isArray(res.currencies['USD'].values)).toBe(true);
        expect(Array.isArray(res.currencies['CHF'].values)).toBe(true);
        expect(Array.isArray(res.currencies['CAD'].values)).toBe(true);
        expect(res.currencies['USD'].values.length).not.toBe(0);
        expect(res.currencies['CAD'].values.length).not.toBe(0);
        expect(res.currencies['CHF'].values.length).not.toBe(0);
        expect(res.frequency).toBe(defaults.frequency);
        expect(res.dataType).toBe(defaults.dataType);
        expect(res.currencies["USD"].currency).toMatchObject(ecb.currencies['USD']);
        expect(res.currencies["CHF"].currency).toMatchObject(ecb.currencies['CHF']);
        expect(res.currencies["CAD"].currency).toMatchObject(ecb.currencies['CAD']);
    });


     test('rateBetween', async () => {
        let d: Date = new Date();
        d.setUTCDate(new Date().getUTCDate() - 21);
        const res = await ecb.rateBetween([ecb.currencies['CHF'], ecb.currencies['USD'], ecb.currencies['CAD']], d, new Date());
        expect(res).not.toBeNull();
        expect(res).toBeDefined();
        expect(typeof res).toBe("object");
        expect(res.currencies['USD'].values.length).toBeGreaterThanOrEqual(2);
        expect(res.currencies['CHF'].values.length).toBeGreaterThanOrEqual(2);
        expect(res.currencies['CAD'].values.length).toBeGreaterThanOrEqual(2);
    });
});
