import React from 'react';
import { TextInput, View } from 'react-native';
import { FadeInView } from '../animations/fade/FadeInView';
import { Typography } from '../typography/Typography';
import { InputProps } from './Input.props';
import { styles } from './Styles';

export const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, style, onFocus, error }) => {
    return (
        <View style={style}>
            <TextInput style={styles.input} placeholder={placeholder} value={value} onChangeText={onChangeText} onFocus={onFocus} />
            {error ? (
                <FadeInView style={styles.errors}>
                    <Typography variant="error">{error}</Typography>
                </FadeInView>
            ) : (
                <></>
            )}
        </View>
    );
};
