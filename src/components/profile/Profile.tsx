import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { useProfileForm } from '../../hooks/profile/useProfileForm';
import { MainStackParamList } from '../../navigation/stack-navigators/MainStackNavigator';
import { Button } from '../button/Button';
import { Input } from '../input/Input';
import { styles } from './Styles';

export const Profile: React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<MainStackParamList>>();
    const { dataIsLoading, onChange, formValues, initFormValues, updateBtnDisabled, updateAddress } = useProfileForm();

    const handleSignOutBtnPress = () => navigation.navigate('LogOutConfirmation');
    const handleUpdateBtnPress = () => updateAddress();

    return (
        <View style={styles.container}>
            <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.wrapper}>
                <View style={styles.form}>
                    <Input
                        label="First Name"
                        defaultValue={initFormValues?.firstname as string}
                        value={formValues.firstname}
                        onChangeText={onChange('firstname')}
                        style={styles.input}
                    />
                    <Input
                        label="Last Name"
                        defaultValue={initFormValues?.lastname as string}
                        value={formValues.lastname}
                        onChangeText={onChange('lastname')}
                        style={styles.input}
                    />
                    <Input
                        label="Mobile Number"
                        defaultValue={initFormValues?.phone as string}
                        value={formValues.phone}
                        onChangeText={onChange('phone')}
                        style={styles.input}
                    />
                    <Input
                        label="City"
                        defaultValue={initFormValues?.city as string}
                        value={formValues.city}
                        onChangeText={onChange('city')}
                        style={styles.input}
                    />
                    <Input
                        label="Locality, area or street"
                        defaultValue={initFormValues?.address1 as string}
                        value={formValues.address1}
                        onChangeText={onChange('address1')}
                        style={styles.input}
                    />
                    <Input
                        label="Flat no., Building name"
                        defaultValue={initFormValues?.address2 as string}
                        value={formValues.address2 as string}
                        onChangeText={onChange('address2')}
                        style={styles.input}
                    />
                    <View style={styles.btn}>
                        <Button
                            title="UPDATE"
                            onPress={handleUpdateBtnPress}
                            variant="primary"
                            disabled={updateBtnDisabled || dataIsLoading}
                        />
                    </View>
                    <View style={styles.btn}>
                        <Button title="LOGOUT" onPress={handleSignOutBtnPress} variant="primary" disabled={dataIsLoading} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};
