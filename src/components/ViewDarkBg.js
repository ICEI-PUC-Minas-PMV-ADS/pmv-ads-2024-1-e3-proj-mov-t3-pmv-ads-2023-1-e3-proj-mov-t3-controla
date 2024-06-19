import React from 'react'
import { View, StyleSheet } from 'react-native';

const ViewDarkBg = ({children}) => {

  return <View style={styles.principalBg}>{children}</View>
}

const styles = StyleSheet.create({
  principalBg: {
    flex: 1,
    backgroundColor: '#06358f',
    alignItems: 'center',
    // justifyContent: 'center',
  }
})

export default ViewDarkBg

