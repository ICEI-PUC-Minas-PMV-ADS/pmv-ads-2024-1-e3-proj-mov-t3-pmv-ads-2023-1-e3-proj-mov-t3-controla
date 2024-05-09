import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import image from '../assets/Logo.png';

const Logo = () => {
  return (
    <>
      <View>
        <Image source={image} style={styles.logo} />
      </View>
    </>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
  },
});
