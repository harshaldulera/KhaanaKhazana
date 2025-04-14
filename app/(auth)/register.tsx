import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { router } from 'expo-router';

export default function RegisterScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: 'donor', // donor, ngo, volunteer
    address: '',
    // Additional fields for NGO
    ngoName: '',
    ngoRegistrationNumber: '',
    // Additional fields for Volunteer
    vehicleType: '',
    licenseNumber: '',
  });

  const handleRegister = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    if (formData.role === 'ngo' && (!formData.ngoName || !formData.ngoRegistrationNumber)) {
      Alert.alert('Error', 'Please fill in NGO details');
      return;
    }

    if (formData.role === 'volunteer' && (!formData.vehicleType || !formData.licenseNumber)) {
      Alert.alert('Error', 'Please fill in vehicle details');
      return;
    }

    // TODO: Implement GraphQL mutation for registration
    if(formData.role === 'donor') { 
      router.replace('/(donor)/dashboard');
    } else if (formData.role === 'ngo') {
      router.replace('/(ngo)/dashboard');
    } else {
      router.replace('/(volunteer)/dashboard');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join KhaanaKhazana</Text>

      <View style={styles.roleSelector}>
        <TouchableOpacity
          style={[styles.roleButton, formData.role === 'donor' && styles.selectedRole]}
          onPress={() => setFormData({...formData, role: 'donor'})}
        >
          <Text style={styles.roleText}>Donor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, formData.role === 'ngo' && styles.selectedRole]}
          onPress={() => setFormData({...formData, role: 'ngo'})}
        >
          <Text style={styles.roleText}>NGO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.roleButton, formData.role === 'volunteer' && styles.selectedRole]}
          onPress={() => setFormData({...formData, role: 'volunteer'})}
        >
          <Text style={styles.roleText}>Volunteer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.form}>
        <Text style={styles.label}>Full Name *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={formData.name}
          onChangeText={(text) => setFormData({...formData, name: text})}
        />

        <Text style={styles.label}>Email *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={formData.email}
          onChangeText={(text) => setFormData({...formData, email: text})}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Phone Number *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={formData.phone}
          onChangeText={(text) => setFormData({...formData, phone: text})}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Address *</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter your address"
          value={formData.address}
          onChangeText={(text) => setFormData({...formData, address: text})}
          multiline
        />

        <Text style={styles.label}>Password *</Text>
        <TextInput
          style={styles.input}
          placeholder="Create a password"
          value={formData.password}
          onChangeText={(text) => setFormData({...formData, password: text})}
          secureTextEntry
        />

        <Text style={styles.label}>Confirm Password *</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChangeText={(text) => setFormData({...formData, confirmPassword: text})}
          secureTextEntry
        />

        {formData.role === 'ngo' && (
          <>
            <Text style={styles.label}>NGO Name *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter NGO name"
              value={formData.ngoName}
              onChangeText={(text) => setFormData({...formData, ngoName: text})}
            />

            <Text style={styles.label}>NGO Registration Number *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter NGO registration number"
              value={formData.ngoRegistrationNumber}
              onChangeText={(text) => setFormData({...formData, ngoRegistrationNumber: text})}
            />
          </>
        )}

        {formData.role === 'volunteer' && (
          <>
            <Text style={styles.label}>Vehicle Type *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter vehicle type (e.g., Bike, Car)"
              value={formData.vehicleType}
              onChangeText={(text) => setFormData({...formData, vehicleType: text})}
            />

            <Text style={styles.label}>License Number *</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter vehicle license number"
              value={formData.licenseNumber}
              onChangeText={(text) => setFormData({...formData, licenseNumber: text})}
            />
          </>
        )}

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/login')}>
          <Text style={styles.loginText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    color: '#FF6B6B',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  roleSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  roleButton: {
    flex: 1,
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  selectedRole: {
    backgroundColor: '#FF6B6B',
  },
  roleText: {
    color: '#333',
    fontWeight: '500',
  },
  form: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#FF6B6B',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#FF6B6B',
  },
}); 