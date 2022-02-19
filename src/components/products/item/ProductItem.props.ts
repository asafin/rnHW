import { ProductItemListRenderModel } from '../../../types';

export type IProductItemType = 'tile' | 'bar';

export type IProductItemProps = {
    item: ProductItemListRenderModel;
    type: IProductItemType;
};
