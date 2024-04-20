import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import Logo from '../assets/Logo.png';

const Inicial = ({ navigation }) => {

  const handleCreateAccount = () => {
    navigation.navigate('Cadastro'); // Navega para a página de cadastro
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
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
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
            onPress={() => console.log('pressed Entrar')}
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