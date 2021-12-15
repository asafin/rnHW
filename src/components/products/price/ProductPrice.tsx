import React from 'react';
import { Text, View } from 'react-native';
import { ProductPriceProps } from './ProductPrice.props';
import { styles } from './Styles';

export const ProductPrice: React.FC<ProductPriceProps> = ({ style }) => {
    return (
        <View style={[style, styles.container]}>
            <Text style={[styles.property, styles.textBold]}>$222</Text>
            <Text style={[styles.property, styles.textBold, styles.oldPrice]}>$244</Text>
            <Text style={[styles.property, styles.textBold, styles.discount]}>9% OFF</Text>
        </View>
    );
};
