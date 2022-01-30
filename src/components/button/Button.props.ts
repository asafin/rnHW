import { PressableProps } from 'react-native';

export type ButtonVariant = 'primary' | 'secondary' | 'warning';

export interface ButtonProps extends PressableProps {
    title: string;
    variant?: ButtonVariant;
    hasError?: boolean;
    checkConnection?: boolean;
}

export enum ButtonColors {
    PRIMARY = 'rgba(0, 138, 206, 1)',
    SECONDARY = 'rgba(143, 143, 143, 1)',
    WARNING = 'rgba(221, 107, 85, 1)',
}
