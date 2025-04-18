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
  Switch,
  ActivityIndicator
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
  { label: 'Vegetarian', value: 'VEG' },
  { label: 'Non-Vegetarian', value: 'NON_VEG' },
];

export default function DonateScreen() {
  const [userId, setUserId] = useState<string | null>(null);
  const [foodDetails, setFoodDetails] = useState('');
  const [quantity, setQuantity] = useState('');
  const [foodType, setFoodType] = useState<string | null>(null);
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState(new Date());
  const [expiryDate, setExpiryDate] = useState(new Date(Date.now() + 24 * 60 * 60 * 1000));
  const [showPickupPicker, setShowPickupPicker] = useState(false);
  const [showExpiryPicker, setShowExpiryPicker] = useState(false);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [isCoolingRequired, setIsCoolingRequired] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [createDonation] = useMutation(CREATE_DONATION, {
    onCompleted: (data) => {
      setIsSubmitting(false);
      router.replace({
        pathname: '/(donor)/finding-volunteer',
        params: { donationId: data.insert_donar_transaction_one.id }
      });
      resetForm();
    },
    onError: (error) => {
      setIsSubmitting(false);
      Alert.alert('Error', error.message || 'There was an error creating your donation. Please try again.');
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
      Alert.alert('Error', 'Failed to load user information. Please try logging in again.');
      router.replace('/(auth)/login');
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
    setIsCoolingRequired(false);
  };

  const handlePickupDateChange = (event: any, selectedDate?: Date) => {
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

  const handleExpiryDateChange = (event: any, selectedDate?: Date) => {
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

  const validateForm = () => {
    if (!foodDetails.trim()) {
      Alert.alert('Error', 'Please enter food description');
      return false;
    }
    if (!quantity || parseInt(quantity) <= 0) {
      Alert.alert('Error', 'Please enter a valid quantity');
      return false;
    }
    if (!foodType) {
      Alert.alert('Error', 'Please select food type');
      return false;
    }
    if (!pickupLocation.trim()) {
      Alert.alert('Error', 'Please enter pickup location');
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!userId) {
      Alert.alert('Error', 'Please log in to donate');
      router.replace('/(auth)/login');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    try {
      await createDonation({
        variables: {
          input: {
            donar_id: userId,
            food_details: foodDetails.trim(),
            serving_quantity: parseInt(quantity, 10),
            food_type: foodType,
            pickup_location: pickupLocation.trim(),
            pickup_time: pickupDate.toISOString(),
            expiry_date: expiryDate.toISOString(),
            special_instructions: additionalNotes.trim(),
            status: 'PENDING',
            is_cooling_required: isCoolingRequired
          }
        }
      });
    } catch (error) {
      setIsSubmitting(false);
      Alert.alert('Error', 'Failed to create donation. Please try again.');
    }
  };

  const formatDate = (date: Date) => {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardView}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Stack.Screen
          options={{
            title: 'Donate Food',
            headerShown: true,
            headerStyle: {
              backgroundColor: Colors.light.tint,
            },
            headerTintColor: '#fff',
          }}
        />

        <View style={styles.form}>
          <Text style={styles.title}>Donate Food</Text>
          <Text style={styles.subtitle}>Fill in the details below to donate food</Text>

          <View style={styles.formField}>
            <Text style={styles.label}>Food Description*</Text>
            <TextInput
              style={styles.input}
              placeholder="Describe the food you're donating"
              value={foodDetails}
              onChangeText={setFoodDetails}
              multiline
              maxLength={200}
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Quantity (servings)*</Text>
            <TextInput
              style={styles.input}
              placeholder="Number of servings"
              value={quantity}
              onChangeText={(text) => setQuantity(text.replace(/[^0-9]/g, ''))}
              keyboardType="numeric"
              maxLength={4}
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
              onChange={(item) => setFoodType(item.value)}
            />
          </View>

          <View style={styles.formField}>
            <Text style={styles.label}>Pickup Location*</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Enter complete pickup address"
              value={pickupLocation}
              onChangeText={setPickupLocation}
              multiline
              numberOfLines={3}
              maxLength={300}
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
              maxLength={500}
            />
          </View>

          <View style={styles.switchField}>
            <Text style={styles.label}>Cooling Required?</Text>
            <Switch
              value={isCoolingRequired}
              onValueChange={setIsCoolingRequired}
              trackColor={{
                true: Colors.light.tint,
                false: '#ccc',
              }}
              thumbColor={isCoolingRequired ? Colors.light.tint : '#f4f3f4'}
            />
          </View>

          <TouchableOpacity 
            style={[styles.button, isSubmitting && styles.buttonDisabled]} 
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Donate Now</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
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
  switchField: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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