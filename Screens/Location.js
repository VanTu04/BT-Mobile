import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import map_icon from '../assets/illustration.png';
import React, { useState } from 'react';

const Location = ({ navigation }) => {
  const [selectedZone, setSelectedZone] = useState('');
  const [selectedArea, setSelectedArea] = useState('');

  const handleSubmit = () => {
    console.log('Selected Zone:', selectedZone);
    console.log('Selected Area:', selectedArea);
    navigation.navigate('SignInScreen'); // Navigate to the next screen
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="chevron-back" size={30} color="#000" />
        </TouchableOpacity>

        {/* Map Icon */}
        <Image source={map_icon} style={styles.mapIcon} />

        {/* Title and Description */}
        <Text style={styles.title}>Select Your Location</Text>
        <Text style={styles.description}>
          Switch on your location to stay in tune with what’s happening in your area
        </Text>

        {/* Dropdown for Zone */}
        <Text style={styles.label}>Your Zone</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedZone}
            onValueChange={(itemValue) => setSelectedZone(itemValue)}
            style={styles.picker}
            mode="dialog" // Use "dialog" for iOS compatibility
          >
            <Picker.Item label="Select Zone" value="" />
            <Picker.Item label="Banasree" value="banasree" />
            <Picker.Item label="North Zone" value="north" />
            <Picker.Item label="South Zone" value="south" />
            <Picker.Item label="East Zone" value="east" />
            <Picker.Item label="West Zone" value="west" />
          </Picker>
        </View>

        {/* Dropdown for Area */}
        <Text style={styles.label}>Your Area</Text>
        <View style={styles.dropdownContainer}>
          <Picker
            selectedValue={selectedArea}
            onValueChange={(itemValue) => setSelectedArea(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Types of your area" value="" />
            <Picker.Item label="Area 1" value="area1" />
            <Picker.Item label="Area 2" value="area2" />
            <Picker.Item label="Area 3" value="area3" />
            <Picker.Item label="Area 4" value="area4" />
          </Picker>
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  mapIcon: {
    width: 225,
    height: 172,
    alignSelf: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 10,
  },
  description: {
    alignSelf: 'center',
    fontSize: 16,
    marginTop: 5,
    color: '#7C7C7C',
    lineHeight: 24,
  },
  label: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
    height: 50, // Ensure enough height for the dropdown
    justifyContent: 'center',
  },
  picker: {
    height: 50,
    width: '100%',
    color: '#000', // Ensure text is visible
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#53B175',
    paddingVertical: 20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
