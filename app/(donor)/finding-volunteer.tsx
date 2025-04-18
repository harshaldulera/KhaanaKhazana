import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import Mapbox from '@rnmapbox/maps';
import { Colors } from '@/constants/Colors';
import * as Location from 'expo-location';

// Initialize Mapbox - you can use a public token for development
Mapbox.setAccessToken('pk.eyJ1IjoibWFoZWtndWRoa2EiLCJhIjoiY2x0dGJtZGVyMGJtZTJrcXZ4ZGVtZGJwZiJ9.Ry_-OaeLxHBVlm5y_CUo8g');

const { width, height } = Dimensions.get('window');
const ZOOM_LEVEL = 14;

// Simulated volunteer locations around a center point
const generateRandomPoints = (centerLat: number, centerLng: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i.toString(),
    coordinate: [
      centerLng + (Math.random() - 0.5) * 0.01,
      centerLat + (Math.random() - 0.5) * 0.01,
    ],
  }));
};

export default function FindingVolunteerScreen() {
  const params = useLocalSearchParams();
  const [currentLocation, setCurrentLocation] = useState({
    latitude: 19.0760,  // Default to Mumbai coordinates
    longitude: 72.8777,
  });
  const [volunteers, setVolunteers] = useState([]);
  const [locationPermission, setLocationPermission] = useState(false);
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const [loadingText, setLoadingText] = useState('Finding nearby volunteers');
  
  useEffect(() => {
    // Request location permission and get current location
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setLocationPermission(false);
          return;
        }

        setLocationPermission(true);
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setCurrentLocation({ latitude, longitude });
        setVolunteers(generateRandomPoints(latitude, longitude, 5));
      } catch (error) {
        console.log('Error getting location:', error);
        // Use default location if there's an error
        setVolunteers(generateRandomPoints(currentLocation.latitude, currentLocation.longitude, 5));
      }
    };

    getLocation();

    // Start pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Change loading text every 3 seconds
    const textInterval = setInterval(() => {
      setLoadingText(current => {
        switch(current) {
          case 'Finding nearby volunteers':
            return 'Checking volunteer availability';
          case 'Checking volunteer availability':
            return 'Matching with best volunteer';
          default:
            return 'Finding nearby volunteers';
        }
      });
    }, 3000);

    // Simulate finding a volunteer after 5 seconds
    const timer = setTimeout(() => {
      router.replace({
        pathname: '/(donor)/volunteer-matched',
        params: { donationId: params.donationId }
      });
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    };
  }, []);

  const scale = pulseAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 1.3],
  });

  const renderAnnotations = () => {
    return volunteers.map((volunteer) => (
      <Mapbox.PointAnnotation
        key={volunteer.id}
        id={volunteer.id}
        coordinate={volunteer.coordinate}
      >
        <Animated.View style={[styles.markerContainer, { transform: [{ scale }] }]}>
          <View style={styles.volunteerMarker}>
            <View style={styles.volunteerDot} />
          </View>
        </Animated.View>
      </Mapbox.PointAnnotation>
    ));
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      {Platform.OS === 'web' ? (
        <View style={styles.mapPlaceholder}>
          <Text>Map is not available on web platform</Text>
        </View>
      ) : (
        <Mapbox.MapView
          style={styles.map}
          zoomLevel={ZOOM_LEVEL}
          centerCoordinate={[currentLocation.longitude, currentLocation.latitude]}
        >
          <Mapbox.Camera
            zoomLevel={ZOOM_LEVEL}
            centerCoordinate={[currentLocation.longitude, currentLocation.latitude]}
          />
          
          {/* Donation location marker */}
          <Mapbox.PointAnnotation
            id="donation-location"
            coordinate={[currentLocation.longitude, currentLocation.latitude]}
          >
            <View style={styles.donationMarker}>
              <View style={styles.donationDot} />
            </View>
          </Mapbox.PointAnnotation>

          {/* Volunteer markers */}
          {renderAnnotations()}
        </Mapbox.MapView>
      )}

      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#FF6B6B" />
            <Text style={styles.loadingText}>{loadingText}</Text>
            <Text style={styles.subtitle}>This may take a few moments</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    flex: 1,
  },
  mapPlaceholder: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 16,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  markerContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  volunteerMarker: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  volunteerDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#4CAF50',
  },
  donationMarker: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255, 107, 107, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  donationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF6B6B',
  },
}); 