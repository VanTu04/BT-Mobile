import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FavouriteScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Favourite Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, color: '#333' },
});

export default FavouriteScreen;
