import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/stack-navigators/MainStackNavigator';

import { AuthContextProvider } from './context/auth.context';
import { ConnectionContextProvider } from './context/connection.context';

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
                <ConnectionContextProvider>
                    <AuthContextProvider>
                        <MainStackNavigator />
                    </AuthContextProvider>
                </ConnectionContextProvider>
            </NavigationContainer>
        </SafeAreaView>
    );
};
