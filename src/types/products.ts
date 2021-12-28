import { CurrencyType } from './base';

export type DataType = 'product';
export type RelationshipType = 'image' | 'variant' | 'option_type';

export interface ProductMainAttributesModel {
    display_price: string;
    name: string;
    description: string;
    sku: string;
    available: boolean;
    currency: CurrencyType;
    price: string;
}

export interface RelationshipItem {
    id: string;
    type: RelationshipType;
}

export interface ProductDataItem {
    id: string;
    attributes: ProductMainAttributesModel;
    relationships: {
        images: {
            data: RelationshipItem[];
        };
    };
    type: DataType;
}

export interface ImageStyleItem {
    height: string;
    size: string;
    url: string;
    width: string;
}

export interface ProductImageAttributes {
    alt: string;
    position: number;
    transformed_url: string;
    original_url: string;
    styles: ImageStyleItem[];
}

export interface ProductOptionAttributes {
    position: number;
    presentation: string;
    name: string;
}

export interface ProductIncludedItem {
    id: string;
    type: RelationshipType;
    attributes: ProductImageAttributes | ProductOptionAttributes;
}

export interface GetProductsListModelResponse {
    data: ProductDataItem[];
    included: ProductIncludedItem[];
}

export interface GetProductItemModelResponse {
    data: ProductDataItem;
    included: ProductIncludedItem[];
}

export interface ProductItemListRenderModel {
    id: string;
    name: string;
    imageUrl: string;
    displayPrice: string;
}

export interface ProductItemRenderModel {
    id: string;
    name: string;
    imagesUrl: string[];
    displayPrice: string;
    description: string;
}
