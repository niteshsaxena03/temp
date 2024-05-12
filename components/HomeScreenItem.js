import { Text, View, StyleSheet } from "react-native";

function HomeScreenItem({children}) {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: "#1a237e",
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
