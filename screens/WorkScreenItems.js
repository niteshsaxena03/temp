import { StyleSheet, Text, View } from "react-native";
import WorkScreenItem from "../components/WorkScreenItem";

function WorkScreenItems() {
  return (
    <View style={styles.outerContainer}>
      <WorkScreenItem>Work Item 1</WorkScreenItem>
      <WorkScreenItem>Work Item 2</WorkScreenItem>
      <WorkScreenItem>Work Item 3</WorkScreenItem>

    </View>
  );
}
export default WorkScreenItems;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 15,
  },
});
