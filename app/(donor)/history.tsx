import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert
} from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useQuery } from '@apollo/client';
import { GET_DONOR_TRANSACTIONS } from '../../graphql/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/constants/Colors';

interface Transaction {
  id: string;
  food_details: string;
  pickup_location: string;
  status: string;
  created_at: string;
  pickup_time: string;
  expiry_date: string;
  serving_quantity: number;
  food_type: string;
  ngo?: {
    id: string;
    name: string;
    phone_number: string;
  };
  volunteer?: {
    id: string;
    name: string;
    phone_number: string;
    current_latitude?: number;
    current_longitude?: number;
  };
}

export default function HistoryScreen() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo) {
        const parsedInfo = JSON.parse(userInfo);
        setUserId(parsedInfo.id.toString());
      } else {
        Alert.alert('Error', 'Please log in to view history');
        router.replace('/(auth)/login');
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

  useEffect(() => {
    // Manually refresh when the screen comes into focus
    if (userId) {
      refetch();
    }
  }, [userId, refetch]);

  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'PENDING':
        return '#F5A623';
      case 'ACCEPTED':
        return '#4CAF50';
      case 'IN_TRANSIT':
        return '#2196F3';
      case 'DELIVERED':
        return '#8BC34A';
      case 'COMPLETED':
        return '#4CAF50';
      case 'CANCELLED':
        return '#F44336';
      default:
        return '#757575';
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  // Check if a donation is trackable (has NGO or volunteer assigned and isn't completed or cancelled)
  const isTrackable = (item: Transaction): boolean => {
    if (item.status === 'CANCELLED') return false;
    return !!(item.ngo || (item.volunteer && item.volunteer.current_latitude));
  };

  const renderItem = ({ item }: { item: Transaction }) => (
    <TouchableOpacity 
      style={styles.donationItem}
      onPress={() => {
        if (isTrackable(item)) {
          router.push({
            pathname: "/(donor)/tracking",
            params: { donationId: item.id }
          });
        }
      }}
    >
      <View style={styles.donationHeader}>
        <Text style={styles.donationId}>#{item.id}</Text>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(item.status) }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.foodDetails}>{item.food_details}</Text>
      
      <View style={styles.donationInfoRow}>
        <FontAwesome name="cutlery" size={16} color="#666" style={styles.infoIcon} />
        <Text style={styles.infoText}>
          {item.serving_quantity} servings ({item.food_type})
        </Text>
      </View>

      <View style={styles.donationInfoRow}>
        <FontAwesome name="map-marker" size={16} color="#666" style={styles.infoIcon} />
        <Text style={styles.infoText}>{item.pickup_location}</Text>
      </View>

      <View style={styles.donationInfoRow}>
        <FontAwesome name="clock-o" size={16} color="#666" style={styles.infoIcon} />
        <Text style={styles.infoText}>Pickup: {formatDate(item.pickup_time)}</Text>
      </View>

      {item.ngo && (
        <View style={[styles.donationInfoRow, styles.assignedInfo]}>
          <FontAwesome name="building" size={16} color="#4CAF50" style={styles.infoIcon} />
          <Text style={[styles.infoText, styles.assignedText]}>
            Assigned to: {item.ngo.name}
          </Text>
        </View>
      )}

      {isTrackable(item) && (
        <TouchableOpacity 
          style={styles.trackButton}
          onPress={() => {
            router.push({
              pathname: "/(donor)/tracking",
              params: { donationId: item.id }
            });
          }}
        >
          <FontAwesome name="map" size={16} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.trackButtonText}>Track Donation</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  if (!userId) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading donations</Text>
        <Text style={styles.errorSubtext}>{error.message}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const transactions = data?.donar_transaction || [];

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Donation History',
          headerShown: true,
        }}
      />

      {transactions.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="inbox" size={64} color="#ccc" />
          <Text style={styles.emptyTitle}>No Donations Yet</Text>
          <Text style={styles.emptySubtitle}>
            When you donate food, your donations will appear here
          </Text>
          <TouchableOpacity
            style={styles.donateButton}
            onPress={() => router.push("/(donor)/donate")}
          >
            <Text style={styles.donateButtonText}>Donate Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={transactions}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          refreshing={loading}
          onRefresh={refetch}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
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
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 16,
  },
  donationItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  donationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  donationId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  foodDetails: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 12,
    color: '#333',
  },
  donationInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoIcon: {
    marginRight: 8,
    width: 20,
    textAlign: 'center',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  assignedInfo: {
    backgroundColor: '#F1F8E9',
    padding: 8,
    borderRadius: 8,
  },
  assignedText: {
    color: '#2E7D32',
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
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  donateButton: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  donateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});