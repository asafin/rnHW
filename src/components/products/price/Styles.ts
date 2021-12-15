import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    property: {
        marginRight: 20,
    },
    textBold: {
        fontWeight: 'bold',
    },
    oldPrice: {
        color: '#8f8f8f',
        textDecorationLine: 'line-through',
    },
    discount: {
        color: '#00A8F3',
    },
});
