import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Modal} from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'

const CreateEmployee = () => {
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [salary, setsalary] = useState("");
  const [position, setposition] = useState("");
  const [picture, setpicture] = useState("");
  const [modal, setmodal] = useState(false);

  const submitData = ()=>{
    fetch("http://localhost:3000/send",{
      method : "post",
      headers : {
        'content-type' : 'application/json'
      },
      body : JSON.stringify({
        name,
        phone,
        email,
        salary,
        position,
        picture
      })
      .then((res)=>res.json())
      .then((data)=>{
        console.log(data)
      })
    })
  }

const pickFromCamera= async ()=>{
 const {granted} =  await Permissions.askAsync(Permissions.CAMERA)
 if(granted){
 let data =  await ImagePicker.launchCameraAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.Images,
    allowsEditing : true,
    aspect:[1,1],
    quality:0.5
  })
  console.log("From Camera",data)
 }else{
 console.log("err")
 }
}
const pickFromGallery = async ()=>{
 const {granted} =  await Permissions.askAsync(Permissions.CAMERA_ROLL)
 if(granted){
 let data =  await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.Images,
    allowsEditing : true,
    aspect:[1,1],
    quality:0.5
  })
  console.log("From Image picker",data)
 }else{
  console.log("err")
 }
}

  return (
    <View style={styles.root}>
      <TextInput
        style={{ margin: 5 }}
        label="name"
        value={name}
        mode={"outlined"}
        theme={{ colors: { primary: "red" } }}
        onChangeText={(text) => setname(text)}
      />
      <TextInput
        style={{ margin: 5 }}
        label="email"
        value={email}
        mode={"outlined"}
        theme={{ colors: { primary: "red" } }}
        onChangeText={(text) => setemail(text)}
      />
      <TextInput
        style={{ margin: 5 }}
        label="phone"
        value={phone}
        mode={"outlined"}
        keyboardType="number-pad"
        theme={{ colors: { primary: "red" } }}
        onChangeText={(text) => setphone(text)}
      />
      <TextInput
        style={{ margin: 5 }}
        label="salary"
        value={salary}
        keyboardType="numeric"
        mode={"outlined"}
        theme={{ colors: { primary: "red" } }}
        onChangeText={(text) => setsalary(text)}
      />
        <TextInput
        style={{ margin: 5 }}
        label="position"
        value={position}
        mode={"outlined"}
        theme={{ colors: { primary: "red" } }}
        onChangeText={(text) => setposition(text)}
      />
      <Button
       icon="upload" mode="contained" onPress={() => setmodal(true)}>
        Upload
      </Button>
      {/* <Button style={{marginTop : 15}} icon="upload" mode="contained" onPress={() => setmodal(true)}>
        Upload
      </Button> */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setmodal(false);
        }}
      >
        <View style={styles.modalView}>
          <View style={styles.modal}>
            <Button
              icon="camera"
              mode="contained"
              theme={{colors : {primary : 'skyblue'}}}
              onPress={() =>pickFromCamera()}
            >
              Camera
            </Button>

            <Button
              icon="folder"
              mode="contained"
              theme={{colors : {primary : 'skyblue'}}}
              onPress={() => pickFromGallery()}
            >
              Gallery
            </Button>
          </View>
          <Button
            icon="close"
            mode="contained"
            onPress={() => setmodal(false)}
          >
            Close
          </Button> 
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop : 30,
    flex: 1,
  },
  modal : {
    flexDirection : 'row',
    justifyContent : 'space-around',
    padding : 10,
  },
  modalView : {
    backgroundColor : 'grey',
    position : 'absolute',
    bottom : 2,
    width : "100%",

  }
});

export default CreateEmployee;
