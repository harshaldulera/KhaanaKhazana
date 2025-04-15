import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Stack } from 'expo-router';
import { Colors } from "../../constants/Colors";
import CarouselCards from "@/components/carouselcards";
import ButtonRow from "@/components/buttonrow";
import EventHighlights from "@/components/eventhighlights";

export default function DonorDashboard() {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Donor Dashboard',
          headerShown: false,
        }}
      />
      {/* <ScrollView> */}
        <CarouselCards />
        <ButtonRow />
        <EventHighlights />
      {/* </ScrollView> */}
    </ScrollView>
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