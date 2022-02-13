import { useState } from 'react';
import { getClientInstance } from '../../services/client/clientProvider';
import { WebClient } from '../../services/client/WebClient';
import { AuthResponseModel, BaseAuthModel } from '../../types';

export const useLogin = () => {
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [token, setToken] = useState<string | null>(null);

    const client: WebClient = getClientInstance();

    const login = async (model: BaseAuthModel) => {
        setDataIsLoading(true);
        try {
            const response: AuthResponseModel = await client.getAuthService().login({
                grant_type: 'password',
                password: model.password,
                username: model.email,
            });

            setToken(response.access_token);
        } catch (e) {
            setIsError(true);
            console.log('create account error: ', e);
        } finally {
            setDataIsLoading(false);
        }
    };

    return { dataIsLoading, isError, login, token };
};
