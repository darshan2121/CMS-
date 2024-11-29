import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const outflowData = [
    { id: '1', date: '12th JAN 2024', type: 'Vehicles', description: 'Petrol & service charges', amount: '₹1350', icon: 'directions-car' },
    { id: '2', date: '12th JAN 2024', type: 'Food & Drinks', description: 'Restaurants, and other expenses of ...', amount: '₹1350', icon: 'restaurant' },
    { id: '3', date: '12th JAN 2024', type: 'Rent', description: 'Home rent', amount: '₹5000', icon: 'home' },
    { id: '4', date: '25th JAN 2024', type: 'Groceries', description: 'Rice, wheat, milk, soap, veggies, etc', amount: '₹500', icon: 'shopping-cart' },
    { id: '5', date: '25th JAN 2024', type: 'Transport', description: 'Expenses in daily travel by public transport or Travelling', amount: '₹750', icon: 'commute' },
    { id: '6', date: '15th FEB 2024', type: 'Food & Drinks', description: 'Restaurants, and other expenses of ...', amount: '₹1350', icon: 'restaurant' },
    { id: '7', date: '15th FEB 2024', type: 'Rent', description: 'Home rent', amount: '₹5000', icon: 'home' },
  ];
const OutflowScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.date}>{item.date}</Text>
      <View style={styles.row}>
      <MaterialIcons name={item.icon} size={40} color="#555" />

        <View style={styles.details}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.description} numberOfLines={1}>
            {item.description}
          </Text>
        </View>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );

  const totalAmount = outflowData.reduce((sum, item) => {
    return sum + parseInt(item.amount.replace(/₹|,/g, ''), 10);
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Outflow</Text>
      <Text style={styles.subtitle}>Summary of Expenses</Text>
      <FlatList
        data={outflowData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>₹{totalAmount.toLocaleString()}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 16,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    marginRight: 12,
  },
  icon: {
    width: 40,
    height: 40,
  },
  details: {
    flex: 1,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d9534f', // Red for expenses
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
    marginTop: 16,
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d9534f', // Red for total expenses
  },
});

export default OutflowScreen;
