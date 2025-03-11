import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import InsightBox from '../Components/InsightBox';
import { Ionicons } from "@expo/vector-icons";
import HorizontalImageList from "../Components/HorizontalImageList";

const insights = [
  { id: "1", icon: "scan-outline", title: "Scan new", subtitle: "Scanned 483", color: "#E3E7FF" },
  { id: "2", icon: "alert-circle-outline", title: "Counterfeits", subtitle: "Counterfeited 32", color: "#FFE3E3" },
  { id: "3", icon: "checkmark-circle-outline", title: "Success", subtitle: "Checkouts 8", color: "#E3FFF1" },
  { id: "4", icon: "calendar-outline", title: "Directory", subtitle: "History 26", color: "#E3F4FF" },
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image
          source={ require("../assets/Mask Group.png") }
          style={styles.avatar}
        />
      </View>

      {/* Your Insights */}
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <FlatList
        data={insights}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <InsightBox {...item} />}
      />

      {/* Explore More */}
      <View style={styles.exploreMore}>
        <Text style={styles.sectionTitle}>Explore More</Text>
        <TouchableOpacity>
          <Ionicons name="arrow-forward-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Danh sách ảnh ngang */}
      <HorizontalImageList />

    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20, paddingTop: 40, },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, marginTop: 63,},
  greeting: { fontSize: 22, fontWeight: "bold" },
  username: { fontSize: 14, color: "#666" },
  avatar: { width: 47, height: 47, borderRadius: 0 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10, marginTop:33 },
  insightsGrid: { alignItems: "center" },
  exploreMore: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
});