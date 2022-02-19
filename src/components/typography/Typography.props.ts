import { TextProps } from 'react-native';

type TypoVariant = 'p' | 'h1' | 'h2' | 'link' | 'main' | 'error' | 'success';

export interface TypographyProps extends TextProps {
    variant: TypoVariant;
}
