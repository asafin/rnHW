import React from 'react';
import { Animated, GestureResponderEvent, Pressable, Text } from 'react-native';
import { useButtonAnimation } from '../../hooks/button/useButtonAnimation';
import { ButtonColors, ButtonProps } from './Button.props';
import { styles } from './Styles';

export const Button: React.FC<ButtonProps> = (props) => {
    const { title, onPress, disabled, variant = 'primary', hasError = false } = props;

    const getCurrentBgColor = (): ButtonColors => {
        switch (variant) {
            case 'primary':
                return ButtonColors.PRIMARY;
            case 'secondary':
                return ButtonColors.SECONDARY;
            case 'warning':
                return ButtonColors.WARNING;
        }
    };

    const { animatedStyles, onPressIn, onPressOut } = useButtonAnimation(getCurrentBgColor(), hasError as boolean);

    const handleOnPress = (event: GestureResponderEvent) => {
        if (!disabled && onPress) {
            onPress(event);
        }
    };

    return (
        <Pressable onPress={handleOnPress} onPressIn={onPressIn} onPressOut={onPressOut}>
            <Animated.View style={[styles.button, disabled && styles.disabled, animatedStyles]}>
                <Text style={styles.text}>{`${hasError ? 'Something goes wrong!' : title}`}</Text>
            </Animated.View>
        </Pressable>
    );
};
