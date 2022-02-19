import React from 'react';
import { AuthAction, AuthActionsTypes } from './reducer/authReducer';
import { useDidMount } from '../useDidMount';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useRestoreToken = (dispatch: React.Dispatch<AuthAction>) => {
    const bootstrapAsync = async () => {
        let userToken;

        try {
            userToken = await AsyncStorage.getItem('userToken');
        } catch (e) {
            // Restoring token failed
            console.log('Restoring token failed', e);
        }

        // After restoring token, we may need to validate it in production apps

        dispatch({ type: AuthActionsTypes.RESTORE_TOKEN, payload: userToken ? userToken : null });
    };

    useDidMount(() => {
        (async () => {
            await bootstrapAsync();
        })();
    });
};
