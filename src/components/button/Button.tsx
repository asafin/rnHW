import React from 'react';
import { Pressable, Text } from 'react-native';
import { ButtonProps } from './Button.props';
import { styles } from './Styles';

export const Button: React.FC<ButtonProps> = (props) => {
    const { title, onPress } = props;

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};
