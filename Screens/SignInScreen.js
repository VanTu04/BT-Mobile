import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { AppContext } from '../Context/AppContext';

const SignInScreen = ({ navigation }) => {
  const { setIsLoggedIn, setUserEmail } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Hàm kiểm tra email hợp lệ
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (!validateEmail(email)) {
      Alert.alert('Lỗi', 'Vui lòng nhập email hợp lệ!');
      return;
    }

    if (!password) {
      Alert.alert('Lỗi', 'Vui lòng nhập mật khẩu!');
      return;
    }

    // Đăng nhập thành công
    setIsLoggedIn(true);
    setUserEmail(email);
    Alert.alert('Thành công', 'Đăng nhập thành công!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập email của bạn"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpText}>
          Chưa có tài khoản? <Text style={styles.signUpLink}>Đăng ký ngay</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#FF9900',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  signUpLink: {
    color: '#FF9900',
    fontWeight: 'bold',
  },
});

export default SignInScreen;
