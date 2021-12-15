import React from 'react';
import { ScrollView, View } from 'react-native';
import { Button } from '../../components/button/Button';
import { Carousel } from '../../components/carousel/Carousel';
import { Divider } from '../../components/divider/Divider';
import { ProductPrice } from '../../components/products/price/ProductPrice';
import { ProductProperties } from '../../components/products/properties/ProductProperties';
import { Typography } from '../../components/typography/Typography';
import { styles } from './Styles';

export const ProductDetails: React.FC = () => {
    const handleBtnPress = () => {
        console.log('onPress');
    };

    return (
        <View style={styles.container}>
            <View style={styles.productWrapper}>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <Carousel style={styles.carousel} />
                    <Typography variant="p" style={styles.title}>
                        Xiaomi Mi A3
                    </Typography>
                    <ProductPrice />
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
                        The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and plastic
                        body, with Corning Gorilla Glass 5 protection on its front as well as its back. It is powered by a Qualcomm
                        Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0 reversible connector.
                    </Typography>
                </ScrollView>
            </View>
            <View style={styles.btnWrapper}>
                <Button title="Add to cart" onPress={handleBtnPress} />
            </View>
        </View>
    );
};
