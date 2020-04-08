const DAYS_OF_WEEK_SHORT = ["Dim", "Lun", "Mar", "Merc", "Jeu", "Vend", "Sam"];
const DAYS_OF_WEEK = ["Dimanche", "Lundi", "Mardi", "Mercedi", "Jeudi", "Vendredi", "Samedi"];
const MONTHS_OF_YEAR_SHORT = ["Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Juil", "Aou", "Sep", "Oct", "Nove", "Dec"];
const MONTHS_OF_YEAR = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];


export default class DateHelper {
    static getDayShortName(unixTime: number) {
        const day = new Date(unixTime * 1000).getDay();
        return DAYS_OF_WEEK_SHORT[day];
    }

    static getDayName(unixTime: number) {
        const day = new Date(unixTime * 1000).getDay();
        return DAYS_OF_WEEK[day];
    }

    static getMonthShortName(unixTime: number) {
        const month = new Date(unixTime * 1000).getMonth();
        return MONTHS_OF_YEAR_SHORT[month];
    }

    static getMonthName(unixTime: number) {
        const month = new Date(unixTime * 1000).getMonth();
        return MONTHS_OF_YEAR[month];
    }

    static getDayOfMonth(unixTime: number) {
        return new Date(unixTime * 1000).getDate();
    }

    static getTime(unixTime: number) {
        return new Date(unixTime * 1000).toLocaleTimeString();
    }


}