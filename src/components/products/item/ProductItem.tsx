import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { ImageBackground, Text, View, TouchableOpacity } from 'react-native';
import { MainStackParamList } from '../../../navigation/stack-navigators/MainStackNavigator';
import { Typography } from '../../typography/Typography';
import { ProductPrice } from '../price/ProductPrice';
import { IProductItemProps } from './ProductItem.props';
import { styles } from './Styles';

export const ProductItem: React.FC<IProductItemProps> = (props) => {
    const {
        item: { displayPrice, imageUrl, name, id },
    } = props;

    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    return (
        <View style={[styles.container, styles.boxShadow]}>
            <View style={styles.imageWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { productId: +id })}>
                    <ImageBackground source={{ uri: imageUrl }} style={styles.image} />
                </TouchableOpacity>
            </View>
            <Typography style={styles.title} variant="main">
                {name}
            </Typography>
            <ProductPrice displayPrice={displayPrice} />
        </View>
    );
};
