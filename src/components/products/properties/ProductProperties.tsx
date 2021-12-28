import React from 'react';
import { View } from 'react-native';
import { ProductPropertiesProps } from './ProductProperties.props';
import { ProductProperty } from './propertyItem/ProductProperty';
import { styles } from './Styles';

export const ProductProperties: React.FC<ProductPropertiesProps> = ({ style }) => {
    const listener = () => {
        console.log('btn press');
    };

    return (
        <View style={[style, styles.container]}>
            <ProductProperty title="Blue" listener={listener} />
        </View>
    );
};
