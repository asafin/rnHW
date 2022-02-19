import { useState } from 'react';
import { useDidMount } from '../../hooks/useDidMount';
import { Asset, ImageLibraryOptions, launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useGetProfileImage = () => {
    const [fileUri, setFileUri] = useState('');

    const imageGalleryLaunch = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            selectionLimit: 1,
        };
        launchImageLibrary(options, async (res) => {
            if (res.didCancel) {
                console.log('User cancelled image picker');
            } else if (res.errorCode) {
                console.log('ImagePicker Error: ', res.errorCode);
            } else if (res.errorMessage) {
                console.log('ImagePicker Error: ', res.errorMessage);
            } else if (res.assets) {
                const assets = res.assets;
                const uri = (assets[0] as Asset).uri as string;
                setFileUri(uri);
                await AsyncStorage.setItem('userPhoto', uri);
            }
        });
    };

    useDidMount(() => {
        (async () => {
            const uri = await AsyncStorage.getItem('userPhoto');
            if (uri) {
                setFileUri(uri);
            }
        })();
    });

    return { fileUri, imageGalleryLaunch };
};
