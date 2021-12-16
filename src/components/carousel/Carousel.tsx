import React from 'react';
import { Image, View } from 'react-native';
import { CarouselProps } from './Carousel.props';
import { styles } from './Styles';
import Swiper from 'react-native-web-swiper';
import { CarouselBtn } from './nav/CarouselBtn';

export const Carousel: React.FC<CarouselProps> = ({ style }) => {
    return (
        <View style={[style, styles.container]}>
            <Swiper
                controlsProps={{
                    dotActiveStyle: { backgroundColor: '#008ACE' },
                    dotProps: { badgeStyle: { backgroundColor: '#C3C3C3' } },
                    prevPos: 'left',
                    nextPos: 'right',
                    PrevComponent: ({ onPress }) => <CarouselBtn variant="prev" onPress={onPress} />,
                    NextComponent: ({ onPress }) => <CarouselBtn variant="next" onPress={onPress} />,
                }}
            >
                <View style={styles.slideContainer}>
                    <Image source={require('./../../assets/images/productDetailsImg.png')} style={styles.image} />
                </View>
                <View style={styles.slideContainer}>
                    <Image source={require('./../../assets/images/productDetailsImg.png')} style={styles.image} />
                </View>
                <View style={styles.slideContainer}>
                    <Image source={require('./../../assets/images/productDetailsImg.png')} style={styles.image} />
                </View>
            </Swiper>
        </View>
    );
};
