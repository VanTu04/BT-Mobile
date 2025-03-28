import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainStack from './Stack/MainStack'; // Example of another stack for authenticated users

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {/* Add AuthStack */}

        {/* Add MainStack or other navigators */}
        <RootStack.Screen
          name="MainStack"
          component={MainStack}
          options={{ headerShown: false }}
          screenOptions={{
            tabBarStyle: {
              height: 80, // 🟢 Tăng chiều cao Bottom Tab
              paddingBottom: 10, // 🟢 Tạo khoảng cách để icon và text không bị sát mép
            },
            tabBarLabelStyle: {
              fontSize: 16, // 🟢 Tăng kích thước chữ
            },
            tabBarIconStyle: {
              size: 30, // 🟢 Tăng kích thước icon (một số thư viện không cần dòng này)
            },
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
