import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Switch } from 'react-native';
import { router } from 'expo-router';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

// Mock data for available pickup requests
const availablePickupRequests = [
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
  {
    id: '3',
    foodType: 'Vegetable Curry',
    quantity: '30 servings',
    pickupAddress: '789 Market St, City',
    dropoffAddress: 'Homeless Shelter, 123 Care St',
    pickupTime: '4:00 PM',
    expiryTime: '10:00 PM',
    status: 'pending',
    ngoName: 'Care Foundation',
  },
];

export default function VolunteerDashboard() {
  const [pickupRequests, setPickupRequests] = useState<typeof availablePickupRequests>([]);
  const [isLocationSharingEnabled, setIsLocationSharingEnabled] = useState(false);
  const [locationPermission, setLocationPermission] = useState(false);
  const [currentLocation, setCurrentLocation] = useState<{latitude: number, longitude: number} | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [showNewRequestAlert, setShowNewRequestAlert] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setLocationPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    let locationSubscription: any = null;
    let orderInterval: NodeJS.Timeout;
    let initialOrderTimeout: NodeJS.Timeout;

    if (isActive && locationPermission) {
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

      // Show first request after 5 seconds
      initialOrderTimeout = setTimeout(() => {
        setPickupRequests(prevRequests => {
          const newRequest = availablePickupRequests[0];
          setShowNewRequestAlert(true);
          return [newRequest, ...prevRequests];
        });

        // Show second request after another 5 seconds
        setTimeout(() => {
          setPickupRequests(prevRequests => {
            const newRequest = availablePickupRequests[1];
            setShowNewRequestAlert(true);
            return [newRequest, ...prevRequests];
          });
        }, 5000);
      }, 5000);

      // Simulate new orders appearing every 30 seconds
      orderInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * availablePickupRequests.length);
        const newRequest = availablePickupRequests[randomIndex];
        
        setPickupRequests(prevRequests => {
          // Check if request already exists
          if (prevRequests.some(request => request.id === newRequest.id)) {
            return prevRequests;
          }
          
          setShowNewRequestAlert(true);
          return [newRequest, ...prevRequests];
        });
      }, 30000);
    }

    return () => {
      if (locationSubscription) {
        locationSubscription.then((subscription: any) => subscription.remove());
      }
      if (orderInterval) {
        clearInterval(orderInterval);
      }
      if (initialOrderTimeout) {
        clearTimeout(initialOrderTimeout);
      }
    };
  }, [isActive, locationPermission]);

  useEffect(() => {
    if (showNewRequestAlert) {
      Alert.alert(
        'New Pickup Request Available!',
        'A new pickup request has been added to your dashboard.',
        [
          {
            text: 'OK',
            onPress: () => setShowNewRequestAlert(false)
          }
        ]
      );
    }
  }, [showNewRequestAlert]);

  const toggleVolunteerStatus = () => {
    if (!locationPermission) {
      Alert.alert(
        'Location Permission Required',
        'Please enable location permissions to become active.',
        [
          { text: 'Cancel', style: 'cancel' },
          { 
            text: 'Enable', 
            onPress: async () => {
              const { status } = await Location.requestForegroundPermissionsAsync();
              setLocationPermission(status === 'granted');
              if (status === 'granted') {
                setIsActive(true);
              }
            }
          }
        ]
      );
      return;
    }
    setIsActive(!isActive);
    if (!isActive) {
      // Clear any existing requests when becoming active
      setPickupRequests([]);
    } else {
      // Clear requests when becoming inactive
      setPickupRequests([]);
    }
  };

  const handleAcceptPickup = (requestId: string) => {
    // TODO: Implement GraphQL mutation to accept pickup request
    Alert.alert('Success', 'Pickup request accepted! Please proceed to pickup location.');
    setPickupRequests(pickupRequests.map(request => 
      request.id === requestId 
        ? { ...request, status: 'accepted' }
        : request
    ));
    // Enable location sharing when accepting pickup
    setIsLocationSharingEnabled(true);
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

  const renderPickupRequest = ({ item }: { item: typeof availablePickupRequests[0] }) => (
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
        <View>
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
          
          {currentLocation && (
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => router.push({
                pathname: '/(shared)/location-map',
                params: {
                  latitude: currentLocation?.latitude,
                  longitude: currentLocation?.longitude,
                  title: "Your Current Location",
                  description: "This is your current position",
                  destinationLatitude: 28.6139, // Example coordinates - replace with actual pickup location
                  destinationLongitude: 77.2090,
                  showRoute: "true",
                  updateInterval: "5000"
                }
              })}
            >
              <Ionicons name="location" size={24} color="#007AFF" />
              <Text style={styles.actionButtonText}>View Route</Text>
            </TouchableOpacity>
          )}
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
          
          {currentLocation && (
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => router.push({
                pathname: '/(shared)/location-map',
                params: {
                  latitude: currentLocation?.latitude,
                  longitude: currentLocation?.longitude,
                  title: "Your Current Location",
                  description: "This is your current position",
                  destinationLatitude: 28.6139, // Example coordinates - replace with actual dropoff location
                  destinationLongitude: 77.2090,
                  showRoute: "true",
                  updateInterval: "5000"
                }
              })}
            >
              <Ionicons name="location" size={24} color="#007AFF" />
              <Text style={styles.actionButtonText}>View Route</Text>
            </TouchableOpacity>
          )}
          
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
      <View style={styles.statusContainer}>
        <Text style={styles.statusText}>Volunteer Status: {isActive ? 'Active' : 'Inactive'}</Text>
        <Switch
          value={isActive}
          onValueChange={toggleVolunteerStatus}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={isActive ? '#2196F3' : '#f4f3f4'}
        />
      </View>
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
    padding: 16,
    backgroundColor: '#f5f5f5',
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  listContainer: {
    paddingBottom: 16,
  },
  requestCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  requestHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  },
  detailsContainer: {
    marginBottom: 16,
  },
  ngoName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  acceptButton: {
    backgroundColor: Colors.light.tint,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  qualityCheckContainer: {
    marginTop: 12,
  },
  qualityCheckTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  qualityCheckButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  qualityButton: {
    flex: 1,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  approveButton: {
    backgroundColor: '#4CAF50',
  },
  rejectButton: {
    backgroundColor: '#F44336',
  },
  qualityButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  locationSharingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  locationSharingText: {
    fontSize: 16,
    color: '#333',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  completeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  completedBadge: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  completedText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  statusBadge: {
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  rejectedBadge: {
    backgroundColor: '#F44336',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 6,
    marginTop: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
}); 