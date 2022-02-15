import { ProductItemListRenderModel } from '../../../types';
import { IProductItemType } from '../item/ProductItem.props';

export interface ProductsListProps {
    productsList: ProductItemListRenderModel[];
    type: IProductItemType;
}
