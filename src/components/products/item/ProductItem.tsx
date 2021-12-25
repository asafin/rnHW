import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { ProductPrice } from '../price/ProductPrice';
import { IProductItemProps } from './ProductItem.props';
import { styles } from './Styles';

export const ProductItem: React.FC<IProductItemProps> = (props) => {
    const {
        item: { displayPrice, imageUrl, name },
    } = props;
    return (
        <View style={[styles.container, styles.boxShadow]}>
            <View style={styles.imageWrapper}>
                <ImageBackground source={{ uri: imageUrl }} style={styles.image} />
            </View>
            <Text style={styles.title}>{name}</Text>
            <ProductPrice displayPrice={displayPrice} />
        </View>
    );
};
