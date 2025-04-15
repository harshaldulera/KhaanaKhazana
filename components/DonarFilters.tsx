import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

interface DonarFiltersProps {
  onSearch: (searchTerm: string) => void;
  onCuisineFilter: (cuisine: string | null) => void;
}

export function DonarFilters({ onSearch, onCuisineFilter }: DonarFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const cuisineTypes = [
    'Indian',
    'Chinese',
    'Italian',
    'Mexican',
    'Thai',
    'Japanese',
    'Mediterranean',
    'Other',
  ];

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    onSearch(text);
  };

  const handleCuisineSelect = (cuisine: string) => {
    const newCuisine = selectedCuisine === cuisine ? null : cuisine;
    setSelectedCuisine(newCuisine);
    onCuisineFilter(newCuisine);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search donars..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      <View style={styles.cuisineContainer}>
        {cuisineTypes.map((cuisine) => (
          <TouchableOpacity
            key={cuisine}
            style={[
              styles.cuisineButton,
              selectedCuisine === cuisine && styles.selectedCuisine,
            ]}
            onPress={() => handleCuisineSelect(cuisine)}
          >
            <Text
              style={[
                styles.cuisineText,
                selectedCuisine === cuisine && styles.selectedCuisineText,
              ]}
            >
              {cuisine}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  cuisineContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  cuisineButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  selectedCuisine: {
    backgroundColor: '#FF6B6B',
  },
  cuisineText: {
    fontSize: 14,
    color: '#666',
  },
  selectedCuisineText: {
    color: '#fff',
  },
}); 