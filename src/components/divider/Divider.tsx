import React from 'react';
import { View } from 'react-native';
import { DividerProps } from './Divider.props';
import { styles } from './Styles';

export const Divider: React.FC<DividerProps> = ({ style }) => {
    return <View style={[style, styles.container]} />;
};
