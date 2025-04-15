import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TransactionStatus } from '../types/graphql';

interface TransactionFiltersProps {
  onSearch: (searchTerm: string) => void;
  onStatusFilter: (status: TransactionStatus | null) => void;
  onDateFilter: (startDate: string, endDate: string) => void;
}

export function TransactionFilters({ onSearch, onStatusFilter, onDateFilter }: TransactionFiltersProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<TransactionStatus | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    onSearch(text);
  };

  const handleStatusSelect = (status: TransactionStatus) => {
    const newStatus = selectedStatus === status ? null : status;
    setSelectedStatus(newStatus);
    onStatusFilter(newStatus);
  };

  const handleDateFilter = () => {
    if (startDate && endDate) {
      onDateFilter(startDate, endDate);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search transactions..."
        value={searchTerm}
        onChangeText={handleSearch}
      />

      <View style={styles.statusContainer}>
        {Object.values(TransactionStatus).map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.statusButton,
              selectedStatus === status && styles.selectedStatus,
            ]}
            onPress={() => handleStatusSelect(status)}
          >
            <Text
              style={[
                styles.statusText,
                selectedStatus === status && styles.selectedStatusText,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.dateContainer}>
        <TextInput
          style={styles.dateInput}
          placeholder="Start Date (YYYY-MM-DD)"
          value={startDate}
          onChangeText={setStartDate}
        />
        <TextInput
          style={styles.dateInput}
          placeholder="End Date (YYYY-MM-DD)"
          value={endDate}
          onChangeText={setEndDate}
        />
        <TouchableOpacity style={styles.filterButton} onPress={handleDateFilter}>
          <Text style={styles.filterButtonText}>Filter by Date</Text>
        </TouchableOpacity>
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
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  statusButton: {
    padding: 8,
    borderRadius: 4,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: '#f0f0f0',
  },
  selectedStatus: {
    backgroundColor: '#FF6B6B',
  },
  statusText: {
    fontSize: 14,
    color: '#666',
  },
  selectedStatusText: {
    color: '#fff',
  },
  dateContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  dateInput: {
    flex: 1,
    minWidth: 120,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 4,
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: '#FF6B6B',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    minWidth: 100,
  },
  filterButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 