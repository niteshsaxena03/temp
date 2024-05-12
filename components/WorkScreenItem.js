import { StyleSheet, Text, View } from "react-native";

function WorkScreenItem({ children }) {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.textContainer}>{children}</Text>
    </View>
  );
}

export default WorkScreenItem;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height:'60%',
    width:'60%',
    backgroundColor: "blue",
    borderRadius:100,
    marginVertical: 8,
    marginLeft:'20%',
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
