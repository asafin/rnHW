import { useState } from 'react';
import { getClientInstance } from '../../services/client/clientProvider';
import { WebClient } from '../../services/client/WebClient';
import { UpdateUserAddressRequestModel, UpdateUserAddressResponseModel, UserAddressModel } from '../../types';

export const useUpdateUserAddress = () => {
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [address, setAddress] = useState<UserAddressModel | null>(null);

    const client: WebClient = getClientInstance();

    const updateUserAddress = async (id: string, model: UpdateUserAddressRequestModel, token: string) => {
        setDataIsLoading(true);
        try {
            const response: UpdateUserAddressResponseModel = await client.getUserAddress().updateUserAddress(id, model, token);
            setAddress(response.data);
        } catch (e) {
            setIsError(true);
            console.log('create get user address list: ', e);
        } finally {
            setDataIsLoading(false);
        }
    };

    return { dataIsLoading, isError, updateUserAddress, address };
};
