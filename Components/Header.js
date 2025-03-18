import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Header = ({ title, onViewAll }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onViewAll}>
        <Text style={styles.viewAll}>View all</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'orange',
  },
});

export default Header;
