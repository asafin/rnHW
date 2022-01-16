import React, { useReducer } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MainStackNavigator from './navigation/stack-navigators/MainStackNavigator';
import { authInitialState, authReducer } from './hooks/auth/reducer/authReducer';
import { useRestoreToken } from './hooks/auth/useRestoreToken';
import { createAuthContext } from './hooks/auth/useAuthContext';
import { AuthContext } from './context/auth.context';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
    },
});

export const App = () => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);
    const authContext = createAuthContext(dispatch);

    useRestoreToken(dispatch);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar />
            <NavigationContainer>
                <AuthContext.Provider value={authContext}>
                    <MainStackNavigator />
                </AuthContext.Provider>
            </NavigationContainer>
        </SafeAreaView>
    );
};
