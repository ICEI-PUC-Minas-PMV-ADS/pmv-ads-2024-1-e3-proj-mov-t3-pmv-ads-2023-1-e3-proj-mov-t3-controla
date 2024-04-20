import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Logo from '../assets/Logo.png';

const Inicial = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleCreateAccount = () => {
    navigation.navigate('Cadastro'); // Navega para a página de cadastro
  };

  const handleLogin = async () => {
    try {
      // Recuperar os dados do AsyncStorage
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');

      // Verificar se os dados do formulário coincidem com os dados salvos
      if (email === savedEmail && password === savedPassword) {
        // Login bem-sucedido
        alert('Login bem-sucedido!');
      } else {
        // Credenciais inválidas
        alert('Credenciais inválidas. Por favor, tente novamente.');
        console.log("email digitado: ", email)
        console.log("email salvo: ", savedEmail)
        console.log("senha digitada: ", password)
        console.log("senha salva: ", savedPassword)
      }
    } catch (error) {
      console.error('Erro ao recuperar os dados:', error);
      alert('Erro ao tentar fazer o login. Por favor, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.divider} />

      <View style={styles.login}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <View style={styles.buttons}>
          <Button
            title="Sign In"
            color="#5B3CD7"
            onPress={handleCreateAccount}
          />
          <Button
            title="Log In"
            color="#3995C8"
            onPress={handleLogin}
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
  logo: {
    marginTop: 60,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    width: '86%', // Ajuste conforme necessário
    marginVertical: 40, // Ajuste conforme necessário
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
    height: 30,
    width: 200,
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