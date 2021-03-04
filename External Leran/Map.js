import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView from 'react-native-maps';

const YourApp = () => {
  return (
    <View>
      {/* <Text>
        Try editing me! 🎉
      </Text> */}
      <MapView
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  />
    </View>
  );
}

export default YourApp;