import React from 'react';
import { View, Text} from 'react-native';
import styles from './style';

export default function ResultReceita(props){
    return(
        <View style={styles.resultReceita}>
            <Text style={styles.information}>{props.messageResultReceita}</Text>
            <Text style ={styles.numberReceita}>{props.resultReceita}</Text>
        </View>
    );
}