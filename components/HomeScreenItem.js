import { Text, View, StyleSheet } from "react-native";
import FavouriteSymbol from "./FavouriteSymbol";

function HomeScreenItem({children}) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>{children}</Text>
      <FavouriteSymbol/>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: "#BE0D2D",
    borderRadius: 5,
    marginVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomeScreenItem;
