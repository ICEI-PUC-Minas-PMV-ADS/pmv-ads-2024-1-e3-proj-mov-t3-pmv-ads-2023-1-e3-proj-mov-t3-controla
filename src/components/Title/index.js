import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style';

import logoImage from '../logoicon/iconelogo.png';

export default function Title() {
    return (
        <View style={styles.boxTitle}>
            <Image source={logoImage} style={[styles.logo, { width: 250, height: 50 }]} />
            <Text style={styles.title}></Text>
        </View>
    );
}
