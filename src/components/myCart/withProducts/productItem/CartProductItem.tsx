import React from 'react';
import { Image, View } from 'react-native';

import { ProductPrice } from '../../../products/price/ProductPrice';
import { Typography } from '../../../typography/Typography';
import { CartProductQuantity } from './productQuantity/CartProductQuantity';
import { styles } from './Styles';

export const CartProductItem: React.FC = () => {
    return (
        <View style={[styles.cartItem, styles.boxShadow, styles.productItem]}>
            <Image style={styles.productImage} source={require('../../../../assets/images/product.png')} />
            <View style={styles.productInfoWrapper}>
                <Typography style={styles.productTitle} variant="main">
                    Xiaomi Mi A3
                </Typography>
                <ProductPrice displayPrice={'$222'} />
                <CartProductQuantity />
            </View>
        </View>
    );
};
