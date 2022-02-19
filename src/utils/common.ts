export const getRandom = (n: number) => {
    return Math.round(Math.random() * n);
};

export const shallowEqual = <T extends Record<string, unknown>>(object1: T, object2: T) => {
    for (const key of Object.keys(object1)) {
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};

export const renderShortDateFromString = (time: number) => {
    const date = new Date(time);
    const YYYY = date.getUTCFullYear();
    const mm = date.getUTCMonth() + 1 < 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1;
    const dd = date.getUTCDate() < 10 ? `0${date.getUTCDate()}` : date.getUTCDate();

    return `${dd}.${mm}.${YYYY}`;
};

export const getFormattedTime = (date: Date) => {
    const hh = date.getUTCHours();
    const hhRender = hh < 10 ? `0${hh}` : hh;
    const min = date.getUTCMinutes();
    const minRender = min < 10 ? `0${min}` : min;

    return `${hhRender}:${minRender}`;
};

export const renderDateFromString = (time: number) => {
    const date = new Date(time);

    return `${renderShortDateFromString(time)} ${getFormattedTime(date)}`;
};
