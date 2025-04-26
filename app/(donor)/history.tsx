import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@apollo/client';
import { GET_DONOR_TRANSACTIONS } from '../../graphql/mutations';
import { Colors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface Transaction {
  id: string;
  food_details: string;
  pickup_location: string;
  status: string;
  created_at: string;
  pickup_time: string;
  serving_quantity: number;
  food_type: string;
  ngo?: {
    id: string;
    name: string;
    poc_phone_number: string;
  };
  volunteer?: {
    id: string;
    name: string;
    phone_number: string;
    vehicle_type: string;
    vehicle_number: string;
    latitude?: number;
    longitude?: number;
  };
}

export default function DonorHistoryScreen() {
  const [userId, setUserId] = useState<number | null>(null);
  const router = useRouter();

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

  const { loading, error, data, refetch } = useQuery(GET_DONOR_TRANSACTIONS, {
    variables: { donor_id: userId },
    skip: !userId,
    fetchPolicy: 'network-only',
  });

  const handleTrackDonation = (donationId: string) => {
    router.push(`/(donor)/tracking?donationId=${donationId}`);
  };

  const isTrackable = (item: Transaction) => {
    // Check if donation can be tracked (has NGO assigned and volunteer with location)
    if (item.status === 'CANCELLED') return false;
    return item.status === 'ACCEPTED' || item.status === 'IN_TRANSIT';
  };

  const renderTransactionItem = ({ item }: { item: Transaction }) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.foodType}>{item.food_details}</Text>
          <Text style={styles.quantity}>{item.serving_quantity} servings ({item.food_type})</Text>
        </View>
        
        <View style={styles.cardBody}>
          <Text style={styles.detailText}>NGO: {item.ngo?.name || 'Not assigned yet'}</Text>
          {item.ngo?.poc_phone_number && (
            <Text style={styles.detailText}>NGO Phone: {item.ngo.poc_phone_number}</Text>
          )}
          {item.volunteer && (
            <>
              <Text style={styles.detailText}>Volunteer: {item.volunteer.name}</Text>
              <Text style={styles.detailText}>Phone: {item.volunteer.phone_number}</Text>
              <Text style={styles.detailText}>Vehicle: {item.volunteer.vehicle_type} ({item.volunteer.vehicle_number})</Text>
            </>
          )}
          <Text style={styles.detailText}>📍 Pickup: {item.pickup_location}</Text>
          <Text style={styles.detailText}>🕒 Pickup Time: {new Date(item.pickup_time).toLocaleString()}</Text>
          
          <View style={[
            styles.statusBadge,
            {
              backgroundColor: 
                item.status === 'COMPLETED' ? '#4CAF50' :
                item.status === 'CANCELLED' ? '#F44336' :
                item.status === 'ACCEPTED' ? '#2196F3' :
                '#FF9800'
            }
          ]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>

          {isTrackable(item) && (
            <TouchableOpacity 
              style={styles.trackButton}
              onPress={() => handleTrackDonation(item.id)}
            >
              <FontAwesome name="map-marker" size={16} color="#fff" />
              <Text style={styles.trackButtonText}>Track Donation</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  if (!userId || loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading donations</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donation History</Text>
      
      <FlatList
        data={data?.donar_transaction || []}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No donations found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.light.tint,
  },
  listContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 12,
  },
  foodType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  cardBody: {
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
  },
  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginTop: 8,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  trackButton: {
    backgroundColor: Colors.light.tint,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  trackButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#f44336',
    marginBottom: 12,
  },
  retryButton: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
});