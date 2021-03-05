import React from 'react';
import { Text, View } from 'react-native';

class YourApp extends React.Component{
  constructor() {
    super();
    this.state={
      data : []
    }
    console.warn("cons")
  }
  componentDidMount () {
    this.callApi();
  }
  async callApi (){
    let resp = await fetch('https://reactnative.dev/movies.json');
    let respJson = await resp.json();
    console.warn("resppp",respJson)
  }
  render(){
    console.warn("render")
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Try editing me! 🎉
      </Text>
    </View>
  );
}
}
export default YourApp;