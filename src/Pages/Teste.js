import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as yup from 'yup';

const ErrorMessage = ({ message }) => {
  return message ? (
    <Text style={{ color: 'red', marginTop: 10}}>{message}</Text>
  ) : null;
};

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});


  const handleSignUp = async () => {
    try {
      const schema = yup.object().shape({
        email: yup
          .string()
          .email('Email inválido')
          .required('Email é obrigatório'),
        password: yup
          .string()
          .min(6, 'A senha deve ter pelo menos 6 caracteres')
          .required('Senha é obrigatória'),
        confirmPassword: yup
          .string()
          .oneOf([password], 'As senhas devem corresponder')
          .required('Confirmação de senha é obrigatória'),
      });

      await schema.validate(
        { email, password, confirmPassword },
        { abortEarly: false }
      );
      alert('Cadastro realizado com sucesso!');
      setErrors({});
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
      console.log(Object.keys(errors).length > 0);
    } 
  };

  const erros = [];
  for (let err in errors) {
    erros.push(errors[err]);
    console.log(erros);
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{
          marginBottom: 10,
          borderWidth: 1,
          borderColor: 'gray',
          padding: 5,
          width: 200,
        }}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />

      <TextInput
        style={{
          marginBottom: 10,
          borderWidth: 1,
          borderColor: 'gray',
          padding: 5,
          width: 200,
        }}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        secureTextEntry
      />

      <TextInput
        style={{
          marginBottom: 10,
          borderWidth: 1,
          borderColor: 'gray',
          padding: 5,
          width: 200,
        }}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirmar Senha"
        secureTextEntry
      />

      <Button title="Enviar" onPress={handleSignUp} />
      
      {erros.map(err => <ErrorMessage message={err} />)}
    </View>
  );
};

export default App;
