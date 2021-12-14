import React from 'react';
import { View } from 'react-native';
import { ProductItem } from '../item/ProductItem';
import { styles } from './Styles';

export const ProductsList: React.FC = () => {
    return (
        <View style={styles.container}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
        </View>
    );
};
