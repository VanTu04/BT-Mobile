import React, { useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import OnboardingScreen from './Screens/OnboardingScreen';
import SignInScreen from './Screens/SignInScreen';
import Number from './Screens/NumberScreen';
import VerificationScreen from './Screens/VerificationScreen';
import Location from './Screens/Location';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';



const Stack = createNativeStackNavigator();

const App = () => {
  const navigationRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (navigationRef.current) {
        navigationRef.current.navigate('Onboarding');
      }
    }, 3000);

    return () => clearTimeout(timer);
  },);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="PhoneNumberInput" component={Number} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="SignInScreen" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;