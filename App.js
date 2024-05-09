import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as yup from 'yup';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const handleValidation = async () => {
    try {
      const schema = yup.object().shape({
        email: yup.string().email('Email inválido').required('Email é obrigatório'),
        password: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
        confirmPassword: yup.string().oneOf([password], 'As senhas devem corresponder').required('Confirmação de senha é obrigatória'),
      });
      console.log(schema)

      await schema.validate({ email, password, confirmPassword }, { abortEarly: false });
      setErrors({});
      // Aqui você pode enviar o formulário se a validação for bem-sucedida
      console.log(schema)
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(err => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{ marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 5, width: 200 }}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
      />
      {errors.email && <Text style={{ color: 'red', marginBottom: 10 }}>{errors.email}</Text>}
      <TextInput
        style={{ marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 5, width: 200 }}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        secureTextEntry
      />
      {errors.password && <Text style={{ color: 'red', marginBottom: 10 }}>{errors.password}</Text>}
      <TextInput
        style={{ marginBottom: 10, borderWidth: 1, borderColor: 'gray', padding: 5, width: 200 }}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirmar Senha"
        secureTextEntry
      />
      {errors.confirmPassword && <Text style={{ color: 'red', marginBottom: 10 }}>{errors.confirmPassword}</Text>}
      <Button title="Enviar" onPress={handleValidation} />
    </View>
  );
};

export default App;