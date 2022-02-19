import React, { useState } from 'react';
import { Image, Pressable, ScrollView, TextInput, View } from 'react-native';
import { Typography } from '../typography/Typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from './Styles';
import { HistoryItem } from '../../types';
import { useDidUpdate } from '../../hooks/useDidUpdate';

export interface SearchProps {
    value?: string;
    setSearch?: React.Dispatch<React.SetStateAction<string>>;
    autoFocus?: boolean;
    historyItems?: HistoryItem[];
    deleteHistoryItem?: (time: number) => void;
}

export const Search: React.FC<SearchProps> = ({ setSearch, autoFocus, historyItems, deleteHistoryItem }) => {
    const [value, setValue] = useState('');
    const [showContextMenu, setShowContextMenu] = useState<boolean>(false);

    const handleSearchIconPress = () => setSearch && setSearch(value);

    useDidUpdate(() => {
        if (value.length > 3 && (historyItems as HistoryItem[]).findIndex(isMatch) >= 0) {
            setShowContextMenu(true);
        } else {
            setShowContextMenu(false);
        }
    }, [value]);

    const isMatch = (item: HistoryItem): boolean => item.value.trim().toLowerCase().indexOf(value.trim().toLowerCase()) >= 0;

    const handleHistoryItemPress = (val: string) => {
        setValue(val);
        handleSearchIconPress();
        setShowContextMenu(false);
    };

    const renderHistoryItem = (item: HistoryItem) => (
        <View style={styles.menuItem} key={item.time}>
            <Pressable onPress={() => handleHistoryItemPress(item.value)}>
                <Typography variant="p">{item.value}</Typography>
            </Pressable>
            <Pressable onPress={() => deleteHistoryItem && deleteHistoryItem(item.time)}>
                <Icon name="delete" size={14} color={'#8F8F8F'} />
            </Pressable>
        </View>
    );

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
                {showContextMenu && (
                    <View style={styles.contextMenu}>
                        <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scroll}>
                            {historyItems?.filter(isMatch).map(renderHistoryItem)}
                        </ScrollView>
                    </View>
                )}
            </View>
        </View>
    );
};
