import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

const ngos = [
  { id: '1', name: 'Food for All' },
  { id: '2', name: 'Feed the Hungry' },
  { id: '3', name: 'Meals on Wheels' },
  { id: '4', name: 'Hope for the Needy' },
  { id: '5', name: 'Share a Meal' },
  { id: '6', name: 'Nourish India' },
  { id: '7', name: 'Compassionate Hearts' },
  { id: '8', name: 'The Giving Plate' },
  { id: '9', name: 'Hunger Relief Network' },
  { id: '10', name: 'Kindness Kitchen' },
];

const NgoList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ngos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.ngoItem}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  ngoItem: {
    padding: 15,
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    borderRadius: 5,
  },
});

export default NgoList;