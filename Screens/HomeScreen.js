import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../Components/Header';
import ItemList from '../Components/ItemList';
import PopularItems from '../Components/PopularItems';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import CateList from '../Components/CateList';
import SaleOffItems from '../Components/SaleOffItems';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Header */}
        <View style={styles.header}>
          {/* Avatar */}
          <View>
            <Image source={require('../assets/Ellipse 22.png')} style={styles.categoryIcon} />
          </View>
          <View>
            <Text style={styles.locationText}>Your Location</Text>
            <Text style={styles.location}>Savar, Dhaka</Text>
          </View>
          {/* Icon thông báo */}
          <TouchableOpacity>
            <Icon style={styles.bellring} name="bell-ring" size={30} color="#ff9800" />
          </TouchableOpacity>
        </View>
        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="magnify" size={24} color="#888" />
          <TextInput placeholder="Search your food" style={styles.searchInput} placeholderTextColor="#FFFFFF"/>
          <Icon name="filter" size={24} color="#888" />
        </View>
      </View>

      <CateList />
      <Image source={require('../assets/Group 33660.png')} style={styles.banner} />

      {/* Popular Items - FlatList */}
      <Text style={styles.sectionTitle}>Popular Items</Text>
      <ItemList/>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FEFFBF",
    padding: 16,
    height: 200,
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40,
  },
  bellring: {
    borderRadius: 50,
    borderWidth: 1,
    padding: 5,
    borderColor: "rgba(0,0,0,0.1)",

  },
  banner:{
    width: "90%",
    height: 200,
    borderRadius: 10,
    marginTop: 16,
    alignSelf: "center",
  },
  locationText: {
    fontSize: 16,
    color: "gray",
  },
  location: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginTop: 10,
    padding: 8,
    alignItems: "center",
    width: "90%",
    height: 60,
    alignSelf: "center",
    position: "absolute",
    bottom: -30,
    backgroundColor: "#4A43EC",
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: "#F5F5F5",
  },
  categoryContainer: {
    flexDirection: "row",
    marginTop: 16,
    justifyContent: "space-between",
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  hotOffer: {
    marginTop: 16,
    backgroundColor: "#FFD700",
    borderRadius: 10,
    padding: 16,
    alignItems: "center",
  },
  hotOfferImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  hotOfferTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  hotOfferText: {
    fontSize: 16,
  },
  hotOfferDiscount: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 20,
  },
  popularItems: {
    flexDirection: "row",
    marginTop: 10,
  },
  popularImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});
