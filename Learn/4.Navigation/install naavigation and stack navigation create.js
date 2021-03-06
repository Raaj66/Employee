import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import CreateEmployee from './screens/CreateEmployee';
import Profile from './screens/Profile'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
const Stack = createStackNavigator();

function App() {
  return (
    <View style={styles.container}>
       <Stack.Navigator >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CreateEmployee" component={CreateEmployee} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
     {/* <Home /> */}
     {/* <CreateEmployee /> */}
     {/* <Profile /> */}
    </View>
  );
}
export default ()=>{
return(
  <NavigationContainer>
    <App />
  </NavigationContainer>
)
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
  backgroundColor : '#d9dbda',
  },
});
