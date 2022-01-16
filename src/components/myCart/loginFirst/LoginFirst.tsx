import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../../navigation/stack-navigators/MainStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from '../../button/Button';
import { Typography } from '../../typography/Typography';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const LoginFirst: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    const handleBtnPress = () => navigation.navigate('MainDrawer');
    const handleLinkPress = () => navigation.navigate('MainDrawer');

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../../assets/images/avatar.png')} />
            <Typography style={styles.title} variant="h2">
                Login First!
            </Typography>
            <Typography style={styles.description} variant="p">
                Login first to view your cart
            </Typography>
            <View style={styles.btnWrapper}>
                <Button title="Login Now" onPress={handleBtnPress} />
            </View>
            <TouchableOpacity onPress={handleLinkPress}>
                <Typography variant="link">New here? Sign Up</Typography>
            </TouchableOpacity>
        </View>
    );
};
