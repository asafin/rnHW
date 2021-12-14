import React from 'react';
import { ImageBackground, Image, Text, View } from 'react-native';
import { styles } from './Styles';

const staticImage = require('./../../../assets/images/product.png');

export const ProductItem: React.FC = () => {
    return (
        <View style={[styles.container, styles.boxShadow]}>
            <View style={styles.imageWrapper}>
                <ImageBackground source={staticImage} style={styles.image} />
            </View>
            <Text style={styles.title}>Xiaomi Mi A3</Text>
            <View style={styles.properties}>
                <Text style={[styles.property, styles.textBold]}>$222</Text>
                <Text style={[styles.property, styles.textBold, styles.oldPrice]}>$244</Text>
                <Text style={[styles.property, styles.textBold, styles.discount]}>9% OFF</Text>
            </View>
        </View>
    );
};
