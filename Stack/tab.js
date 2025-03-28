import { createStackNavigator } from "@react-navigation/stack";
import ShoppingCartScreen from "../Screens/ShoppingCartScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const tabStack = ({ route }) => {
  const { product } = route.params; // Extract the product from route params

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShoppingCart"
        component={ShoppingCartScreen}
        options={{ headerShown: false }}
        initialParams={{ product }} // Pass the product as initialParams
      />
    </Stack.Navigator>
  );
};

export default tabStack;