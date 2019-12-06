import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExampleButton from './components/ExampleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <ExampleButton />
      <ExampleButton />
      <ExampleButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
