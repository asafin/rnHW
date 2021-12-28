import React from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { ProductsList } from '../../components/products/list/ProductsList';
import { Search } from '../../components/search/Search';
import { useGetProductsList } from '../../hooks/products/useGetProductsList';
import { styles } from './Styles';

export const Main: React.FC = () => {
    const { dataIsLoading, productsList, refresh } = useGetProductsList(1, 10);
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.main}
            refreshControl={<RefreshControl refreshing={dataIsLoading} onRefresh={refresh} />}
        >
            <View style={styles.container}>
                <Search />
                {!dataIsLoading && <ProductsList productsList={productsList} />}
            </View>
        </ScrollView>
    );
};
