import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-paper";

const CreateEmployee = () => {
  const [Name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [salary, setsalary] = useState("");
  const [picture, setpicture] = useState("");
  const [modal, setmodal] = useState(false);

  return (
    <View style={styles.root}>
      <TextInput
        style={{ margin: 5 }}
        label="Name"
        value={Name}
        mode={"outlined"}
        theme={{colors : {primary : 'red'}}}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={{ margin: 5 }}
        label="email"
        value={email}
        mode={"outlined"}
        theme={{colors : {primary : 'red'}}}
        onChangeText={(text) => setemail(text)}
      />
        <TextInput
        style={{ margin: 5 }}
        label="phone"
        value={phone}
        mode={"outlined"}
        keyboardType='number-pad'
        theme={{colors : {primary : 'red'}}}
        onChangeText={(text) => setphone(text)}
      />
      <TextInput
        style={{ margin: 5 }}
        label="salary"
        value={salary}
        keyboardType='numeric'
        mode={"outlined"}
        theme={{colors : {primary : 'red'}}}
        onChangeText={(text) => setsalary(text)}
      />
    
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default CreateEmployee;
