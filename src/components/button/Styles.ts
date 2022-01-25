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
        backgroundColor: '#008ACE',
    },
    secondary: {
        backgroundColor: '#8F8F8F',
    },
});
