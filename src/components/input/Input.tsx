import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, NativeSyntheticEvent, TouchableWithoutFeedback, TextInput, TextInputFocusEventData, View } from 'react-native';
import { FadeInView } from '../animations/fade/FadeInView';
import { Typography } from '../typography/Typography';
import { InputProps } from './Input.props';
import { styles } from './Styles';

export const Input: React.FC<InputProps> = ({ error, style, label, onBlur, onFocus, value, ...restOfProps }) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = useRef<TextInput>(null);
    const focusAnim = useRef(new Animated.Value(0)).current;

    const containerTop = focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [10, -7],
    });

    const labelFontSize = focusAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [15, 12],
    });

    const handleOnBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(false);
        onBlur?.(e);
    };

    const handleOnFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
        setIsFocused(true);
        onFocus?.(e);
    };

    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 150,
            easing: Easing.bezier(0.4, 0, 0.2, 1),
            useNativeDriver: true,
        }).start();
    }, [focusAnim, isFocused, value]);

    let color = isFocused ? '#212121' : '#8F8F8F';
    if (error) {
        color = '#DD6B55';
    }

    const labelContainerStyle: Animated.Animated = {
        transform: [
            {
                scale: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [1, 0.75],
                }),
            },
            {
                translateY: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, -14],
                }),
            },
            {
                translateX: focusAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [16, 0],
                }),
            },
        ],
    };

    const labelStyle: Animated.Animated = { color };

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
