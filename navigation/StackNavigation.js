import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./BottomNavigation";
import ScanScreen from "../Screens/ScanScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={BottomTabNavigator} />

        {/* <Stack.Screen
        name="Scan"
        component={ScanScreen}
        options={{ headerShown: false, gestureEnabled: false }} // Không vuốt back
      /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
