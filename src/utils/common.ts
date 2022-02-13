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
