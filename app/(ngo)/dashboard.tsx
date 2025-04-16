import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Modal, TextInput } from 'react-native';
import { router } from 'expo-router';

// Mock data - will be replaced with GraphQL query
const mockDonations = [
  {
    id: '1',
    foodType: 'Cooked Rice',
    quantity: '50 plates',
    pickupAddress: 'Haiko, Powai',
    pickupTime: '2:00 PM',
    expiryTime: '8:00 PM',
    status: 'pending',
    donorName: 'Haiko Restaurants Pvt. Ltd.',
    donorPhone: '+9313318868',
  },
  {
    id: '2',
    foodType: 'Bread',
    quantity: '20 packets',
    pickupAddress: '456 Park Ave, City',
    pickupTime: '3:00 PM',
    expiryTime: '9:00 PM',
    status: 'pending',
    donorName: 'Jane Smith',
    donorPhone: '+0987654321',
  },
  {
    id: '3',
    foodType: 'Vegetables',
    quantity: '10 kg',
    pickupAddress: '789 Oak St, City',
    pickupTime: '4:00 PM',
    expiryTime: '10:00 PM',
    status: 'accepted',
    donorName: 'Mike Johnson',
    donorPhone: '+1122334455',
    volunteerName: 'Alex Brown',
    volunteerPhone: '+5566778899',
    volunteerLocation: '2.5 km away',
  },
];

export default function NGODashboard() {
  const [donations, setDonations] = useState(mockDonations);
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState<string | null>(null);
  const [feedback, setFeedback] = useState('');

  const handleAcceptDonation = (donationId: string) => {
    // TODO: Implement GraphQL mutation to accept donation
    Alert.alert('Success', 'Donation request accepted! Volunteers will be notified.');
    setDonations(donations.map(donation => 
      donation.id === donationId 
        ? { ...donation, status: 'accepted' }
        : donation
    ));
  };

  const handleViewVolunteerLocation = (donationId: string) => {
    // TODO: Implement map view with volunteer location
    Alert.alert('Volunteer Location', 'Map view will be implemented here');
  };

  const handleOpenFeedbackModal = (donationId: string) => {
    setSelectedDonation(donationId);
    setFeedbackModalVisible(true);
  };

  const handleSubmitFeedback = () => {
    if (!selectedDonation || !feedback.trim()) return;
    
    // TODO: Implement GraphQL mutation to submit feedback
    Alert.alert('Success', 'Feedback submitted successfully!');
    setFeedback('');
    setFeedbackModalVisible(false);
    setSelectedDonation(null);
  };

  const renderDonationItem = ({ item }: { item: typeof mockDonations[0] }) => (
    <View style={styles.donationCard}>
      <View style={styles.donationHeader}>
        <Text style={styles.foodType}>{item.foodType}</Text>
        <Text style={styles.quantity}>{item.quantity}</Text>
      </View>
      
      <View style={styles.detailsContainer}>
        <Text style={styles.detailText}>📍 {item.pickupAddress}</Text>
        <Text style={styles.detailText}>🕒 Pickup: {item.pickupTime}</Text>
        <Text style={styles.detailText}>⏰ Expires: {item.expiryTime}</Text>
        <Text style={styles.detailText}>👤 Donor: {item.donorName}</Text>
        <Text style={styles.detailText}>📱 Phone: {item.donorPhone}</Text>
      </View>

      {item.status === 'pending' && (
        <TouchableOpacity 
          style={styles.acceptButton}
          onPress={() => handleAcceptDonation(item.id)}
        >
          <Text style={styles.acceptButtonText}>Accept Donation</Text>
        </TouchableOpacity>
      )}
      
      {item.status === 'accepted' && (
        <View>
          <View style={styles.volunteerInfo}>
            <Text style={styles.volunteerText}>🚚 Volunteer: {item.volunteerName}</Text>
            <Text style={styles.volunteerText}>📱 Phone: {item.volunteerPhone}</Text>
            <Text style={styles.volunteerText}>📍 {item.volunteerLocation}</Text>
          </View>
          
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={styles.locationButton}
              onPress={() => handleViewVolunteerLocation(item.id)}
            >
              <Text style={styles.locationButtonText}>View Location</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.feedbackButton}
              onPress={() => handleOpenFeedbackModal(item.id)}
            >
              <Text style={styles.feedbackButtonText}>Give Feedback</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Donations</Text>
      <FlatList
        data={donations}
        renderItem={renderDonationItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={feedbackModalVisible}
        onRequestClose={() => setFeedbackModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Provide Feedback</Text>
            <TextInput
              style={styles.feedbackInput}
              placeholder="Enter your feedback here..."
              value={feedback}
              onChangeText={setFeedback}
              multiline
              numberOfLines={4}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setFeedbackModalVisible(false);
                  setSelectedDonation(null);
                }}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.submitButton]}
                onPress={handleSubmitFeedback}
              >
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
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
  donationCard: {
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
  donationHeader: {
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
  volunteerInfo: {
    backgroundColor: '#f0f8ff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  volunteerText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationButton: {
    flex: 1,
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginRight: 5,
  },
  locationButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  feedbackButton: {
    flex: 1,
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginLeft: 5,
  },
  feedbackButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    textAlignVertical: 'top',
    minHeight: 100,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#f44336',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 