import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#ffffff',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchWrapper: {
        width: '100%',
        position: 'relative',
        zIndex: 1,
        height: 70,
    },
    search: { zIndex: -1, position: 'absolute', width: '100%' },
    over: { zIndex: 1, position: 'absolute', width: '100%', height: 70 },
});
