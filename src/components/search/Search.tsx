import React from 'react';
import { Image, TextInput, View } from 'react-native';
import { styles } from './Styles';

export const Search: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image source={require('./../../assets/images/search.png')} style={styles.image} />
                <TextInput placeholder="Search" style={styles.input} underlineColorAndroid="transparent" />
            </View>
        </View>
    );
};
