import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, ImageBackground } from 'react-native';
import { Stack, router } from 'expo-router';
import { Colors } from "../../constants/Colors";
import CarouselCards from "@/components/carouselcards";
import { MaterialIcons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

// Donation options data
const donationOptions = [
  {
    id: 'food',
    title: 'Donate Food',
    icon: 'restaurant',
    description: 'Share excess food from events or restaurants',
    route: '/(donor)/donate' as const,
    color: '#FFE1E1'
  },
  {
    id: 'grocery',
    title: 'Donate Grocery',
    icon: 'shopping-basket',
    description: 'Contribute essential grocery items',
    route: '/(donor)/donate' as const,
    color: '#E1F3FF'
  },
  {
    id: 'money',
    title: 'Donate Money',
    icon: 'attach-money',
    description: 'Support food distribution programs',
    route: '/(donor)/donate' as const,
    color: '#E8FFE1'
  }
];

export default function DonorDashboard() {
  const handleDonationPress = (route: typeof donationOptions[number]['route']) => {
    router.replace(route);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Stack.Screen
          options={{
            title: 'Donor Dashboard',
            headerShown: false,
          }}
        />
        
        {/* Welcome Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.welcomeText}>Welcome to KhaanaKhazana</Text>
            <Text style={styles.subtitle}>Make a difference with your food donations</Text>
            <View style={styles.impactContainer}>
              <View style={styles.impactItem}>
                <Text style={styles.impactNumber}>1000+</Text>
                <Text style={styles.impactLabel}>Meals Donated</Text>
              </View>
              <View style={styles.impactItem}>
                <Text style={styles.impactNumber}>500+</Text>
                <Text style={styles.impactLabel}>Lives Impacted</Text>
              </View>
            </View>
          </View>
        </View>
        
        {/* Carousel Section */}
        <View style={styles.carouselSection}>
          <Text style={styles.sectionTitle}>Current Initiatives</Text>
          <CarouselCards />
        </View>
        
        {/* Donation Options */}
        <View style={styles.donationOptionsSection}>
          <Text style={styles.sectionTitle}>Ways You Can Help</Text>
          {donationOptions.map((option) => (
            <TouchableOpacity 
              key={option.id}
              style={[styles.donationOption, { backgroundColor: option.color }]}
              onPress={() => handleDonationPress(option.route)}
            >
              <View style={[styles.iconContainer, { backgroundColor: 'rgba(0, 0, 0, 0.05)' }]}>
                <MaterialIcons name={option.icon as any} size={24} color={Colors.light.tint} />
              </View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color={Colors.light.tint} />
            </TouchableOpacity>
          ))}
        </View>

        {/* Impact Message */}
        <View style={styles.impactMessage}>
          <Text style={styles.impactMessageText}>
            "Every donation counts. Your generosity can bring a smile to someone's face today."
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.tint,
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
    backgroundColor: Colors.light.tint,
    paddingBottom: 20,
  },
  headerContent: {
    paddingHorizontal: 16,
    paddingTop: 12,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 20,
  },
  impactContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 15,
  },
  impactItem: {
    alignItems: 'center',
  },
  impactNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  impactLabel: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 4,
  },
  carouselSection: {
    backgroundColor: '#f6f6f6',
    paddingTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  donationOptionsSection: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  donationOption: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContent: {
    flex: 1,
    marginLeft: 16,
    marginRight: 8,
  },
  optionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  impactMessage: {
    backgroundColor: '#fff',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: Colors.light.tint,
  },
  impactMessageText: {
    fontSize: 15,
    color: '#666',
    fontStyle: 'italic',
    lineHeight: 22,
  },
});