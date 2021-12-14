import React from 'react';
import { ScrollView, View } from 'react-native';
import { ProductsList } from '../../components/products/list/ProductsList';
import { Search } from '../../components/search/Search';
import { styles } from './Styles';

export const Main: React.FC = () => {
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.main}>
            <View style={styles.container}>
                <Search />
                <ProductsList />
            </View>
        </ScrollView>
    );
};
