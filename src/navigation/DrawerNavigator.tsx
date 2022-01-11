import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import WishListStackNavigator from './stack-navigators/WishListStackNavigator';
import ProfileStackNavigator from './stack-navigators/ProfileStackNavigator';
import { Main } from '../screens/main/Main';

type RootDrawerParamList = {
    Main: undefined;
    WishList: undefined;
    Profile: undefined;
};

const RootDrawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
    return (
        <RootDrawer.Navigator initialRouteName="Main">
            <RootDrawer.Screen name="Main" component={Main} />
            <RootDrawer.Screen name="WishList" component={WishListStackNavigator} />
            <RootDrawer.Screen name="Profile" component={ProfileStackNavigator} />
        </RootDrawer.Navigator>
    );
};

export default DrawerNavigator;
