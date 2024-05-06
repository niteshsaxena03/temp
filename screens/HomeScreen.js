import React from "react";
import { Text, View,StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.text}>This is the Home Screen</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontWeight:'bold',
    color:'#000',
    fontSize:20,
  }
});
