import { useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { ButtonColors } from '../../components/button/Button.props';
import { useDidUpdate } from '../useDidUpdate';

export const useButtonAnimation = (currentColor: ButtonColors, hasError: boolean) => {
    const pressAnimation = useRef(new Animated.Value(0)).current;
    const bgAnimation = useRef(new Animated.Value(0)).current;

    const buttonScale = pressAnimation.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [1, 0.96, 0.8],
    });

    const buttonBg = bgAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [currentColor, ButtonColors.WARNING],
    });

    const onPressIn = () => {
        Animated.timing(pressAnimation, {
            toValue: 1,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };
    const onPressOut = () => {
        Animated.timing(pressAnimation, {
            toValue: 0,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();
    };

    useDidUpdate(() => {
        if (hasError) {
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(bgAnimation, {
                        toValue: 1,
                        duration: 1000,
                        useNativeDriver: false,
                    }),
                    Animated.timing(pressAnimation, {
                        toValue: 2,
                        duration: 500,
                        easing: Easing.linear,
                        useNativeDriver: false,
                    }),
                ]),
                Animated.timing(pressAnimation, {
                    toValue: 0,
                    duration: 250,
                    easing: Easing.linear,
                    useNativeDriver: false,
                }),
            ]).start();
        } else {
            Animated.timing(bgAnimation, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: false,
            }).start();
        }
    }, [hasError]);

    const animatedStyles = { transform: [{ scale: buttonScale }], backgroundColor: buttonBg };

    return { onPressIn, onPressOut, animatedStyles };
};
