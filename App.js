import React from 'react';
import { SafeAreaView } from 'react-native';
import Map from './components/Map';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Map />
    </SafeAreaView>
  );
};

export default App;
