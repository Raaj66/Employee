import React from "react";
import { StyleSheet, Text, View, Image, Linking ,Platform} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Title, Card, Button } from "react-native-paper";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Profile = (props) => {
const {id,name,position,Email,phone}=props.route.params.item;
   const openDial =()=>{
        if(Platform.OS === "android"){
            Linking.openURL("tel:6465566")
        }else {
            Linking.openURL("telprompt:6465566")
        }
    }

  return (
    <View style={styles.root}>
      {/* <Text>dhbx</Text> */}
      <LinearGradient
        colors={["#030bfc", "#0390fc"]}
        style={{ height: "20%" }}
      />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 50, marginTop: -50 }}
          source={{
            uri:
              "https://images.unsplash.com/photo-1584799235813-aaf50775698c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
          }}
        />
      </View>
      <View style={{ alignItems: "center", margin: 15 }}>
        <Title></Title>
        <Text style={{ fontSize: 25 }}>{position}</Text>
      </View>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="email" size={24} color="blue" onPress={()=>{
              Linking.openURL("mailto:Abc@abc.com")
          }} />
          <Text style={{ fontSize: 25, marginLeft: 10, marginBottom: 5 }}>
            {Email}
          </Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <Entypo name="phone" size={24} color="black" onPress={()=>openDial()} />
          <Text style={{ fontSize: 25, marginLeft: 10, marginBottom: 5 }}>
           {phone}
          </Text>
        </View>
      </Card>
      <Card style={styles.myCard}>
        <View style={styles.cardContent}>
          <MaterialIcons name="attach-money" size={24} color="black" />
          <Text style={{ fontSize: 25, marginLeft: 10, marginBottom: 5 }}>
            25000
          </Text>
        </View>
      </Card>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          padding: 10,
        }}
      >
        <Button
          icon="account-edit"
          theme={{ colors: { primary: "skyblue" } }}
          mode="contained"
          onPress={() => console.warn("Pressed")}
        >
          Edit
        </Button>
        <Button
          icon="account-edit"
          theme={{ colors: { primary: "skyblue" } }}
          mode="contained"
          onPress={() => console.warn("Pressed")}
        >
          Remove
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  myCard: {
    margin: 3,
    marginTop: 3,
    padding: 5,
  },
  cardContent: {
    flexDirection: "row",
  },
});
export default Profile;
