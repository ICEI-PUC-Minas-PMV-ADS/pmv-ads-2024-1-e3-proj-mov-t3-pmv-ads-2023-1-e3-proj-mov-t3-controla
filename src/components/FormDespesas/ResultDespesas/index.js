import React from 'react';
import { View, Text} from 'react-native';
import styles from './style';

export default function ResultDespesa(props){
    return(
        <View style={styles.resultDespesa}>
            <Text style={styles.information}>{props.messageResultDespesa}</Text>
            <Text style ={styles.numberDespesa}>{props.resultDespesa}</Text>
        </View>
    );
}