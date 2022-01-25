import React from 'react';
import { TextInput } from 'react-native';
import { InputProps } from './Input.props';
import { styles } from './Styles';

export const Input: React.FC<InputProps> = ({ placeholder, value, onChangeText, style }) => {
    return <TextInput style={[style, styles.input]} placeholder={placeholder} value={value} onChangeText={onChangeText} />;
};
