import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Pressable, View } from 'react-native';
import { OrderDetailsStackParamList } from '../../../navigation/stack-navigators/OrderDetailsStackNavigator';
import { renderDateFromString } from '../../../utils';

import { Typography } from '../../typography/Typography';
import { styles } from './Styles';

export const OrderDescription: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<OrderDetailsStackParamList>>();

    const handleShippingAddressPress = () => navigation.navigate('UserAddress');

    return (
        <View style={styles.wrapper}>
            <View style={styles.item}>
                <Typography style={styles.p} variant="p">
                    Order Id
                </Typography>
                <Typography style={styles.p} variant="main">
                    OD3489488519356
                </Typography>
            </View>
            <View style={styles.item}>
                <Typography style={styles.p} variant="p">
                    Order Date
                </Typography>
                <Typography style={styles.p} variant="main">
                    {renderDateFromString(new Date().getTime())}
                </Typography>
            </View>
            <View style={styles.item}>
                <Typography style={styles.p} variant="p">
                    Total Ammount
                </Typography>
                <Typography style={styles.p} variant="main">
                    $ 380.44
                </Typography>
            </View>
            <View style={styles.item}>
                <Typography style={styles.p} variant="p">
                    Payment Mode
                </Typography>
                <Typography style={styles.p} variant="main">
                    COD
                </Typography>
            </View>
            <View style={styles.item}>
                <Pressable onPress={handleShippingAddressPress} style={styles.p}>
                    <Typography variant="p">Shipping Address</Typography>
                </Pressable>
                <Typography style={styles.p} variant="main">
                    Test
                </Typography>
            </View>
            <View style={styles.item}>
                <Typography style={styles.p} variant="p">
                    Order Id
                </Typography>
                <Typography style={styles.p} variant="success">
                    OD3489488519356
                </Typography>
            </View>
        </View>
    );
};
