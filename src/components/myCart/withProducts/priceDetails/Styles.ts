import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    cartItem: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    title: {
        marginBottom: 10,
    },
    itemRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    itemRowLast: {
        paddingBottom: 0,
    },
    withBorderBottom: {
        borderBottomColor: '#C3C3C3',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
});
