import React from "react";
import { Text, View,StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.outerContainer}>
      <Text>This is the home screen</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: "50%",
    width: "50%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
