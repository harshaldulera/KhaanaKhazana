import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
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

// Function to calculate destination point given start point, distance and bearing
function calculateDestinationPoint(
  lat1: number,
  lon1: number,
  distance: number, // in kilometers
  bearing: number  // in degrees
) {
  const R = 6371; // Earth's radius in kilometers
  const lat1Rad = lat1 * Math.PI / 180;
  const lon1Rad = lon1 * Math.PI / 180;
  const bearingRad = bearing * Math.PI / 180;

  const lat2Rad = Math.asin(
    Math.sin(lat1Rad) * Math.cos(distance / R) +
    Math.cos(lat1Rad) * Math.sin(distance / R) * Math.cos(bearingRad)
  );

  const lon2Rad = lon1Rad + Math.atan2(
    Math.sin(bearingRad) * Math.sin(distance / R) * Math.cos(lat1Rad),
    Math.cos(distance / R) - Math.sin(lat1Rad) * Math.sin(lat2Rad)
  );

  return {
    latitude: lat2Rad * 180 / Math.PI,
    longitude: lon2Rad * 180 / Math.PI
  };
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
  const [calculatedDestination, setCalculatedDestination] = useState<{latitude: number, longitude: number} | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation(location);

      // Calculate destination 20 km away at 45 degrees bearing
      const destination = calculateDestinationPoint(
        location.coords.latitude,
        location.coords.longitude,
        20, // 20 kilometers
        45  // 45 degrees bearing (northeast)
      );
      setCalculatedDestination(destination);

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
    latitude: latitude,
    longitude: longitude,
    latitudeDelta: 0.5, // Increased to show both points
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
        {calculatedDestination && (
          <Marker
            coordinate={{
              latitude: calculatedDestination.latitude,
              longitude: calculatedDestination.longitude,
            }}
            title="Destination (20 km away)"
            description="This is the destination point 20 km from your location"
          >
            <View style={styles.markerContainer}>
              <View style={styles.marker}>
                <Ionicons name="location" size={24} color="#FF0000" />
              </View>
            </View>
          </Marker>
        )}

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
        {showRoute && routeCoordinates.length > 0 && calculatedDestination && (
          <Polyline
            coordinates={[
              ...routeCoordinates,
              {
                latitude: calculatedDestination.latitude,
                longitude: calculatedDestination.longitude
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
        {calculatedDestination && (
          <Text style={styles.coordinates}>
            Destination (20 km away):{'\n'}
            Latitude: {calculatedDestination.latitude.toFixed(6)}{'\n'}
            Longitude: {calculatedDestination.longitude.toFixed(6)}
          </Text>
        )}
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
}); 