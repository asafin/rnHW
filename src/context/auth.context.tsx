import React, { createContext, useReducer } from 'react';
import { authInitialState, authReducer, AuthState } from '../hooks/auth/reducer/authReducer';
import { createAuthContext } from '../hooks/auth/useAuthContext';
import { useRestoreToken } from '../hooks/auth/useRestoreToken';
import { BaseAuthModel } from '../types';

export interface IAuthContext {
    signIn: (data: BaseAuthModel) => Promise<void>;
    signOut: () => void;
    signUp: (data: BaseAuthModel) => Promise<void>;
}

export interface IAuthContextWithState extends IAuthContext {
    authState: AuthState;
}

export const AuthContext = createContext<IAuthContextWithState | null>(null);

export const AuthContextProvider: React.FC = ({ children }) => {
    const [authState, dispatch] = useReducer(authReducer, authInitialState);
    const authContext = createAuthContext(dispatch);

    useRestoreToken(dispatch);

    return <AuthContext.Provider value={{ authState, ...authContext }}>{children}</AuthContext.Provider>;
};
