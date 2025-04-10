import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function PrivacyPolicyScreen() {
  const privacyContent = [
    {
      title: 'Information We Collect',
      content: 'We collect information that you provide directly to us, including your name, email address, phone number, and location data when you use our services.',
    },
    {
      title: 'How We Use Your Information',
      content: 'We use the information we collect to provide and improve our services, communicate with you, and ensure the security of our platform.',
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell your personal information. We may share your information with NGOs and volunteers only as necessary to provide our services.',
    },
    {
      title: 'Data Security',
      content: 'We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.',
    },
    {
      title: 'Your Rights',
      content: 'You have the right to access, correct, or delete your personal information. You can also opt out of certain data collection and use.',
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
        <Text style={styles.title}>Privacy Policy</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.lastUpdated}>Last Updated: April 10, 2024</Text>
        
        <Text style={styles.introduction}>
          At Khaana Khazana, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information.
        </Text>

        {privacyContent.map((section, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.sectionContent}>{section.content}</Text>
          </View>
        ))}

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Contact Us</Text>
          <Text style={styles.contactText}>
            If you have any questions about our Privacy Policy, please contact us at:
          </Text>
          <Text style={styles.contactInfo}>privacy@khaanakhazana.com</Text>
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