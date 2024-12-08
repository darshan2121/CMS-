import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { PieChart, LineChart } from 'react-native-chart-kit';
import DatePicker from 'react-native-date-picker';
import { parseDate } from '../../utils/dateUtils'; // Ensure you have a utility for date parsing.
import { Dimensions } from 'react-native';

const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  const navigation = useNavigation();

  // Initializing date range
  const [startDate, setStartDate] = useState(() => parseDate('2024-01-12'));
  const [endDate, setEndDate] = useState(() => parseDate('2024-04-20'));

  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  // Line Chart Data
  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
    datasets: [
      {
        data: [2000, 2500, 3000, 4000, 3500, 4200], // Inflow data
        color: (opacity = 1) => `rgba(82, 184, 101, ${opacity})`, // Green for inflow
        strokeWidth: 2,
      },
      {
        data: [1500, 2000, 2500, 3000, 2700, 3200], // Outflow data
        color: (opacity = 1) => `rgba(255, 99, 71, ${opacity})`, // Red for outflow
        strokeWidth: 2,
      },
    ],
    legend: ['Inflow', 'Outflow'],
  };

  // Pie Chart Data
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
   
      </View>

      {/* Date Range */}
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

      {/* Line Chart */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartHeader}>Inflow and Outflow Trends</Text>
        <LineChart
  data={{
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG'],
    datasets: [
      {
        data: [10000, 20000, 30000, 35000, 40000, 45000, 48000, 50000],
        color: (opacity = 1) => `rgba(82, 184, 101, ${opacity})`, // Green for growth
        strokeWidth: 2,
      },
    ],
  }}
  width={screenWidth} // Use full screen width
  height={300} // Adjust height to match screenshot
  yAxisLabel="$"
  yAxisSuffix=""
  chartConfig={{
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0, // No decimal places
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
      r: '6', // Dot radius
      strokeWidth: '2',
      stroke: '#52b865',
    },
    fillShadowGradient: '#52b865', // Gradient fill color
    fillShadowGradientOpacity: 0.3,
    propsForBackgroundLines: {
      display: 'none', // Remove background lines
    },
  }}
  bezier
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
/>
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
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
export default HomeScreen;
