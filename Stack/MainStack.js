import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import * as React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import OrderScreen from "../Screens/OrderScreen";
import InboxScreen from "../Screens/InboxScreen";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import { View, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import tabStack from './tab';

const Tab = createBottomTabNavigator();
const Main = createStackNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === "Home") {
          iconName = "home";
        } else if (route.name === "Order") {
          iconName = "clipboard-text";
        } else if (route.name === "Inbox") {
          iconName = "email";
        } else if (route.name === "Profile") {
          iconName = "account";
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: "#007AFF",
      tabBarInactiveTintColor: "gray",
      tabBarStyle: {
        height: 80, // Increase the height of the bottom navigation bar
        paddingBottom: 10, // Add padding at the bottom for better spacing
        paddingTop: 10, // Add padding at the top for better alignment
      },
      tabBarLabelStyle: {
        fontSize: 14, // Optional: Increase the font size of the labels
      },
    })}
  >
    <Tab.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
    <Tab.Screen name="Order" options={{ headerShown: false }} component={OrderScreen} />
    <Tab.Screen name="Inbox" options={{ headerShown: false }} component={InboxScreen} />
    <Tab.Screen name="Profile" options={{ headerShown: false }} component={ProfileScreen} />
  </Tab.Navigator>
);
const MainStack = () => {
  return (
    <Main.Navigator>
      <Main.Screen name="MainTab" options={{ headerShown: false }} component={MainTabScreen} />
      <Main.Screen name="tabStack" component={tabStack} options={{ headerShown: false }}/>

    </Main.Navigator>
  );
};

export default MainStack;