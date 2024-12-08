import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, FlatList } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const transactions = [
  { id: '1', type: 'Debit', amount: 500, description: 'Buy materials', date: '12th JAN 2024', icon: 'shopping-cart' },
  { id: '2', type: 'Credit', amount: 1500, description: 'Payment received', date: '14th JAN 2024', icon: 'payment' },
  { id: '3', type: 'Debit', amount: 2000, description: 'Rent payment', date: '15th JAN 2024', icon: 'home' },
  { id: '4', type: 'Credit', amount: 3000, description: 'Client payment', date: '17th JAN 2024', icon: 'business' },
  { id: '5', type: 'Debit', amount: 1000, description: 'Office supplies', date: '20th JAN 2024', icon: 'store' },
  { id: '6', type: 'Credit', amount: 2500, description: 'Freelance project', date: '22nd JAN 2024', icon: 'work' },
];

export default function TasksScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleSearch = () => {
    const filtered = transactions.filter(
      (item) =>
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const totalIncome = filteredTransactions
    .filter((item) => item.type === 'Credit')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalExpense = filteredTransactions
    .filter((item) => item.type === 'Debit')
    .reduce((sum, item) => sum + item.amount, 0);

  const totalSavings = totalIncome - totalExpense;

  const renderTransactionCard = ({ item }) => (
    <View style={styles.cardContainer}>
      <Text style={styles.cardDate}>{item.date}</Text>
      <View style={styles.cardContent}>
        <MaterialIcons name={item.icon} size={40} color={item.type === 'Debit' ? "#dc3545" : "#28a745"} />
        <View style={styles.cardDetails}>
          <Text style={styles.cardType}>{item.type}</Text>
          <Text style={styles.cardDescription}>{item.description}</Text>
        </View>
        <Text style={styles.cardAmount}>{item.type === 'Debit' ? '-₹' : '+₹'}{item.amount}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Section */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Transactions"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <MaterialIcons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Mixed Transactions Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Transactions</Text>
          <FlatList
            data={filteredTransactions}
            renderItem={renderTransactionCard}
            keyExtractor={(item) => item.id}
          />
        </View>

        {/* Total Section */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total Income: ₹{totalIncome}</Text>
          <Text style={styles.totalText}>Total Expense: ₹{totalExpense}</Text>
          <Text style={styles.totalText}>Total Savings: ₹{totalSavings}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
    borderRadius: 25,
    paddingHorizontal: 10,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    paddingLeft: 16,
    backgroundColor: "#fff",
    borderRadius: 25,
  },
  searchButton: {
    marginLeft: 10,
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#007bff",
  },
  cardContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    marginBottom: 10,
  },
  cardDate: {
    fontSize: 12,
    color: "#888",
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  cardDetails: {
    marginLeft: 12,
    flex: 1,
  },
  cardType: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
  },
  cardAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#28a745",
  },
  totalContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
