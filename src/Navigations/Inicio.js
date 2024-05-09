import React from 'react';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import { createStackNavigator } from '@react-navigation/stack';
import Teste from '../Pages/Teste'
import Home from './Home'

const Stack = createStackNavigator();

export default function NavigationLogin() {

  return (
                                        // Só ficara em 'Home' enquanto programamos
                                        // O correto é ficar em Login
      <Stack.Navigator initialRouteName="Home" > 
                                        
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>

        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        
        <Stack.Screen name='Teste' component={Teste} options={{ headerShown: false }}/>
        
      </Stack.Navigator>

  );
}