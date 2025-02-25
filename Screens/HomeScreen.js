import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ route }) => {
  const { phoneNumber } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chào mừng đến với Trang Chủ!</Text>
      <Text style={styles.subtitle}>Số điện thoại của bạn: {phoneNumber}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginTop: 10 },
});

export default HomeScreen;
