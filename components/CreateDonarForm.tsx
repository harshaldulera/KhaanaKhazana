import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useMutation } from '@apollo/client';
import { CREATE_DONAR } from '../graphql/mutations';

export function CreateDonarForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    kycdoc: '',
    CusineType: '',
  });

  const [createDonar, { loading }] = useMutation(CREATE_DONAR, {
    onCompleted: () => {
      Alert.alert('Success', 'Donar created successfully!');
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        kycdoc: '',
        CusineType: '',
      });
    },
    onError: (error) => {
      Alert.alert('Error', error.message);
    },
  });

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.address) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    createDonar({
      variables: {
        input: formData,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Donar</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name *"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email *"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        keyboardType="email-address"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Phone Number *"
        value={formData.phoneNumber}
        onChangeText={(text) => setFormData({ ...formData, phoneNumber: text })}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Address *"
        value={formData.address}
        onChangeText={(text) => setFormData({ ...formData, address: text })}
      />
      
      <TextInput
        style={styles.input}
        placeholder="KYC Document URL"
        value={formData.kycdoc}
        onChangeText={(text) => setFormData({ ...formData, kycdoc: text })}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Cuisine Type"
        value={formData.CusineType}
        onChangeText={(text) => setFormData({ ...formData, CusineType: text })}
      />
      
      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Creating...' : 'Create Donar'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 