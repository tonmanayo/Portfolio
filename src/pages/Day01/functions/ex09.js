export default (text) => {
    const dayReg = /(^[0-2]\d|3[0-1])/;
    const monthReg = /(^\d{2})\s([A-Z]{1}[a-z]+)/;
    const yearReg = /(^\d{2})\s([A-Z]{1}[a-z]+)\s(\d{4})/;
    const hourseReg = /(^\d{2})\s([A-Z]{1}[a-z]+)\s(\d{4})\s([0-1]\d|2[0-3])/;
    const minutesReg = /(^\d{2})\s([A-Z]{1}[a-z]+)\s(\d{4})\s([0-1]\d|2[0-3]):([0-5]\d)/;
    const secondsReg = /(^\d{2})\s([A-Z]{1}[a-z]+)\s(\d{4})\s([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)/;
    const day = dayReg.exec(text) ? dayReg.exec(text)[0] : null;
    const month = monthReg.exec(text) ? monthReg.exec(text)[1] : null;
    const year = yearReg.exec(text) ? yearReg.exec(text)[2] : null;
    const hour = hourseReg.exec(text) ? hourseReg.exec(text)[3] : null;
    const minute = minutesReg.exec(text) ? minutesReg.exec(text)[5] : null;
    const second = secondsReg.exec(text) ? secondsReg.exec(text)[5] : null;

    if (!day)
        return "Day wrong. Need Two digits 0-9 or Time format wrong, day(2 digits) Month year(4 digits) hh:mm:ss\n";
    if (!month)
        return "Month wrong, First Char must be Capital!\n";
    if (!year)
        return "Year wrong. Must be 4 digits\n";
    if (!hour)
        return "Hours Wrong Two digits first digit 0-2, Second 0-9 followed by a :\n";
    if (!minute)
        return "Minutes Wrong Two digits first digit 0-5, Second 0-9 followed by a :\n";
    if (!second)
        return "Seconds Wrong Two digits first digit 0-5, Second 0-9\n";
    return new Date(text).getTime() / 1000
}