import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useQuery, useMutation } from '@apollo/client';
import { GET_VOLUNTEER_PICKUPS, UPDATE_FOOD_QUALITY } from '../../graphql/mutations';
import { Colors } from '../../constants/Colors';
import { FoodQualityApproval } from '../../app/components/FoodQualityApproval';

export default function PickupDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [showQualityApproval, setShowQualityApproval] = useState(false);

  const { data, loading, error, refetch } = useQuery(GET_VOLUNTEER_PICKUPS, {
    variables: { id },
    fetchPolicy: 'network-only',
  });

  const pickup = data?.donar_transaction?.[0];

  const handleQualityApprovalComplete = () => {
    setShowQualityApproval(false);
    refetch();
    router.back();
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error || !pickup) {
    return (
      <View style={styles.container}>
        <Text>Error loading pickup details</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Pickup Details',
          headerShown: true,
        }}
      />

      {showQualityApproval ? (
        <FoodQualityApproval
          transactionId={Number(pickup.id)}
          onApprovalComplete={handleQualityApprovalComplete}
        />
      ) : (
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>#{pickup.id} - {pickup.food_details}</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{pickup.status}</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Food Details</Text>
            <Text style={styles.sectionText}>
              {pickup.serving_quantity} servings ({pickup.food_type})
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Pickup Location</Text>
            <Text style={styles.sectionText}>{pickup.donar.address}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Delivery Location</Text>
            <Text style={styles.sectionText}>{pickup.ngo.address}</Text>
          </View>

          <TouchableOpacity
            style={styles.approvalButton}
            onPress={() => setShowQualityApproval(true)}
          >
            <FontAwesome name="check-circle" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>Assess Food Quality</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  statusBadge: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  statusText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
  },
  approvalButton: {
    backgroundColor: Colors.light.tint,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 