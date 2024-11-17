import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.iconButton}>
        {/* Hamburger Menu Icon */}
        <Icon name="menu" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.logo}>Construction Manager</Text>
      <TouchableOpacity style={styles.iconButton}>
        {/* Profile Icon */}
        <Icon name="person-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 10,
  },
});

export default Header;
