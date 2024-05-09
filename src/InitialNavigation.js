import React from 'react';
import Inicial from './Pages/Inicial';
import Cadastro from './Pages/Cadastro';
import Teste from './Pages/Teste'
import Menu from './Pages/Menu'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function InitialNavigation() {

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name='Menu' component={Menu} />
        <Stack.Screen name='Teste' component={Teste} />
        <Stack.Screen name="Login" component={Inicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />

      </Stack.Navigator>

    </NavigationContainer>

  );
}