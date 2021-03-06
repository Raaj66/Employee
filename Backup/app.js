import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import CreateEmployee from "./screens/CreateEmployee";
import Profile from "./screens/Profile";
import YourApp from './External Leran/Map'
import Api from './External Leran/Api';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const myOptions = {
  title: "Raaj",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "blue",
  },
};

export default function App() {
  return (
    <View>
      {/* headerMode="none" to remove header */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ ...myOptions, title: "change" }}
        />
        <Stack.Screen
          name="CreateEmployee"
          component={CreateEmployee}
          options={{ ...myOptions, title: "CreateEployee" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ ...myOptions, title: "profile" }}
        />
      </Stack.Navigator>
      {/* <Home /> */}
      {/* <CreateEmployee /> */}
      {/* <Profile /> */}
      {/* <YourApp /> */}
      {/* <Api /> */}
    </View>
  );
}
export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d9dbda",
  },
});
