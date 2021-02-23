import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile'

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Home /> */}
     {/* <CreateEmployee /> */}
     <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  backgroundColor : '#d9dbda',
  },
});
