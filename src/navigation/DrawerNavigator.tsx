import * as React from 'react';
import { createDrawerNavigator, DrawerNavigationOptions } from '@react-navigation/drawer';

import WishListStackNavigator from './stack-navigators/WishListStackNavigator';
import ProfileStackNavigator from './stack-navigators/ProfileStackNavigator';
import { Main } from '../screens/main/Main';
import { cartIcon, customScreenOptions } from './options';
import { Fireworks } from '../screens/fireworks/Fireworks';

type RootDrawerParamList = {
    Main: undefined;
    WishList: undefined;
    Profile: undefined;
    Fireworks: undefined;
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
        >
            <RootDrawer.Screen name="Main" component={Main} />
            <RootDrawer.Screen name="WishList" component={WishListStackNavigator} />
            <RootDrawer.Screen name="Profile" component={ProfileStackNavigator} />
            <RootDrawer.Screen name="Fireworks" component={Fireworks} options={{ unmountOnBlur: true }} />
        </RootDrawer.Navigator>
    );
};

export default DrawerNavigator;
