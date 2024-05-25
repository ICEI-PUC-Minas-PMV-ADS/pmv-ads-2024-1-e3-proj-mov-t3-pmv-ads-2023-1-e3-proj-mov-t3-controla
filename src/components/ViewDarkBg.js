import React from 'react'
import { View, StyleSheet } from 'react-native';

const ViewDarkBg = ({children}) => {

  return <View style={styles.principalBg}>{children}</View>
}

const styles = StyleSheet.create({
  principalBg: {
    flex: 1,
    backgroundColor: '#094CCC',
    alignItems: 'center',
    // justifyContent: 'center',
  }
})

export default ViewDarkBg

