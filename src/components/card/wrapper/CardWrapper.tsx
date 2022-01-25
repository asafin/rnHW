import React from 'react';
import { View } from 'react-native';
import { styles } from './Styles';

export const CardWrapper: React.FC = ({ children }) => <View style={styles.container}>{children}</View>;
