import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import TasksScreen from '../screens/TasksScreen';
import InflowScreen from '../screens/InflowScreen'; // Import InflowScreen
import OutflowScreen from '../screens/OutflowScreen'; // Import OutflowScreen
import FormContainer from '../components/FormContainer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Home Stack to handle Home, Inflow, and Outflow screens
const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="InflowScreen" component={InflowScreen} />
    <Stack.Screen name="OutflowScreen" component={OutflowScreen} />
  </Stack.Navigator>
);

const BottomNavigation = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleFloatingButtonPress = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: styles.tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'pie-chart';
            else if (route.name === 'Tasks') iconName = 'account-balance-wallet';
            else if (route.name === 'Settings') iconName = 'settings';

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#52b865',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen
          name="Add"
          component={() => null} // Empty screen handled by floating button
          options={{
            tabBarButton: (props) => (
              <FloatingButton {...props} onPress={handleFloatingButtonPress} />
            ),
          }}
        />
        <Tab.Screen name="Tasks" component={TasksScreen} />
      </Tab.Navigator>

      {isFormVisible && <FormContainer isVisible={isFormVisible} onClose={handleCloseForm} />}
    </View>
  );
};

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <Icon name="add" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: 0,
  },
  floatingButton: {
    left:50,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#52b865',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default BottomNavigation;
