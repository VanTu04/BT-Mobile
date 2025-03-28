import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Dữ liệu các mục phổ biến
const popularItems = [
  { id: "1", name: "Burger", image: require("../assets/Rectangle 29.png") },
  { id: "2", name: "Pizza", image: require("../assets/Rectangle 33.png") },
];

const ItemList = () => {
  const navigation = useNavigation(); // Use the hook to get the navigation object

  return (
    <FlatList
      horizontal
      data={popularItems}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate("tabStack", { product: item })}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          {item.price && <Text style={styles.price}>{item.price}$</Text>}
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 190,
    height: 120,
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