import React from 'react';
import Inicial from './src/Pages/Inicial';
import Cadastro from './src/Pages/Cadastro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {

  return (

     <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicial">
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Inicial />
    // <Cadastro />
  );
}


