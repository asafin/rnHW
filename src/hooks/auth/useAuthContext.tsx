import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { IAuthContext } from '../../context/auth.context';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { BaseAuthModel } from '../../types';
import { AuthAction, AuthActionsTypes } from './reducer/authReducer';

export const useCreateAuthContext = (dispatch: React.Dispatch<AuthAction>): IAuthContext =>
    React.useMemo<IAuthContext>(
        () => ({
            signIn: async (data: BaseAuthModel) => {
                console.log(data);
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: 'dummy-auth-token' });
            },
            signOut: (navigation: StackNavigationProp<MainStackParamList, keyof MainStackParamList>) => {
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: null });
                navigation.navigate('Login');
            },
            signUp: async (data: BaseAuthModel) => {
                console.log(data);
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: 'dummy-auth-token' });
            },
        }),
        [dispatch]
    );
