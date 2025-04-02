import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to load user:', error);
      }
    };

    loadUser();
  }, []);

  const saveUser = async (userInfo) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(userInfo));
      setUser(userInfo);
    } catch (error) {
      console.error('Failed to save user:', error);
    }
  };

  const clearUser = async () => {
    try {
      await AsyncStorage.removeItem('user');
      setUser(null);
    } catch (error) {
      console.error('Failed to clear user:', error);
    }
  };

  return (
    <UserContext.Provider value={{ user, saveUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
