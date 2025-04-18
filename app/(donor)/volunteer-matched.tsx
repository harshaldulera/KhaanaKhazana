import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
  Platform,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function VolunteerMatchedScreen() {
  const params = useLocalSearchParams();
  const donationLocation = {
    latitude: 19.0760,
    longitude: 72.8777,
  };

  const volunteerLocation = {
    latitude: 19.0780,
    longitude: 72.8797,
  };

  const handleCall = () => {
    Linking.openURL('tel:+1234567890');
  };

  const handleMessage = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('sms:+1234567890');
    } else {
      Linking.openURL('sms:+1234567890?body=Hi, I am waiting at the donation location.');
    }
  };

  const handleCancel = () => {
    // Handle donation cancellation
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />

      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          ...donationLocation,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
        {/* Donation location marker */}
        <Marker coordinate={donationLocation}>
          <View style={styles.donationMarker}>
            <View style={styles.donationDot} />
          </View>
        </Marker>

        {/* Volunteer location marker */}
        <Marker coordinate={volunteerLocation}>
          <View style={styles.volunteerMarker}>
            <View style={styles.volunteerDot} />
          </View>
        </Marker>

        {/* Route line between volunteer and donation location */}
        <Polyline
          coordinates={[donationLocation, volunteerLocation]}
          strokeColor="#FF6B6B"
          strokeWidth={3}
          lineDashPattern={[1]}
        />
      </MapView>

      <View style={styles.overlay}>
        <View style={styles.card}>
          <View style={styles.eta}>
            <Text style={styles.etaText}>Volunteer arriving in 8 mins</Text>
            <Text style={styles.etaDistance}>2.5 km away</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.volunteerInfo}>
            <Image
              source={{ uri: 'https://i.pravatar.cc/100' }}
              style={styles.avatar}
            />
            <View style={styles.volunteerDetails}>
              <Text style={styles.name}>Rahul Kumar</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name="star" size={16} color="#FFD700" />
                <Text style={styles.rating}>4.8</Text>
                <Text style={styles.trips}>(124 pickups)</Text>
              </View>
            </View>
            <View style={styles.vehicleInfo}>
              <Text style={styles.vehicleText}>Honda Activa</Text>
              <Text style={styles.plateNumber}>MH 02 AB 1234</Text>
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton} onPress={handleMessage}>
              <View style={styles.actionIcon}>
                <Ionicons name="chatbubble-outline" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.actionText}>Message</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={handleCall}>
              <View style={styles.actionIcon}>
                <Ionicons name="call-outline" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.actionText}>Call</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton} onPress={handleCancel}>
              <View style={styles.actionIcon}>
                <Ionicons name="close-outline" size={24} color="#FF6B6B" />
              </View>
              <Text style={styles.actionText}>Cancel</Text>
            </TouchableOpacity>
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
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  eta: {
    alignItems: 'center',
    marginBottom: 16,
  },
  etaText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  etaDistance: {
    fontSize: 14,
    color: '#666',
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 16,
  },
  volunteerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  volunteerDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  trips: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  vehicleInfo: {
    alignItems: 'flex-end',
  },
  vehicleText: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  plateNumber: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
    shadowColor: '#FF6B6B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionText: {
    color: '#666',
    fontSize: 12,
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
}); 