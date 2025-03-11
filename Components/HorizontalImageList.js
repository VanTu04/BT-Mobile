import React from "react";
import { View, FlatList, Image, StyleSheet } from "react-native";

const images = [
  { id: "1", source: require("../assets/Rectangle 31.png") },
  { id: "2", source: require("../assets/Rectangle 45.png") },
  { id: "3", source: require("../assets/Rectangle 45 (1).png") },
];

const HorizontalImageList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image source={item.source} style={styles.image} />
        )}
      />
    </View>
  );
};

export default HorizontalImageList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  image: {
    width: 127,
    height: 125,
    borderRadius: 10,
    marginRight: 25,
  },
});
