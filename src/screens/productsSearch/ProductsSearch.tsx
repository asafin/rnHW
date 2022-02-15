import React from 'react';
import { ScrollView, View } from 'react-native';
import { ProductsList } from '../../components/products/list/ProductsList';
import { Search } from '../../components/search/Search';
import { useSearchProductsList } from '../../hooks/products/useSearchProductsList';
import { styles } from './Styles';

export const ProductsSearch: React.FC = () => {
    const { dataIsLoading, productsList, setSearch } = useSearchProductsList();
    return (
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.main}>
            <View style={styles.container}>
                <Search setSearch={setSearch} autoFocus={true} />
                {!dataIsLoading && <ProductsList productsList={productsList} type="bar" />}
            </View>
        </ScrollView>
    );
};
