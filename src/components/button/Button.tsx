import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Animated, GestureResponderEvent, Pressable, Text } from 'react-native';
import { ConnectionContext, IConnectionContext } from '../../context/connection.context';
import { useButtonAnimation } from '../../hooks/button/useButtonAnimation';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { ButtonColors, ButtonProps, ButtonVariant } from './Button.props';
import { styles } from './Styles';

const BUTTON_VARIANT_COLOR_MAP = new Map<ButtonVariant, ButtonColors>([
    ['primary', ButtonColors.PRIMARY],
    ['secondary', ButtonColors.SECONDARY],
    ['warning', ButtonColors.WARNING],
]);

export const Button: React.FC<ButtonProps> = (props) => {
    const { title, onPress, disabled, variant = 'primary', hasError = false, checkConnection } = props;
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    const context = useContext(ConnectionContext);
    const { isOffline } = context as IConnectionContext;

    const { animatedStyles, onPressIn, onPressOut } = useButtonAnimation(BUTTON_VARIANT_COLOR_MAP.get(variant) as ButtonColors, hasError);

    const handleOnPress = (event: GestureResponderEvent) => {
        if (!disabled && onPress) {
            if (checkConnection && isOffline) {
                navigation.navigate('ConnectionError');
            } else {
                onPress(event);
            }
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
