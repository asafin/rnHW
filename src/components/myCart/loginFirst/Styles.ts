import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    title: { marginBottom: 5 },
    description: { marginBottom: 30 },
    image: {
        marginBottom: 30,
        resizeMode: 'stretch',
        alignItems: 'center',
        width: 120,
        height: 120,
    },
    btnWrapper: {
        width: '85%',
        marginBottom: 20,
    },
    link: {
        color: '#00A8F3',
    },
});
