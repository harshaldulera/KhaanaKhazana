import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Switch, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import * as Location from 'expo-location';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useQuery, useMutation } from '@apollo/client';
import { GET_AVAILABLE_PICKUPS, ASSIGN_VOLUNTEER, UPDATE_VOLUNTEER_STATUS } from '../../graphql/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Linking } from 'react-native';

interface Pickup {
  id: string;
  food_details: string;
  pickup_location: string;
  status: string;
  created_at: string;
  pickup_time: string;
  expiry_date: string;
  serving_quantity: number;
  food_type: string;
  donar: {
    id: string;
    name: string;
    phone_number: string;
    address: string;
  };
  ngo: {
    id: string;
    name: string;
    phone_number: string;
    address: string;
  };
}

export default function VolunteerDashboard() {
  const [userId, setUserId] = useState<string | null>(null);
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [locationInterval, setLocationInterval] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    loadUserInfo();
    requestLocationPermission();
    return () => {
      if (locationInterval) {
        clearInterval(locationInterval);
      }
    };
  }, []);

  const loadUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo) {
        const parsedInfo = JSON.parse(userInfo);
        setUserId(parsedInfo.id.toString());
        setIsActive(parsedInfo.is_available || false);
      }
    } catch (error) {
      console.error('Error loading user info:', error);
    }
  };

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to grant location permission to use this feature');
        return;
      }

      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  const { loading, error, data, refetch } = useQuery(GET_AVAILABLE_PICKUPS, {
    fetchPolicy: 'network-only',
    pollInterval: 30000,
  });

  const [assignVolunteer, { loading: assigning }] = useMutation(ASSIGN_VOLUNTEER, {
    onCompleted: (data) => {
      Alert.alert(
        'Success!', 
        'You have been assigned to this pickup.',
        [
          { 
            text: 'OK',
            onPress: () => refetch()
          }
        ]
      );
    },
    onError: (error) => {
      Alert.alert('Error', error.message || 'There was an error accepting the pickup');
    }
  });

  const [updateVolunteerStatus] = useMutation(UPDATE_VOLUNTEER_STATUS, {
    onError: (error) => {
      console.error('Error updating volunteer status:', error);
      Alert.alert('Error', 'Failed to update your status. Please try again.');
    }
  });

  const startLocationUpdates = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'You need to grant location permission to use this feature');
        return;
      }

      // Get initial location
      const currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);

      // Update location every 30 seconds
      const interval = setInterval(async () => {
        try {
          const newLocation = await Location.getCurrentPositionAsync({});
          setLocation(newLocation.coords);
          
          if (userId && isActive && location) {
            const coords = location as Location.LocationObjectCoords;
            await updateVolunteerStatus({
              variables: {
                id: userId,
                is_available: isActive,
                latitude: String(coords.latitude),
                longitude: String(coords.longitude)
              }
            });
          }
        } catch (error) {
          console.error('Error updating location:', error);
        }
      }, 30000);

      setLocationInterval(interval);
    } catch (error) {
      console.error('Error starting location updates:', error);
    }
  };

  const acceptPickup = (transactionId: string) => {
    if (!userId) {
      Alert.alert('Error', 'You must be logged in to accept pickups');
      return;
    }

    Alert.alert(
      'Accept Pickup', 
      'Are you sure you want to accept this pickup?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Accept', 
          onPress: () => {
            assignVolunteer({
              variables: {
                transaction_id: transactionId,
                volunteer_id: userId
              }
            });
          }
        }
      ]
    );
  };

  const openMaps = (address: string) => {
    const url = `https://maps.google.com/?q=${encodeURIComponent(address)}`;
    Linking.openURL(url);
  };

  const calculateDistance = (pickup: Pickup) => {
    if (!location || !pickup) return null;
    
    const lat1 = location.latitude;
    const lon1 = location.longitude;
    const lat2 = 19.0760; // Mock coordinates, would come from geocoding the address
    const lon2 = 72.8777;
    
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    const distance = R * c;
    
    return `${distance.toFixed(1)} km away`;
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI/180);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  const toggleVolunteerStatus = async () => {
    if (!location) {
      Alert.alert(
        'Location Permission Required',
        'Please enable location permissions to become active.',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Enable', 
            onPress: async () => {
              await startLocationUpdates();
              if (location) {
                const newStatus = !isActive;
                setIsActive(newStatus);
                if (userId) {
                  const coords = location as Location.LocationObjectCoords;
                  await updateVolunteerStatus({
                    variables: {
                      id: userId,
                      is_available: newStatus,
                      latitude: coords.latitude,
                      longitude: coords.longitude
                    }
                  });
                }
              }
            }
          }
        ]
      );
      return;
    }

    const newStatus = !isActive;
    setIsActive(newStatus);
    
    if (userId) {
      try {
        const coords = location as Location.LocationObjectCoords;
        await updateVolunteerStatus({
          variables: {
            id: userId,
            is_available: newStatus,
            latitude: coords.latitude,
            longitude: coords.longitude
          }
        });

        if (newStatus) {
          startLocationUpdates();
        } else if (locationInterval) {
          clearInterval(locationInterval);
          setLocationInterval(null);
        }
      } catch (error) {
        console.error('Error updating volunteer status:', error);
        Alert.alert('Error', 'Failed to update your status. Please try again.');
        setIsActive(!newStatus); // Revert the toggle if update fails
      }
    }
  };

  const renderItem = ({ item }: { item: Pickup }) => (
    <TouchableOpacity 
      style={styles.pickupItem}
      onPress={() => router.push(`/(volunteer)/pickup-details?id=${item.id}`)}
    >
      <View style={styles.pickupHeader}>
        <Text style={styles.pickupId}>#{item.id}</Text>
        <View style={styles.statusBadge}>
          <Text style={styles.statusBadgeText}>{item.status}</Text>
        </View>
      </View>

      <Text style={styles.foodDetails}>{item.food_details}</Text>
      
      <View style={styles.pickupInfoRow}>
        <FontAwesome name="cutlery" size={16} color="#666" style={styles.infoIcon} />
        <Text style={styles.infoText}>
          {item.serving_quantity} servings ({item.food_type})
        </Text>
      </View>

      <View style={styles.locationContainer}>
        <View style={styles.locationHeader}>
          <Text style={styles.locationTitle}>Pickup Location</Text>
          {location && (
            <Text style={styles.distanceBadge}>{calculateDistance(item)}</Text>
          )}
        </View>
        
        <View style={styles.pickupInfoRow}>
          <FontAwesome name="map-marker" size={16} color="#666" style={styles.infoIcon} />
          <Text style={styles.infoText}>{item.donar.address}</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.directionsButton}
          onPress={() => openMaps(item.donar.address)}
        >
          <FontAwesome name="location-arrow" size={16} color={Colors.light.tint} style={{ marginRight: 8 }} />
          <Text style={styles.directionsButtonText}>Get Directions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.locationContainer}>
        <Text style={styles.locationTitle}>Delivery Location</Text>
        <View style={styles.pickupInfoRow}>
          <FontAwesome name="map-marker" size={16} color="#666" style={styles.infoIcon} />
          <Text style={styles.infoText}>{item.ngo.address}</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.directionsButton}
          onPress={() => openMaps(item.ngo.address)}
        >
          <FontAwesome name="location-arrow" size={16} color={Colors.light.tint} style={{ marginRight: 8 }} />
          <Text style={styles.directionsButtonText}>Get Directions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pickupInfoRow}>
        <FontAwesome name="clock-o" size={16} color="#666" style={styles.infoIcon} />
        <Text style={styles.infoText}>Pickup by: {formatDate(item.pickup_time)}</Text>
      </View>

      <View style={styles.contactsContainer}>
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Donor</Text>
          <Text style={styles.contactName}>{item.donar.name}</Text>
          <TouchableOpacity 
            style={styles.callButton}
            onPress={() => Linking.openURL(`tel:${item.donar.phone_number}`)}
          >
            <FontAwesome name="phone" size={14} color="#fff" style={{ marginRight: 4 }} />
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>NGO</Text>
          <Text style={styles.contactName}>{item.ngo.name}</Text>
          <TouchableOpacity 
            style={styles.callButton}
            onPress={() => Linking.openURL(`tel:${item.ngo.phone_number}`)}
          >
            <FontAwesome name="phone" size={14} color="#fff" style={{ marginRight: 4 }} />
            <Text style={styles.callButtonText}>Call</Text>
          </TouchableOpacity>
        </View>
      </View>

      {item.status === 'PENDING' && (
        <TouchableOpacity 
          style={styles.acceptButton}
          onPress={() => acceptPickup(item.id)}
          disabled={assigning}
        >
          <FontAwesome name="check" size={16} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.acceptButtonText}>
            {assigning ? 'Accepting...' : 'Accept Pickup'}
          </Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );

  const pickups = data?.donar_transaction || [];

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Volunteer Status: {isActive ? 'Active' : 'Inactive'}</Text>
        <Switch
          value={isActive}
          onValueChange={toggleVolunteerStatus}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isActive ? '#2196F3' : '#f4f3f4'}
        />
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.light.tint} />
        </View>
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error loading pickups</Text>
          <Text style={styles.errorSubtext}>{error.message}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
            <Text style={styles.retryButtonText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : pickups.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="inbox" size={64} color="#ccc" />
          <Text style={styles.emptyTitle}>No Available Pickups</Text>
          <Text style={styles.emptySubtitle}>
            When new pickups are available, they will appear here
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
          data={pickups}
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
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
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
  pickupItem: {
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
  pickupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  pickupId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: '#4CAF50',
  },
  statusBadgeText: {
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
  pickupInfoRow: {
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
  locationContainer: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  distanceBadge: {
    fontSize: 12,
    color: Colors.light.tint,
    fontWeight: '500',
  },
  directionsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
  },
  directionsButtonText: {
    color: Colors.light.tint,
    fontWeight: '500',
  },
  contactsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  contactCard: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  contactTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
    textAlign: 'center',
  },
  callButton: {
    backgroundColor: Colors.light.tint,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
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