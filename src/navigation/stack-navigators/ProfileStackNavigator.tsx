import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../../screens/profile/Profile';

export type ProfileStackParamList = {
    Profile: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

const ProfileStackNavigator = () => {
    return (
        <ProfileStack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false,
            }}
        >
            <ProfileStack.Screen name="Profile" component={Profile} options={{ title: 'My Profile' }} />
        </ProfileStack.Navigator>
    );
};

export default ProfileStackNavigator;
