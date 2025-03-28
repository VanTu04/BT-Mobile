import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Thay icon theo nhu cầu

const categories = [
  { id: "1", name: "Pizza", icon: "pizza", color: "#2ecc71" },
  { id: "2", name: "Burger", icon: "hamburger", color: "#2ecc71" },
  { id: "3", name: "Drink", icon: "glass-cocktail", color: "#2ecc71" },
  { id: "4", name: "Rice", icon: "bowl", color: "#2ecc71" },
];

const CateList = () => {
  const [selectedId, setSelectedId] = useState("1");

  const renderItem = ({ item }) => {
    const isSelected = item.id === selectedId;
    return (
      <TouchableOpacity
        style={[styles.item, isSelected && { backgroundColor: item.color }]}
        onPress={() => setSelectedId(item.id)}
      >
        <Icon name={item.icon} size={24} color={isSelected ? "#fff" : "#000"} />
        <Text style={[styles.text, isSelected && { color: "#fff" }]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },
  item: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    backgroundColor: "#f1f2f6",
    minWidth: 80,
    width: 100,
    height:100,
  },
  text: {
    marginTop: 5,
    fontWeight: "bold",
  },
});

export default CateList;
