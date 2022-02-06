import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { IAuthContext } from '../../context/auth.context';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { BaseAuthModel, LookupModel, SignUpModel } from '../../types';
import { AuthAction, AuthActionsTypes } from './reducer/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const dummyToken = 'dummy-auth-token';

export const useCreateAuthContext = (dispatch: React.Dispatch<AuthAction>): IAuthContext =>
    React.useMemo<IAuthContext>(
        () => ({
            signIn: async (data: BaseAuthModel) => {
                const { password, email } = data;
                console.log(data);
                if (email === 'demo@demo.com' && password === 'test') {
                    await AsyncStorage.setItem('userToken', dummyToken);
                    dispatch({ type: AuthActionsTypes.SIGN_IN, payload: dummyToken });
                    dispatch({ type: AuthActionsTypes.SIGN_IN_ERRORS, payload: [] });
                } else {
                    const errors: LookupModel[] = [
                        { id: 'email', title: 'Check Email' },
                        { id: 'password', title: 'Wrong Password' },
                    ];
                    dispatch({ type: AuthActionsTypes.SIGN_IN_ERRORS, payload: errors });
                }
            },
            signOut: async (navigation: StackNavigationProp<MainStackParamList, keyof MainStackParamList>) => {
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: null });
                await AsyncStorage.removeItem('userToken');
                navigation.navigate('Login');
            },
            signUp: async (data: SignUpModel) => {
                console.log(data);
                await AsyncStorage.setItem('userToken', dummyToken);
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: dummyToken });
            },
            clearErrors: () => {
                dispatch({ type: AuthActionsTypes.SIGN_IN_ERRORS, payload: [] });
            },
        }),
        [dispatch]
    );
