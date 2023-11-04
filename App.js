import { StyleSheet, Switch, Text, View } from "react-native";

import DetailsScreen from "./screens/DetailsScreen";
import DetailsScreen2 from "./screens/DetailsScreen2";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { useState } from "react";

// import { createDrawerNavigator } from "@react-navigation/drawer";

const NativeStack = createNativeStackNavigator();
const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();
const config = {
  animation: "spring",
  config: {
    stiffness: 30,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
function StackNavigator() {
  const [isStack, setIsStack] = useState(false);
  const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    },
  });
  const toggleSwitch = () => setIsStack((previousState) => !previousState);
  return (
    <View style={styles.mainView}>
      <View
        style={{
          position: "absolute",
          right: 30,
          top: 100,
          height: 30,
          width: 170,
          zIndex: 1,
        }}
      >
        <Text>Stack or NativeStack 전환</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isStack ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isStack}
        />
      </View>
      {isStack ? (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="StackDetail" component={DetailsScreen2} />
          <Stack.Screen
            name="StackDetail2"
            component={DetailsScreen2}
            options={{
              transitionSpec: {
                open: config,
                close: config,
              },
            }}
          />
        </Stack.Navigator>
      ) : (
        <NativeStack.Navigator initialRouteName="Home">
          <NativeStack.Screen name="Home" component={HomeScreen} />
          <NativeStack.Screen name="Details" component={DetailsScreen} />
          <NativeStack.Screen
            name="Details2"
            component={DetailsScreen2}
            options={{
              title: "작동되나?",
              contentStyle: { backgroundColor: "red" },
              animation: "fade",
            }}
          />
        </NativeStack.Navigator>
      )}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
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
        <NativeStack.Screen
          name="Root"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <NativeStack.Screen
          name="Feed"
          component={StackNavigator}

          // options={{
          //   cardStyleInterpolator: CardStyleInterpolators.,
          // }}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});
