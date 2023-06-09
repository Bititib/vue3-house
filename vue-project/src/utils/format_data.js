import dayjs from 'dayjs';

export function formatMonthDay(date){
    return dayjs(date).format("MM月DD日")
}
export function formatMD(date){
    return dayjs(date).format("MM.DD")
}

export function getDiffyDays(startDay,endDay){
    return dayjs(endDay).diff(startDay,'day')
}