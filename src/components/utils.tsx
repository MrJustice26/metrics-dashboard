export function convertDate(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth().toString().length === 2 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)}-${date.getDate().toString().length === 2 ? date.getDate() : "0" + date.getDate()}`
}

export function convertDateToMonth(date: Date): string {
    const shortMonths: string[] = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ]
    return `${shortMonths[date.getMonth()]} ${date.getDate()}`
}