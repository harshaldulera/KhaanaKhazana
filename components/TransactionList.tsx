import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useQuery, useMutation } from '@apollo/client';
import { GET_DONAR_TRANSACTIONS } from '../graphql/queries';
import { UPDATE_TRANSACTION_STATUS } from '../graphql/mutations';
import { Transaction, TransactionStatus } from '../types/graphql';
import { TransactionFilters } from './TransactionFilters';

export function TransactionList() {
  const { loading, error, data, refetch } = useQuery(GET_DONAR_TRANSACTIONS);
  const [updateStatus] = useMutation(UPDATE_TRANSACTION_STATUS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<TransactionStatus | null>(null);
  const [dateRange, setDateRange] = useState<{ start: string; end: string }>({ start: '', end: '' });

  const filteredTransactions = useMemo(() => {
    if (!data?.donarTransection) return [];
    
    return data.donarTransection.filter((transaction: Transaction) => {
      const matchesSearch = searchTerm === '' || 
        transaction.donar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.volunteer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        transaction.pickupLocation.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus = !selectedStatus || transaction.status === selectedStatus;

      const matchesDate = !dateRange.start || !dateRange.end || (
        new Date(transaction.expiryDate) >= new Date(dateRange.start) &&
        new Date(transaction.expiryDate) <= new Date(dateRange.end)
      );

      return matchesSearch && matchesStatus && matchesDate;
    });
  }, [data?.donarTransection, searchTerm, selectedStatus, dateRange]);

  const handleStatusUpdate = async (transactionId: number, newStatus: TransactionStatus) => {
    try {
      await updateStatus({
        variables: {
          id: transactionId,
          status: newStatus,
        },
      });
      refetch();
      Alert.alert('Success', 'Status updated successfully!');
    } catch (err) {
      Alert.alert('Error', 'Failed to update status');
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case TransactionStatus.PENDING:
        return '#FFA500';
      case TransactionStatus.ACCEPTED:
        return '#4169E1';
      case TransactionStatus.PICKED_UP:
        return '#32CD32';
      case TransactionStatus.DELIVERED:
        return '#008000';
      case TransactionStatus.CANCELLED:
        return '#FF0000';
      default:
        return '#000000';
    }
  };

  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.item}>
      <View style={styles.header}>
        <Text style={styles.id}>Transaction #{item.id}</Text>
        <View style={[styles.status, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Food Details</Text>
        <Text style={styles.detail}>Quantity: {item.servingQuantity} servings</Text>
        <Text style={styles.detail}>Expiry: {new Date(item.expiryDate).toLocaleDateString()}</Text>
        <Text style={styles.detail}>Location: {item.pickupLocation}</Text>
        <Text style={styles.detail}>Cooling Required: {item.iscoolingRequired ? 'Yes' : 'No'}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Parties Involved</Text>
        <Text style={styles.detail}>Donar: {item.donar.name}</Text>
        <Text style={styles.detail}>NGO: {item.ngo.name}</Text>
        <Text style={styles.detail}>Volunteer: {item.volunteer.name}</Text>
      </View>

      <View style={styles.actions}>
        {item.status === TransactionStatus.PENDING && (
          <TouchableOpacity
            style={[styles.button, styles.acceptButton]}
            onPress={() => handleStatusUpdate(item.id, TransactionStatus.ACCEPTED)}
          >
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        )}
        {item.status === TransactionStatus.ACCEPTED && (
          <TouchableOpacity
            style={[styles.button, styles.pickupButton]}
            onPress={() => handleStatusUpdate(item.id, TransactionStatus.PICKED_UP)}
          >
            <Text style={styles.buttonText}>Mark as Picked Up</Text>
          </TouchableOpacity>
        )}
        {item.status === TransactionStatus.PICKED_UP && (
          <TouchableOpacity
            style={[styles.button, styles.deliverButton]}
            onPress={() => handleStatusUpdate(item.id, TransactionStatus.DELIVERED)}
          >
            <Text style={styles.buttonText}>Mark as Delivered</Text>
          </TouchableOpacity>
        )}
        {item.status !== TransactionStatus.DELIVERED && item.status !== TransactionStatus.CANCELLED && (
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => handleStatusUpdate(item.id, TransactionStatus.CANCELLED)}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  if (loading) return <Text style={styles.loading}>Loading...</Text>;
  if (error) return <Text style={styles.error}>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <TransactionFilters
        onSearch={setSearchTerm}
        onStatusFilter={setSelectedStatus}
        onDateFilter={(start, end) => setDateRange({ start, end })}
      />
      <FlatList
        data={filteredTransactions}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        style={styles.list}
        refreshing={loading}
        onRefresh={refetch}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  id: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detail: {
    fontSize: 14,
    marginBottom: 4,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  button: {
    padding: 8,
    borderRadius: 4,
    minWidth: 100,
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#4169E1',
  },
  pickupButton: {
    backgroundColor: '#32CD32',
  },
  deliverButton: {
    backgroundColor: '#008000',
  },
  cancelButton: {
    backgroundColor: '#FF0000',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 