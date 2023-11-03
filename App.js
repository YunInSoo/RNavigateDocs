import * as React from "react";

import { StyleSheet, View } from "react-native";

import DetailsScreen from "./screens/DetailsScreen";
import DetailsScreen2 from "./screens/DetailsScreen2";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { createStackNavigator } from "@react-navigation/stack";

const Stack = createNativeStackNavigator();

// const Drawer = createDrawerNavigator();

function StackNavigator() {
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen
        name="Details2"
        component={DetailsScreen2}
        options={{
          title: "작동되나?",
          contentStyle: { backgroundColor: "red" },
          animation: "fade",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Root"
        options={{
          cardStyleInterpolator: ({ current }) => {
            console.log(current);
            return {
              cardStyle: {
                opacity: current.progress,
              },
            };
          },
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Root"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Feed"
          component={StackNavigator}

          // options={{
          //   cardStyleInterpolator: CardStyleInterpolators.,
          // }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
