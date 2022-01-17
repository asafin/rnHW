import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/stack-navigators/MainStackNavigator';

import { AuthContextProvider } from './context/auth.context';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
});

export const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <NavigationContainer>
                <AuthContextProvider>
                    <MainStackNavigator />
                </AuthContextProvider>
            </NavigationContainer>
        </SafeAreaView>
    );
};
