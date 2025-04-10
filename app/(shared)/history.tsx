import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

// Mock data - will be replaced with GraphQL query
const mockHistoryData = {
  donor: [
    {
      id: '1',
      foodType: 'Cooked Rice',
      quantity: '50 plates',
      pickupAddress: '123 Main St, City',
      dropoffAddress: 'NGO Center, 789 Charity St',
      pickupTime: '2024-02-20 2:00 PM',
      status: 'completed',
      ngoName: 'Food for All NGO',
      volunteerName: 'John Doe',
      feedback: 'Great service! Food was delivered on time.',
    },
    {
      id: '2',
      foodType: 'Bread',
      quantity: '20 packets',
      pickupAddress: '456 Park Ave, City',
      dropoffAddress: 'Community Kitchen, 321 Hope St',
      pickupTime: '2024-02-19 3:00 PM',
      status: 'completed',
      ngoName: 'Share Food NGO',
      volunteerName: 'Jane Smith',
      feedback: 'Volunteer was very helpful.',
    },
  ],
  ngo: [
    {
      id: '1',
      foodType: 'Cooked Rice',
      quantity: '50 plates',
      donorName: 'Restaurant ABC',
      donorPhone: '+1234567890',
      volunteerName: 'John Doe',
      volunteerPhone: '+0987654321',
      pickupTime: '2024-02-20 2:00 PM',
      status: 'completed',
      feedback: 'Food was fresh and delivered on time.',
    },
    {
      id: '2',
      foodType: 'Bread',
      quantity: '20 packets',
      donorName: 'Bakery XYZ',
      donorPhone: '+1122334455',
      volunteerName: 'Jane Smith',
      volunteerPhone: '+5544332211',
      pickupTime: '2024-02-19 3:00 PM',
      status: 'completed',
      feedback: 'Good quality food, well packaged.',
    },
  ],
  volunteer: [
    {
      id: '1',
      foodType: 'Cooked Rice',
      quantity: '50 plates',
      pickupAddress: '123 Main St, City',
      dropoffAddress: 'NGO Center, 789 Charity St',
      pickupTime: '2024-02-20 2:00 PM',
      status: 'completed',
      donorName: 'Restaurant ABC',
      ngoName: 'Food for All NGO',
      feedback: 'Smooth delivery process.',
    },
    {
      id: '2',
      foodType: 'Bread',
      quantity: '20 packets',
      pickupAddress: '456 Park Ave, City',
      dropoffAddress: 'Community Kitchen, 321 Hope St',
      pickupTime: '2024-02-19 3:00 PM',
      status: 'completed',
      donorName: 'Bakery XYZ',
      ngoName: 'Share Food NGO',
      feedback: 'Everything went well.',
    },
  ],
};

export default function HistoryScreen() {
  const { role } = useLocalSearchParams();
  const historyData = mockHistoryData[role as keyof typeof mockHistoryData] || [];

  const renderHistoryItem = ({ item }: { item: any }) => (
    <View style={styles.historyCard}>
      <View style={styles.header}>
        <Text style={styles.foodType}>{item.foodType}</Text>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>

      <View style={styles.detailsContainer}>
        {role === 'donor' && (
          <>
            <Text style={styles.detailText}>NGO: {item.ngoName}</Text>
            <Text style={styles.detailText}>Volunteer: {item.volunteerName}</Text>
          </>
        )}
        
        {role === 'ngo' && (
          <>
            <Text style={styles.detailText}>Donor: {item.donorName}</Text>
            <Text style={styles.detailText}>Phone: {item.donorPhone}</Text>
            <Text style={styles.detailText}>Volunteer: {item.volunteerName}</Text>
            <Text style={styles.detailText}>Phone: {item.volunteerPhone}</Text>
          </>
        )}
        
        {role === 'volunteer' && (
          <>
            <Text style={styles.detailText}>Donor: {item.donorName}</Text>
            <Text style={styles.detailText}>NGO: {item.ngoName}</Text>
          </>
        )}

        <Text style={styles.detailText}>📍 Pickup: {item.pickupAddress}</Text>
        <Text style={styles.detailText}>🏢 Dropoff: {item.dropoffAddress}</Text>
        <Text style={styles.detailText}>🕒 Pickup Time: {item.pickupTime}</Text>
        
        {item.feedback && (
          <View style={styles.feedbackContainer}>
            <Text style={styles.feedbackLabel}>Feedback:</Text>
            <Text style={styles.feedbackText}>{item.feedback}</Text>
          </View>
        )}
      </View>

      <View style={styles.completedBadge}>
        <Text style={styles.completedText}>Completed</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery History</Text>
      <FlatList
        data={historyData}
        renderItem={renderHistoryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
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
  historyCard: {
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
  header: {
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
  detailsContainer: {
    marginBottom: 15,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  feedbackContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 8,
  },
  feedbackLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 5,
  },
  feedbackText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
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
}); 