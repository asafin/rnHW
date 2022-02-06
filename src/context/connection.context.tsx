import React, { createContext, useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export interface IConnectionContext {
    isOffline: boolean;
}

export const ConnectionContext = createContext<IConnectionContext | null>(null);

export const ConnectionContextProvider: React.FC = ({ children }) => {
    const [isOffline, setOfflineStatus] = useState(false);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
        });

        return () => removeNetInfoSubscription();
    }, []);

    return <ConnectionContext.Provider value={{ isOffline }}>{children}</ConnectionContext.Provider>;
};
