import React from 'react';
import { View } from 'react-native';
import { Typography } from '../../../typography/Typography';
import { styles } from './Styles';

export const CartPriceDetails: React.FC = () => {
    return (
        <View style={[styles.cartItem, styles.boxShadow]}>
            <Typography variant="h2" style={styles.title}>
                Price details
            </Typography>
            <View style={styles.itemRow}>
                <Typography variant="p">Price (1 item)</Typography>
                <Typography variant="p">$222</Typography>
            </View>
            <View style={styles.itemRow}>
                <Typography variant="p">Delivery</Typography>
                <Typography variant="p">$1</Typography>
            </View>
            <View style={styles.itemRow}>
                <Typography variant="p">Discount</Typography>
                <Typography variant="link">- $22</Typography>
            </View>
            <View style={[styles.itemRow, styles.withBorderBottom]}>
                <Typography variant="p">Tax (2%)</Typography>
                <Typography variant="p">$4.44</Typography>
            </View>
            <View style={styles.itemRow}>
                <Typography variant="main">Amount Payable</Typography>
                <Typography variant="main">$227.44</Typography>
            </View>
        </View>
    );
};
