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
import { useHandleLoginFormErrors } from '../../hooks/form/login/useHandleLoginFormErrors';

export const Login: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
    const [email, onChangeEmail] = React.useState<string>('');
    const [password, onChangePassword] = React.useState<string>('');

    const context = useContext(AuthContext);
    const { signIn } = context as IAuthContextWithState;

    const handleSkipLoginBtnPress = () => navigation.navigate('MainDrawer');
    const handleSignUpLinkPress = () => navigation.navigate('SignUp');
    const handleForgotPassLinkPress = () => navigation.navigate('MainDrawer');

    const { emailError, passwordError, btnError, clearAllErrors } = useHandleLoginFormErrors();

    const handleLoginBtnPress = () =>
        signIn({
            password,
            email,
        });

    const setLoginBtnDisabled = () => !(email.length > 3 && password.length > 3);

    return (
        <View style={styles.container}>
            <View style={[styles.formWrapper, styles.ph20]}>
                <Typography variant="h1" style={styles.title}>
                    Ecommerce Store
                </Typography>
                <View style={styles.form}>
                    <Input
                        label="Email Address"
                        value={email as string}
                        onChangeText={onChangeEmail}
                        style={styles.input}
                        onFocus={clearAllErrors}
                        error={emailError}
                    />
                    <Input
                        label="Password"
                        value={password as string}
                        onChangeText={onChangePassword}
                        style={styles.input}
                        onFocus={clearAllErrors}
                        error={passwordError}
                    />
                    <TouchableOpacity onPress={handleForgotPassLinkPress}>
                        <Typography variant="link" style={styles.forgotPassLink}>
                            Forgot password?
                        </Typography>
                    </TouchableOpacity>
                    <Button
                        title="SIGN IN"
                        onPress={handleLoginBtnPress}
                        variant="primary"
                        style={styles.btn}
                        disabled={setLoginBtnDisabled()}
                        hasError={btnError}
                        checkConnection={true}
                    />
                    <TouchableOpacity onPress={handleSignUpLinkPress}>
                        <Typography variant="link" style={styles.signUpLink}>
                            New here? Sign Up
                        </Typography>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={[styles.btnWrapper, styles.ph20]}>
                <Button title="Skip Login" onPress={handleSkipLoginBtnPress} variant="secondary" />
            </View>
        </View>
    );
};
