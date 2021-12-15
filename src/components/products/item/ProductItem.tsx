import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { ProductPrice } from '../price/ProductPrice';
import { styles } from './Styles';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const staticImage = require('./../../../assets/images/product.png');

export const ProductItem: React.FC = () => {
    return (
        <View style={[styles.container, styles.boxShadow]}>
            <View style={styles.imageWrapper}>
                <ImageBackground source={staticImage} style={styles.image} />
            </View>
            <Text style={styles.title}>Xiaomi Mi A3</Text>
            <ProductPrice />
        </View>
    );
};
