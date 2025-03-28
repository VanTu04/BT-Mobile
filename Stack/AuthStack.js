import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import ShoppingCartScreen from "../Screens/ShoppingCartScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignInScreen} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name="ShoppingCart" options={{ headerShown: false }} component={ShoppingCartScreen} />
      </Stack.Navigator>

  );
};

export default AuthStack;