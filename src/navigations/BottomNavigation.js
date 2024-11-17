import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import ReportsScreen from '../screens/ReportsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Header from '../components/Header'; // Import Header component
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icons

const Tab = createBottomTabNavigator();

const BottomNavigation = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Disable default header
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Choose icons based on route names
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Tasks') {
            iconName = 'assignment';
          } else if (route.name === 'Reports') {
            iconName = 'bar-chart';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }

          // Return the icon component
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#52b865', // Active tab color
        tabBarInactiveTintColor: 'gray', // Inactive tab color
        tabBarStyle: {
          backgroundColor: '#fff', // Tab bar background color
        },
      })}
    >
      <Tab.Screen name="Home">
        {() => (
          <>
            <Header onHamburgerPress={() => navigation.openDrawer()} />
            <HomeScreen />
          </>
        )}
      </Tab.Screen>
      <Tab.Screen name="Tasks">
        {() => (
          <>
            <Header onHamburgerPress={() => navigation.openDrawer()} />
            <TasksScreen />
          </>
        )}
      </Tab.Screen>
      <Tab.Screen name="Reports">
        {() => (
          <>
            <Header onHamburgerPress={() => navigation.openDrawer()} />
            <ReportsScreen />
          </>
        )}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {() => (
          <>
            <Header onHamburgerPress={() => navigation.openDrawer()} />
            <SettingsScreen />
          </>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomNavigation;
