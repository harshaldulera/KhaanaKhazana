import React, { useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
  Modal,
  TextInput,
  ActivityIndicator
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { useMutation, gql } from '@apollo/client';

// Add a new mutation for donor feedback
const ADD_DONOR_FEEDBACK = gql`
  mutation AddDonorFeedback($transaction_id: bigint!, $feedback: String!) {
    update_donar_transaction_by_pk(
      pk_columns: { id: $transaction_id }
      _set: { donar_feedback: $feedback }
    ) {
      id
      donar_feedback
    }
  }
`;

// Mock data as fallback
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

// Interface for props
interface HistoryScreenProps {
  role?: string;
  transactions?: any[];
  onAddFeedback?: (transaction: any) => void;
}

export default function HistoryScreen({ role: propRole, transactions, onAddFeedback }: HistoryScreenProps) {
  const params = useLocalSearchParams();
  const router = useRouter();
  const role = propRole || params.role as string || 'donor';
  
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);
  const [submittingFeedback, setSubmittingFeedback] = useState(false);
  
  // If real transactions are provided, use them; otherwise use mock data
  const historyData = transactions || mockHistoryData[role as keyof typeof mockHistoryData] || [];

  const handleTrackDonation = (donationId: string) => {
    router.push(`/(donor)/tracking?donationId=${donationId}`);
  };

  const handleAddFeedback = (item: any) => {
    setSelectedTransaction(item);
    setFeedbackText(item.donar_feedback || '');
    setFeedbackModalVisible(true);
  };

  const submitFeedback = () => {
    if (!selectedTransaction || !feedbackText.trim()) {
      alert('Please enter your feedback');
      return;
    }

    setSubmittingFeedback(true);
    if (onAddFeedback) {
      onAddFeedback({
        ...selectedTransaction,
        feedback: feedbackText.trim()
      });
      setFeedbackModalVisible(false);
      setSelectedTransaction(null);
      setFeedbackText('');
      setSubmittingFeedback(false);
    }
  };

  const closeFeedbackModal = () => {
    setFeedbackModalVisible(false);
    setSelectedTransaction(null);
    setFeedbackText('');
  };

  // Format date helper
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  // Prepare transaction data for rendering
  const prepareTransactionData = (transaction: any) => {
    if (!transaction) return null;
    
    // For transactions from API, convert to the format needed for rendering
    if (transactions) {
      switch (role) {
        case 'donor':
          return {
            id: transaction.id,
            foodType: transaction.food_details,
            quantity: `${transaction.serving_quantity} servings (${transaction.food_type})`,
            pickupAddress: transaction.pickup_location,
            dropoffAddress: transaction.ngo?.address || 'Not assigned yet',
            pickupTime: transaction.pickup_time,
            status: transaction.status.toLowerCase(),
            ngoName: transaction.ngo?.name || 'Not assigned yet',
            volunteerName: transaction.volunteer?.name || 'Not assigned yet',
            feedback: transaction.donar_feedback || '',
          };
        case 'ngo':
          return {
            id: transaction.id,
            foodType: transaction.food_details,
            quantity: `${transaction.serving_quantity} servings (${transaction.food_type})`,
            donorName: transaction.donar?.name || '',
            donorPhone: transaction.donar?.phone_number || '',
            volunteerName: transaction.volunteer?.name || 'Not assigned yet',
            volunteerPhone: transaction.volunteer?.phone_number || '',
            pickupAddress: transaction.pickup_location,
            dropoffAddress: transaction.ngo?.address || '',
            pickupTime: transaction.pickup_time,
            status: transaction.status.toLowerCase(),
            feedback: transaction.donar_feedback || '',
          };
        case 'volunteer':
          return {
            id: transaction.id,
            foodType: transaction.food_details,
            quantity: `${transaction.serving_quantity} servings (${transaction.food_type})`,
            pickupAddress: transaction.pickup_location,
            dropoffAddress: transaction.ngo?.address || '',
            pickupTime: transaction.pickup_time,
            status: transaction.status.toLowerCase(),
            donorName: transaction.donar?.name || '',
            ngoName: transaction.ngo?.name || '',
            feedback: transaction.donar_feedback || '',
          };
        default:
          return transaction;
      }
    }
    
    // If using mock data, return as is
    return transaction;
  };

  const renderHistoryItem = ({ item }: { item: any }) => {
    const transactionData = prepareTransactionData(item);
    if (!transactionData) return null;

    return (
      <TouchableOpacity 
        style={styles.historyCard}
        onPress={() => handleAddFeedback(item)}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.foodType}>{transactionData.foodType}</Text>
            <Text style={styles.quantity}>{transactionData.quantity}</Text>
          </View>
          {role === 'ngo' && (
            <TouchableOpacity 
              style={styles.feedbackButton}
              onPress={() => handleAddFeedback(item)}
            >
              <FontAwesome name="comment" size={14} color="#fff" />
              <Text style={styles.feedbackButtonText}>
                {transactionData.feedback ? 'Edit Feedback' : 'Add Feedback'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.detailsContainer}>
          {role === 'ngo' && (
            <>
              <Text style={styles.detailText}>Donor: {transactionData.donorName}</Text>
              <Text style={styles.detailText}>Phone: {transactionData.donorPhone}</Text>
              {transactionData.volunteerName !== 'Not assigned yet' && (
                <>
                  <Text style={styles.detailText}>Volunteer: {transactionData.volunteerName}</Text>
                  <Text style={styles.detailText}>Phone: {transactionData.volunteerPhone}</Text>
                </>
              )}
            </>
          )}

          <Text style={styles.detailText}>📍 Pickup: {transactionData.pickupAddress}</Text>
          {transactionData.dropoffAddress && (
            <Text style={styles.detailText}>🏢 Dropoff: {transactionData.dropoffAddress}</Text>
          )}
          <Text style={styles.detailText}>🕒 Pickup Time: {
            typeof transactionData.pickupTime === 'string' && transactionData.pickupTime.includes('T') 
              ? formatDate(transactionData.pickupTime) 
              : transactionData.pickupTime
          }</Text>
          
          {transactionData.feedback && (
            <View style={styles.feedbackContainer}>
              <Text style={styles.feedbackLabel}>Your Feedback:</Text>
              <Text style={styles.feedbackText}>{transactionData.feedback}</Text>
            </View>
          )}
        </View>

        <View style={styles.cardFooter}>
          <View style={[
            styles.statusBadge,
            {
              backgroundColor: 
                transactionData.status === 'completed' ? '#4CAF50' :
                transactionData.status === 'cancelled' ? '#F44336' :
                transactionData.status === 'in_transit' ? '#2196F3' :
                '#FF9800'
            }
          ]}>
            <Text style={styles.statusText}>
              {transactionData.status.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delivery History</Text>
      
      {historyData.length === 0 ? (
        <View style={styles.emptyContainer}>
          <FontAwesome name="inbox" size={64} color="#ccc" />
          <Text style={styles.emptyTitle}>No History Yet</Text>
          <Text style={styles.emptySubtitle}>
            Your completed transactions will appear here
          </Text>
        </View>
      ) : (
        <FlatList
          data={historyData}
          renderItem={renderHistoryItem}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {/* Feedback Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={feedbackModalVisible}
        onRequestClose={closeFeedbackModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Feedback</Text>
            
            <TextInput
              style={styles.feedbackInput}
              placeholder="Enter your feedback about this donation..."
              multiline
              value={feedbackText}
              onChangeText={setFeedbackText}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={closeFeedbackModal}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.submitButton]}
                onPress={submitFeedback}
                disabled={submittingFeedback}
              >
                {submittingFeedback ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.modalButtonText}>Submit</Text>
                )}
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
    paddingTop: 0,
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
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBadge: {
    backgroundColor: '#4CAF50',
    padding: 8,
    borderRadius: 6,
  },
  statusText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
  },
  trackButton: {
    backgroundColor: '#FF6B6B',
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  trackButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 5,
  },
  feedbackButton: {
    backgroundColor: Colors.light.tint,
    padding: 8,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  feedbackButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 5,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#666',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  // Modal styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 500,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: '#f2f2f2',
  },
  submitButton: {
    backgroundColor: '#007BFF',
  },
  modalButtonText: {
    fontWeight: 'bold',
    color: '#333',
  },
}); 

