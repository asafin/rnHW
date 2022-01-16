import { DrawerNavigationOptions } from '@react-navigation/drawer';
import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

export const customScreenOptions: StackNavigationOptions | DrawerNavigationOptions = {
    headerStyle: {
        backgroundColor: '#008ACE',
    },
    headerTitleStyle: {
        color: '#ffffff',
    },
    headerTintColor: '#ffffff',
};

export const cartIcon = (navigation: any) => (
    <TouchableOpacity onPress={() => navigation.navigate('MyCart')} style={styles.headerRight}>
        <Image source={require('../assets/images/cart.png')} style={styles.image} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    headerRight: {
        marginRight: 15,
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});
