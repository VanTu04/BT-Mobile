import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../Screens/HomeScreen';
import ProductDetailScreen from '../Screens/ProductDetailScreen';
import CategoryScreen from '../Screens/CategoryScreen';
import ProductScreen from '../Screens/ProductScreen';
import CartScreen from '../Screens/CartScreen'; // Thêm màn hình Cart
import FavouriteScreen from '../Screens/FavouriteScreen'; // Thêm màn hình Favourite
import AccountScreen from '../Screens/AccountScreen'; // Thêm màn hình Account

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const CategoryStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Explore" component={CategoryScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductScreen" component={ProductScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Shop') iconName = 'home';
              else if (route.name === 'Explore') iconName = 'search';
              else if (route.name === 'Cart') iconName = 'cart';
              else if (route.name === 'Favourite') iconName = 'heart';
              else if (route.name === 'Account') iconName = 'person';
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Shop" component={HomeStack} />
          <Tab.Screen name="Explore" component={CategoryStack} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Favourite" component={FavouriteScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavigator;
