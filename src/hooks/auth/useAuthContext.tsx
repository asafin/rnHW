import React from 'react';
import { IAuthContext } from '../../context/auth.context';
import { BaseAuthModel } from '../../types';
import { AuthAction, AuthActionsTypes } from './reducer/authReducer';

export const createAuthContext = (dispatch: React.Dispatch<AuthAction>): IAuthContext =>
    React.useMemo<IAuthContext>(
        () => ({
            signIn: async (data: BaseAuthModel) => {
                console.log(data);
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: 'dummy-auth-token' });
            },
            signOut: () => dispatch({ type: AuthActionsTypes.SIGN_IN, payload: null }),
            signUp: async (data: BaseAuthModel) => {
                console.log(data);
                dispatch({ type: AuthActionsTypes.SIGN_IN, payload: 'dummy-auth-token' });
            },
        }),
        []
    );
