import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const MainTab = createBottomTabNavigator();
const Main = createStackNavigator();

const MainTabScreen = () => (
  <MainTab.Navigator>
    <MainTab.Screen name="Home" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);
const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen name="MainTab" component={MainTabScreen} />
    </Main.Navigator>
  );
};

export default MainStack;