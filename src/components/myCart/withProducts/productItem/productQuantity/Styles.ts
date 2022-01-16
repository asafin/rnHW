import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    productQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10,
    },
    productQuantityBtns: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    btn: {
        height: 25,
        width: 25,
        borderColor: '#C3C3C3',
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    btnText: {
        color: '#8F8F8F',
    },
    mr10: {
        marginRight: 10,
    },
    trashImage: {
        resizeMode: 'stretch',
        alignItems: 'center',
        width: 17,
        height: 19,
    },
});
