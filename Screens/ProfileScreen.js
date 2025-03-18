import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../Context/AppContext';

const ProfileScreen = () => {
  const { setIsLoggedIn, userEmail } = React.useContext(AppContext);

  const handleSignOut = () => {
    setIsLoggedIn(false); // Đăng xuất
  };

  return (
    <View style={styles.container}>
      {/* Header màu xanh */}
      <View style={styles.header} />

      {/* Ảnh đại diện */}
      <Image source={require('../assets/piza.jpg')} style={styles.avatar} />

      {/* Thông tin cá nhân */}
      <Text style={styles.name}>Hung Nguyen</Text>
      <Text style={styles.role}>Mobile developer</Text>
      <Text style={styles.bio}>
        I have above 5 years of experience in native mobile apps development, now I am learning React Native
      </Text>

      {/* Nút Sign Out */}
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: '#1E90FF',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'white',
    marginTop: -50, // Đẩy lên trên
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  role: {
    fontSize: 16,
    color: '#1E90FF',
    marginBottom: 10,
  },
  bio: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default ProfileScreen;