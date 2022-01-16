import { createContext } from 'react';
import { BaseAuthModel } from '../types';

export interface IAuthContext extends Record<string, unknown> {
    signIn: (data: BaseAuthModel) => Promise<void>;
    signOut: () => void;
    signUp: (data: BaseAuthModel) => Promise<void>;
}

export const AuthContext = createContext<IAuthContext | null>(null);
