import { ImageSourcePropType, ViewProps } from 'react-native';
import { ButtonProps } from '../button/Button.props';

export interface CardProps extends ViewProps {
    imageSrc: ImageSourcePropType;
    title: string;
    btns: ButtonProps[];
    description?: string;
}
