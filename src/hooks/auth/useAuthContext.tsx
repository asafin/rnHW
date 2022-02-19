import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { IAuthContext } from '../../context/auth.context';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { AuthAction, AuthActionsTypes } from './reducer/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useCreateAuthContext = (dispatch: React.Dispatch<AuthAction>): IAuthContext =>
    React.useMemo<IAuthContext>(
        () => ({
            signIn: async (token: string) => {
                await AsyncStorage.setItem('userToken', token);
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: token });
            },
            signOut: async (navigation: StackNavigationProp<MainStackParamList, keyof MainStackParamList>) => {
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: null });
                await AsyncStorage.removeItem('userToken');
                navigation.navigate('Login');
            },
            clearErrors: () => {
                dispatch({ type: AuthActionsTypes.SIGN_IN_ERRORS, payload: [] });
            },
        }),
        [dispatch]
    );
