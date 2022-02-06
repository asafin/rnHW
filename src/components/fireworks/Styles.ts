import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    wrapper: {
        width: '100%',
        height: '100%',
    },
    explosionBoundary: {
        position: 'absolute',
        height: 200,
        width: 200,
    },
    ball: {
        position: 'absolute',
        height: 7,
        width: 7,
        borderRadius: 3,
    },
});
