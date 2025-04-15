import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserItem({ user }) {
  return (
    <View style={styles.userItem}>
      <Text style={styles.username}>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  userItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  username: {
    fontWeight: 'bold',
  },
});
