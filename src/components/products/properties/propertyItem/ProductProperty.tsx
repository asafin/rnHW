import React from 'react';
import { Pressable, Text } from 'react-native';
import { ProductPropertyProps } from './ProductProperty.props';
import { styles } from './Styles';

export const ProductProperty: React.FC<ProductPropertyProps> = ({ style, title, listener }) => {
    return (
        <Pressable style={[style, styles.button]} onPress={listener}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};
