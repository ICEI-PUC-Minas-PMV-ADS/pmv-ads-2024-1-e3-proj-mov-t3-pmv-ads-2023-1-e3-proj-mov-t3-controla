import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Container from '../components/Container';

const Receitas = () => {
  return (
    <Container>
      <Text style={styles.subtitle}>Página de perfil...</Text>
    </Container>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Receitas;
