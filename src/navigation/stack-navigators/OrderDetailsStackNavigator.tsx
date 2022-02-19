import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { OrderDetails } from '../../screens/orderDetails/OrderDetails';
import { UserAddress } from '../../screens/userAddress/UserAddress';
import { customScreenOptions } from '../options';

export type OrderDetailsStackParamList = {
    OrderDetails: undefined;
    UserAddress: undefined;
};

const OrderDetailsStack = createStackNavigator<OrderDetailsStackParamList>();

const OrderDetailsStackNavigator = () => {
    return (
        <OrderDetailsStack.Navigator initialRouteName="OrderDetails" screenOptions={customScreenOptions as StackNavigationOptions}>
            <OrderDetailsStack.Screen name="OrderDetails" component={OrderDetails} options={{ headerShown: false }} />
            <OrderDetailsStack.Screen name="UserAddress" component={UserAddress} />
        </OrderDetailsStack.Navigator>
    );
};

export default OrderDetailsStackNavigator;
