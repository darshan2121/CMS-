// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';


const projects = [
  { id: '1', name: 'Project 1', lastEdited: '2025-03-15' },
  { id: '2', name: 'Project 2', lastEdited: '2025-03-10' },
  { id: '3', name: 'Project 3', lastEdited: '2025-03-05' },
  { id: '4', name: 'Project 4', lastEdited: '2025-02-28' },
  // Add more projects as needed
];

const ProjectCard = ({ name, lastEdited }) => {
  return (
    <View style={styles.projectCard}>
      <View style={styles.thumbnail}>
        <Text style={styles.thumbnailText}>Project Thumbnail</Text>
      </View>
      <Text style={styles.projectName}>{name}</Text>
      <Text style={styles.lastEdited}>Last edited: {lastEdited}</Text>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Projects</Text>
      <FlatList
        data={projects}
        renderItem={({ item }) => (
          <ProjectCard name={item.name} lastEdited={item.lastEdited} />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display projects in a grid layout
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.flatListContent}
      />
      
      {/* Floating Add Button */}
      <TouchableOpacity style={styles.floatingButton} onPress={() => {/* Add new project action */}}>
        {/* <MaterialIcons name="add" size={24} color="white" /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  row: {
    justifyContent: 'space-between',
  },
  projectCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 16,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  thumbnail: {
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    marginBottom: 12,
  },
  thumbnailText: {
    color: '#7f7f7f',
    fontSize: 12,
    textAlign: 'center',
  },
  projectName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  lastEdited: {
    fontSize: 12,
    color: '#888888',
  },
  flatListContent: {
    paddingBottom: 100, // To avoid overlap with floating button
  },
  floatingButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default HomeScreen;
