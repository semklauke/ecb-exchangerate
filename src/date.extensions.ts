export {};

declare global {
    interface Date {
        getISO8601Week() : number;
        getUTCDayMonday() : number;
    } 
}

/* 
    Original by 
    Nick Baicoianu at MeanFreePath: http://www.epoch-calendar.com 
*/
Date.prototype.getISO8601Week = function() : number {
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

Date.prototype.getUTCDayMonday = function(this: Date): number {
    const d: number = this.getUTCDay();
    return d == 0 ? 6 : d-1; 
}