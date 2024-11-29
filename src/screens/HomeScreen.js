// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

const HomeScreen = () => {

  const navigation = useNavigation(); // Initialize navigation

  
  return (
    <View style={styles.container}>
      {/* Welcome Header */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome User,</Text>
        <MaterialIcons name="notifications-none" size={24} color="#fff" />
      </View>

 {/* Tabs */}
 <View style={styles.tabsContainer}>
        <TouchableOpacity style={[styles.tab, styles.activeTab]}>
          <Text style={styles.tabTextActive}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('InflowScreen')} // Navigate to Inflow
        >
          <Text style={styles.tabText}>Inflow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('OutflowScreen')} // Navigate to Outflow
        >
          <Text style={styles.tabText}>Outflow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Savings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>1 Month</Text>
          <MaterialIcons name="arrow-drop-down" size={16} color="#fff" />
        </TouchableOpacity>

      </View>

      {/* Dropdown and Date Range */}
      <View style={styles.dateRangeContainer}>
  <View style={styles.dateRange}>
    <TouchableOpacity style={styles.dateButton}>
      <MaterialIcons name="calendar-today" size={16} color="#fff" />
      <Text style={styles.dateText}>12th Jan 2024</Text>
    </TouchableOpacity>
    <TouchableOpacity style={[styles.dateButton, styles.dateButtonRight]}>
      <MaterialIcons name="calendar-today" size={16} color="#fff" />
      <Text style={styles.dateText}>20th Apr 2024</Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity style={styles.downloadButton}>
    <MaterialIcons name="file-download" size={20} color="#fff" />
  </TouchableOpacity>
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#333',
    marginRight: 8,
  },
  activeTab: {
    backgroundColor: '#00a86b',
  },
  tabText: {
    color: '#ccc',
    fontSize: 14,
  },
  tabTextActive: {
    color: '#fff',
    fontSize: 14,
  },
  dateRangeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  dropdownText: {
    color: '#fff',
    marginRight: 6,
  },
  dateRange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10, // Space between adjacent buttons
  },
  dateText: {
    color: '#fff',
    marginLeft: 10,
  },
  dateSeparator: {
    color: '#fff',
    marginHorizontal: 6,
  },
  downloadButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
  },
  dateButtonRight: {
    marginLeft: 40, // Space for the second date button
  },
});

export default HomeScreen;


