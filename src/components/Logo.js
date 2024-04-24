import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native';
import image from '../assets/Logo.png';

const Logo = ({ Cadastro }) => {
  return (
    <>
      <View>
        <Image source={image} style={styles.logo} />
      </View>
      <View style={styles.divider}>
        {Cadastro ? <Text style={{ color: '#fff' }}>CADASTRE-SE AQUI</Text> : null}
      </View>
    </>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '86%', // Ajuste conforme necessário
    marginVertical: 30, // Ajuste conforme necessário
    padding: 5,
    alignItems: 'center',
  },
});