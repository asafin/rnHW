import React from 'react';
import { SafeAreaView } from 'react-native';
import { styles } from './Styles';
import { DrawerContentScrollView, DrawerItemList, DrawerItem, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Typography } from '../../components/typography/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Divider } from '../../components/divider/Divider';
import Share from 'react-native-share';

const url = 'https://ecommerce.store.com/';
const title = 'Ecommerce Store';
const message = 'Please check this out.';

const options = {
    title,
    url,
    message,
};

const CustomSidebarMenu = (props: DrawerContentComponentProps) => {
    const handleShareBtnOnPress = async () => {
        try {
            await Share.open(options);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <SafeAreaView style={styles.wrapper}>
            <Typography variant="h1" style={styles.title}>
                Ecommerce Store
            </Typography>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <Divider />
                <DrawerItem
                    label="Share"
                    onPress={handleShareBtnOnPress}
                    icon={({ size }) => <Icon name="share" size={size} color={'#008ACE'} />}
                />
            </DrawerContentScrollView>
        </SafeAreaView>
    );
};

export default CustomSidebarMenu;
