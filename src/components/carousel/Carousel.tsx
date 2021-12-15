import React from 'react';
import { Text, View } from 'react-native';
import { CarouselProps } from './Carousel.props';
import { styles } from './Styles';

export const Carousel: React.FC<CarouselProps> = ({ style }) => {
    return (
        <View style={[style, styles.container]}>
            <Text>Carousel</Text>
        </View>
    );
};
