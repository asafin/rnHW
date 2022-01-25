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
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    productItem: {
        flexDirection: 'row',
    },
    productImage: {
        resizeMode: 'stretch',
        alignItems: 'center',
        width: 100,
        height: 100,
    },
    productInfoWrapper: {
        paddingLeft: 10,
        paddingTop: 10,
        flexGrow: 1,
    },
    productTitle: { marginBottom: 3 },
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
