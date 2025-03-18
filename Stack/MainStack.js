import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';

const MainTab = createBottomTabNavigator();
const Main = createStackNavigator();

const MainTabScreen = () => (
  <MainTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Explorer') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      // headerShown: false, // Ẩn header trên tất cả các tab
    })}
  >
    <MainTab.Screen name="Explorer" component={HomeScreen} />
    <MainTab.Screen name="Profile" component={ProfileScreen} />
  </MainTab.Navigator>
);
const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen name="MainTab" options={{ headerShown: false }} component={MainTabScreen} />
    </Main.Navigator>
  );
};

export default MainStack;