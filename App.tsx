import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SearchScreen from './src/screens/Search';

const App = () => {
  return (
    <SafeAreaProvider>
      <SearchScreen />
    </SafeAreaProvider>
  );
};

export default App;
