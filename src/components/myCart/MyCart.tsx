import React from 'react';
import { View } from 'react-native';
import { EmptyCart } from './empty/EmptyCart';
import { LoginFirst } from './loginFirst/LoginFirst';
import { styles } from './Styles';
import { CartWithProducts } from './withProducts/CartWithProducts';

export const MyCart: React.FC = () => {
    return (
        <View style={styles.container}>
            <CartWithProducts />
        </View>
    );
};
