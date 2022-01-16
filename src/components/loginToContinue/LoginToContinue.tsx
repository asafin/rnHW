import React from 'react';
import { View } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../card/Card';

export const LoginToContinue: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    const handleBtnPress = () => navigation.goBack();
    return (
        <View style={styles.container}>
            <Card
                imageSrc={require('./../../assets/images/warningIcon.png')}
                title="Login To Continue"
                description="Please login to add product in your cart"
                btns={[
                    { title: 'Login', onPress: handleBtnPress },
                    { title: 'Sign Up', onPress: handleBtnPress },
                ]}
            />
        </View>
    );
};
