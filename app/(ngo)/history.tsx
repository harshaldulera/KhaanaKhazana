import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Modal, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, useMutation } from '@apollo/client';
import { GET_NGO_TRANSACTIONS, ADD_FEEDBACK } from '../../graphql/mutations';
import { Colors } from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

export default function NGOHistoryScreen() {
  const [userId, setUserId] = useState<number | null>(null);
  const [selectedTransaction, setSelectedTransaction] = useState<any>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false);

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo) {
        const parsedInfo = JSON.parse(userInfo);
        setUserId(parsedInfo.id);
      }
    } catch (error) {
      console.error('Error loading user info:', error);
    }
  };

  const { loading, error, data, refetch } = useQuery(GET_NGO_TRANSACTIONS, {
    variables: { ngo_id: userId },
    skip: !userId,
    fetchPolicy: 'network-only',
  });

  const [addFeedback, { loading: submittingFeedback }] = useMutation(ADD_FEEDBACK, {
    onCompleted: () => {
      setFeedbackModalVisible(false);
      setSelectedTransaction(null);
      setFeedbackText('');
      alert('Feedback submitted successfully!');
      refetch();
    },
    onError: (error) => {
      alert(`Error submitting feedback: ${error.message}`);
    },
  });

  const handleAddFeedback = (transaction: any) => {
    setSelectedTransaction(transaction);
    setFeedbackModalVisible(true);
  };

  const submitFeedback = () => {
    if (!selectedTransaction || !feedbackText.trim()) {
      alert('Please enter your feedback');
      return;
    }

    addFeedback({
      variables: {
        transaction_id: selectedTransaction.id,
        feedback: feedbackText.trim(),
      },
    });
  };

  const renderTransactionItem = ({ item }: { item: any }) => {
    const isAccepted = item.status === 'ACCEPTED' || item.status === 'COMPLETED';
    
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.foodType}>{item.food_details}</Text>
          <Text style={styles.quantity}>{item.serving_quantity} servings ({item.food_type})</Text>
        </View>
        
        <View style={styles.cardBody}>
          <Text style={styles.detailText}>Donor: {item.donar?.name || 'Unknown'}</Text>
          <Text style={styles.detailText}>Phone: {item.donar?.phone_number || 'N/A'}</Text>
          {item.volunteer && (
            <>
              <Text style={styles.detailText}>Volunteer: {item.volunteer.name}</Text>
              <Text style={styles.detailText}>Phone: {item.volunteer.phone_number}</Text>
              <Text style={styles.detailText}>Vehicle: {item.volunteer.vehicle_type} ({item.volunteer.vehicle_number})</Text>
            </>
          )}
          <Text style={styles.detailText}>Pickup: {item.pickup_location}</Text>
          <Text style={styles.detailText}>Pickup Time: {new Date(item.pickup_time).toLocaleString()}</Text>
          
          <View style={[styles.statusContainer, { backgroundColor: isAccepted ? '#4CAF50' : '#FF9800' }]}>
            <Text style={styles.statusText}>{item.status}</Text>
          </View>

          {isAccepted && (
            <TouchableOpacity 
              style={styles.feedbackButton}
              onPress={() => handleAddFeedback(item)}
            >
              <FontAwesome name="comment" size={16} color="#fff" />
              <Text style={styles.feedbackButtonText}>
                {item.feedback ? 'Edit Feedback' : 'Add Feedback'}
              </Text>
            </TouchableOpacity>
          )}

          {item.feedback && (
            <View style={styles.feedbackContainer}>
              <Text style={styles.feedbackLabel}>Your Feedback:</Text>
              <Text style={styles.feedbackText}>{item.feedback}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  if (!userId || loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error loading transactions</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => refetch()}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Donation History</Text>
      
      <FlatList
        data={data?.donar_transaction || []}
        renderItem={renderTransactionItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No donations found</Text>
          </View>
        }
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={feedbackModalVisible}
        onRequestClose={() => setFeedbackModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Feedback</Text>
            <TextInput
              style={styles.feedbackInput}
              placeholder="Enter your feedback..."
              multiline
              value={feedbackText}
              onChangeText={setFeedbackText}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setFeedbackModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.submitButton]}
                onPress={submitFeedback}
                disabled={submittingFeedback}
              >
                {submittingFeedback ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text style={styles.buttonText}>Submit</Text>
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
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.light.tint,
  },
  listContainer: {
    flexGrow: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    marginBottom: 12,
  },
  foodType: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  cardBody: {
    gap: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
  },
  statusContainer: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginTop: 8,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  feedbackButton: {
    backgroundColor: Colors.light.tint,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  feedbackButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  feedbackContainer: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    marginTop: 12,
  },
  feedbackLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  feedbackText: {
    fontSize: 14,
    color: '#666',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#f44336',
    marginBottom: 12,
  },
  retryButton: {
    backgroundColor: Colors.light.tint,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  retryButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContent: {
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400,
    borderRadius: 12,
    padding: 16,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  feedbackInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    minHeight: 120,
    marginBottom: 16,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  modalButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ddd',
  },
  submitButton: {
    backgroundColor: Colors.light.tint,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});