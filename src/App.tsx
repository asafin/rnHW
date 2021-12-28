import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Main } from './screens/main/Main';
//import { ProductDetails } from './screens/productDetails/ProductDetails';

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
            <Main />
            {/* <ProductDetails /> */}
        </SafeAreaView>
    );
};
