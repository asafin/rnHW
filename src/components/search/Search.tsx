import React, { useState } from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import { styles } from './Styles';

export interface SearchProps {
    value?: string;
    setSearch?: React.Dispatch<React.SetStateAction<string>>;
    autoFocus?: boolean;
}

export const Search: React.FC<SearchProps> = ({ setSearch, autoFocus }) => {
    const [value, setValue] = useState('');

    const handleSearchIconPress = () => setSearch && setSearch(value);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Pressable onPress={handleSearchIconPress}>
                    <Image source={require('./../../assets/images/search.png')} style={styles.image} />
                </Pressable>
                <TextInput
                    placeholder="Search"
                    style={styles.input}
                    underlineColorAndroid="transparent"
                    onChangeText={setValue}
                    value={value}
                    keyboardType="default"
                    autoFocus={autoFocus}
                />
            </View>
        </View>
    );
};
