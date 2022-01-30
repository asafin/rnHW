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

export const SignUp: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
    const [name, onChangeName] = React.useState<string>('');
    const [email, onChangeEmail] = React.useState<string>('');
    const [password, onChangePassword] = React.useState<string>('');
    const [repeatPass, onChangeRepeatPass] = React.useState<string>('');

    const context = useContext(AuthContext);
    const { signUp } = context as IAuthContextWithState;

    const handleSignInLinkPress = () => navigation.navigate('Login');

    const handleSignUpBtnPress = () =>
        signUp({
            password,
            email,
            name,
        });

    const setBtnDisabled = () => !(password.length > 0 && password === repeatPass);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Typography variant="h1" style={styles.title}>
                    Ecommerce Store
                </Typography>
                <View style={styles.form}>
                    <Input placeholder="Full Name" value={name as string} onChangeText={onChangeName} style={styles.input} />
                    <Input placeholder="Email" value={email as string} onChangeText={onChangeEmail} style={styles.input} />
                    <Input placeholder="Password" value={password as string} onChangeText={onChangePassword} style={styles.input} />
                    <Input
                        placeholder="Repeat Password"
                        value={repeatPass as string}
                        onChangeText={onChangeRepeatPass}
                        style={styles.input}
                    />
                    <Button
                        title="SIGN UP"
                        onPress={handleSignUpBtnPress}
                        variant="primary"
                        style={styles.btn}
                        disabled={setBtnDisabled()}
                    />
                    <TouchableOpacity onPress={handleSignInLinkPress}>
                        <Typography variant="link" style={styles.signInLink}>
                            Already have account? Sign In
                        </Typography>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
