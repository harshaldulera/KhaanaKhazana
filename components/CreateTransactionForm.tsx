import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useMutation } from '@apollo/client';
import { CREATE_TRANSACTION } from '../graphql/mutations';
import { TransactionStatus } from '../types/graphql';

export function CreateTransactionForm() {
  const [formData, setFormData] = useState({
    foodDetails: JSON.stringify({
      type: '',
      quantity: '',
      description: '',
    }),
    servingQuantity: '',
    expiryDate: '',
    pickupLocation: '',
    iscoolingRequired: false,
    moreReq: '',
    rating: '0',
    feedback: '',
    donar_id: '',
    ngo_id: '',
    volunteer_id: '',
  });

  const [createTransaction, { loading }] = useMutation(CREATE_TRANSACTION, {
    onCompleted: () => {
      Alert.alert('Success', 'Transaction created successfully!');
      setFormData({
        foodDetails: JSON.stringify({
          type: '',
          quantity: '',
          description: '',
        }),
        servingQuantity: '',
        expiryDate: '',
        pickupLocation: '',
        iscoolingRequired: false,
        moreReq: '',
        rating: '0',
        feedback: '',
        donar_id: '',
        ngo_id: '',
        volunteer_id: '',
      });
    },
    onError: (error) => {
      Alert.alert('Error', error.message);
    },
  });

  const handleSubmit = () => {
    if (!formData.servingQuantity || !formData.expiryDate || !formData.pickupLocation) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    try {
      const foodDetails = JSON.parse(formData.foodDetails);
      createTransaction({
        variables: {
          input: {
            ...formData,
            foodDetails,
            servingQuantity: parseInt(formData.servingQuantity),
            rating: parseFloat(formData.rating),
            status: TransactionStatus.PENDING,
          },
        },
      });
    } catch (err) {
      Alert.alert('Error', 'Invalid food details JSON');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create New Transaction</Text>

      <Text style={styles.sectionTitle}>Food Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Food Type"
        value={JSON.parse(formData.foodDetails).type}
        onChangeText={(text) => {
          const details = JSON.parse(formData.foodDetails);
          details.type = text;
          setFormData({ ...formData, foodDetails: JSON.stringify(details) });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={JSON.parse(formData.foodDetails).quantity}
        onChangeText={(text) => {
          const details = JSON.parse(formData.foodDetails);
          details.quantity = text;
          setFormData({ ...formData, foodDetails: JSON.stringify(details) });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={JSON.parse(formData.foodDetails).description}
        onChangeText={(text) => {
          const details = JSON.parse(formData.foodDetails);
          details.description = text;
          setFormData({ ...formData, foodDetails: JSON.stringify(details) });
        }}
        multiline
      />

      <Text style={styles.sectionTitle}>Transaction Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Serving Quantity *"
        value={formData.servingQuantity}
        onChangeText={(text) => setFormData({ ...formData, servingQuantity: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Expiry Date (YYYY-MM-DD) *"
        value={formData.expiryDate}
        onChangeText={(text) => setFormData({ ...formData, expiryDate: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup Location *"
        value={formData.pickupLocation}
        onChangeText={(text) => setFormData({ ...formData, pickupLocation: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Additional Requirements"
        value={formData.moreReq}
        onChangeText={(text) => setFormData({ ...formData, moreReq: text })}
        multiline
      />

      <Text style={styles.sectionTitle}>Parties Involved</Text>
      <TextInput
        style={styles.input}
        placeholder="Donar ID *"
        value={formData.donar_id}
        onChangeText={(text) => setFormData({ ...formData, donar_id: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="NGO ID *"
        value={formData.ngo_id}
        onChangeText={(text) => setFormData({ ...formData, ngo_id: text })}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Volunteer ID *"
        value={formData.volunteer_id}
        onChangeText={(text) => setFormData({ ...formData, volunteer_id: text })}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Creating...' : 'Create Transaction'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 32,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 