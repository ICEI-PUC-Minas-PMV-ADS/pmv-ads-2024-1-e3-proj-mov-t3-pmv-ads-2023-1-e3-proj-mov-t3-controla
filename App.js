import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import Logo from './assets/Logo.png';

export default function App() {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.login}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Login"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#094CCC',
    padding: '1em',
    alignItems: 'center',
  },
  logo: {
    height: '5em',
    width: '13em',
    borderBottom: '1px solid #fff',
    marginBottom: '2em',
  },
  login: {
    backgroundColor: '#000',
    height: 130,
    width: 300,
    borderRadius: 30,
    alignItems: 'center',
    padding: '0.5em'
  },
    input: {
    height: 25,
    width: 150,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    textAlign: 'center',
    fontSize: 10
  },
});
