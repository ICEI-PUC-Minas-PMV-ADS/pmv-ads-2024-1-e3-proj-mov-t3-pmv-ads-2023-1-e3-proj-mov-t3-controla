import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = ({Small}) => {

  return <View style={ Small ? styles.dividerSmall : styles.dividerLarge} />
}

const styles = StyleSheet.create({
  dividerLarge: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '86%', // Ajuste conforme necessário
    marginVertical: 30, // Ajuste conforme necessário
    padding: 5,
    alignItems: 'center',
  },
  dividerSmall: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    width: '86%', // Ajuste conforme necessário
    marginVertical: 0, // Ajuste conforme necessário
    padding: 0,
    alignItems: 'center',
    backgroundColor: 'red'
  }
});

export default Divider;