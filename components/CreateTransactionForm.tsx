import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useMutation } from '@apollo/client';
import { CREATE_TRANSACTION } from '../graphql/mutations';
import { TransactionStatus } from '../types/graphql';
import { Colors } from '@/constants/Colors';
import * as Animatable from 'react-native-animatable';
import { router } from 'expo-router';
import { AntDesign } from "@expo/vector-icons";

export function CreateTransactionForm() {
  const [showSuccess, setShowSuccess] = useState(false);
  const scrollViewRef = useRef(null);

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
      setShowSuccess(true);
      
      scrollViewRef.current?.scrollTo({ x: 0, y: 0, animated: true });
      
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

      setTimeout(() => {
        router.replace('/(donor)/dashboard');
      }, 2000);
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
    <ScrollView 
      ref={scrollViewRef}
      style={styles.container}
    >
      {showSuccess ? (
        <Animatable.View 
          animation="bounceIn" 
          style={styles.successContainer}
          duration={1500}
        >
          <AntDesign name="checkcircle" size={80} color={Colors.light.tint} />
          <Animatable.Text 
            animation="fadeInUp"
            delay={500}
            style={styles.successText}
          >
            Donation Created Successfully!
          </Animatable.Text>
          <Animatable.Text 
            animation="fadeInUp"
            delay={1000}
            style={styles.redirectText}
          >
            Redirecting to dashboard...
          </Animatable.Text>
        </Animatable.View>
      ) : (
        <>
          <Text style={styles.title}>Donate Food</Text>

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
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Creating...' : 'Donate'}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </ScrollView>
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
    backgroundColor: Colors.light.tint,
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
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 100,
    backgroundColor: '#fff',
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginTop: 20,
    textAlign: 'center',
  },
  redirectText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
  },
}); 