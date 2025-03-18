import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "../Screens/SignInScreen";
import SignUpScreen from "../Screens/SignUpScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" options={{ headerShown: false }} component={SignInScreen} />
      <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;