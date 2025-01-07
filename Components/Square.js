import {StyleSheet, Text, View } from "react-native";
const Square = ({ title }) => {
  return(
    <View style={styles.square}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: {
    width: 100,
    height: 100,
    backgroundColor: "#000",
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: "#fff",
    fontSize: 15,
  }
});

export default Square;