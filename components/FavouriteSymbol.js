import { Pressable, StyleSheet, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';
import {useState} from 'react';

function FavouriteSymbol(){
    const [isPressed,setIsPressed]=useState(false);

    const starPressedHandler=()=>{
      setIsPressed(!isPressed);
    }
    return (
      <Pressable onPress={starPressedHandler}>
    
          <View style={[styles.outerContainer]}>
            <MaterialIcons
              name={isPressed ? "star" : "star-border"}
              size={60}
              color='blue'
            />
          </View>
       
      </Pressable>
    );
}

export default FavouriteSymbol;

const styles=StyleSheet.create({
    outerContainer:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:10,
    },
})