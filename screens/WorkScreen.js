import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";

function WorkScreen({navigation}) {
  function WorkScreenNavigator(){
    navigation.navigate('WorkScreenItems');
  }
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.text}>This is the Work screen</Text>
      <Button title="Work Screen Items" onPress={WorkScreenNavigator}/>
    </View>
  );
}

export default WorkScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#90EE90",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 20,
  },
});
