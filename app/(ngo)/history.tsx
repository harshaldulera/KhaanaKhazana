import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import HistoryScreen from '../(shared)/history';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@apollo/client';
import { GET_NGO_TRANSACTIONS } from '../../graphql/mutations';
import { Colors } from '@/constants/Colors';

export default function NGOHistoryScreen() {
  const [userId, setUserId] = useState<number | null>(null);
  
  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo) {
        const parsedInfo = JSON.parse(userInfo);
        setUserId(parsedInfo.id);
      }
    } catch (error) {
      console.error('Error loading user info:', error);
    }
  };

  const { loading, error, data } = useQuery(GET_NGO_TRANSACTIONS, {
    variables: { ngo_id: userId },
    skip: !userId,
    fetchPolicy: 'network-only',
  });

  if (!userId) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
        <Text style={styles.loadingText}>Loading user information...</Text>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
        <Text style={styles.loadingText}>Loading transaction history...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading history</Text>
        <Text style={styles.errorSubtext}>{error.message}</Text>
      </View>
    );
  }

  // Pass the transactions data to the HistoryScreen component
  return (
    <View style={{ flex: 1 }}>
      <HistoryScreen 
        role="ngo" 
        transactions={data?.donar_transaction || []}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F44336',
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
}); 