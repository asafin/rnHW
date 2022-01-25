import React, { useEffect } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import { Button } from '../../components/button/Button';
import { Carousel } from '../../components/carousel/Carousel';
import { Divider } from '../../components/divider/Divider';
import { ProductProperties } from '../../components/products/properties/ProductProperties';
import { Typography } from '../../components/typography/Typography';
import { useGetProduct } from '../../hooks/products/useGetProduct';
import { ProductItemRenderModel } from '../../types';
import { Loader } from '../loader/Loader';
import { ProductPrice } from '../products/price/ProductPrice';
import { styles } from './Styles';

import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';

export const ProductDetails: React.FC = () => {
    const route = useRoute<RouteProp<MainStackParamList, 'ProductDetails'>>();
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    const { dataIsLoading, refresh, product } = useGetProduct(route.params.productId);

    useEffect(() => {
        if (product?.name) {
            navigation.setOptions({
                title: product.name,
            });
        }
    }, [navigation, product]);

    const handleBtnPress = () => navigation.navigate('LoginToContinue');

    const renderProduct = () => (
        <View style={styles.container}>
            <View style={styles.productWrapper}>
                <ScrollView
                    contentInsetAdjustmentBehavior="automatic"
                    refreshControl={<RefreshControl refreshing={dataIsLoading} onRefresh={refresh} />}
                >
                    <View style={styles.ph20}>
                        <Carousel style={styles.carousel} imagesUrl={(product as ProductItemRenderModel).imagesUrl} />
                        <Typography variant="p" style={styles.title}>
                            {product?.name}
                        </Typography>
                        <ProductPrice displayPrice={(product as ProductItemRenderModel).displayPrice} />
                        <Divider style={styles.divider} />
                        <Typography variant="h2" style={styles.title}>
                            Select Color
                        </Typography>
                        <ProductProperties />
                        <Divider style={styles.divider} />
                        <Typography variant="h2" style={styles.title}>
                            Description
                        </Typography>
                        <Typography variant="p" style={styles.title}>
                            {product?.description}
                        </Typography>
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.btnWrapper, styles.ph20]}>
                <Button title="Add to cart" onPress={handleBtnPress} />
            </View>
        </View>
    );

    return dataIsLoading ? <Loader /> : renderProduct();
};
