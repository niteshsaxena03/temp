import { Text, View, StyleSheet } from "react-native";
import FavouriteSymbol from "./FavouriteSymbol";

function HomeScreenItem({ children }) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer} numberOfLines={1} ellipsizeMode="tail">
        {children}
      </Text>
      <View style={styles.favouriteContainer}>
        <FavouriteSymbol />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#BE0D2D",
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1, // Allows the text to take available space
  },
  favouriteContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10, // Adds some space between the text and the favorite symbol
  },
});

export default HomeScreenItem;
