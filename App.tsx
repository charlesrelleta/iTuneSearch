import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SearchScreen from './src/screens/Search';

export default function App() {
  return (
    <SafeAreaProvider>
      <SearchScreen />
    </SafeAreaProvider>
  );
}
