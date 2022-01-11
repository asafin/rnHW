import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../../screens/main/Main';
import { ProductDetails } from '../../screens/productDetails/ProductDetails';

export type MainStackParamList = {
    Main: undefined;
    ProductDetails: { productId: number };
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName="Main">
            <MainStack.Screen name="Main" component={Main} options={{ headerShown: false }} />
            <MainStack.Screen name="ProductDetails" component={ProductDetails} />
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
