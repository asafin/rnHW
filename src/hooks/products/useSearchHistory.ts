import { useState } from 'react';
import { HistoryItem } from '../../types';
import { sortHistoryItemsArr } from '../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDidMount } from '../useDidMount';
import { useDidUpdate } from '../useDidUpdate';

export const useSearchHistory = () => {
    const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);

    const setHistory = (search: string) => {
        const currentHistory: HistoryItem[] = [...historyItems.filter((i) => i.value !== search)];
        const newHistoryItem: HistoryItem = { time: new Date().getTime(), value: search };
        if (historyItems.length >= 20) {
            currentHistory.pop();
            currentHistory.push(newHistoryItem);
        } else {
            currentHistory.push(newHistoryItem);
        }
        setHistoryItems(currentHistory.sort(sortHistoryItemsArr));
    };

    useDidMount(() => {
        (async () => {
            const historyStr = await AsyncStorage.getItem('historyItems');

            historyStr && setHistoryItems(JSON.parse(historyStr));
        })();
    });

    useDidUpdate(() => {
        (async () => {
            await AsyncStorage.setItem('historyItems', JSON.stringify(historyItems));
        })();
    }, [historyItems]);

    const deleteHistoryItem = (time: number) => {
        setHistoryItems(historyItems.filter((item) => item.time !== time));
    };

    return { historyItems, setHistory, deleteHistoryItem };
};
