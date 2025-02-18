import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginForm from './Components/LoginForm';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <LoginForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
