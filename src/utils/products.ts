import { BASE_URL } from '../services/client/WebClient';
import {
    GetProductItemModelResponse,
    GetProductsListModelResponse,
    HistoryItem,
    ProductImageAttributes,
    ProductItemListRenderModel,
    ProductItemRenderModel,
} from '../types';

export const mapProductsListResponseToProductsRenderList = (response: GetProductsListModelResponse): ProductItemListRenderModel[] => {
    const result: ProductItemListRenderModel[] = [];

    response.data.map((item) => {
        const imageId: string = item.relationships.images.data.length > 0 ? item.relationships.images.data[0].id : '';

        const imageUrl: string = imageId
            ? `${BASE_URL}${(response.included.find((i) => i.id == imageId)?.attributes as ProductImageAttributes).transformed_url}`
            : '';

        result.push({
            id: item.id,
            displayPrice: item.attributes.display_price,
            name: item.attributes.name,
            imageUrl,
        });
    });

    return result;
};

export const mapProductItemResponseToProductRenderItem = (response: GetProductItemModelResponse): ProductItemRenderModel => {
    const imagesIds: string[] = [];
    const imagesUrl: string[] = [];
    response.data.relationships.images.data.map((item) => {
        imagesIds.push(item.id);
    });

    imagesIds.map((item) => {
        const url = (response.included.filter((i) => i.type == 'image').find((i) => i.id == item)?.attributes as ProductImageAttributes)
            .transformed_url;
        url && imagesUrl.push(`${BASE_URL}${url}`);
    });

    const productItem: ProductItemRenderModel = {
        id: response.data.id,
        name: response.data.attributes.name,
        displayPrice: response.data.attributes.display_price,
        description: response.data.attributes.description,
        imagesUrl,
    };

    return productItem;
};

export const sortHistoryItemsArr = (a: HistoryItem, b: HistoryItem): number => {
    let idx = 1;
    if (a.time < b.time) {
        idx = -1;
    } else if (a.time === b.time) {
        idx = 0;
    }

    return idx;
};
