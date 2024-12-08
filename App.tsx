import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import BottomNavigation from './src/navigations/BottomNavigation';
import LoginScreen from './src/screens/LoginScreen';
import Header from './src/components/Header';  // Import Header

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        {/* Splash and SignUp screens don't need header, so they have their own layout */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="BottomTabs" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
