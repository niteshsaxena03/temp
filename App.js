import React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import HomeScreen from "./screens/HomeScreen";
import WorkScreen from "./screens/WorkScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenItems from "./screens/HomeScreenItems";
import WorkScreenItems from "./screens/WorkScreenItems";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home "
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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home Screen"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={size} color={color} />
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
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="work" size={size} color={color} />
            ),
            headerStyle:{
              backgroundColor:"#FFD700",
            }
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
