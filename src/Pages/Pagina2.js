import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const Receitas = () => {
  return (
    <View style={styles.container}>
      <Image
            source={require('../assets/Logo.png')} // Caminho da imagem da logo
            style={styles.logo}
            resizeMode="contain" // Modo de redimensionamento da imagem
      />
      <View style={styles.divider} />
      <View style={styles.header}>  
        <Text style={styles.subtitle}>Página de perfil...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06358f', // Cor de fundo geral
    alignItems: 'center',
  },
  header: {
    padding: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  logo: {
    width: 225,
    height: 83,
  },
  divider: {
    width: '95%', // Largura da linha
    height: 1, // Altura da linha
    backgroundColor: '#d7d7d7e8', // Cor da linha (branca)
    marginBottom: 20, // Espaçamento abaixo da linha
  }
});

export default Receitas;
