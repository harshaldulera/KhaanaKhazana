import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { router } from 'expo-router';

// Mock user data - will be replaced with actual user data from GraphQL
const mockUserData = {
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  address: '123 Main St, City',
  role: 'donor',
  // Additional fields for NGO
  ngoName: '',
  ngoRegistrationNumber: '',
  // Additional fields for Volunteer
  vehicleType: '',
  licenseNumber: '',
};

export default function ProfileScreen() {
  const handleLogout = () => {
    // TODO: Implement logout logic
    router.replace('/login');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="user-circle" size={80} color="#FF6B60" />
        </View>
        <Text style={styles.name}>{mockUserData.name}</Text>
        <Text style={styles.role}>{mockUserData.role.toUpperCase()}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <FontAwesome name="envelope" size={20} color="#666" />
            <Text style={styles.infoText}>{mockUserData.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome name="phone" size={20} color="#666" />
            <Text style={styles.infoText}>{mockUserData.phone}</Text>
          </View>
          <View style={styles.infoRow}>
            <FontAwesome name="map-marker" size={20} color="#666" />
            <Text style={styles.infoText}>{mockUserData.address}</Text>
          </View>
        </View>
      </View>

      {mockUserData.role === 'ngo' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>NGO Information</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <FontAwesome name="building" size={20} color="#666" />
              <Text style={styles.infoText}>{mockUserData.ngoName}</Text>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome name="id-card" size={20} color="#666" />
              <Text style={styles.infoText}>{mockUserData.ngoRegistrationNumber}</Text>
            </View>
          </View>
        </View>
      )}

      {mockUserData.role === 'volunteer' && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vehicle Information</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <FontAwesome name="car" size={20} color="#666" />
              <Text style={styles.infoText}>{mockUserData.vehicleType}</Text>
            </View>
            <View style={styles.infoRow}>
              <FontAwesome name="certificate" size={20} color="#666" />
              <Text style={styles.infoText}>{mockUserData.licenseNumber}</Text>
            </View>
          </View>
        </View>
      )}

      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 