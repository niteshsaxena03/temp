import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import HomeScreenItem from "../components/HomeScreenItem";

const data = [
  { key: "1", title: "Home Item 1" },
  { key: "2", title: "Home Item 2" },
  { key: "3", title: "Home Item 3" },
  { key: "4", title: "Home Item 4" },
  { key: "5", title: "Home Item 5" },
];

function HomeScreenItems() {
  const renderItem = ({ item }) => (
    <HomeScreenItem>{item.title}</HomeScreenItem>
  );

  return (
    <View style={styles.outerContainer}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
}

export default HomeScreenItems;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 15,
  },
});
