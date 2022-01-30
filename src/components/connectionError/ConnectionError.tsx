import React from 'react';
import { View, BackHandler } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../card/Card';

export const ConnectionError: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();

    return (
        <View style={styles.container}>
            <Card
                imageSrc={require('./../../assets/images/warningIcon.png')}
                title="Connection Error"
                description="Oops! Looks like your device is not connected to the internet."
                btns={[
                    { title: 'Try Again', onPress: () => navigation.goBack() },
                    { title: 'Close App', onPress: () => BackHandler.exitApp() },
                ]}
            />
        </View>
    );
};
