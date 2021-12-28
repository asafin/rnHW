import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#8F8F8F',
        borderBottomWidth: 0.5,
        alignSelf: 'stretch',
        maxHeight: 70,
    },
    boxShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    input: {
        flex: 1,
        padding: 5,
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#8F8F8F',
        height: 40,
        borderRadius: 7,
    },
    image: {
        marginLeft: 10,
        marginRight: 10,
        height: 17,
        width: 17,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});
