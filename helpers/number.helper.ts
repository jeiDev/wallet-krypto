export const numberShort = (number: number, decimal: number = 2): string => {
    if(`${number}`.length <= 3) return `${number}`;
    let x, p, d;
    x = ('' + number).length, p = Math.pow, d = p(10, decimal);
    x -= x % 3
    return `${Math.round(number * d / p(10, x)) / d + " kMGTPE"[x / 3]}`.trim()
}