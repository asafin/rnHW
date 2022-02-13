import { SignUpRequestModel, SignUpResponseModel } from '../../../types';
import { BaseService } from './BaseService';

export class AccountClientService extends BaseService {
    private readonly url: string;

    constructor(url: string) {
        super();

        this.url = url;
    }

    public readonly createAccount = (model: SignUpRequestModel): Promise<SignUpResponseModel> =>
        fetch(`${this.url}account`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/vnd.api+json',
            },
            body: JSON.stringify({ user: { ...model } }),
        }).then((response) => this.parseResponse(response));
}
