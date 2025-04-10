import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Switch } from 'react-native';
import { router } from 'expo-router';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

// Mock data - will be replaced with GraphQL query
const mockPickupRequests = [
  {
    id: '1',
    foodType: 'Cooked Rice',
    quantity: '50 plates',
    pickupAddress: '123 Main St, City',
    dropoffAddress: 'NGO Center, 789 Charity St',
    pickupTime: '2:00 PM',
    expiryTime: '8:00 PM',
    status: 'pending',
    ngoName: 'Food for All NGO',
  },
  {
    id: '2',
    foodType: 'Bread',
    quantity: '20 packets',
    pickupAddress: '456 Park Ave, City',
    dropoffAddress: 'Community Kitchen, 321 Hope St',
    pickupTime: '3:00 PM',
    expiryTime: '9:00 PM',
    status: 'pending',
    ngoName: 'Share Food NGO',
  },
];

export default function VolunteerDashboard() {
  const [pickupRequests, setPickupRequests] = useState(mockPickupRequests);
  const [isLocationSharingEnabled, setIsLocationSharingEnabled] = useState(false);
  const [locationPermission, setLocationPermission] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<{latitude: number, longitude: number} | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    let locationSubscription: any = null;

    if (isLocationSharingEnabled && locationPermission) {
      // Start location updates
      locationSubscription = Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (location) => {
          const { latitude, longitude } = location.coords;
          setCurrentLocation({ latitude, longitude });
          
          // TODO: Implement GraphQL mutation to update volunteer location
          console.log('Location updated:', { latitude, longitude });
        }
      );
    }

    return () => {
      if (locationSubscription) {
        locationSubscription.then((subscription: any) => subscription.remove());
      }
    };
  }, [isLocationSharingEnabled, locationPermission]);

  const handleAcceptPickup = (requestId: string) => {
    // TODO: Implement GraphQL mutation to accept pickup request
    Alert.alert('Success', 'Pickup request accepted! Please proceed to pickup location.');
    setPickupRequests(pickupRequests.map(request => 
      request.id === requestId 
        ? { ...request, status: 'accepted' }
        : request
    ));
  };

  const handleFoodQualityCheck = (requestId: string, isApproved: boolean) => {
    // TODO: Implement GraphQL mutation to update food quality status
    Alert.alert(
      'Food Quality Check',
      isApproved 
        ? 'Food quality approved! Proceed to dropoff.'
        : 'Food quality not approved. Please contact the donor.',
      [
        {
          text: 'OK',
          onPress: () => {
            setPickupRequests(pickupRequests.map(request => 
              request.id === requestId 
                ? { ...request, status: isApproved ? 'in_transit' : 'rejected' }
                : request
            ));
          }
        }
      ]
    );
  };

  const handleCompleteDelivery = (requestId: string) => {
    // TODO: Implement GraphQL mutation to complete delivery
    Alert.alert('Success', 'Delivery completed successfully!');
    setPickupRequests(pickupRequests.map(request => 
      request.id === requestId 
        ? { ...request, status: 'completed' }
        : request
    ));
  };

  const toggleLocationSharing = () => {
    if (!locationPermission) {
      Alert.alert(
        'Location Permission Required',
        'Please enable location permissions to share your location.',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Enable', 
            onPress: async () => {
              const { status } = await Location.requestForegroundPermissionsAsync();
              setLocationPermission(status === 'granted');
              if (status === 'granted') {
                setIsLocationSharingEnabled(true);
              }
            }
          }
        ]
      );
      return;
    }
    setIsLocationSharingEnabled(!isLocationSharingEnabled);
  };

  const renderPickupRequest = ({ item }: { item: typeof mockPickupRequests[0] }) => (
    <View style={styles.requestCard}>
      <View style={styles.requestHeader}>
        <Text style={styles.foodType}>{item.foodType}</Text>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.ngoName}>NGO: {item.ngoName}</Text>
        <Text style={styles.detailText}>📍 Pickup: {item.pickupAddress}</Text>
        <Text style={styles.detailText}>🏢 Dropoff: {item.dropoffAddress}</Text>
        <Text style={styles.detailText}>🕒 Pickup Time: {item.pickupTime}</Text>
        <Text style={styles.detailText}>⏰ Expires: {item.expiryTime}</Text>
      </View>

      {item.status === 'pending' && (
        <TouchableOpacity 
          style={styles.acceptButton}
          onPress={() => handleAcceptPickup(item.id)}
        >
          <Text style={styles.acceptButtonText}>Accept Pickup</Text>
        </TouchableOpacity>
      )}
      
      {item.status === 'accepted' && (
        <View style={styles.qualityCheckContainer}>
          <Text style={styles.qualityCheckTitle}>Food Quality Check</Text>
          <View style={styles.qualityCheckButtons}>
            <TouchableOpacity 
              style={[styles.qualityButton, styles.approveButton]}
              onPress={() => handleFoodQualityCheck(item.id, true)}
            >
              <Text style={styles.qualityButtonText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.qualityButton, styles.rejectButton]}
              onPress={() => handleFoodQualityCheck(item.id, false)}
            >
              <Text style={styles.qualityButtonText}>Reject</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      
      {item.status === 'in_transit' && (
        <View>
          <View style={styles.locationSharingContainer}>
            <Text style={styles.locationSharingText}>Share Location</Text>
            <Switch
              value={isLocationSharingEnabled}
              onValueChange={toggleLocationSharing}
              trackColor={{ false: '#767577', true: '#81b0ff' }}
              thumbColor={isLocationSharingEnabled ? '#2196F3' : '#f4f3f4'}
            />
          </View>
          
          <TouchableOpacity 
            style={styles.completeButton}
            onPress={() => handleCompleteDelivery(item.id)}
          >
            <Text style={styles.completeButtonText}>Complete Delivery</Text>
          </TouchableOpacity>
        </View>
      )}
      
      {item.status === 'completed' && (
        <View style={styles.completedBadge}>
          <Text style={styles.completedText}>Completed</Text>
        </View>
      )}
      
      {item.status === 'rejected' && (
        <View style={[styles.statusBadge, styles.rejectedBadge]}>
          <Text style={styles.statusText}>Rejected</Text>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Pickup Requests</Text>
      <FlatList
        data={pickupRequests}
        renderItem={renderPickupRequest}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      {currentLocation && (
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => router.push({
            pathname: '/(shared)/location-map',
            params: {
              latitude: currentLocation?.latitude,
              longitude: currentLocation?.longitude,
              title: "Your Current Location",
              description: "This is your current position"
            }
          })}
        >
          <Ionicons name="location" size={24} color="#007AFF" />
          <Text style={styles.actionButtonText}>View Location</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
    color: '#FF6B6B',
  },
  listContainer: {
    padding: 20,
  },
  requestCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  foodType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#666',
  },
  ngoName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
  },
  detailsContainer: {
    marginBottom: 15,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  acceptButton: {
    backgroundColor: '#FF6B6B',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  qualityCheckContainer: {
    marginTop: 10,
  },
  qualityCheckTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    color: '#333',
  },
  qualityCheckButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qualityButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  approveButton: {
    backgroundColor: '#4CAF50',
  },
  rejectButton: {
    backgroundColor: '#f44336',
  },
  qualityButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  statusBadge: {
    backgroundColor: '#2196F3',
    padding: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  rejectedBadge: {
    backgroundColor: '#f44336',
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  locationSharingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  locationSharingText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  completedBadge: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  completedText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  actionButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
}); 