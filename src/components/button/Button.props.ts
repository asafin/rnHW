import { PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends PressableProps {
    title: string;
    variant?: ButtonVariant;
}
