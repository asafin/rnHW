import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { CarouselBtnModel } from './CarouselBtn.props';
import { styles } from './Styles';

export class CarouselBtn extends React.Component<CarouselBtnModel> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                {this.props.variant === 'prev' ? (
                    <Image source={require('./../../../assets/images/prev.png')} style={styles.image} />
                ) : (
                    <Image source={require('./../../../assets/images/next.png')} style={styles.image} />
                )}
            </TouchableOpacity>
        );
    }
}
