import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    logoImageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
    },
    logoImage: {
        resizeMode: 'stretch',
        alignItems: 'center',
        width: 21,
        height: 23,
        marginRight: 10,
    },
    logoText: {
        color: '#A5DC86',
        fontSize: 12,
        lineHeight: 12,
    },
});
