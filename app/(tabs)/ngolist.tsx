import VolunteerCarousel from "@/components/volunteercarousel";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

const NgoList = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput}
          placeholder="Search NGOs..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <VolunteerCarousel />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
});

export default NgoList;