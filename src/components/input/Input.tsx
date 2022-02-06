import React, { useRef } from 'react';
import { Animated, NativeSyntheticEvent, TouchableWithoutFeedback, TextInput, TextInputFocusEventData, View } from 'react-native';
import { useInputAnimation } from '../../hooks/form/input/useInputAnimation';
import { FadeInView } from '../animations/fade/FadeInView';
import { Typography } from '../typography/Typography';
import { InputProps } from './Input.props';
import { styles } from './Styles';

export const Input: React.FC<InputProps> = ({ error, style, label, onBlur, onFocus, value, ...restOfProps }) => {
    const inputRef = useRef<TextInput>(null);

    const { labelContainerStyle, labelStyle, setIsFocused } = useInputAnimation(value, error);

    const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    return (
        <View style={style}>
            <TextInput style={styles.input} onBlur={handleOnBlur} onFocus={handleOnFocus} ref={inputRef} {...restOfProps} />
            <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
                <Animated.View style={[styles.labelContainer, labelContainerStyle]}>
                    <Animated.Text style={[styles.label, labelStyle]}>{label}</Animated.Text>
                </Animated.View>
            </TouchableWithoutFeedback>

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
