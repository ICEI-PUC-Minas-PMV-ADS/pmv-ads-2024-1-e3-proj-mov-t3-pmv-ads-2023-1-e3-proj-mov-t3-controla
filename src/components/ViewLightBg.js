import React from 'react'
import { View, StyleSheet } from 'react-native';

const ViewLightBg = ({children}) => {

  return <View style={styles.principalBg}>{children}</View>
}

const styles = StyleSheet.create({
  principalBg: {
    flex: 1,
    backgroundColor: '#A2ECFC',
    alignItems: 'center',
    // justifyContent: 'center',
  }
})

export default ViewLightBg

