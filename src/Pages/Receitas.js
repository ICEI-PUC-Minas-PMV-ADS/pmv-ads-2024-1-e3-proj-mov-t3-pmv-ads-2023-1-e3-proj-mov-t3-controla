import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Form from '../components/FormReceitas/index';

const Receitas = () => {
  return (
    <View style={styles.container}>
     <View style={styles.imagem}>
        <Image
              source={require('../assets/Logo.png')}
              style={styles.logo}
              resizeMode="contain"
        />
        <View style={styles.divider} />
      </View>
      <View style={styles.header}>  
        <Form />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06358f' // Cor de fundo geral
  },
  imagem: {
    alignItems: 'center'
  },
  header: {
    padding: 10
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
