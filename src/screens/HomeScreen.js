import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { PieChart } from 'react-native-chart-kit';
import DatePicker from 'react-native-date-picker';
import { parseDate } from '../../utils/dateUtils';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Initializing dates using the parseDate utility
  const [startDate, setStartDate] = useState(() => parseDate('2024-01-12'));
  const [endDate, setEndDate] = useState(() => parseDate('2024-04-20'));
  const dateValue = new Date(); // A valid Date object

  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  // Data for the Pie Chart
  const pieChartData = [
    {
      name: 'Inflow',
      population: 60,
      color: '#52b865',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Outflow',
      population: 30,
      color: '#ff6347',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
    {
      name: 'Savings',
      population: 10,
      color: '#ffcc00',
      legendFontColor: '#000',
      legendFontSize: 15,
    },
  ];

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
          onPress={() => navigation.navigate('InflowScreen')}
        >
          <Text style={styles.tabText}>Inflow</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tab}
          onPress={() => navigation.navigate('OutflowScreen')}
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
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setStartDatePickerVisible(true)}
          >
            <MaterialIcons name="calendar-today" size={16} color="#fff" />
            <Text style={styles.dateText}>{startDate.toDateString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.dateButton, styles.dateButtonRight]}
            onPress={() => setEndDatePickerVisible(true)}
          >
            <MaterialIcons name="calendar-today" size={16} color="#fff" />
            <Text style={styles.dateText}>{endDate.toDateString()}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.downloadButton}>
          <MaterialIcons name="file-download" size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Pie Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartHeader}>Transaction Overview</Text>
        <PieChart
          data={pieChartData}
          width={320}
          height={220}
          chartConfig={{
            backgroundColor: '#e6e6e6',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 1,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
        />
      </View>

      {/* Start Date Picker Modal */}
      <Modal visible={isStartDatePickerVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <DatePicker
            date={startDate}
            mode="date"
            onDateChange={setStartDate}
            onConfirm={(date) => {
              setStartDate(date);
              setStartDatePickerVisible(false);
            }}
            onCancel={() => setStartDatePickerVisible(false)}
          />
        </View>
      </Modal>

      {/* End Date Picker Modal */}
      <Modal visible={isEndDatePickerVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <DatePicker
            date={endDate}
            mode="date"
            onDateChange={setEndDate}
            onConfirm={(date) => {
              setEndDate(date);
              setEndDatePickerVisible(false);
            }}
            onCancel={() => setEndDatePickerVisible(false)}
          />
        </View>
      </Modal>
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
    marginRight: 10,
  },
  dateText: {
    color: '#fff',
    marginLeft: 10,
  },
  dateButtonRight: {
    marginLeft: 40,
  },
  downloadButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 10,
  },
  chartContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  chartHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default HomeScreen;
