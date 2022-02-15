import { useState } from 'react';
import { getClientInstance } from '../../services/client/clientProvider';
import { WebClient } from '../../services/client/WebClient';
import { GetProductsListModelResponse, ProductItemListRenderModel } from '../../types';
import { mapProductsListResponseToProductsRenderList } from '../../utils';
import { useDidUpdate } from '../useDidUpdate';

export const useSearchProductsList = () => {
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [productsList, setProductsList] = useState<ProductItemListRenderModel[]>([]);
    const [search, setSearch] = useState('');

    const client: WebClient = getClientInstance();

    const getProductsList = async () => {
        setDataIsLoading(true);
        try {
            const response: GetProductsListModelResponse = await client.getProductsService().getProductsList(1, 5, search);
            setProductsList(mapProductsListResponseToProductsRenderList(response));
        } catch (e) {
            setIsError(true);
            console.log('searchProductsList error: ', e);
        } finally {
            setDataIsLoading(false);
        }
    };

    useDidUpdate(() => {
        if (search.length) {
            (async () => {
                if (search.length > 3) {
                    await getProductsList();
                }
            })();
        } else {
            setProductsList([]);
        }
    }, [search]);

    return { dataIsLoading, isError, productsList, setSearch };
};
