import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation/stack-navigators/MainStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from '../../button/Button';
import { Typography } from '../../typography/Typography';

export const EmptyCart: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    const handleBtnPress = () => navigation.navigate('MainDrawer');

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/emptyCart.png')} />
            <Typography style={styles.title} variant="h2">
                Your Cart is Empty!
            </Typography>
            <Typography style={styles.description} variant="p">
                Add product in your cart now
            </Typography>
            <View style={styles.btnWrapper}>
                <Button title="Shop Now" onPress={handleBtnPress} />
            </View>
        </View>
    );
};
