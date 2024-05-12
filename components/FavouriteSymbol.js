import { Pressable, StyleSheet, View } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

function FavouriteSymbol(){
    return (
      <Pressable>
        {({ pressed }) => (
          <View style={[styles.outerContainer, { opacity: pressed ? 0.6 : 1 }]}>
            <MaterialIcons
              name={pressed ? "star" : "star-border"}
              size={60}
              color='blue'
            />
          </View>
        )}
      </Pressable>
    );
}

export default FavouriteSymbol;

const styles=StyleSheet.create({
    outerContainer:{
      flex:1,
      marginTop:'35%',
      marginLeft:'20%',
      alignItems:'center',
    },
})