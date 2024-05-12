import { Text, View ,StyleSheet} from "react-native";
import HomeScreenItem from "../components/HomeScreenItem";

function HomeScreenItems(){
    return (
        <View style={styles.outerContainer}>
          <HomeScreenItem>Home Item 1</HomeScreenItem>
          <HomeScreenItem>Home Item 2</HomeScreenItem>  
          <HomeScreenItem>Home Item 3</HomeScreenItem> 
          <HomeScreenItem>Home Item 4</HomeScreenItem> 
        </View>
    )
}
export default HomeScreenItems;

const styles=StyleSheet.create({
    outerContainer:{
        flex:1,
        padding:15,
    }
})