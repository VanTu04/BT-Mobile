import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CustomButton from './Components/CustomButton';

export default function App() {

  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, {backgroundColor: bgColor}]}>
      <CustomButton title="Red" titleColor='white' backgroundColor="red" onPress={setBgColor}/>
      <CustomButton title="Green" titleColor='white' backgroundColor="green" onPress={setBgColor}/>
      <CustomButton title="Blue" titleColor='white' backgroundColor="blue" onPress={setBgColor}/>
      <CustomButton title="Yellow" titleColor='back' backgroundColor="yellow" onPress={setBgColor}/>
      <CustomButton title="Pink" titleColor='red' backgroundColor="pink" onPress={setBgColor}/>
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
