import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

export default function Home({ navigation }) {
  const data = [
    { id: "1", name: "Raaj", position: "Dev",  Email: "Dev@gmail.com",phone:"3435"},
    { id: "2", name: "Raaj2", position: "Devdz2",Email: "@gmail.com",phone:"348555535" },
    { id: "3", name: "Raajdfg", position: "Devdsfc",Email: "Devsdxc@gmail.com",phone:"343dxc5"},
  ];
  const renderList = (item) => {
    // console.log(item)
    return (
      <Card
        style={styles.myCard}
        onPress={() => navigation.navigate("Profile",{
          item
        })}
      >
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 60}}
            source={{
              uri: "https://www.pngrepo.com/download/86725/person.png",
            }}
          />
          <View>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>{item.name}</Text>
            <Text style={{ marginLeft: 10, fontSize: 20 }}>
              {item.position}
            </Text>
          </View>
        </View>
      </Card>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {/* {renderList} */}
      <FlatList
        data={data}
        renderItem={(item) => {
          return renderList(item);
        }}
        keyExtractor={(item) => item.id}
      />
      <FAB
        style={styles.fab}
        big
        icon="plus"
        theme={{ colors: { accent: "skyblue" } }}
        onPress={() => navigation.navigate("CreateEmployee")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  myCard: {
    margin: 10,
    padding: 10,
    backgroundColor: "red",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 10,
  },
});
