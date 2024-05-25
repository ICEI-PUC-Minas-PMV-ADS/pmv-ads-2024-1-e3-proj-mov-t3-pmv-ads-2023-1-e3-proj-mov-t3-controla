import React, { useState } from 'react';
import {  View, StyleSheet, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../components/Logo'

const Inicial = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleCreateAccount = () => {
    navigation.navigate('Cadastro'); // Navega para a página de cadastro
  };

  const handleLogin = async () => {
    try {
      // Recuperar os dados do AsyncStorage
      const userData = JSON.parse(await AsyncStorage.getItem('userData'));

      // Verificar se os dados do formulário coincidem com os dados salvos
      if (email === userData.email && password === userData.password) {
        // Login bem-sucedido
        alert('Login bem-sucedido!');
      } else {
        // Credenciais inválidas
        alert('Credenciais inválidas. Por favor, tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao recuperar os dados:', error);
      alert('Erro ao tentar fazer o login. Por favor, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Logo />

      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <View style={styles.buttons}>
          <Button
            title="   Entrar   "
            color="#3995C8"
            onPress={handleLogin}
          />
          <Button
            title="Cadastrar"
            color="#5B3CD7"
            onPress={handleCreateAccount}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#094CCC',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  login: {
    backgroundColor: '#000',
    height: 250,
    width: 330,
    borderRadius: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 30,
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    gap: 50,
    alignItems: 'center',
  },
});

export default Inicial;