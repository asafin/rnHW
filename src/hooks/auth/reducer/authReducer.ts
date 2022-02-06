import { LookupModel } from '../../../types';

export interface AuthState {
    userToken: string | null;
    isLoading: boolean;
    isSignout: boolean;
    errors: LookupModel[];
}

// eslint-disable-next-line no-shadow
export enum AuthActionsTypes {
    RESTORE_TOKEN = 'RESTORE_TOKEN',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
    SIGN_IN_ERRORS = 'SIGN_IN_ERRORS',
}

export type AuthAction = {
    type: AuthActionsTypes;
    payload: string | null | LookupModel[];
};

export const authInitialState: AuthState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
    errors: [],
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    const { type, payload } = action;

    switch (type) {
        case AuthActionsTypes.RESTORE_TOKEN:
            return {
                ...state,
                userToken: payload as string | null,
                isLoading: false,
            };
        case AuthActionsTypes.SIGN_IN:
            return {
                ...state,
                isSignout: false,
                userToken: payload as string | null,
            };
        case AuthActionsTypes.SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
            };
        case AuthActionsTypes.SIGN_IN_ERRORS:
            return {
                ...state,
                isSignout: true,
                userToken: null,
                errors: payload as LookupModel[],
            };

        default:
            return state;
    }
};
