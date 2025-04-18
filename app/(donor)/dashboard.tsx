import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from "../../constants/Colors";
import CarouselCards from "@/components/carouselcards";
import ButtonRow from "@/components/buttonrow";

export default function DonorDashboard() {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Donor Dashboard',
          headerShown: false,
        }}
      />
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to KhaanaKhazana</Text>
        <Text style={styles.subtitle}>Make a difference with your food donations</Text>
      </View>
      <CarouselCards />
      <ButtonRow />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    padding: 20,
    backgroundColor: Colors.light.tint,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});