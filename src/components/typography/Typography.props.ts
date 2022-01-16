import { TextProps } from 'react-native';

type TypoVariant = 'p' | 'h2' | 'link' | 'main';

export interface TypographyProps extends TextProps {
    variant: TypoVariant;
}
