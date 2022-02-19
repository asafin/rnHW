import React from 'react';
import { View } from 'react-native';
import { useGetProductsList } from '../../../hooks/products/useGetProductsList';
import { ProductsList } from '../../products/list/ProductsList';
import { styles } from './Styles';

export const OrderProductsList: React.FC = () => {
    const { dataIsLoading, productsList } = useGetProductsList(1, 2);

    return <View style={styles.container}>{!dataIsLoading && <ProductsList productsList={productsList} type="bar" />}</View>;
};
