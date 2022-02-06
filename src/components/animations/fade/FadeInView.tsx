import React, { useRef, useEffect } from 'react';
import { Animated, ViewProps, Dimensions } from 'react-native';

export const FadeInView: React.FC<ViewProps> = ({ children, style }) => {
    const opacityVal = useRef(new Animated.Value(0)).current;
    const transformVal = useRef(new Animated.Value(Dimensions.get('window').width - 40)).current;
    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacityVal, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(transformVal, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
        ]).start();
    }, [opacityVal]);

    return <Animated.View style={[style, { opacity: opacityVal, transform: [{ translateX: transformVal }] }]}>{children}</Animated.View>;
};
