import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { styles } from './Styles';

export const Loader: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};
