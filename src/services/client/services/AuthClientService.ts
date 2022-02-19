import { AuthRequestModel, AuthResponseModel } from '../../../types';
import { BaseService } from './BaseService';

export class AuthClientService extends BaseService {
    private readonly url: string;

    constructor(url: string) {
        super();

        this.url = url;
    }

    public readonly login = (model: AuthRequestModel): Promise<AuthResponseModel> => {
        return fetch(`${this.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then((response) => this.parseResponse(response));
    };
}
