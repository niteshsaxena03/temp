import * as React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons,Ionicons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import WorkScreen from "./screens/WorkScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenItems from "./screens/HomeScreenItems";
import WorkScreenItems from "./screens/WorkScreenItems";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Provider } from "react-redux";
import { reduxStore } from "./store/redux";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreenItems"
        component={HomeScreenItems}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const WorkStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Work"
        component={WorkScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WorkScreenItems"
        component={WorkScreenItems}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={reduxStore}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: "blue",
            tabBarStyle: { backgroundColor: "#FFC0CB" },
          }}
        >
          <Tab.Screen
            name="Home Screen"
            component={HomeStack}
            options={{
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" colors={color} size={size} />
              ),
              headerStyle: {
                backgroundColor: "#B0E0E6",
              },
            }}
          />
          <Tab.Screen
            name="Work Screen"
            component={WorkStack}
            options={{
              tabBarLabel: "Work",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="briefcase"
                  color={color}
                  size={size}
                />
              ),
              headerStyle: {
                backgroundColor: "#FFD700",
              },
            }}
          />
          <Tab.Screen
            name="Favourites Screen"
            component={FavouriteScreen}
            options={{
              tabBarLabel: "Favorite",
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="heart" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
