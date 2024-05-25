import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
} from "react-native";
import HomeScreenItem from "../components/HomeScreenItem";

function HomeScreenItems() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    if (inputValue.trim()) {
      setData((prevData) => [
        ...prevData,
        { key: Date.now().toString(), title: inputValue },
      ]);
      setInputValue("");
    }
  };

  const renderItem = ({ item }) => (
    <HomeScreenItem>{item.title}</HomeScreenItem>
  );

  return (
    <View style={styles.outerContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter item title"
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Add Item" onPress={addItem} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        ListEmptyComponent={<Text>No items available</Text>}
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
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
