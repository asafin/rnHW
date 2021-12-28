import React from 'react';
import { Text, View } from 'react-native';
import { ProductPriceProps } from './ProductPrice.props';
import { styles } from './Styles';

export const ProductPrice: React.FC<ProductPriceProps> = ({ style, displayPrice, oldPrice, discount }) => {
    return (
        <View style={[style, styles.container]}>
            <Text style={[styles.property, styles.textBold]}>{displayPrice}</Text>
            {!!oldPrice && <Text style={[styles.property, styles.textBold, styles.oldPrice]}>{oldPrice}</Text>}
            {!!discount && <Text style={[styles.property, styles.textBold, styles.discount]}>{discount}% OFF</Text>}
        </View>
    );
};
