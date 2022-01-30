import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import { ProductDetails } from '../../screens/productDetails/ProductDetails';
import { ProductAdded } from '../../screens/productAdded/ProductAdded';
import DrawerNavigator from '../DrawerNavigator';
import { SelectColor } from '../../screens/selectColor/SelectColor';
import { LoginToContinue } from '../../screens/loginToContinue/LoginToContinue';
import { MyCart } from '../../screens/myCart/MyCart';
import { cartIcon, customScreenOptions } from '../options';
import { Login } from '../../screens/login/Login';
import { SignUp } from '../../screens/signUp/SignUp';
import { ConnectionError } from '../../screens/connectionError/ConnectionError';

export type MainStackParamList = {
    MainDrawer: undefined;
    ProductDetails: { productId: number };
    ProductAdded: undefined;
    SelectColor: undefined;
    LoginToContinue: undefined;
    Login: undefined;
    SignUp: undefined;
    MyCart: undefined;
    ConnectionError: undefined;
};

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    return (
        <MainStack.Navigator initialRouteName="MainDrawer" screenOptions={customScreenOptions as StackNavigationOptions}>
            <MainStack.Group>
                <MainStack.Screen name="MainDrawer" component={DrawerNavigator} options={{ headerShown: false }} />
                <MainStack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                    options={({ navigation }) => ({
                        headerRight: () => cartIcon(navigation),
                        title: 'Product Details',
                    })}
                />
                <MainStack.Screen name="MyCart" component={MyCart} options={{ headerTitle: 'My Cart' }} />
            </MainStack.Group>
            <MainStack.Group
                screenOptions={() => ({
                    headerShown: false,
                })}
            >
                <MainStack.Screen name="ProductAdded" component={ProductAdded} />
                <MainStack.Screen name="SelectColor" component={SelectColor} />
                <MainStack.Screen name="LoginToContinue" component={LoginToContinue} />
                <MainStack.Screen name="Login" component={Login} />
                <MainStack.Screen name="SignUp" component={SignUp} />
                <MainStack.Screen name="ConnectionError" component={ConnectionError} />
            </MainStack.Group>
        </MainStack.Navigator>
    );
};

export default MainStackNavigator;
