import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons"; // For icons

const settingsOptions = [
  { id: "1", title: "Edit Profile", icon: "person-outline" },
  { id: "2", title: "Notification", icon: "notifications-none" },
  { id: "3", title: "Order tracking sources", icon: "local-shipping" },
  { id: "4", title: "Language", icon: "language" },
  { id: "5", title: "Currency", icon: "attach-money", value: "BD Tk" },
  { id: "6", title: "Settings", icon: "settings" },
  { id: "7", title: "Help Center", icon: "help-outline" },
  { id: "8", title: "Log Out", icon: "logout" },
];

export default function SettingsScreen() {
  const handlePress = (title) => {
    console.log(`Navigating to: ${title}`);
    // You can implement navigation here
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => handlePress(item.title)}
    >
      <View style={styles.optionLeft}>
        <Icon name={item.icon} size={24} color="#374151" />
        <Text style={styles.optionText}>{item.title}</Text>
      </View>
      {item.value && <Text style={styles.optionValue}>{item.value}</Text>}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Icon name="arrow-back" size={24} color="#374151" />
        <Text style={styles.headerText}>Account</Text>
      </View>

      {/* Settings List */}
      <FlatList
        data={settingsOptions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 8,
  },
  listContainer: {
    marginTop: 16,
  },
  optionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  optionLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 16,
    color: "#374151",
  },
  optionValue: {
    fontSize: 14,
    color: "#6b7280",
  },
});
