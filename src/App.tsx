import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/stack-navigators/MainStackNavigator';
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
                <MainStackNavigator />
            </NavigationContainer>
        </SafeAreaView>
    );
};
