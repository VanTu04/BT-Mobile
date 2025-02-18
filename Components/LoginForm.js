import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(true);

  const validatePhoneNumber = (number) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(number);
  };

  const handlePhoneNumberChange = (number) => {
    setPhoneNumber(number);
    setIsValid(validatePhoneNumber(number));
  };

  const handleSubmit = () => {
    if (validatePhoneNumber(phoneNumber)) {
      Alert.alert('Số điện thoại hợp lệ', 'Đăng nhập thành công!');
    } else {
      Alert.alert('Lỗi', 'Số điện thoại không hợp lệ.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng Nhập</Text>
      
      <Text style={styles.label}>Nhập sđt</Text>
      <Text style={styles.label}>Dùng sđt để đăng nhập hoặc đăng ký tài khoản</Text>
      {!isValid && (
        <Text style={styles.errorText}>
          Vui lòng nhập số điện thoại hợp lệ.
        </Text>
      )}
      <TextInput
        style={[styles.input, { borderColor: isValid ? 'gray' : 'red' }]}
        placeholder="Nhập sđt"
        keyboardType="numeric"
        onChangeText={handlePhoneNumberChange}
        value={phoneNumber}
      />
      
      
      
      <View style={styles.buttonContainer}>
        <Button title="Tiếp tục" onPress={handleSubmit} color="#007BFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default LoginForm;
