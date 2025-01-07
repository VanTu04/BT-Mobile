import { StyleSheet, Text, View } from 'react-native';
import Square from './Components/Square';

export default function App() {
  return (
    <View style={styles.container}>
      <Square title="Hello, world" />
      {/* <Text>Hello</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
