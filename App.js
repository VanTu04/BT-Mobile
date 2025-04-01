import 'react-native-gesture-handler';
import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import AppRouter from './routers/index';

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;