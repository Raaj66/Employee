import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { Card, FAB } from "react-native-paper";

export default function Home() {
  const data = [
    { id: "1", name: "Raaj", position: "Dev" },
    { id: "2", name: "Raaj2", position: "Dev2" },
    { id: "3", name: "Raaj", position: "Dev" },
    { id: "4", name: "Raaj2", position: "Dev2" },
    { id: "1", name: "Raaj", position: "Dev" },
    { id: "2", name: "Raaj2", position: "Dev2" },
    { id: "3", name: "Raaj", position: "Dev" },
    { id: "4", name: "Raaj2", position: "Dev2" },
    { id: "1", name: "Raaj", position: "Dev" },
    { id: "2", name: "Raaj2", position: "Dev2" },
    { id: "3", name: "Raaj", position: "Dev" },
    { id: "4", name: "Raaj2", position: "Dev2" },
  ];
  const renderList = (item) => {
    return (
      <Card style={styles.myCard}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ height: 50, width: 60, borderRadius: "50%" }}
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
    <View>
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
        theme={{colors :{accent : 'skyblue'}}}
        onPress={() => console.log("Pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  myCard: {
    margin: 10,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    top: 0,
  },
});
