import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';
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
    route: '/(donor)/donate' as const
  },
  {
    id: 'grocery',
    title: 'Donate Grocery',
    icon: 'shopping-basket',
    description: 'Contribute essential grocery items',
    route: '/(donor)/donate' as const
  },
  {
    id: 'money',
    title: 'Donate Money',
    icon: 'attach-money',
    description: 'Support food distribution programs',
    route: '/(donor)/donate' as const
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
          <Text style={styles.welcomeText}>Welcome to KhaanaKhazana</Text>
          <Text style={styles.subtitle}>Make a difference with your food donations</Text>
        </View>
        
        {/* Event Highlights / Fundraising Carousel */}
        <View style={styles.carouselSection}>
          <CarouselCards />
        </View>
        
        {/* Donation Options */}
        <View style={styles.donationOptionsSection}>
          <Text style={styles.sectionTitle}>Ways to Donate</Text>
          {donationOptions.map((option) => (
            <TouchableOpacity 
              key={option.id}
              style={styles.donationOption}
              onPress={() => handleDonationPress(option.route)}
            >
              <View style={styles.iconContainer}>
                <MaterialIcons name={option.icon as any} size={24} color={Colors.light.tint} />
              </View>
              <View style={styles.optionContent}>
                <Text style={styles.optionTitle}>{option.title}</Text>
                <Text style={styles.optionDescription}>{option.description}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={24} color="#999" />
            </TouchableOpacity>
          ))}
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
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
    backgroundColor: Colors.light.tint,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  carouselSection: {
    backgroundColor: '#f6f6f6',
  },
  donationOptionsSection: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  donationOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
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
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionContent: {
    flex: 1,
    marginLeft: 12,
    marginRight: 8,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  optionDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
});