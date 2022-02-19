import React, { useContext } from 'react';
import { AuthContext, IAuthContextWithState } from '../../context/auth.context';
import { UserAddressAttributes } from '../../types';
import { shallowEqual } from '../../utils';
import { useDidMount } from '../useDidMount';
import { useDidUpdate } from '../useDidUpdate';
import { useGetUserAddressList } from './useGetUserAddressList';
import { useUpdateUserAddress } from './useUpdateUserAddress';

export const useProfileForm = () => {
    const [formValues, setFormValues] = React.useState<UserAddressAttributes>({
        address1: '',
        address2: '',
        city: '',
        firstname: '',
        lastname: '',
        phone: '',
    });
    const [initFormValues, setInitFormValues] = React.useState<UserAddressAttributes | null>(null);
    const [updateBtnDisabled, setUpdateBtnDisabled] = React.useState<boolean>(true);

    const context = useContext(AuthContext);
    const {
        authState: { userToken },
    } = context as IAuthContextWithState;
    const { dataIsLoading: adressListDataIsLoading, getUserAddressList, list } = useGetUserAddressList();
    const { dataIsLoading: updateUserAddressDataIsLoading, updateUserAddress, address } = useUpdateUserAddress();

    useDidMount(() => {
        (async () => {
            await getUserAddressList(userToken as string);
        })();
    });

    useDidUpdate(() => {
        if (list.length) {
            setInitFormValues(list[0].attributes);
            setFormValues(list[0].attributes);
        }
    }, [list]);

    useDidUpdate(() => {
        if (address) {
            setInitFormValues(address.attributes);
            setFormValues(address.attributes);
        }
    }, [address]);

    useDidUpdate(() => {
        setUpdateBtnDisabled(shallowEqual<UserAddressAttributes>(formValues, initFormValues));
    }, [formValues]);

    const onChange = (text: string) => (key: keyof UserAddressAttributes | string) => {
        setFormValues({
            ...formValues,
            [key]: text,
        });
    };

    const updateAddress = async () => await updateUserAddress(list[0].id, formValues, userToken as string);

    const dataIsLoading = adressListDataIsLoading || updateUserAddressDataIsLoading;

    return { dataIsLoading, onChange, formValues, initFormValues, updateBtnDisabled, updateAddress };
};
