import { UpdateUserAddressRequestModel, UpdateUserAddressResponseModel, UserAddressListResponseModel } from '../../../types';
import { BaseService } from './BaseService';

export class UserAddressClientService extends BaseService {
    private readonly url: string;

    constructor(url: string) {
        super();

        this.url = url;
    }

    public readonly getUserAddressList = (token: string): Promise<UserAddressListResponseModel> =>
        fetch(`${this.url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => this.parseResponse(response));

    public readonly updateUserAddress = (
        id: string,
        model: UpdateUserAddressRequestModel,
        token: string
    ): Promise<UpdateUserAddressResponseModel> =>
        fetch(`${this.url}/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));
}
