import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const inflowData = [
    { id: '1', date: '12th JAN 2024', type: 'Salary', description: 'Jan month salary', amount: '₹20,000', icon: 'attach-money' },
    { id: '2', date: '12th FEB 2024', type: 'Salary', description: 'Feb month salary', amount: '₹20,000', icon: 'attach-money' },
    { id: '3', date: '12th FEB 2024', type: 'Freelance work', description: 'Freelance project XYZ', amount: '₹10,000', icon: 'work' },
    { id: '4', date: '12th MAR 2024', type: 'Salary', description: 'March month salary', amount: '₹20,000', icon: 'attach-money' },
    { id: '5', date: '12th APR 2024', type: 'Salary', description: 'April month salary', amount: '₹20,000', icon: 'attach-money' },
  ];

const InflowScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.date}>{item.date}</Text>
      <View style={styles.row}>
      <View style={styles.iconContainer}>
          <MaterialIcons name={item.icon} size={40} color="#28a745" /> {/* Icon from MaterialIcons */}
        </View>
        <View style={styles.details}>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <Text style={styles.amount}>{item.amount}</Text>
      </View>
    </View>
  );

  const totalAmount = inflowData.reduce((sum, item) => {
    return sum + parseInt(item.amount.replace(/₹|,/g, ''), 10);
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cashflow</Text>
      <Text style={styles.subtitle}>Report from 12th Jan 2024 - 20th Apr 2024</Text>
      <FlatList
        data={inflowData}
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
    color: '#28a745',
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
    color: '#28a745',
  },
});

export default InflowScreen;
