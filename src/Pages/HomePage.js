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
});

export default HomePage;
