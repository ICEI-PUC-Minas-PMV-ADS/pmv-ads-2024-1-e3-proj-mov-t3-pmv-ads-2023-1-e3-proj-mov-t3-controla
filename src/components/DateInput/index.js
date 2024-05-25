import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Form from '../FormReceitas/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="auto" />
      <View style={styles.container}>
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
