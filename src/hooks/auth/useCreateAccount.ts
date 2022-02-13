import { useState } from 'react';
import { getClientInstance } from '../../services/client/clientProvider';
import { WebClient } from '../../services/client/WebClient';
import { SignUpResponseModel, SignUpModel, UserModel, AccountPublicMetadataModel, AccountPrivateMetadataModel } from '../../types';

const additionalPublicMetadata: AccountPublicMetadataModel = {
    user_segment: 'user',
};

const additionalPrivateMetadata: AccountPrivateMetadataModel = {
    has_abandoned_cart: false,
};

export const useCreateAccount = () => {
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState<UserModel | null>(null);

    const client: WebClient = getClientInstance();

    const createAccount = async (model: SignUpModel) => {
        setDataIsLoading(true);
        try {
            const response: SignUpResponseModel = await client.getAccountService().createAccount({
                ...model,
                password_confirmation: model.password,
                public_metadata: additionalPublicMetadata,
                private_metadata: additionalPrivateMetadata,
            });

            setUser(response.data);
        } catch (e) {
            setIsError(true);
            console.log('create account error: ', e);
        } finally {
            setDataIsLoading(false);
        }
    };

    return { dataIsLoading, isError, createAccount, user };
};
