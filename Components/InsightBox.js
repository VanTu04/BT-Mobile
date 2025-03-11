import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const InsightBox = ({ icon, title, subtitle, color }) => {
  return (
    <View style={[styles.box]}>
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Ionicons style={styles.iconcss} name={icon} size={30} />
      </View>
      
      <Text style={styles.title}>{title}</Text> {/* Tiêu đề */}
      <Text style={styles.subtitle}>{subtitle}</Text> {/* Phụ đề */}
    </View>
  );
};

export default InsightBox;

const styles = StyleSheet.create({
  box: { 
    flex: 1, 
    padding: 20, 
    margin: 10,
    borderRadius: 10, 
    width: 159,
    height: 177,
    backgroundColor: "#F8F8FB",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center" // Căn giữa nội dung
  },
  iconContainer: { width: 55, height: 55, borderRadius: 16, position: "relative", marginBottom: 12 },
  iconcss: {alignItems: "center", fontSize: 30, position: "absolute", top: 12, left: 12},
  title: { fontSize: 16, fontWeight: "bold", marginTop: 8, color: "#333" }, // Đổi màu chữ
  subtitle: { fontSize: 12, color: "#666", marginTop: 4 },
});