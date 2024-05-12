import { Text, View ,StyleSheet} from "react-native";
import HomeScreenItem from "../components/HomeScreenItem";

function HomeScreenItems(){
    return (
        <View style={styles.outerContainer}>
          <HomeScreenItem>First Item</HomeScreenItem>
          <HomeScreenItem>Second Item</HomeScreenItem>  
          <HomeScreenItem>Third Item</HomeScreenItem> 
          <HomeScreenItem>Fourth Item</HomeScreenItem> 
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