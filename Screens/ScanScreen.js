import React, { useEffect } from "react";
import { 
  View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ScanScreen = () => {
  const navigation = useNavigation();

  // Khi vào ScanScreen thì ẩn Bottom Tab
  useEffect(() => {
    navigation.getParent()?.setOptions({ tabBarStyle: { display: "none" } });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          position: "absolute",
          height: 80,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
        },
      });
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Ảnh nền full màn hình */}
      <ImageBackground 
        source={require("../assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")} 
        style={styles.backgroundImage}
      >
        {/* Nút Back */}
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back-outline" size={24} color="#665" />
        </TouchableOpacity>

        {/* Overlay khung quét */}
        <View style={styles.scanBox} />
      </ImageBackground>

      {/* Thông tin sản phẩm */}
      <View style={styles.productCard}>
        <Image 
          source={require("../assets/glass-bottle-mockups-for-food-and-beverage-packaging-cover 1.png")} 
          style={styles.cardImage} 
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.productOwner}>Lauren’s</Text>
          <Text style={styles.productTitle}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundImage: { 
    flex: 1, 
    resizeMode: "cover", 
    justifyContent: "center", 
    alignItems: "center" 
  },
  backButton: { 
    position: "absolute", 
    top: 79, 
    left: 20, 
    padding: 10, 
    backgroundColor: "#fff", 
    borderRadius: 10 
  },
  scanBox: {
    position: "absolute",
    width: 250,
    height: 250,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 20,
    opacity: 0.5,
    top: "35%",
  },
  productCard: {
    position: "absolute",
    bottom: 30,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    justifyContent: "center",
    width: 292,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    marginLeft: 60
  },
  cardImage: { 
    width: 50, 
    height: 50, 
    borderRadius: 10, 
    marginRight: 10 
  },
  productOwner: { 
    fontSize: 12, 
    color: "#888" 
  },
  productTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    color: "#333" 
  },
  addButton: { 
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    backgroundColor: "#665", 
    justifyContent: "center", 
    alignItems: "center" 
  },
});
