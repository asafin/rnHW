import { ViewProps } from 'react-native';

export interface ProductPriceProps extends ViewProps {
    displayPrice: string;
    oldPrice?: string;
    discount?: string;
}
