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
import { Stack } from 'expo-router';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AVAILABLE_DONATIONS, UPDATE_DONATION_STATUS } from '../../graphql/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/constants/Colors';

export default function AvailableDonationsScreen() {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo) {
        const parsedInfo = JSON.parse(userInfo);
        setUserId(parsedInfo.id);
      } else {
        Alert.alert('Error', 'Please log in to view available donations');
        router.replace('/(auth)/login');
      }
    } catch (error) {
      console.error('Error loading user info:', error);
    }
  };

  const { loading, error, data, refetch } = useQuery(GET_AVAILABLE_DONATIONS, {
    fetchPolicy: 'network-only',
    pollInterval: 30000, // Poll every 30 seconds for updates
  });

  const [updateDonationStatus, { loading: updating }] = useMutation(UPDATE_DONATION_STATUS, {
    onCompleted: (data) => {
      Alert.alert(
        'Success!', 
        'You have accepted the donation. A volunteer will be assigned for pickup.',
        [
          { 
            text: 'Track Donation', 
            onPress: () => router.push({
              pathname: '/(ngo)/tracking',
              params: { donationId: data.update_donar_transaction_by_pk.id }
            })
          }
        ]
      );
      refetch();
    },
    onError: (error) => {
      Alert.alert('Error', error.message || 'There was an error accepting the donation');
    }
  });

  const acceptDonation = (donationId) => {
    if (!userId) {
      Alert.alert('Error', 'You must be logged in to accept donations');
      return;
    }

    Alert.alert(
      'Accept Donation', 
      'Are you sure you want to accept this donation?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Accept', 
          onPress: () => {
            updateDonationStatus({
              variables: {
                id: donationId,
                status: 'ACCEPTED',
                ngo_id: userId
              }
            });
          }
        }
      ]
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  const getTimeRemaining = (expiryTime) => {
    const now = new Date();
    const expiry = new Date(expiryTime);
    const diff = expiry - now;
    
    if (diff <= 0) {
      return "Expired";
    }
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m remaining`;
  };

  const renderItem = ({ item }) => (
    <View style={styles.donationItem}>
      <View style={styles.donationHeader}>
        <Text style={styles.donationId}>#{item.id}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusText}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.foodDetails}>{item.food_details}</Text>
      
      <View style={styles.donationInfoRow}>
        <FontAwesome name="cutlery" size={16} color="#666" style={styles.infoIcon} />
        <Text style={styles.infoText}>
          {item.quantity} servings ({item.food_type})
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

      <View style={styles.donationInfoRow}>
        <FontAwesome name="exclamation-circle" size={16} color="#F44336" style={styles.infoIcon} />
        <Text style={[styles.infoText, { color: '#F44336' }]}>
          {getTimeRemaining(item.expiry_time)}
        </Text>
      </View>

      <View style={styles.donationInfoRow}>
        <FontAwesome name="user" size={16} color="#666" style={styles.infoIcon} />
        <Text style={styles.infoText}>
          Donor: {item.donar.name}
        </Text>
      </View>

      <TouchableOpacity 
        style={styles.acceptButton}
        onPress={() => acceptDonation(item.id)}
        disabled={updating}
      >
        <FontAwesome name="check" size={16} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.acceptButtonText}>
          {updating ? 'Accepting...' : 'Accept Donation'}
        </Text>
      </TouchableOpacity>
    </View>
  );

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

  const donations = data?.donar_transaction || [];

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Available Donations',
          headerShown: true,
        }}
      />

      {donations.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="inbox" size={64} color="#ccc" />
          <Text style={styles.emptyTitle}>No Available Donations</Text>
          <Text style={styles.emptySubtitle}>
            When new donations are available, they will appear here
          </Text>
          <TouchableOpacity
            style={styles.refreshButton}
            onPress={() => refetch()}
          >
            <Text style={styles.refreshButtonText}>Refresh</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={donations}
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
    backgroundColor: '#F5A623',
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
  acceptButton: {
    backgroundColor: Colors.light.tint,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  acceptButtonText: {
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
  refreshButton: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  refreshButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
}); 