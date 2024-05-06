import React from "react";
import { Text, View,StyleSheet, Button } from "react-native";

function HomeScreen({navigation}) {
  function HomeScreenNavigator(){
    navigation.navigate('HomeScreenItems');
  }

  return (
    <View style={styles.outerContainer}>
      <Text style={styles.text}>This is the Home Screen</Text>
      <Button title="Home Screen Items" onPress={HomeScreenNavigator}/>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "#FF8C00",
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontWeight:'bold',
    color:'#000',
    fontSize:20,
  }
});
