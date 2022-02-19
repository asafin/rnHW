export interface BaseAuthModel {
    email: string;
    password: string;
}

export interface AuthRequestModel {
    grant_type: 'password';
    username: string;
    password: string;
}

export interface AuthResponseModel {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    created_at: number;
}

export interface SignUpModel extends BaseAuthModel {
    first_name: string;
    last_name: string;
}

export interface AccountPublicMetadataModel {
    user_segment: string;
}

export interface AccountPrivateMetadataModel {
    has_abandoned_cart: boolean;
}

export interface SignUpRequestModel {
    password_confirmation: string;
    public_metadata: AccountPublicMetadataModel;
    private_metadata: AccountPrivateMetadataModel;
}

export interface UserModel {
    id: string | number;
    type: string;
    attributes: {
        email: string;
        first_name: string;
        last_name: string;
        store_credits: number;
        completed_orders: number;
        public_metadata: AccountPublicMetadataModel;
    };
}

export interface SignUpResponseModel {
    data: UserModel;
}
