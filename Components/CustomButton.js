import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = ({ title, titleColor = 'white', backgroundColor = 'blue', onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor }]}
      onPress={() => onPress(backgroundColor)}
    >
      <Text style={[styles.text, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 5,
    width: "100%",

  },
  text: {
    fontWeight: 'bold',
  },
});

export default CustomButton;