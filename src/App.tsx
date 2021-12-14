import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ProductsList } from './components/products/list/ProductsList';
import { Main } from './screens/main/Main';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
    },
});

export const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <Main />
        </SafeAreaView>
    );
};
