import * as React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

import WishListStackNavigator from './stack-navigators/WishListStackNavigator';
import ProfileStackNavigator from './stack-navigators/ProfileStackNavigator';
import { Main } from '../screens/main/Main';
import { cartIcon, customScreenOptions } from './options';
import CustomSidebarMenu from './customSidebar/CustomSidebarMenu';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OrderDetailsStackNavigator from './stack-navigators/OrderDetailsStackNavigator';

type RootDrawerParamList = {
    Main: undefined;
    WishList: undefined;
    Profile: undefined;
    Fireworks: undefined;
    Order: undefined;
};

const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
    return (
        <RootDrawer.Navigator
            initialRouteName="Main"
            screenOptions={({ navigation }) => ({
                headerRight: () => cartIcon(navigation),
                ...(customScreenOptions as DrawerNavigationOptions),
            })}
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
        >
            <RootDrawer.Screen
                name="Main"
                component={Main}
                options={{
                    title: 'Home',
                    drawerIcon: ({ size }) => <Icon name="home" size={size} color={'#008ACE'} />,
                }}
            />
            <RootDrawer.Screen
                name="WishList"
                component={WishListStackNavigator}
                options={{
                    drawerIcon: ({ size }) => <Icon name="favorite" size={size} color={'#008ACE'} />,
                }}
            />
            <RootDrawer.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    drawerIcon: ({ size }) => <Icon name="person" size={size} color={'#008ACE'} />,
                }}
            />
            <RootDrawer.Screen
                name="Order"
                component={OrderDetailsStackNavigator}
                options={{
                    drawerIcon: ({ size }) => <Icon name="dns" size={size} color={'#008ACE'} />,
                    title: 'Order Details',
                }}
            />
        </RootDrawer.Navigator>
    );
};

export default DrawerNavigator;
