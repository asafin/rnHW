import React, { useContext } from 'react';
import { View } from 'react-native';
import { styles } from './Styles';
import { useNavigation } from '@react-navigation/native';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { Card } from '../card/Card';
import { AuthContext, IAuthContextWithState } from '../../context/auth.context';

export const LogOutConfirmation: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
    const context = useContext(AuthContext);
    const { signOut } = context as IAuthContextWithState;

    return (
        <View style={styles.container}>
            <Card
                imageSrc={require('./../../assets/images/warningIcon.png')}
                title="Are you sure you want to logout?"
                btns={[
                    { title: 'Cancel', onPress: () => navigation.goBack() },
                    { title: 'Logout', onPress: () => signOut(navigation) },
                ]}
            />
        </View>
    );
};
