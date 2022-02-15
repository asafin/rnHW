import React from 'react';
import { View } from 'react-native';
import { ProductItem } from '../item/ProductItem';
import { ProductsListProps } from './ProductsList.props';
import { styles } from './Styles';

export const ProductsList: React.FC<ProductsListProps> = ({ productsList, type }) => {
    return (
        <View style={styles.container}>
            <View style={type === 'tile' && styles.list}>
                {productsList.map((item) => (
                    <ProductItem item={item} key={item.id} type={type} />
                ))}
            </View>
        </View>
    );
};
