import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const PopularItems = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Hình ảnh bên trái */}
            <Image source={item.image} style={styles.image} />
            
            {/* Thông tin bên phải */}
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.author}>By {item.author}</Text>
              <Text style={styles.price}>{item.price}$</Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  card: {
    flexDirection: 'row', // Sắp xếp theo hàng ngang
    width: 220,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 12,
    color: 'gray',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'green',
    marginTop: 5,
  },
});

export default PopularItems;
