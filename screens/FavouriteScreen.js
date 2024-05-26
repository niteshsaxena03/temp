import React from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "../features/HomeSlice";

function FavouriteScreen() {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.home.favoriteItems);

  const handleRemoveFavorite = (text) => {
    dispatch(removeFavorite({ text }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>List of all Favorite Items</Text>
      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.text}</Text>
            <Button
              title="Remove"
              onPress={() => handleRemoveFavorite(item.text)}
              color="red"
            />
          </View>
        )}
      />
    </View>
  );
}

export default FavouriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  mainHeading: {
    textAlign: "center",
    color: "blue",
    fontSize: 25,
    borderColor: "green",
    borderRadius: 5,
    borderWidth: 5,
    padding: 5,
    paddingTop: 10,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  itemText: {
    fontSize: 18,
  },
});
