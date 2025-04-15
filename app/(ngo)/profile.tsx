import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

// Mock data - replace with actual data from your GraphQL query
const ngoProfile = {
  name: 'Sample NGO',
  registrationNumber: 'NGO123456',
  yearEstablished: '2020',
  type: 'Trust',
  website: 'www.samplengo.org',
  description: 'Helping communities in need',
  contactNumber: '+91 9876543210',
  alternateNumber: '+91 9876543211',
  email: 'contact@samplengo.org',
  address: '123 NGO Street',
  city: 'Mumbai',
  state: 'Maharashtra',
  pinCode: '400001',
  areasOfOperation: 'City-wide',
  preferredDonations: 'Cooked Food, Groceries',
  pickupCapacity: '100kg per day',
  storageFacility: 'Yes'
};

export default function NGOProfileScreen() {
  const handleLogout = () => {
    // Add logout logic here
    router.replace('/(auth)/login');
  };

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'NGO Profile',
          headerShown: true,
        }}
      />

      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <FontAwesome name="building" size={80} color={Colors.light.tint} />
        </View>
        <Text style={styles.name}>{ngoProfile.name}</Text>
        <Text style={styles.subtitle}>Registration: {ngoProfile.registrationNumber}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Information</Text>
        <InfoRow icon="calendar" label="Established" value={ngoProfile.yearEstablished} />
        <InfoRow icon="tag" label="Type" value={ngoProfile.type} />
        <InfoRow icon="globe" label="Website" value={ngoProfile.website} />
        <InfoRow icon="file-text" label="Description" value={ngoProfile.description} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Details</Text>
        <InfoRow icon="phone" label="Contact Number" value={ngoProfile.contactNumber} />
        <InfoRow icon="phone" label="Alternate Number" value={ngoProfile.alternateNumber} />
        <InfoRow icon="envelope" label="Email" value={ngoProfile.email} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Address</Text>
        <InfoRow icon="map-marker" label="Address" value={ngoProfile.address} />
        <InfoRow icon="map" label="City" value={ngoProfile.city} />
        <InfoRow icon="map" label="State" value={ngoProfile.state} />
        <InfoRow icon="map-pin" label="PIN Code" value={ngoProfile.pinCode} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Operations</Text>
        <InfoRow icon="area-chart" label="Areas of Operation" value={ngoProfile.areasOfOperation} />
        <InfoRow icon="gift" label="Preferred Donations" value={ngoProfile.preferredDonations} />
        <InfoRow icon="truck" label="Pickup Capacity" value={ngoProfile.pickupCapacity} />
        <InfoRow icon="warehouse" label="Storage Facility" value={ngoProfile.storageFacility} />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(ngo)/settings')}>
          <FontAwesome name="cog" size={20} color="#fff" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <FontAwesome name="sign-out" size={20} color="#fff" />
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <FontAwesome name={icon} size={20} color={Colors.light.tint} style={styles.icon} />
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
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
    backgroundColor: '#f8f8f8',
  },
  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
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
    marginBottom: 16,
    color: Colors.light.tint,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 16,
    width: 24,
  },
  label: {
    fontSize: 14,
    color: '#666',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.tint,
    padding: 12,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 8,
    justifyContent: 'center',
  },
  logoutButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
}); 