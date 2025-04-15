import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Linking, Platform, Alert } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

interface MapViewProps {
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
  destinationLatitude?: number;
  destinationLongitude?: number;
  showRoute?: boolean;
  updateInterval?: number;
}

export default function LocationMapView({ 
  latitude, 
  longitude, 
  title, 
  description,
  destinationLatitude,
  destinationLongitude,
  showRoute = false,
  updateInterval = 5000
}: MapViewProps) {
  const [userLocation, setUserLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [routeCoordinates, setRouteCoordinates] = useState<{latitude: number, longitude: number}[]>([]);

  // Hardcoded destination coordinates
  const fixedDestination = {
    latitude: 19.1182343,
    longitude: 72.9106502
  };

  const openGoogleMapsNavigation = async () => {
    if (!userLocation) {
      Alert.alert('Error', 'Unable to get your current location');
      return;
    }

    const origin = `${userLocation.coords.latitude},${userLocation.coords.longitude}`;
    const destination = `${fixedDestination.latitude},${fixedDestination.longitude}`;
    
    const url = Platform.select({
      ios: `comgooglemaps://?saddr=${origin}&daddr=${destination}&directionsmode=driving`,
      android: `google.navigation:q=${fixedDestination.latitude},${fixedDestination.longitude}`,
    });

    try {
      const supported = await Linking.canOpenURL(url!);
      if (supported) {
        await Linking.openURL(url!);
      } else {
        // Fallback to web version if app is not installed
        const webUrl = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`;
        await Linking.openURL(webUrl);
      }
    } catch (error) {
      Alert.alert('Error', 'Could not open Google Maps');
    }
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);

      if (showRoute) {
        // Start watching location updates
        const subscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: updateInterval,
            distanceInterval: 10,
          },
          (location) => {
            setUserLocation(location);
            // Update route coordinates
            setRouteCoordinates(prev => {
              const newCoordinates = [...prev, {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              }];
              // Keep only last 100 points to prevent memory issues
              return newCoordinates.slice(-100);
            });
          }
        );

        return () => {
          subscription.remove();
        };
      }
    })();
  }, [showRoute, updateInterval]);

  const initialRegion = {
    latitude: (fixedDestination.latitude + (userLocation?.coords.latitude || latitude)) / 2,
    longitude: (fixedDestination.longitude + (userLocation?.coords.longitude || longitude)) / 2,
    latitudeDelta: 0.5,
    longitudeDelta: 0.5,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={initialRegion}
      >
        {/* Destination Marker */}
        <Marker
          coordinate={{
            latitude: fixedDestination.latitude,
            longitude: fixedDestination.longitude,
          }}
          title="Destination"
          description="Mumbai, India"
        >
          <View style={styles.markerContainer}>
            <View style={styles.marker}>
              <Ionicons name="location" size={24} color="#FF0000" />
            </View>
          </View>
        </Marker>

        {/* User Location Marker */}
        {userLocation && (
          <Marker
            coordinate={{
              latitude: userLocation.coords.latitude,
              longitude: userLocation.coords.longitude,
            }}
            title="Your Location"
          >
            <View style={styles.markerContainer}>
              <View style={[styles.marker, styles.userMarker]}>
                <Ionicons name="person" size={24} color="#007AFF" />
              </View>
            </View>
          </Marker>
        )}

        {/* Route Line */}
        {showRoute && routeCoordinates.length > 0 && (
          <Polyline
            coordinates={[
              ...routeCoordinates,
              {
                latitude: fixedDestination.latitude,
                longitude: fixedDestination.longitude
              }
            ]}
            strokeWidth={4}
            strokeColor="#007AFF"
          />
        )}
      </MapView>

      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      <View style={styles.infoCard}>
        <Text style={styles.title}>Route Information</Text>
        {userLocation && (
          <Text style={styles.coordinates}>
            Your Location:{'\n'}
            Latitude: {userLocation.coords.latitude.toFixed(6)}{'\n'}
            Longitude: {userLocation.coords.longitude.toFixed(6)}
          </Text>
        )}
        <Text style={styles.coordinates}>
          Destination:{'\n'}
          Latitude: {fixedDestination.latitude.toFixed(6)}{'\n'}
          Longitude: {fixedDestination.longitude.toFixed(6)}
        </Text>
        
        <TouchableOpacity 
          style={styles.navigateButton}
          onPress={openGoogleMapsNavigation}
        >
          <Ionicons name="navigate" size={24} color="#fff" />
          <Text style={styles.navigateButtonText}>Open in Google Maps</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  markerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marker: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  userMarker: {
    backgroundColor: '#E3F2FD',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoCard: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  coordinates: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  navigateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  navigateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
}); 