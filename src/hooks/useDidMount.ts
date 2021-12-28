import { useEffect } from 'react';

export const useDidMount = (callback: () => void | Promise<unknown>) => {
    useEffect(() => {
        callback();
    }, []);
};
