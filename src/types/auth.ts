export interface BaseAuthModel {
    email: string;
    password: string;
}

export interface SignUpModel extends BaseAuthModel {
    name: string;
}
