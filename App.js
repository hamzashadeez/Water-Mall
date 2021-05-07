import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Screens/Register';
import Login from './Screens/Login';
import AppStack from './Stacks/AppStack'
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <AppStack /> */}
      <Login/>
      <Register/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
