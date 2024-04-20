import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Logo from '../assets/Logo.png';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigation = useNavigation();

  const handleSignUp = async () => {
    // Verificar se as senhas coincidem
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    // Salvar os dados no AsyncStorage
    try {
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
      alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
      alert('Erro ao salvar os dados. Por favor, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={Logo} style={styles.logo} />
      </View>
      <View style={styles.divider}>
        <Text style={{ color: '#fff' }}>CADASTRE-SE AQUI</Text>
      </View>

      <View style={styles.cadastro}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Escolha seu melhor email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Digite uma senha forte"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirme sua senha"
          secureTextEntry={true}
        />

        <Button title="criar conta" color="#5B3CD7" onPress={handleSignUp} />
      </View>
    </View>
  );
};

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
    padding: 5,
    alignItems: 'center',
  },
  cadastro: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: '80%',
    margin: 12,
    borderWidth: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});

export default Cadastro;
