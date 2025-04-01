import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../../contexts/AuthContext';

const ProfileScreen = ({ navigation }) => {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSignOut = async () => {
    try {
      setIsLoggedIn(false); // Đặt trạng thái đăng xuất
    } catch (error) {
      console.error('Error during sign-out:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header với nền xanh */}
      <View style={styles.header}>
        <Image source={require('../../assets/link_to_burgers_image.png')} style={styles.profileImage} />
        <Text style={styles.name}>Nguyễn Văn Tú</Text>
        <Text style={styles.jobTitle}>Developer</Text>
      </View>

      {/* Phần mô tả */}
      <Text style={styles.description}>
      👉 "I have over 5 years of experience in Developer."
      </Text>

      {/* Nút Chỉnh Sửa Thông Tin */}
      {/* <TouchableOpacity
          style={styles.editProfileButton}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.editProfileButtonText}>Edit Profile</Text>
        </TouchableOpacity> */}


      {/* Nút Sign Out */}
      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#7acef0',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
    marginBottom: 15,
    marginTop: 200,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 16,
    color: '#43c2f5',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginVertical: 30,
    paddingHorizontal: 20,
    lineHeight: 22,
    marginTop: 120,
  },
  editProfileButton: {
    backgroundColor: '#4caf50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signOutButton: {
    backgroundColor: '#ff5a5f',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  signOutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
