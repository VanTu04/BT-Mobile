import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import ScanScreen from './Screens/ScanScreen';
import CheckOutScreen from './Screens/CheckOutScreen';
import CartScreen from './Screens/CartScreen';
import SuccessScreen from './Screens/SuccessScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, Text } from 'react-native';

const Stack = createStackNavigator();
const CartStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="CheckOut" component={CheckOutScreen} />
    <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const App = () => {
  const unreadNotifications = 3;
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconSource;
          if (route.name === "Home") iconSource = require("./assets/home.png");
          else if (route.name === "Notification") iconSource = require("./assets/thong_bao.png");
          else if (route.name === "Scan") iconSource = require("./assets/scan.png");
          else if (route.name === "History") iconSource = require("./assets/time.png");
          else if (route.name === "CartStack") iconSource = require("./assets/gio_hang.png");

          return (
            <View>
              <Image source={iconSource} style={{ width: 24, height: 24, tintColor: color }} />
              {route.name === "Notification" && unreadNotifications > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{unreadNotifications}</Text>
                </View>
              )}
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        headerShown: false,
      })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notification" component={HomeScreen} />
        <Tab.Screen name="Scan" component={ScanScreen} />
        <Tab.Screen name="History" component={HomeScreen} />
        <Tab.Screen name="CartStack" component={CartStack} options={{ title: "Cart" }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  greeting: { fontSize: 18, fontWeight: "bold" },
  username: { fontSize: 16, color: "#555" },
  profilePic: { width: 50, height: 50, borderRadius: 25 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", marginBottom: 10, marginTop: 20 },
  exploreHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  exploreMoreText: { fontSize: 20, fontWeight: "bold" },
  insightsContainer: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginTop: 20 },
  insightCard: { width: "47%", padding: 27, paddingBottom: 35, borderRadius: 12, alignItems: "center", marginBottom: 15 },
  insightIcon: { width: 30, height: 30, marginBottom: 10 },
  insightTitle: { fontSize: 16, fontWeight: "bold" },
  insightSubtitle: { fontSize: 12, color: "#666" },
  exploreImage: { width: 127, height: 125, marginRight: 15, borderRadius: 12 },
  tabBar: { height: 90, borderTopLeftRadius: 20, borderTopRightRadius: 20, backgroundColor: "#fff", elevation: 10, paddingTop: 15 },
  badge: { position: "absolute", right: -6, top: -2, backgroundColor: "red", borderRadius: 10, width: 20, height: 20, justifyContent: "center", alignItems: "center" },
  badgeText: { color: "white", fontSize: 12, fontWeight: "bold" },
});

export default App;
