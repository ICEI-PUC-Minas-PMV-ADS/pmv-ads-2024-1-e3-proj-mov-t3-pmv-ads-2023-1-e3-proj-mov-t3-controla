import React from 'react';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import { createStackNavigator } from '@react-navigation/stack';

import Page from '../Pages/Pagina2'

import Home from './Home'

const Stack = createStackNavigator();

export default function NavigationLogin() {

  return (

      <Stack.Navigator initialRouteName="Login" > 
                                        
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Page" component={Page} />
        <Stack.Screen name="Cadastro" component={Cadastro} />

        
      </Stack.Navigator>

  );
}