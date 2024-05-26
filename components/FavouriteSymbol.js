import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../features/HomeSlice";

function FavouriteSymbol({ inputText }) {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.home.favoriteItems);

  const isPressed = favoriteItems.some((item) => item.text === inputText);

  const starPressedHandler = () => {
    if (isPressed) {
      // Remove from favorites
      dispatch(removeFavorite({ text: inputText }));
    } else {
      // Add to favorites
      dispatch(addFavorite(inputText));
    }
  };

  return (
    <Pressable onPress={starPressedHandler}>
      <View style={styles.outerContainer}>
        <MaterialIcons
          name={isPressed ? "star" : "star-border"}
          size={60}
          color="blue"
        />
      </View>
    </Pressable>
  );
}

export default FavouriteSymbol;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
