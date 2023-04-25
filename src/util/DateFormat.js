import { format } from "date-fns";

export const aMonthTime = 30 * 24 * 60 * 60 * 1000;

export function toDateFormat(date, formatStr) {
    return format(date, formatStr);

}