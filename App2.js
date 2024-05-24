import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Title from './src/components/Title/index';
import Form from './src/components/Form/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Title />
        <Form />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#A2ECFC',
  },
  container: {
    flex: 1,
    backgroundColor: '#A2ECFC',
    paddingTop: 80,
    paddingHorizontal: 16,
  },
});
