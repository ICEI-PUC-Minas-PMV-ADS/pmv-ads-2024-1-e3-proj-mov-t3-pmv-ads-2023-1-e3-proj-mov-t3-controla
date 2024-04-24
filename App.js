import React from 'react';
import Inicial from './src/Pages/Inicial';
import Cadastro from './src/Pages/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Teste from './src/Pages/Teste'

const Stack = createStackNavigator();

export default function App() {

  return (

     <NavigationContainer>

      <Stack.Navigator initialRouteName="Teste">
        <Stack.Screen name='Teste' component={Teste} />
        <Stack.Screen name="Login" component={Inicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        
      </Stack.Navigator>

    </NavigationContainer>

  );
}