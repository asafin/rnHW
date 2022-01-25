import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(229, 229, 229, 0.5)',
    },
    card: {
        width: '85%',
        padding: 20,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { marginBottom: 20 },
    description: { marginBottom: 20 },
    image: {
        marginBottom: 20,
        resizeMode: 'stretch',
        alignItems: 'center',
        width: 66,
        height: 66,
    },
    btnWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },
    btn: {
        minWidth: 125,
    },
});
