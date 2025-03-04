import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { AppContext} from '../Context/AppContext';
import { TextInput } from 'react-native-gesture-handler';


const SignInScreen = ({ navigation }) => {

  const { setIsLoggedIn, setUserEmail } = React.useContext(AppContext);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

// Hàm kiểm tra email
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
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default SignInScreen;
