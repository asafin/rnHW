import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        width: '100%',
    },
    text: {
        fontSize: 15,
        lineHeight: 16,
        fontWeight: '500',
        color: 'white',
        textTransform: 'uppercase',
    },
    primary: {
        //backgroundColor: 'rgba(0, 138, 206, 1)',
    },
    secondary: {
        //backgroundColor: 'rgba(143, 143, 143, 1)',
    },
    warning: {
        //backgroundColor: 'rgba(221, 107, 85, 1)',
    },
    disabled: {
        opacity: 0.7,
    },
});
