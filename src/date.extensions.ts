export {};

declare global {
    interface Date {
        getISO8601Week() : number;
        getUTCDayMonday() : number;
    } 
}

Date.prototype.getISO8601Week = function() : number {
/* developed by Nick Baicoianu at MeanFreePath: http://www.epoch-calendar.com */
    const newYear: Date = new Date(this.getFullYear(),0,1);
    let day: number = newYear.getDay() - 1;
    day = (day >= 0 ? day : day + 7);
    const daynum: number = Math.floor((this.getTime() - newYear.getTime() - 
    (this.getTimezoneOffset()-newYear.getTimezoneOffset())*60000)/86400000) + 1;
    let weeknum: number;
    if(day < 4) {
        weeknum = Math.floor((daynum+day-1)/7) + 1;
        if(weeknum > 52) {
            let nYear: Date = new Date(this.getFullYear() + 1,0,1);
            let nday: number = nYear.getDay() - 1;
            nday = nday >= 0 ? nday : nday + 7;
            weeknum = nday < 4 ? 1 : 53;
        }
    } else {
        weeknum = Math.floor((daynum+day-1)/7);
    }

    return weeknum == 0 ? 53 : weeknum;
};


// // ref http://www.proesite.com/timex/wkcalc.htm
// Date.prototype.getISO8601Week = function() : number {
//     const year: number = new Date().getFullYear();
//     let day: number = this.getUTCDate();
//     let dow: number = this.getUTCDayMonday();
//     let dow0101: number = new Date(year, 0, 1, 12).getUTCDayMonday();
//     let dow0101_nextYear: number = new Date(year+1, 0, 1, 12).getUTCDayMonday();
//     let month: number = this.getUTCMonth();

//     if (month == 1 && 3 < dow0101 && dow0101 < 7 - (day-1)) {
//         dow = dow0101 - 1;
//         dow0101 = new Date(year-1, 0, 1, 12).getUTCDayMonday();
//         month = 12;
//         day = 31;
//     } else if ( month == 12 && 30 - (day-1) < dow0101_nextYear && dow0101_nextYear < 4) {
//         return 1;
//     }

//     const q1: number = new Date(year, 0, 1, 12).getUTCDayMonday() < 4 ? 1 : 0;
//     return q1 + 4 * (month - 1) + ( 2 * (month - 1) + (day - 1) + dow0101 - dow + 6 ) *(36 / 256);
// }

Date.prototype.getUTCDayMonday = function(this: Date): number {
    const d: number = this.getUTCDay();
    return d == 0 ? 6 : d-1; 
}