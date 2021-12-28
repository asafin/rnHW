import { TextProps } from 'react-native';

type TypoVariant = 'p' | 'h2';

export interface TypographyProps extends TextProps {
    variant: TypoVariant;
}
