import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SquareComponent = ({ icon, title, color }) => {
  return (
    <TouchableOpacity style={[styles.square, { backgroundColor: color }]}>
      <Ionicons name={icon} size={40} color="#fff" />
      <Text style={styles.squareText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SquareComponent;

const styles = StyleSheet.create({
  square: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  },
  squareText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "bold",
  },
});