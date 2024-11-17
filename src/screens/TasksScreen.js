import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>

      <ScrollView>
        {/* Pending Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pending</Text>
          <View style={styles.taskCard}>
            <Text style={[styles.priority, styles.priorityHigh]}>High</Text>
            <Text style={styles.taskText}>Complete foundation work</Text>
          </View>
          <View style={styles.taskCard}>
            <Text style={[styles.priority, styles.priorityMedium]}>Medium</Text>
            <Text style={styles.taskText}>Order electrical supplies</Text>
          </View>
        </View>

        {/* Delayed Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delayed</Text>
          <View style={styles.taskCard}>
            <Text style={[styles.priority, styles.priorityHigh]}>High</Text>
            <Text style={styles.taskText}>Finish roofing</Text>
          </View>
        </View>

        {/* Completed Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Completed</Text>
          <View style={styles.taskCard}>
            <Text style={[styles.priority, styles.priorityLow]}>Low</Text>
            <Text style={styles.taskText}>Site clearing</Text>
          </View>
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
  addButton: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  taskCard: {
    backgroundColor: "#f9f9f9",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  priority: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontWeight: "bold",
    marginRight: 10,
  },
  priorityHigh: {
    backgroundColor: "#dc3545",
    color: "#fff",
  },
  priorityMedium: {
    backgroundColor: "#ffc107",
    color: "#000",
  },
  priorityLow: {
    backgroundColor: "#28a745",
    color: "#fff",
  },
  taskText: {
    fontSize: 16,
  },
});
