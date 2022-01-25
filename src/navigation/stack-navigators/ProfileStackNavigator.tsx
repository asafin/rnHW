import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../../screens/profile/Profile';

export type ProfileStackParamList = {
    ProfileStack: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator
            initialRouteName="ProfileStack"
            screenOptions={{
                headerShown: false,
            }}
        >
            <ProfileStack.Screen name="ProfileStack" component={Profile} options={{ title: 'My Profile' }} />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNavigator;
