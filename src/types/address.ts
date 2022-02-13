import { AccountPrivateMetadataModel, AccountPublicMetadataModel } from './auth';

export interface UserAddressModel {
    id: string;
    type: string;
    attributes: UserAddressAttributes;
}

export interface UserAddressAttributes {
    firstname: string;
    lastname: string;
    address1: string;
    address2: string;
    city: string;
    phone: string;
}

export interface UpdateUserAddressRequestModel extends UserAddressAttributes {
    zipcode?: string;
    state_name?: string;
    alternative_phone?: string;
    company?: string;
    created_at?: string;
    updated_at?: string;
    deleted_at?: string;
    label?: string;
    public_metadata?: AccountPublicMetadataModel;
    private_metadata?: AccountPrivateMetadataModel;
}

export interface UpdateUserAddressResponseModel {
    data: UserAddressModel;
}

export interface UserAddressListResponseModel {
    data: UserAddressModel[];
}
