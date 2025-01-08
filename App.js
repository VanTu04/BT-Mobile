import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const btnPress = () => {
    Alert.alert("Hello");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={btnPress}>
        <Text style={styles.buttonText}>Press here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 100,
    alignItems: 'center',
    backgroundColor: 'white',
    // justifyContent: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    padding:20,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    flexWrap: 'bold',
  }
});
