import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomePage from '../pages/HomePage'
import Receitas from '../pages/Receitas'
import Pagina2 from '../pages/Pagina2'
import Despesas from '../pages/Despesas'

function HomeScreen() {
  return (
     <HomePage />
  );
}

function ReceitasScreen() {
  return (
    <Receitas />
  );
}

function DespesasScreen() {
  return (
    <Despesas />
  );
}

function ProfileScreen() {
  return (
    <Pagina2 />
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Receitas') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Despesas') {
              iconName = focused ? 'wallet' : 'wallet-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // Você pode retornar qualquer componente aqui!
            return <Ionicons name={iconName} size={size} color={'#06358f'} />;
          },
          //tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Receitas" component={ReceitasScreen} />
        <Tab.Screen name="Despesas" component={DespesasScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    justifyContent: 'center',
    paddingBottom: 10,
  },
});