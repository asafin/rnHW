import React from 'react';
import { RefreshControl, View } from 'react-native';
import { useGetProductsList } from '../../../hooks/products/useGetProductsList';
import { Loader } from '../../loader/Loader';
import { ProductItem } from '../item/ProductItem';
import { styles } from './Styles';

export const ProductsList: React.FC = () => {
    const { dataIsLoading, productsList, refresh } = useGetProductsList(1, 10);

    const renderList = () => (
        <View style={styles.container}>
            <RefreshControl refreshing={dataIsLoading} onRefresh={refresh} />
            <View style={styles.list}>
                {productsList.map((item) => (
                    <ProductItem item={item} key={item.id} />
                ))}
            </View>
        </View>
    );

    return dataIsLoading ? <Loader /> : renderList();
};
