import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Pressable, RefreshControl, ScrollView, View } from 'react-native';
import { ProductsList } from '../../components/products/list/ProductsList';
import { Search } from '../../components/search/Search';
import { useGetProductsList } from '../../hooks/products/useGetProductsList';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { styles } from './Styles';

export const Main: React.FC = () => {
    const { dataIsLoading, productsList, refresh } = useGetProductsList(1, 10);
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    const navigateToProductsSearchPage = () => navigation.navigate('Search');
    return (
        <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.main}
            refreshControl={<RefreshControl refreshing={dataIsLoading} onRefresh={refresh} />}
        >
            <View style={styles.container}>
                <Pressable style={styles.searchWrapper} onPress={navigateToProductsSearchPage}>
                    <View style={styles.search}>
                        <Search />
                    </View>
                    <View style={styles.over}></View>
                </Pressable>
                {!dataIsLoading && <ProductsList productsList={productsList} type="tile" />}
            </View>
        </ScrollView>
    );
};
