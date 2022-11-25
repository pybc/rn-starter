import React from "react";
import { Text, StyleSheet } from "react-native";
import { FlatList } from "react-navigation";

const friends = [
  { name: "Friend 1",age:20 },
  { name: "Friend 2",age:15 },
  { name: "Friend 3",age:18 },
  { name: "Friend 4",age:12 },
  { name: "Friend 5",age:40 },
  { name: "Friend 6",age:50 },
  { name: "Friend 7",age:30 },
];

const ListScreen = () => {
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
    vertical={true}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>;
      }}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
