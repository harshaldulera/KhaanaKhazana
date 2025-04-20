import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Platform,
  Linking,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { GET_DONOR_TRANSACTIONS } from "../../graphql/mutations";
import { Colors } from "@/constants/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';

// We'll properly import MapView to avoid errors
let MapView: any = View;
let Marker: any = View;
let Polyline: any = View;
let PROVIDER_GOOGLE: any = null;

try {
  // This is wrapped in a try-catch to prevent errors if the module isn't available
  const MapComponents = require("react-native-maps");
  MapView = MapComponents.default;
  Marker = MapComponents.Marker;
  Polyline = MapComponents.Polyline;
  PROVIDER_GOOGLE = MapComponents.PROVIDER_GOOGLE;
} catch (error) {
  console.warn("react-native-maps module not available");
}

// Define TypeScript interface for transaction
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
  donar: {
    id: string;
    name: string;
    phone_number: string;
    address: string;
    latitude?: number;
    longitude?: number;
  };
  ngo?: {
    id: string;
    name: string;
    phone_number: string;
    address: string;
    latitude?: number;
    longitude?: number;
  };
  volunteer?: {
    id: string;
    name: string;
    phone_number: string;
    current_latitude?: number;
    current_longitude?: number;
  };
}

// Mock location data for demonstration (in real app, you'd use geocoding)
const mockLocations = {
  donor: { latitude: 19.076, longitude: 72.8777 }, // Mumbai
  ngo: { latitude: 19.086, longitude: 72.8880 }, // Slightly north of Mumbai
};

export default function TrackingScreen() {
  const router = useRouter();
  const { donationId } = useLocalSearchParams<{ donationId: string }>();
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [region, setRegion] = useState({
    latitude: 19.076,
    longitude: 72.8777,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  // Timer ref for cleanup
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const userInfo = await AsyncStorage.getItem('userInfo');
        if(userInfo) {
          const parsedInfo = JSON.parse(userInfo);
          setUserId(parsedInfo.id.toString());
        }
      } catch (error) {
        console.error('Error loading user info: ', error);
      }
    };
    loadUserInfo();
    
    // Clear interval on component unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const { loading, error, data, refetch } = useQuery(GET_DONOR_TRANSACTIONS, {
    variables: { donor_id: userId },
    skip: !userId,
    fetchPolicy: "network-only",
  });

  // Set up polling for location updates
  useEffect(() => {
    refetch();
    
    // Set up polling every 30 seconds
    timerRef.current = setInterval(() => {
      refetch();
    }, 30000);
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [refetch, userId]);

  // Find transaction when data is loaded
  useEffect(() => {
    if (data?.donar_transaction) {
      const found = data.donar_transaction.find(
        (t: Transaction) => t.id == donationId
      );
      if (found) {
        setTransaction(found);
        
        // Update map region if we have volunteer location
        if (found.volunteer?.current_latitude && found.volunteer?.current_longitude) {
          setRegion({
            latitude: found.volunteer.current_latitude,
            longitude: found.volunteer.current_longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
      }
    }
  }, [data, donationId]);

  // Loading state
  if (loading && !transaction) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
        <Text style={styles.loadingText}>Loading donation details...</Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading donation</Text>
        <Text style={styles.errorSubtext}>{error.message}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryButtonText}>Try Again</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Transaction not found
  if (!transaction) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Donation Not Found</Text>
        <Text style={styles.errorSubtext}>
          The donation you're looking for doesn't exist
        </Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => router.push("/(donor)/history")}
        >
          <Text style={styles.retryButtonText}>Go to History</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Status helper functions
  const getStatusStepColor = (
    currentStatus: string,
    thisStep: string
  ): string => {
    const statuses = ["PENDING", "ACCEPTED", "IN_TRANSIT", "COMPLETED"];
    const currentIndex = statuses.indexOf(currentStatus);
    const stepIndex = statuses.indexOf(thisStep);

    if (currentIndex >= stepIndex) {
      return Colors.light.tint;
    }
    return "#ccc";
  };

  const getStatusMessage = (): string => {
    switch (transaction.status) {
      case "PENDING":
        return transaction.ngo
          ? "An NGO has been notified about your donation"
          : "We're finding an NGO that can accept your donation";
      case "ACCEPTED":
        return "Your donation has been accepted and is waiting for pickup";
      case "IN_TRANSIT":
        return "Your donation is on its way to the NGO";
      case "COMPLETED":
        return "Your donation has been delivered successfully!";
      case "CANCELLED":
        return "This donation has been cancelled";
      default:
        return "Tracking your donation...";
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()} ${date.getHours()}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  // Call volunteer handler
  const callVolunteer = () => {
    if (transaction?.volunteer?.phone_number) {
      Linking.openURL(`tel:${transaction.volunteer.phone_number}`);
    } else {
      alert("Volunteer phone number not available");
    }
  };

  // Call NGO handler
  const callNGO = () => {
    if (transaction?.ngo?.phone_number) {
      Linking.openURL(`tel:${transaction.ngo.phone_number}`);
    } else {
      alert("NGO phone number not available");
    }
  };

  // Get pickup and dropoff locations
  const pickupLocation = transaction.donar?.latitude && transaction.donar?.longitude
    ? { latitude: transaction.donar.latitude, longitude: transaction.donar.longitude }
    : mockLocations.donor;
    
  const dropoffLocation = transaction.ngo?.latitude && transaction.ngo?.longitude
    ? { latitude: transaction.ngo.latitude, longitude: transaction.ngo.longitude }
    : mockLocations.ngo;
    
  const volunteerLocation = transaction.volunteer?.current_latitude && transaction.volunteer?.current_longitude
    ? { latitude: transaction.volunteer.current_latitude, longitude: transaction.volunteer.current_longitude }
    : null;

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: "Track Donation",
          headerShown: true,
        }}
      />

      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.title}>Donation #{transaction.id}</Text>
          <Text style={styles.subtitle}>{transaction.food_details}</Text>
        </View>
        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: getStatusStepColor(
                transaction.status,
                transaction.status
              ),
            },
          ]}
        >
          <Text style={styles.statusText}>{transaction.status}</Text>
        </View>
      </View>

      <View style={styles.statusMessage}>
        <Text style={styles.statusMessageText}>{getStatusMessage()}</Text>
      </View>

      {/* Map component - showing donor, NGO, and volunteer locations */}
      <View style={styles.mapContainer}>
        <Text style={styles.mapTitle}>Track Delivery</Text>
        
        {MapView !== View ? (
          <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={region}
            onRegionChangeComplete={setRegion}
          >
            {/* Donor marker */}
            <Marker
              coordinate={pickupLocation}
              title="Pickup Location"
              description={transaction.pickup_location}
              pinColor="blue"
            />
            
            {/* NGO marker - only show if NGO assigned */}
            {transaction.ngo && (
              <Marker
                coordinate={dropoffLocation}
                title="Dropoff Location"
                description={transaction.ngo.name}
                pinColor="green"
              />
            )}
            
            {/* Volunteer marker - only show if volunteer assigned and location available */}
            {volunteerLocation && (
              <Marker
                coordinate={volunteerLocation}
                title="Volunteer"
                description={transaction.volunteer?.name}
                pinColor="red"
              />
            )}
            
            {/* Draw path from volunteer to pickup to dropoff */}
            {volunteerLocation && (
              <Polyline
                coordinates={[
                  volunteerLocation,
                  pickupLocation,
                  dropoffLocation
                ]}
                strokeColor="#FF6B6B"
                strokeWidth={3}
              />
            )}
          </MapView>
        ) : (
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapPlaceholderText}>
              Pickup Location: {transaction.pickup_location}
            </Text>
            {transaction.ngo && (
              <Text style={styles.mapPlaceholderText}>
                Dropoff: {transaction.ngo.name}
              </Text>
            )}
            {transaction.volunteer && transaction.volunteer.current_latitude && (
              <Text style={styles.mapPlaceholderText}>
                Volunteer: {transaction.volunteer.name} is on the way
              </Text>
            )}
          </View>
        )}
        
        {/* Contact buttons */}
        <View style={styles.contactButtonsContainer}>
          {transaction.volunteer && (
            <TouchableOpacity style={styles.contactButton} onPress={callVolunteer}>
              <FontAwesome name="phone" size={16} color="#fff" />
              <Text style={styles.contactButtonText}>Call Volunteer</Text>
            </TouchableOpacity>
          )}
          
          {transaction.ngo && (
            <TouchableOpacity style={styles.contactButton} onPress={callNGO}>
              <FontAwesome name="phone" size={16} color="#fff" />
              <Text style={styles.contactButtonText}>Call NGO</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Tracking status steps */}
      <View style={styles.stepsContainer}>
        <Text style={styles.stepsTitle}>Tracking Status</Text>
        
        <View style={styles.step}>
          <View
            style={[
              styles.stepCircle,
              {
                backgroundColor: getStatusStepColor(
                  transaction.status,
                  "PENDING"
                ),
              },
            ]}
          >
            <FontAwesome name="check" size={16} color="#fff" />
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Donation Created</Text>
            <Text style={styles.stepSubtitle}>
              {formatDate(transaction.created_at)}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.stepLine,
            {
              backgroundColor: getStatusStepColor(
                transaction.status,
                "ACCEPTED"
              ),
            },
          ]}
        />

        <View style={styles.step}>
          <View
            style={[
              styles.stepCircle,
              {
                backgroundColor: getStatusStepColor(
                  transaction.status,
                  "ACCEPTED"
                ),
              },
            ]}
          >
            {transaction.status === "PENDING" ? (
              <Text style={styles.stepNumber}>2</Text>
            ) : (
              <FontAwesome name="check" size={16} color="#fff" />
            )}
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Accepted by NGO</Text>
            <Text style={styles.stepSubtitle}>
              {transaction.ngo ? transaction.ngo.name : "Waiting for NGO..."}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.stepLine,
            {
              backgroundColor: getStatusStepColor(
                transaction.status,
                "IN_TRANSIT"
              ),
            },
          ]}
        />

        <View style={styles.step}>
          <View
            style={[
              styles.stepCircle,
              {
                backgroundColor: getStatusStepColor(
                  transaction.status,
                  "IN_TRANSIT"
                ),
              },
            ]}
          >
            {transaction.status === "PENDING" ||
            transaction.status === "ACCEPTED" ? (
              <Text style={styles.stepNumber}>3</Text>
            ) : (
              <FontAwesome name="check" size={16} color="#fff" />
            )}
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>In Transit</Text>
            <Text style={styles.stepSubtitle}>
              {transaction.volunteer
                ? `With ${transaction.volunteer.name}`
                : "Waiting for pickup..."}
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.stepLine,
            {
              backgroundColor: getStatusStepColor(
                transaction.status,
                "COMPLETED"
              ),
            },
          ]}
        />

        <View style={styles.step}>
          <View
            style={[
              styles.stepCircle,
              {
                backgroundColor: getStatusStepColor(
                  transaction.status,
                  "COMPLETED"
                ),
              },
            ]}
          >
            {transaction.status === "COMPLETED" ? (
              <FontAwesome name="check" size={16} color="#fff" />
            ) : (
              <Text style={styles.stepNumber}>4</Text>
            )}
          </View>
          <View style={styles.stepContent}>
            <Text style={styles.stepTitle}>Delivered</Text>
            <Text style={styles.stepSubtitle}>
              {transaction.status === "COMPLETED"
                ? "Your donation was successfully delivered!"
                : "Awaiting delivery..."}
            </Text>
          </View>
        </View>
      </View>

      {/* Donation details */}
      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Donation Details</Text>
        
        <View style={styles.detailRow}>
          <FontAwesome name="cutlery" size={20} color="#666" style={styles.detailIcon} />
          <View>
            <Text style={styles.detailLabel}>Food</Text>
            <Text style={styles.detailValue}>{transaction.food_details}</Text>
            <Text style={styles.detailSubvalue}>
              {transaction.serving_quantity} servings ({transaction.food_type})
            </Text>
          </View>
        </View>
        
        <View style={styles.detailRow}>
          <FontAwesome name="map-marker" size={20} color="#666" style={styles.detailIcon} />
          <View>
            <Text style={styles.detailLabel}>Pickup Location</Text>
            <Text style={styles.detailValue}>{transaction.pickup_location}</Text>
          </View>
        </View>
        
        <View style={styles.detailRow}>
          <FontAwesome name="clock-o" size={20} color="#666" style={styles.detailIcon} />
          <View>
            <Text style={styles.detailLabel}>Pickup Time</Text>
            <Text style={styles.detailValue}>{formatDate(transaction.pickup_time)}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  errorSubtext: {
    fontSize: 14,
    color: "#666",
    marginBottom: 16,
    textAlign: "center",
  },
  retryButton: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  retryButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeft: {
    flex: 1,
    marginRight: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: Colors.light.tint,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  statusMessage: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: "#F5F9FF",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#E5EEFF",
  },
  statusMessageText: {
    fontSize: 16,
    color: "#0066CC",
    fontWeight: "500",
  },
  mapContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 16,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  map: {
    height: 250,
    width: "100%",
    borderRadius: 8,
  },
  // Placeholder for map when module is not available
  mapPlaceholder: {
    height: 250,
    width: "100%",
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  mapPlaceholderText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 8,
  },
  contactButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 16,
  },
  contactButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.light.tint,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  contactButtonText: {
    color: "#fff",
    fontWeight: "bold",
    marginLeft: 8,
  },
  stepsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 16,
  },
  stepsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  step: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  stepCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.light.tint,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  stepNumber: {
    color: "#fff",
    fontWeight: "bold",
  },
  stepContent: {
    flex: 1,
    paddingVertical: 16,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  stepSubtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  stepLine: {
    width: 2,
    height: 24,
    backgroundColor: Colors.light.tint,
    marginLeft: 15,
  },
  details: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 16,
    marginBottom: 40,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 16,
  },
  detailIcon: {
    marginRight: 16,
    width: 24,
  },
  detailLabel: {
    fontSize: 14,
    color: "#666",
  },
  detailValue: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  detailSubvalue: {
    fontSize: 14,
    color: "#666",
  },
});
