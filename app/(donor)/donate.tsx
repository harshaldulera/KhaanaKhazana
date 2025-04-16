import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
  KeyboardAvoidingView,
  Switch
} from 'react-native';
import { Stack } from 'expo-router';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { useMutation } from '@apollo/client';
import { CREATE_DONATION } from '../../graphql/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/constants/Colors';

const foodTypes = [
  { label: 'VEG', value: 'VEG' },
  { label: 'NON_VEG', value: 'NON_VEG' },
];

export default function DonateScreen() {
  const [userId, setUserId] = useState(null);
  const [foodDetails, setFoodDetails] = useState('');
  const [quantity, setQuantity] = useState('');
  const [foodType, setFoodType] = useState(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date(Date.now() + 24 * 60 * 60 * 1000)); // Default to 24 hours from now
  const [showPickupPicker, setShowPickupPicker] = useState(false);
  const [showExpiryPicker, setShowExpiryPicker] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isCoolingRequired, setIsCoolingRequired] = useState(false);

  const [createDonation, { loading }] = useMutation(CREATE_DONATION, {
    onCompleted: (data) => {
      Alert.alert(
        'Success!', 
        'Your donation has been created. We will find an NGO to accept your donation.',
        [
          { 
            text: 'Track Donation', 
            onPress: () => router.push({
              pathname: '/(donor)/tracking',
              params: { donationId: data.insert_donar_transaction_one.id }
            })
          }
        ]
      );
      resetForm();
    },
    onError: (error) => {
      Alert.alert('Error', error.message || 'There was an error creating your donation');
    }
  });

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem('userInfo');
      if (userInfo) {
        const parsedInfo = JSON.parse(userInfo);
        setUserId(parsedInfo.id);
      } else {
        Alert.alert('Error', 'Please log in to donate');
        router.replace('/(auth)/login');
      }
    } catch (error) {
      console.error('Error loading user info:', error);
    }
  };

  const resetForm = () => {
    setFoodDetails('');
    setQuantity('');
    setFoodType(null);
    setPickupLocation('');
    setPickupDate(new Date());
    setExpiryDate(new Date(Date.now() + 24 * 60 * 60 * 1000));
    setAdditionalNotes('');
  };

  const handlePickupDateChange = (event, selectedDate) => {
    setShowPickupPicker(Platform.OS === 'ios');
    if (selectedDate) {
      setPickupDate(selectedDate);
      
      // Update expiry date to be at least one hour after pickup date
      const newExpiryDate = new Date(selectedDate);
      newExpiryDate.setHours(newExpiryDate.getHours() + 1);
      
      if (expiryDate < newExpiryDate) {
        setExpiryDate(newExpiryDate);
      }
    }
  };

  const handleExpiryDateChange = (event, selectedDate) => {
    setShowExpiryPicker(Platform.OS === 'ios');
    if (selectedDate) {
      // Ensure expiry date is after pickup date
      if (selectedDate > pickupDate) {
        setExpiryDate(selectedDate);
      } else {
        Alert.alert('Invalid Date', 'Expiry date must be after pickup date');
      }
    }
  };

  const handleSubmit = () => {
    if (!userId) {
      Alert.alert('Error', 'Please log in to donate');
      return;
    }

    if (!foodDetails || !quantity || !foodType || !pickupLocation) {
      Alert.alert('Missing Information', 'Please fill in all required fields');
      return;
    }

    createDonation({
      variables: {
        input: {
          donar_id: userId,
          food_details: foodDetails,
          serving_quantity: parseInt(quantity, 10),
          food_type: foodType,
          pickup_location: pickupLocation,
          pickup_time: pickupDate.toISOString(),
          expiry_date: expiryDate.toISOString(),
          special_instructions: additionalNotes,
          status: 'PENDING',
          is_cooling_required : isCoolingRequired
        }
      }
    });
  };

  const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <Stack.Screen
          options={{
            title: 'Donate Food',
            headerShown: true,
          }}
        />

        <View style={styles.form}>
          <Text style={styles.title}>Donate Food</Text>
          <Text style={styles.subtitle}>Fill in the details below to donate food </Text>

          <View style={styles.formField}>
            <Text style={styles.label}>Food Description*</Text>
            <TextInput
              style={styles.input}
              placeholder="Describe the food you're donating"
              value={foodDetails}
              onChangeText={setFoodDetails}
              multiline
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Quantity (servings)*</Text>
            <TextInput
              style={styles.input}
              placeholder="Number of servings"
              value={quantity}
              onChangeText={setQuantity}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Food Type*</Text>
            <Dropdown
              style={styles.dropdown}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={foodTypes}
              labelField="label"
              valueField="value"
              placeholder="Select food type"
              value={foodType}
              onChange={(item) => {
                setFoodType(item.value);
              }}
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Pickup Location*</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter pickup address"
              value={pickupLocation}
              onChangeText={setPickupLocation}
              multiline
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Pickup Date & Time*</Text>
            <TouchableOpacity 
              style={styles.dateInput}
              onPress={() => setShowPickupPicker(true)}
            >
              <Text>{formatDate(pickupDate)}</Text>
              <FontAwesome name="calendar" size={20} color="#666" />
            </TouchableOpacity>
            {showPickupPicker && (
              <DateTimePicker
                value={pickupDate}
                mode="datetime"
                display="default"
                onChange={handlePickupDateChange}
                minimumDate={new Date()}
              />
            )}
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Expiry Date & Time*</Text>
            <TouchableOpacity 
              style={styles.dateInput}
              onPress={() => setShowExpiryPicker(true)}
            >
              <Text>{formatDate(expiryDate)}</Text>
              <FontAwesome name="calendar" size={20} color="#666" />
            </TouchableOpacity>
            {showExpiryPicker && (
              <DateTimePicker
                value={expiryDate}
                mode="datetime"
                display="default"
                onChange={handleExpiryDateChange}
                minimumDate={pickupDate}
              />
            )}
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Additional Notes</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Any special requirements or notes"
              value={additionalNotes}
              onChangeText={setAdditionalNotes}
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.formField}> 
            <Text style={styles.label}>is cooling required?</Text>
            <Switch
              value={isCoolingRequired}
              onValueChange={setIsCoolingRequired}
              trackColor={{
                true: Colors.light.tint,
                false: '#ccc',
              }}
            />
          </View>

          <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]} 
            onPress={handleSubmit}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Submitting...' : 'Donate Now'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: Colors.light.tint,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 24,
  },
  formField: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  dropdown: {
    height: 56,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dateInput: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#aaa',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 