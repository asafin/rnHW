import React from 'react';
import { Button, GestureResponderEvent, Image, View } from 'react-native';
import { Typography } from '../typography/Typography';
import { CardProps } from './Card.props';
import { styles } from './Styles';
import { CardWrapper } from './wrapper/CardWrapper';

export const Card: React.FC<CardProps> = ({ imageSrc, title, description, btns }) => {
    return (
        <CardWrapper>
            <Image source={imageSrc} style={styles.image} />
            <Typography variant="h2" style={styles.title}>
                {title}
            </Typography>
            {description && (
                <Typography variant="p" style={styles.description}>
                    {description}
                </Typography>
            )}
            <View style={styles.btnWrapper}>
                {btns.map((btn) => (
                    <View style={styles.btn} key={JSON.stringify(btn)}>
                        <Button title={btn.title} onPress={btn.onPress as (event: GestureResponderEvent) => void} />
                    </View>
                ))}
            </View>
        </CardWrapper>
    );
};
