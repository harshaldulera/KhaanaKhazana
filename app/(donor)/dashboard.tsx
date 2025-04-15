import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { Button, ScrollView } from "react-native";
import { Colors } from "../../constants/Colors";
import CarouselCards from "@/components/carouselcards";
import ButtonRow from "@/components/buttonrow";
import EventHighlights from "@/components/eventhighlights";

export default function DonorDashboard() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Donor Dashboard',
          headerShown: false,
        }}
      />
      {/* <Text style={styles.title}>Welcome to Donor Dashboard</Text> */}
      <ScrollView>
        <CarouselCards />
        <ButtonRow />
        <EventHighlights />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});