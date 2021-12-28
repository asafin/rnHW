import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        height: 250,
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    slideContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 20,
    },
    image: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignItems: 'center',
    },
});
