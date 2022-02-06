import { useContext, useState } from 'react';
import { AuthContext, IAuthContextWithState } from '../../../context/auth.context';
import { useDidUpdate } from '../../useDidUpdate';

export const useHandleLoginFormErrors = () => {
    const [emailError, setEmailError] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [btnError, setBtnError] = useState<boolean>(false);

    const context = useContext(AuthContext);
    const {
        clearErrors,
        authState: { errors },
    } = context as IAuthContextWithState;

    useDidUpdate(() => {
        setBtnError(errors.length > 0);

        if (errors.findIndex((i) => i.id === 'email') >= 0) {
            setEmailError(errors.find((error) => error.id === 'email')?.title as string);
        } else {
            setEmailError('');
        }

        if (errors.findIndex((i) => i.id === 'password') >= 0) {
            setPasswordError(errors.find((error) => error.id === 'password')?.title as string);
        } else {
            setPasswordError('');
        }
    }, [errors]);

    const clearAllErrors = () => {
        clearErrors();
        setBtnError(false);
    };

    return { emailError, passwordError, btnError, clearAllErrors };
};
