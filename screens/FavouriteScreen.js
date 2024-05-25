import { View, Text } from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { removeFavorite } from "../features/HomeSlice";

function FavouriteScreen() {
  return (
    <View>
      <Text>This is the favourite screen.</Text>
    </View>
  );
}

export default FavouriteScreen;
