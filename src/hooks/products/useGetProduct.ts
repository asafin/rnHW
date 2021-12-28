import { useEffect, useState } from 'react';
import { getClientInstance } from '../../services/client/clientProvider';
import { WebClient } from '../../services/client/WebClient';
import { GetProductItemModelResponse, ProductItemRenderModel } from '../../types';
import { mapProductItemResponseToProductRenderItem } from '../../utils';

export const useGetProduct = (id: number) => {
    const [dataIsLoading, setDataIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [product, setProduct] = useState<ProductItemRenderModel | null>(null);

    const client: WebClient = getClientInstance();

    const getProduct = async () => {
        setDataIsLoading(true);
        try {
            const response: GetProductItemModelResponse = await client.getProductsService().getProduct(id);
            setProduct(mapProductItemResponseToProductRenderItem(response));
        } catch (e) {
            setIsError(true);
            console.log('getProduct error: ', e);
        } finally {
            setDataIsLoading(false);
        }
    };

    const refresh = async () => await getProduct();

    useEffect(() => {
        (async () => {
            await getProduct();
        })();
    }, [id]);

    return { dataIsLoading, isError, product, refresh };
};
