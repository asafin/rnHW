import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Animated, GestureResponderEvent, Pressable, Text } from 'react-native';
import { ConnectionContext, IConnectionContext } from '../../context/connection.context';
import { useButtonAnimation } from '../../hooks/button/useButtonAnimation';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { ButtonColors, ButtonProps } from './Button.props';
import { styles } from './Styles';

export const Button: React.FC<ButtonProps> = (props) => {
    const { title, onPress, disabled, variant = 'primary', hasError = false, checkConnection } = props;
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    const context = useContext(ConnectionContext);
    const { isOffline } = context as IConnectionContext;

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

    const { animatedStyles, onPressIn, onPressOut } = useButtonAnimation(getCurrentBgColor(), hasError);

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
