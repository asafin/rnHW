import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(229, 229, 229, 0.5)',
    },
    formWrapper: {
        flex: 1,
        alignSelf: 'stretch',
        flexGrow: 8,
        justifyContent: 'center',
    },
    btnWrapper: {
        flex: 1,
        flexGrow: 1,
        alignSelf: 'stretch',
    },
    ph20: {
        paddingHorizontal: 20,
    },
    title: {
        marginBottom: 80,
        textAlign: 'center',
    },
    form: {
        marginBottom: 20,
    },
    input: {
        marginBottom: 20,
    },
    btn: {
        marginBottom: 25,
    },
    signUpLink: {
        textAlign: 'center',
        marginTop: 25,
    },
    forgotPassLink: {
        marginBottom: 20,
    },
});
