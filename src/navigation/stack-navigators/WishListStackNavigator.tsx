import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductDetails } from '../../screens/productDetails/ProductDetails';
import { WishList } from '../../screens/wishList/WishList';

export type WishListStackParamList = {
    WishListStack: undefined;
    ProductDetails: { productId: number };
};

const WishListStack = createStackNavigator<WishListStackParamList>();

const WishListStackNavigator = () => {
    return (
        <WishListStack.Navigator
            initialRouteName="WishListStack"
            screenOptions={{
                headerShown: false,
            }}
        >
            <WishListStack.Screen name="WishListStack" component={WishList} options={{ title: 'My Wish List' }} />
            <WishListStack.Screen name="ProductDetails" component={ProductDetails} />
        </WishListStack.Navigator>
    );
};

export default WishListStackNavigator;
