export interface AuthState {
    userToken: string | null;
    isLoading: boolean;
    isSignout: boolean;
}

export enum AuthActionsTypes {
    RESTORE_TOKEN = 'RESTORE_TOKEN',
    SIGN_IN = 'SIGN_IN',
    SIGN_OUT = 'SIGN_OUT',
}

export type AuthAction = {
    type: AuthActionsTypes;
    payload: string | null;
};

export const authInitialState: AuthState = {
    isLoading: true,
    isSignout: false,
    userToken: null,
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    const { type, payload } = action;

    switch (type) {
        case AuthActionsTypes.RESTORE_TOKEN:
            return {
                ...state,
                userToken: payload,
                isLoading: false,
            };
        case AuthActionsTypes.SIGN_IN:
            return {
                ...state,
                isSignout: false,
                userToken: payload,
            };
        case AuthActionsTypes.SIGN_OUT:
            return {
                ...state,
                isSignout: true,
                userToken: null,
            };

        default:
            return state;
    }
};
