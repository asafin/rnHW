import { ViewProps } from 'react-native';

export interface ProductPropertyProps extends ViewProps {
    title: string;
    listener: () => void;
}
