import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    map: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
    },
});
