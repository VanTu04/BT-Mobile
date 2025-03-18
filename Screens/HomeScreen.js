import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Header from '../Components/Header';
import ItemList from '../Components/ItemList';
import PopularItems from '../Components/PopularItems';

const HomeScreen = () => {
  const categories = [
    { id: 1, name: 'Pizza', image: require('../assets/banh.jpg') },
    { id: 2, name: 'Burgers', image: require('../assets/banhcuon.jpg') },
    { id: 3, name: 'Steak', image: require('../assets/bo.jpg') },
  ];

  const popularItems = [
    { id: 1, name: 'Food 1', author: 'Viet Nam', price: 1, image: require('../assets/bun.jpg') },
    { id: 2, name: 'Food 2', author: 'Japan', price: 3, image: require('../assets/fish.jpg') },
  ];

  const saleOffItems = [
    { id: 1, name: 'Sale 1', price: 2, image: require('../assets/nem.jpg') },
    { id: 2, name: 'Sale 2', price: 5, image: require('../assets/piza.jpg') },
  ];

  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder="Search for meals or area" />

      <Header title="Top Categories" onViewAll={() => {}} />
      <ItemList data={categories} />

      <Header title="Popular Items" onViewAll={() => {}} />
      <PopularItems data={popularItems} />

      <Header title="Sale-off Items" onViewAll={() => {}} />
      <ItemList data={saleOffItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  searchBar: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
