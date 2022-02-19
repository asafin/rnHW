import { useState } from 'react';
import { getClientInstance } from '../../services/client/clientProvider';
import { WebClient } from '../../services/client/WebClient';
import { UserAddressListResponseModel, UserAddressModel } from '../../types';

export const useGetUserAddressList = () => {
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [list, setList] = useState<UserAddressModel[]>([]);

    const client: WebClient = getClientInstance();

    const getUserAddressList = async (token: string) => {
        setDataIsLoading(true);
        try {
            const response: UserAddressListResponseModel = await client.getUserAddress().getUserAddressList(token);
            setList(response.data);
        } catch (e) {
            setIsError(true);
            console.log('create get user address list: ', e);
        } finally {
            setDataIsLoading(false);
        }
    };

    return { dataIsLoading, isError, getUserAddressList, list };
};
