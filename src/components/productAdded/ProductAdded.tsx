import React from 'react';
import { View } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../card/Card';

export const ProductAdded: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    const handleBtnPress = () => navigation.goBack();
    return (
        <View style={styles.container}>
            <Card
                imageSrc={require('./../../assets/images/successIcon.png')}
                title="Product added to your cart"
                btns={[{ title: 'Ok', onPress: handleBtnPress }]}
            />
        </View>
    );
};
