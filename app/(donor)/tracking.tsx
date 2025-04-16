import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { useQuery } from "@apollo/client";
import { GET_DONOR_TRANSACTIONS } from "../../graphql/mutations";
import { Colors } from "@/constants/Colors";
import AsyncStorage from '@react-native-async-storage/async-storage';
// We'll conditionally import MapView to avoid errors
let MapView = View;
let Marker = View;

try {
  // This is wrapped in a try-catch to prevent errors if the module isn't available
  const MapComponents = require("react-native-maps");
  MapView = MapComponents.default;
  Marker = MapComponents.Marker;
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
  expiry_time: string;
  quantity: number;
  food_type: string;
  ngo?: {
    id: string;
    name: string;
    phoneNumber: string;
    address?: string;
  };
  volunteer?: {
    id: string;
    name: string;
    phoneNumber: string;
    current_latitude?: number;
    current_longitude?: number;
  };
}

export default function TrackingScreen() {
  const router = useRouter();
  const { donationId } = useLocalSearchParams<{ donationId: string }>();
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const loadUserInfo = async () => {
      try {
        const userInfo = await AsyncStorage.getItem('userInfo');
        if(userInfo) {
          const parsedInfo = JSON.parse(userInfo);
          setUserId(parsedInfo.id);
        }
      } catch (error) {
        console.error('Error loading user info: ', error);
      }
    };
    loadUserInfo();
  }, []);

  const { loading, error, data, refetch } = useQuery(GET_DONOR_TRANSACTIONS, {
    variables: { donor_id: null }, // We'll filter by ID locally
    fetchPolicy: "network-only",
    pollInterval: 30000, // Poll every 30 seconds for updates
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 30000);

    return () => clearInterval(intervalId);
  }, [refetch]);

  useEffect(() => {
    if (data?.donar_transaction) {
      const found = data.donar_transaction.find(
        (t: Transaction) => t.id == donationId
      );
      if (found) {
        setTransaction(found);
      }
    }
  }, [data, donationId]);

  if (loading && !transaction) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
        <Text style={styles.loadingText}>Loading donation details...</Text>
      </View>
    );
  }

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

  if (!transaction) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Donation Not Found</Text>
        <Text style={styles.errorSubtext}>
          The donation you're looking for doesn't exist
        </Text>
        <TouchableOpacity
          style={styles.retryButton}
          onPress={() => router.push("/(donor)/history" as any)}
        >
          <Text style={styles.retryButtonText}>Go to History</Text>
        </TouchableOpacity>
      </View>
    );
  }

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

  const getMapRegion = () => {
    // Set default region to donor location (would need geocoding in real app)
    return {
      latitude: 19.076,
      longitude: 72.8777,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  };

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

      <View style={styles.trackingSteps}>
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

      <View style={styles.mapContainer}>
        <Text style={styles.mapTitle}>Donation Location</Text>
        <View style={styles.mapPlaceholder}>
          <Text style={styles.mapPlaceholderText}>
            Pickup Location: {transaction.pickup_location}
          </Text>
          {transaction.volunteer && transaction.volunteer.current_latitude && (
            <Text style={styles.mapPlaceholderText}>
              Volunteer: {transaction.volunteer.name} is on the way
            </Text>
          )}
        </View>
      </View>

      <View style={styles.details}>
        <Text style={styles.detailsTitle}>Donation Details</Text>

        <View style={styles.detailRow}>
          <FontAwesome
            name="cutlery"
            size={20}
            color={Colors.light.tint}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>Food</Text>
            <Text style={styles.detailValue}>{transaction.food_details}</Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <FontAwesome
            name="shopping-basket"
            size={20}
            color={Colors.light.tint}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>Quantity</Text>
            <Text style={styles.detailValue}>
              {transaction.quantity} servings
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <FontAwesome
            name="map-marker"
            size={20}
            color={Colors.light.tint}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>Pickup Location</Text>
            <Text style={styles.detailValue}>
              {transaction.pickup_location}
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <FontAwesome
            name="clock-o"
            size={20}
            color={Colors.light.tint}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>Pickup Time</Text>
            <Text style={styles.detailValue}>
              {formatDate(transaction.pickup_time)}
            </Text>
          </View>
        </View>

        <View style={styles.detailRow}>
          <FontAwesome
            name="hourglass-end"
            size={20}
            color={Colors.light.tint}
            style={styles.detailIcon}
          />
          <View>
            <Text style={styles.detailLabel}>Expiry Time</Text>
            <Text style={styles.detailValue}>
              {formatDate(transaction.expiry_time)}
            </Text>
          </View>
        </View>

        {transaction.ngo && (
          <View style={styles.detailRow}>
            <FontAwesome
              name="building"
              size={20}
              color={Colors.light.tint}
              style={styles.detailIcon}
            />
            <View>
              <Text style={styles.detailLabel}>NGO</Text>
              <Text style={styles.detailValue}>{transaction.ngo.name}</Text>
              <Text style={styles.detailSubvalue}>
                {transaction.ngo.phoneNumber}
              </Text>
            </View>
          </View>
        )}

        {transaction.volunteer && (
          <View style={styles.detailRow}>
            <FontAwesome
              name="user"
              size={20}
              color={Colors.light.tint}
              style={styles.detailIcon}
            />
            <View>
              <Text style={styles.detailLabel}>Volunteer</Text>
              <Text style={styles.detailValue}>
                {transaction.volunteer.name}
              </Text>
              <Text style={styles.detailSubvalue}>
                {transaction.volunteer.phoneNumber}
              </Text>
            </View>
          </View>
        )}
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
    backgroundColor: "#f8f8f8",
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: "#666",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
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
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  headerLeft: {
    flex: 1,
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  statusMessage: {
    backgroundColor: "#E8F5E9",
    padding: 16,
    borderRadius: 0,
  },
  statusMessageText: {
    fontSize: 16,
    color: "#2E7D32",
    textAlign: "center",
  },
  trackingSteps: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 16,
  },
  step: {
    flexDirection: "row",
    alignItems: "center",
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
    height: 200,
    width: "100%",
    borderRadius: 8,
  },
  // Placeholder for map when module is not available
  mapPlaceholder: {
    height: 150,
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
