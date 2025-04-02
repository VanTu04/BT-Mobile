import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import icon2 from '../assets/Group.png';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = async () => {
    try {
      const userInfo = { email, password, username };
      // Save user information to AsyncStorage
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      console.log('User info saved:', userInfo);
      alert('User info saved successfully!');
      navigation.navigate('Location'); // Navigate to the Location screen
    } catch (error) {
      console.error('Error saving user info:', error);
      alert('Failed to save user info.');
    }
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Image source={icon2} style={{ width: 49, height: 57, alignSelf: 'center', marginTop: 77, marginBottom: 10 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 26, marginTop: 36, marginBottom: 10 }}>Sign Up</Text>
        <Text style={{ fontSize: 16, color: '#7C7C7C' }}>
          Enter your credentials to continue
        </Text>

        {/* Username Input */}
        <Text style={{ fontSize: 16, color: '#7C7C7C', marginTop: 10 }}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        {/* Email Input */}
        <Text style={{ fontSize: 16, color: '#7C7C7C', marginTop: 10 }}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password Input */}
        <Text style={{ fontSize: 16, color: '#7C7C7C', marginTop: 10 }}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Text style={{ fontSize: 13, color: '#7C7C7C', marginTop: 10 }}>
          By continuing you agree to our{' '}
          <TouchableOpacity>
            <Text style={{ fontSize: 13, color: '#53B175', fontWeight: 'bold', lineHeight: 18 }}>Terms of Service</Text>
          </TouchableOpacity>{' '}
          and{' '}
          <TouchableOpacity>
            <Text style={{ fontSize: 13, color: '#53B175', fontWeight: 'bold', lineHeight: 18 }}>Privacy Policy</Text>
          </TouchableOpacity>.
        </Text>

        {/* Sign-Up Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Navigate to Sign-In */}
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <Text style={styles.signUpText}>
            Already have an account? <Text style={styles.signUpLink}>Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  loginButton: {
    marginTop: 30,
    backgroundColor: '#53B175',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'center',
    color: '#7C7C7C',
  },
  signUpLink: {
    color: '#53B175',
    fontWeight: 'bold',
  },
});
