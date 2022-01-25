import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import React, { useContext } from 'react';
import { View } from 'react-native';
import { AuthContext, IAuthContextWithState } from '../../context/auth.context';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { Typography } from '../typography/Typography';
import { styles } from './Styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Login: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
    const [email, onChangeEmail] = React.useState<string>('');
    const [password, onChangePassword] = React.useState<string>('');

    const context = useContext(AuthContext);
    const { signIn } = context as IAuthContextWithState;

    const handleSkipLoginBtnPress = () => navigation.navigate('MainDrawer');
    const handleLinkPress = () => navigation.navigate('MainDrawer');

    const handleLoginBtnPress = () =>
        signIn({
            password,
            email,
        });

    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <Typography variant="h1" style={styles.title}>
                    Ecommerce Store
                </Typography>
            </View>
            <View style={styles.form}>
                <Input placeholder="Email Address" value={email as string} onChangeText={onChangeEmail} style={styles.input} />
                <Input placeholder="Password" value={password as string} onChangeText={onChangePassword} style={styles.input} />
                <Button title="SIGN IN" onPress={handleLoginBtnPress} variant="secondary" />
                <TouchableOpacity onPress={handleLinkPress}>
                    <Typography variant="link">New here? Sign Up</Typography>
                </TouchableOpacity>
            </View>
            <View style={[styles.btnWrapper, styles.ph20]}>
                <Button title="Skip Login" onPress={handleSkipLoginBtnPress} variant="secondary" />
            </View>
        </View>
    );
};
