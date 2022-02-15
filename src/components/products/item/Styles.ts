import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingHorizontal: 5,
        paddingVertical: 10,
    },
    contaiterTile: {
        width: '47%',
        height: 175,
        minWidth: '47%',
        flexGrow: 0,
        paddingHorizontal: 5,
    },
    containerBar: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        width: '100%',
    },
    boxShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    imageWrapperTile: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        minHeight: 100,
        flexGrow: 1,
        width: '100%',
        marginBottom: 15,
    },
    imageWrapperBar: {
        marginRight: 15,
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
    descriptionWrapper: {
        height: 100,
    },
});
