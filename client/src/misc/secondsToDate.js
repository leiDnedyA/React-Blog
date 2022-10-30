/**
 * Converts a unix timestamp to a date in format Month Day, Year
 * 
 * @param {int} seconds unix timestamp (seconds)
 * @return {string}
 */
export default function secondsToDate(seconds) {
    const date = new Date(seconds * 1000);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let daySuffix = ''
    switch (day) {
        case 1:
            daySuffix = 'st'
            break;
        case 2:
            daySuffix = 'nd'
            break;
        case 3:
            daySuffix = 'rd'
            break;
        default:
            daySuffix = 'th'
            break;
    }

    return `${MONTHS[month]} ${day}${daySuffix}, ${year}`;


}