import React from 'react';
import { Text } from 'react-native';
import { styles } from './Styles';
import { TypographyProps } from './Typography.props';

export const Typography: React.FC<TypographyProps> = (props) => {
    const { style, variant } = props;
    return (
        <Text
            style={[
                style,
                variant === 'h1' && styles.h1,
                variant === 'h2' && styles.h2,
                variant === 'p' && styles.p,
                variant === 'link' && styles.link,
                variant === 'main' && styles.main,
                variant === 'error' && styles.error,
            ]}
        >
            {props.children}
        </Text>
    );
};
