import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetails } from '../../screens/productDetails/ProductDetails';
import DrawerNavigator from '../DrawerNavigator';

export type MainStackParamList = {
    MainDrawer: undefined;
    ProductDetails: { productId: number };
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName="MainDrawer">
            <MainStack.Screen name="MainDrawer" component={DrawerNavigator} options={{ headerShown: false }} />
            <MainStack.Screen name="ProductDetails" component={ProductDetails} />
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
