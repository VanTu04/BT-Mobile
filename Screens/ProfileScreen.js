import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppContext';

const ProfileScreen = () => {
  const { setIsLoggedIn, userEmail } = React.useContext(AppContext);

  const handleSignOut = () => {
    setIsLoggedIn(false); // Đăng xuất
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.welcomeText}>Chào mừng, {userEmail}!</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 16,
  },
});


export default ProfileScreen;