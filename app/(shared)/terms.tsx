import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TermsScreen() {
  const termsContent = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Khaana Khazana, you agree to be bound by these Terms and Conditions and all applicable laws and regulations.',
    },
    {
      title: 'User Responsibilities',
      content: 'Users must provide accurate information, maintain account security, and use the platform responsibly. Any misuse may result in account termination.',
    },
    {
      title: 'Food Donation Guidelines',
      content: 'Donors must ensure food items are safe, properly packaged, and meet our quality standards. NGOs and volunteers must handle donations with care and follow safety protocols.',
    },
    {
      title: 'Delivery Terms',
      content: 'Volunteers agree to deliver food items in a timely manner, following the assigned routes and maintaining proper food safety during transport.',
    },
    {
      title: 'Liability',
      content: 'Khaana Khazana is not liable for any damages or losses incurred during the donation or delivery process. Users participate at their own risk.',
    },
    {
      title: 'Platform Usage',
      content: 'The platform should be used only for its intended purpose. Any unauthorized use or abuse of the platform is strictly prohibited.',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Terms & Conditions</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.lastUpdated}>Last Updated: April 10, 2024</Text>
        
        <Text style={styles.introduction}>
          Welcome to Khaana Khazana. Please read these Terms and Conditions carefully before using our platform.
        </Text>

        {termsContent.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        ))}

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Questions or Concerns?</Text>
          <Text style={styles.contactText}>
            If you have any questions about our Terms & Conditions, please contact us at:
          </Text>
          <Text style={styles.contactInfo}>legal@khaanakhazana.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  lastUpdated: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  introduction: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    marginBottom: 20,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007AFF',
  },
  sectionContent: {
    fontSize: 14,
    lineHeight: 22,
    color: '#444',
  },
  contactSection: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  contactText: {
    fontSize: 14,
    lineHeight: 22,
    color: '#444',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    color: '#007AFF',
  },
}); 