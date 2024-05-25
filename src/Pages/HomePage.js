import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Container from '../components/Container';

const HomePage = () => {
  return (
    <Container>
      <Text style={styles.title}>CONTROLA FÁCIL</Text>
      <Text style={styles.subtitle}>
        Bem-vindo ao seu App de Investimentos!
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
<<<<<<< HEAD
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

export default HomePage;
=======
});

export default HomePage;
>>>>>>> gildoamaral
