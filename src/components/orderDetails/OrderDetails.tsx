import React from 'react';
import { View } from 'react-native';
import { Typography } from '../typography/Typography';
import { OrderDescription } from './description/OrderDescription';
import { OrderProductsList } from './productsList/OrderProductsList';
import { styles } from './Styles';

export const OrderDetails: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <OrderDescription />
                <Typography variant="h2" style={styles.title}>
                    Ordered Products
                </Typography>
            </View>
            <OrderProductsList />
        </View>
    );
};
