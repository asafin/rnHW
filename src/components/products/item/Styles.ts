import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '45%',
        height: 175,
        minWidth: '42%',
        flexGrow: 0,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        minHeight: 100,
        flexGrow: 1,
        width: '100%',
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    titleWrapper: {
        flex: 1,
        alignItems: 'flex-start',
    },
    title: { marginBottom: 3 },
    properties: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    property: {
        width: '30%',
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
