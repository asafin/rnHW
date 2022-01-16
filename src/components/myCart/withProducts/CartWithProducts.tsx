import React from 'react';
import { Button, ScrollView, View } from 'react-native';
import { SafePaymentMessage } from '../../safePaymentMessage/SafePaymentMessage';
import { CartPriceDetails } from './priceDetails/CartPriceDetails';
import { CartProductItem } from './productItem/CartProductItem';
import { styles } from './Styles';

export const CartWithProducts: React.FC = () => {
    const handleBtnPress = () => console.log('click');

    return (
        <View style={styles.container}>
            <View style={styles.cartWrapper}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <View style={styles.ph20}>
                        <CartProductItem />
                        <CartPriceDetails />
                        <SafePaymentMessage />
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.btnWrapper, styles.ph20]}>
                <Button title="Proceed to payment" onPress={handleBtnPress} />
            </View>
        </View>
    );
};
