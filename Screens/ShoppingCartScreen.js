import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const ShoppingCartScreen = ({ route }) => {
  const { product } = route.params; // Access the product passed via navigation
  const [quantity, setQuantity] = useState(1);

  const price = 28; // Example price for the product
  const deliveryFee = 6.2;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const subtotal = price * quantity;
  const total = subtotal + deliveryFee;

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
        <Text style={styles.discountBadge}>10% OFF</Text>
      </View>

      <View style={styles.parent}>
        <View />
        {/* Product Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailsRow}>
            {/* Right Section: Name and Rating */}
            <View style={styles.rightSection}>
              <Text style={styles.productName}>{product.name}</Text>
              <Text style={styles.rating}>⭐ 4.9 (3k+ Rating)</Text>
            </View>
            {/* Left Section: Price and Quantity */}
            <View style={styles.leftSection}>
              <Text style={styles.productPrice}>${price}</Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity onPress={handleDecrease} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityValue}>{quantity}</Text>
                <TouchableOpacity onPress={handleIncrease} style={styles.quantityButton}>
                  <Text style={styles.quantityText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            
          </View>
        </View>

        {/* Delivery Address */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery Address</Text>
          <Text style={styles.sectionContent}>Dhaka, Bangladesh</Text>
        </View>

        {/* Payment Method */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          <TouchableOpacity>
            <Text style={styles.changeButton}>Change</Text>
          </TouchableOpacity>
        </View>

        {/* Checkout Summary */}
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryText}>Subtotal ({quantity})</Text>
          <Text style={styles.summaryValue}>${subtotal.toFixed(2)}</Text>
          <Text style={styles.summaryText}>Delivery Fee</Text>
          <Text style={styles.summaryValue}>${deliveryFee.toFixed(2)}</Text>
          <Text style={styles.totalText}>Payable Total</Text>
          <Text style={styles.totalValue}>${total.toFixed(2)}</Text>
        </View>

        {/* Confirm Order Button */}
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  parent: {
    flex: 1,
    justifyContent: 'space-between', // Adjust spacing between child elements
    paddingBottom: 20, // Add padding at the bottom
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
  },
  productImage: {
    width: "90%",
    height: 300,
    borderRadius: 10,
  },
  discountBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#FF6347',
    color: '#fff',
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  detailsContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  detailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-start',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'right',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 24,
    color: '#28a745',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rating: {
    fontSize: 14,
    color: '#888',
    textAlign: 'right',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityValue: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
  },
  sectionContent: {
    fontSize: 14,
    color: '#555',
    flex: 1,
    marginLeft: 10,
  },
  changeButton: {
    fontSize: 14,
    color: '#007bff',
    textAlign: 'right',
  },
  summaryContainer: {
    marginBottom: 20,
  },
  summaryText: {
    fontSize: 14,
    color: '#555',
  },
  summaryValue: {
    fontSize: 14,
    color: '#555',
    textAlign: 'right',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  confirmButton: {
    backgroundColor: '#6c63ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ShoppingCartScreen;
