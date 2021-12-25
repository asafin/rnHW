import { useEffect, useState } from 'react';
import { getClientInstance } from '../../services/client/clientProvider';
import { WebClient } from '../../services/client/WebClient';
import { GetProductsListModelResponse, ProductItemListRenderModel } from '../../types';
import { mapProductsListResponseToProductsRenderList } from '../../utils';

export const useGetProductsList = (page: number, perPage: number) => {
    const [dataIsLoading, setDataIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [productsList, setProductsList] = useState<ProductItemListRenderModel[]>([]);

    const client: WebClient = getClientInstance();

    const getProductsList = async () => {
        setDataIsLoading(true);
        try {
            const response: GetProductsListModelResponse = await client.getProductsService().getProductsList(page, perPage);
            setProductsList(mapProductsListResponseToProductsRenderList(response));
        } catch (e) {
            setIsError(true);
            console.log('getProductsList error: ', e);
        } finally {
            setDataIsLoading(false);
        }
    };

    const refresh = async () => await getProductsList();

    useEffect(() => {
        (async () => {
            await getProductsList();
        })();
    }, [page, perPage]);

    return { dataIsLoading, isError, productsList, refresh };
};
