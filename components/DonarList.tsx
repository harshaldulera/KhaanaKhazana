import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_DONARS } from '../graphql/queries';
import { Donar } from '../types/graphql';
import { DonarFilters } from './DonarFilters';

export function DonarList() {
  const { loading, error, data } = useQuery(GET_DONARS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState<string | null>(null);

  const filteredDonars = useMemo(() => {
    if (!data?.donar) return [];
    
    return data.donar.filter((donar: Donar) => {
      const matchesSearch = searchTerm === '' || 
        donar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donar.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        donar.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCuisine = !selectedCuisine || 
        donar.CusineType.toLowerCase() === selectedCuisine.toLowerCase();

      return matchesSearch && matchesCuisine;
    });
  }, [data?.donar, searchTerm, selectedCuisine]);

  const renderItem = ({ item }: { item: Donar }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.detail}>Email: {item.email}</Text>
      <Text style={styles.detail}>Phone: {item.phoneNumber}</Text>
      <Text style={styles.detail}>Address: {item.address}</Text>
      <Text style={styles.detail}>Cuisine Type: {item.CusineType}</Text>
    </View>
  );

  if (loading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <DonarFilters
        onSearch={setSearchTerm}
        onCuisineFilter={setSelectedCuisine}
      />
      <FlatList
        data={filteredDonars}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    padding: 16,
  },
  loading: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  error: {
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
    fontSize: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
}); 