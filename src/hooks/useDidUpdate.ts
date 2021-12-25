import { DependencyList, useEffect, useRef } from 'react';

export const useDidUpdate = (callback: () => void | Promise<unknown>, deps: DependencyList) => {
    const hasMount = useRef(false);

    useEffect(() => {
        if (hasMount.current) {
            callback();
        } else {
            hasMount.current = true;
        }
    }, deps);
};
