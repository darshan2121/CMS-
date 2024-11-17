import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // For icons

const data = [
  { id: 1, title: "Create & Manage Wings", subtitle: "3 Wings", icon: "office-building" },
  { id: 2, title: "Project Drawings", subtitle: "2 New", icon: "drawing" },
  { id: 3, title: "Testing Reports", subtitle: "", icon: "clipboard-check-outline" },
  { id: 4, title: "Daily Worksheet", subtitle: "1 Pending", icon: "calendar" },
  { id: 5, title: "Tasks", subtitle: "5 Pending", icon: "clipboard-text-outline" },
  { id: 6, title: "Materials", subtitle: "", icon: "hammer" },
  { id: 7, title: "Labor", subtitle: "", icon: "account-group" },
  { id: 8, title: "Equipment", subtitle: "", icon: "truck" },
  { id: 9, title: "Quality Control", subtitle: "", icon: "check-decagram" },
  { id: 10, title: "Safety", subtitle: "", icon: "shield-outline" },
  { id: 11, title: "Issues", subtitle: "2 Open", icon: "alert-circle-outline" },
  { id: 12, title: "Photos", subtitle: "", icon: "camera" },
];

export default function ReportsScreen({ navigation }) {
  const handleCardPress = (title) => {
    navigation.navigate("DetailsScreen", { title });
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => handleCardPress(item.title)}
    >
      <Icon name={item.icon} size={30} color="#374151" style={styles.icon} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        {item.subtitle ? (
          <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderCard}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    flex: 1,
    margin: 8,
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  cardContent: {
    marginTop: 10,
    alignItems: "center",
  },
  icon: {
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#374151",
    textAlign: "center",
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 4,
  },
});
