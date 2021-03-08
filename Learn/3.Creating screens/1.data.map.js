import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Card } from "react-native-paper";

export default function Home() {
  const data = [
    { id: "1", name: "Raaj", position: "Dev" },
    { id: "2", name: "Raaj2", position: "Dev2" },
    { id: "3", name: "Raaj", position: "Dev" },
    { id: "4", name: "Raaj2", position: "Dev2" },
  ];
  const renderList = data.map((item) => {
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
  });
  return (
    <View>
      {renderList}
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
});
