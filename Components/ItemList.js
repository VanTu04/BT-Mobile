import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const ItemList = ({ data }) => {
  return (
    <FlatList
      horizontal
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          {item.price && <Text style={styles.price}>{item.price}$</Text>}
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: 'green',
  },
});

export default ItemList;
