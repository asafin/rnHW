import { useEffect, useRef, useState } from 'react';
import { Animated, Easing } from 'react-native';

export const useInputAnimation = (value?: string, error?: string) => {
    const [isFocused, setIsFocused] = useState(false);
    const focusAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(focusAnim, {
            toValue: isFocused || !!value ? 1 : 0,
            duration: 150,
            easing: Easing.linear,
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

    return { setIsFocused, labelContainerStyle, labelStyle };
};
