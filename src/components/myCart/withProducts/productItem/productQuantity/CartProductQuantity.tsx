import React from 'react';
import { Image, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Typography } from '../../../../typography/Typography';
import { styles } from './Styles';

export const CartProductQuantity: React.FC = () => {
    return (
        <View style={styles.productQuantity}>
            <View style={styles.productQuantityBtns}>
                <TouchableOpacity>
                    <View style={[styles.btn, styles.mr10]}>
                        <Text style={styles.btnText}>+</Text>
                    </View>
                </TouchableOpacity>
                <Typography variant="p" style={styles.mr10}>
                    1
                </Typography>
                <TouchableOpacity>
                    <View style={styles.btn}>
                        <Text style={styles.btnText}>-</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
                <Image style={styles.trashImage} source={require('../../../../../assets/images/trashIcon.png')} />
            </TouchableOpacity>
        </View>
    );
};
