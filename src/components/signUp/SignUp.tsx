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
import { useCreateAccount } from '../../hooks/auth/useCreateAccount';
import { useDidUpdate } from '../../hooks/useDidUpdate';
import { useLogin } from '../../hooks/auth/useLogin';

export const SignUp: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
    const [firstName, onChangeFirstName] = React.useState<string>('');
    const [lastName, onChangeLastName] = React.useState<string>('');
    const [email, onChangeEmail] = React.useState<string>('');
    const [password, onChangePassword] = React.useState<string>('');
    const [repeatPass, onChangeRepeatPass] = React.useState<string>('');

    const context = useContext(AuthContext);
    const { signIn } = context as IAuthContextWithState;
    const { dataIsLoading: createAccountDataIsLoading, createAccount, user } = useCreateAccount();
    const { dataIsLoading: loginDataIsLoading, login, token } = useLogin();

    const handleSignInLinkPress = () => navigation.navigate('Login');

    const handleSignUpBtnPress = async () =>
        await createAccount({
            password,
            email,
            first_name: firstName,
            last_name: lastName,
        });

    const setBtnDisabled = () => !(password.length > 0 && password === repeatPass);

    useDidUpdate(async () => {
        const getToken = async () => await login({ email, password });
        if (user?.id) {
            await getToken();
        }
    }, [user]);

    useDidUpdate(() => {
        if (token) {
            signIn(token as string);
            navigation.navigate('MainDrawer');
        }
    }, [token]);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Typography variant="h1" style={styles.title}>
                    Ecommerce Store
                </Typography>
                <View style={styles.form}>
                    <Input label="First Name" value={firstName as string} onChangeText={onChangeFirstName} style={styles.input} />
                    <Input label="Last Name" value={lastName as string} onChangeText={onChangeLastName} style={styles.input} />
                    <Input label="Email" value={email as string} onChangeText={onChangeEmail} style={styles.input} />
                    <Input label="Password" value={password as string} onChangeText={onChangePassword} style={styles.input} />
                    <Input label="Repeat Password" value={repeatPass as string} onChangeText={onChangeRepeatPass} style={styles.input} />
                    <Button
                        title="SIGN UP"
                        onPress={handleSignUpBtnPress}
                        variant="primary"
                        style={styles.btn}
                        disabled={setBtnDisabled() || createAccountDataIsLoading || loginDataIsLoading}
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
