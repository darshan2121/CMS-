import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const outflowData = [
  { id: '1', date: '12th JAN 2024', type: 'Rent', description: 'Office rent payment', amount: '₹15,000', icon: 'home' },
  { id: '2', date: '14th FEB 2024', type: 'Utility', description: 'Electricity bill payment', amount: '₹5,000', icon: 'flash-on' },
  { id: '3', date: '20th FEB 2024', type: 'Supplies', description: 'Stationery purchase', amount: '₹2,500', icon: 'shopping-cart' },
  { id: '4', date: '10th MAR 2024', type: 'Rent', description: 'Office rent payment', amount: '₹15,000', icon: 'home' },
  { id: '5', date: '18th APR 2024', type: 'Software', description: 'Software subscription', amount: '₹7,000', icon: 'laptop' },
];

const OutflowScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = outflowData.filter(item => 
    item.type.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.date}>{item.date}</Text>
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={item.icon} size={40} color="#dc3545" />
        </View>
        <View style={styles.details}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );

  const totalAmount = filteredData.reduce((sum, item) => {
    return sum + parseInt(item.amount.replace(/₹|,/g, ''), 10);
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cashflow</Text>
      <Text style={styles.subtitle}>Report from 12th Jan 2024 - 20th Apr 2024</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchInput}
        placeholder="Search Transactions"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredData}
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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    marginBottom: 16,
  },
  searchInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 25,
    paddingLeft: 40,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    elevation: 2,
  },
  searchIcon: {
    position: 'absolute',
    left: 12,
    top: 13,
  },
  listContainer: {
    paddingBottom: 16,
  },
  itemContainer: {
    marginBottom: 16,
    paddingVertical: 8,
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
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 8,
  },
  iconContainer: {
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc3545', // Red for expense
    marginLeft: 16,
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
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dc3545', // Red for expense
  },
});

export default OutflowScreen;
