import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './Styles';

export const SafePaymentMessage: React.FC = () => {
    return (
        <View style={styles.logoImageWrapper}>
            <Image style={styles.logoImage} source={require('../../assets/images/safePaymentLogo.png')} />
            <Text style={styles.logoText}>Safe and Secure Payments {'\n'} 100% Authentic Ptoducts</Text>
        </View>
    );
};
