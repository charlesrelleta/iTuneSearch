import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TextInput, StyleSheet, Text, View} from 'react-native';
import SearchScreen from './src/screens/Search';

export default function App() {
  return (
    <SafeAreaProvider>
      <Text>App Is Working</Text>
    </SafeAreaProvider>
  );
}
