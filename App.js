import React, { useContext } from 'react';
import { AppContext, AppProvider } from './Context/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './Stack/MainStack';
import AuthStack from './Stack/AuthStack';

const App = () => {
  const { isLoggedIn } = React.useContext(AppContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default () => (
  <AppProvider>
    <App />
  </AppProvider>
);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
// });
