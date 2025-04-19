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
  ActivityIndicator,
  Modal
} from 'react-native';
import { Stack } from 'expo-router';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { useMutation } from '@apollo/client';
import { CREATE_DONATION } from '../../graphql/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@/constants/Colors';

const foodTypes = [
  { label: 'Vegetarian', value: 'VEG' },
  { label: 'Non-Vegetarian', value: 'NON_VEG' },
];

// Custom Simple Date Picker Component interface
interface CustomDatePickerProps {
  date: Date;
  onDateChange: (date: Date) => void;
  onClose: () => void;
  isVisible: boolean;
  title: string;
  minimumDate?: Date | null;
}

// Custom Simple Date Picker Component
const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ 
  date, 
  onDateChange, 
  onClose, 
  isVisible, 
  title, 
  minimumDate 
}) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [selectedTime, setSelectedTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
  });
  
  // Generate arrays for picker values
  const days: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const years: number[] = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i);
  const hours: number[] = Array.from({ length: 24 }, (_, i) => i);
  const minutes: number[] = Array.from({ length: 12 }, (_, i) => i * 5);
  
  const handleConfirm = (): void => {
    const newDate = new Date(selectedDate);
    newDate.setHours(selectedTime.hours);
    newDate.setMinutes(selectedTime.minutes);
    
    // Check if date is valid
    if (minimumDate && newDate < minimumDate) {
      Alert.alert('Invalid Date', 'Selected date cannot be before the minimum allowed date');
      return;
    }
    
    onDateChange(newDate);
    onClose();
  };
  
  const handleDateChange = (type: string, value: number | string): void => {
    const newDate = new Date(selectedDate);
    
    switch (type) {
      case 'day':
        if (typeof value === 'number') {
          newDate.setDate(value);
        }
        break;
      case 'month':
        if (typeof value === 'string') {
          newDate.setMonth(months.indexOf(value));
        }
        break;
      case 'year':
        if (typeof value === 'number') {
          newDate.setFullYear(value);
        }
        break;
    }
    
    setSelectedDate(newDate);
  };
  
  const handleTimeChange = (type: string, value: number): void => {
    setSelectedTime(prev => ({
      ...prev,
      [type]: value
    }));
  };
  
  const renderDayPickerItems = (
    items: number[], 
    current: number,
    onChange: (type: string, value: number) => void
  ) => {
    return items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.pickerItem,
          current === item ? styles.pickerItemSelected : null
        ]}
        onPress={() => onChange('day', item)}
      >
        <Text style={[
          styles.pickerItemText,
          current === item ? styles.pickerItemTextSelected : null
        ]}>
          {item}
        </Text>
      </TouchableOpacity>
    ));
  };

  const renderMonthPickerItems = (
    items: string[], 
    current: string,
    onChange: (type: string, value: string) => void
  ) => {
    return items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.pickerItem,
          current === item ? styles.pickerItemSelected : null
        ]}
        onPress={() => onChange('month', item)}
      >
        <Text style={[
          styles.pickerItemText,
          current === item ? styles.pickerItemTextSelected : null
        ]}>
          {item}
        </Text>
      </TouchableOpacity>
    ));
  };

  const renderYearPickerItems = (
    items: number[], 
    current: number,
    onChange: (type: string, value: number) => void
  ) => {
    return items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.pickerItem,
          current === item ? styles.pickerItemSelected : null
        ]}
        onPress={() => onChange('year', item)}
      >
        <Text style={[
          styles.pickerItemText,
          current === item ? styles.pickerItemTextSelected : null
        ]}>
          {item}
        </Text>
      </TouchableOpacity>
    ));
  };

  const renderTimePickerItems = (
    items: number[], 
    type: 'hour' | 'minute',
    current: number,
    onChange: (type: string, value: number) => void
  ): React.ReactNode => {
    return items.map((item, index) => (
      <TouchableOpacity
        key={index}
        style={[
          styles.pickerItem,
          current === item ? styles.pickerItemSelected : null
        ]}
        onPress={() => onChange(type, item)}
      >
        <Text style={[
          styles.pickerItemText,
          current === item ? styles.pickerItemTextSelected : null
        ]}>
          {item.toString().padStart(2, '0')}
        </Text>
      </TouchableOpacity>
    ));
  };
  
  if (!isVisible) return null;
  
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.pickerHeader}>
            <Text style={styles.pickerTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome name="times" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.pickerSectionTitle}>Date</Text>
          <View style={styles.datePickerContainer}>
            <View style={styles.pickerColumn}>
              <Text style={styles.pickerLabel}>Day</Text>
              <ScrollView 
                style={styles.pickerScroller}
                showsVerticalScrollIndicator={false}
              >
                {renderDayPickerItems(
                  days, 
                  selectedDate.getDate(), 
                  handleDateChange
                )}
              </ScrollView>
            </View>
            
            <View style={styles.pickerColumn}>
              <Text style={styles.pickerLabel}>Month</Text>
              <ScrollView 
                style={styles.pickerScroller}
                showsVerticalScrollIndicator={false}
              >
                {renderMonthPickerItems(
                  months, 
                  months[selectedDate.getMonth()], 
                  handleDateChange
                )}
              </ScrollView>
            </View>
            
            <View style={styles.pickerColumn}>
              <Text style={styles.pickerLabel}>Year</Text>
              <ScrollView 
                style={styles.pickerScroller}
                showsVerticalScrollIndicator={false}
              >
                {renderYearPickerItems(
                  years, 
                  selectedDate.getFullYear(), 
                  handleDateChange
                )}
              </ScrollView>
            </View>
          </View>
          
          <Text style={styles.pickerSectionTitle}>Time</Text>
          <View style={styles.timePickerContainer}>
            <View style={styles.pickerColumn}>
              <Text style={styles.pickerLabel}>Hour</Text>
              <ScrollView 
                style={styles.pickerScroller}
                showsVerticalScrollIndicator={false}
              >
                {renderTimePickerItems(
                  hours, 
                  'hour', 
                  selectedTime.hours, 
                  handleTimeChange
                )}
              </ScrollView>
            </View>
            
            <Text style={styles.timeSeparator}>:</Text>
            
            <View style={styles.pickerColumn}>
              <Text style={styles.pickerLabel}>Minute</Text>
              <ScrollView 
                style={styles.pickerScroller}
                showsVerticalScrollIndicator={false}
              >
                {renderTimePickerItems(
                  minutes, 
                  'minute', 
                  Math.floor(selectedTime.minutes / 5) * 5, 
                  handleTimeChange
                )}
              </ScrollView>
            </View>
          </View>
          
          <View style={styles.pickerActions}>
            <TouchableOpacity 
              style={styles.cancelButton} 
              onPress={onClose}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.confirmButton} 
              onPress={handleConfirm}
            >
              <Text style={styles.confirmText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

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
        pathname: "/(donor)/finding-volunteer" as any,
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

  const handlePickupDateChange = (selectedDate: Date) => {
    setPickupDate(selectedDate);
    
    // Update expiry date to be at least one hour after pickup date
    const newExpiryDate = new Date(selectedDate);
    newExpiryDate.setHours(newExpiryDate.getHours() + 1);
    
    if (expiryDate < newExpiryDate) {
      setExpiryDate(newExpiryDate);
    }
  };

  const handleExpiryDateChange = (selectedDate: Date) => {
    // Ensure expiry date is after pickup date
    if (selectedDate > pickupDate) {
      setExpiryDate(selectedDate);
    } else {
      Alert.alert('Invalid Date', 'Expiry date must be after pickup date');
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
            
            <CustomDatePicker
              date={pickupDate}
              onDateChange={handlePickupDateChange}
              onClose={() => setShowPickupPicker(false)}
              isVisible={showPickupPicker}
              title="Select Pickup Date & Time"
              minimumDate={new Date()}
            />
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
            
            <CustomDatePicker
              date={expiryDate}
              onDateChange={handleExpiryDateChange}
              onClose={() => setShowExpiryPicker(false)}
              isVisible={showExpiryPicker}
              title="Select Expiry Date & Time"
              minimumDate={new Date(pickupDate.getTime() + 60 * 60 * 1000)}
            />
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  pickerHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  pickerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  pickerSectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    marginBottom: 10,
  },
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  timePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  pickerColumn: {
    alignItems: 'center',
    width: '30%',
  },
  pickerLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  pickerScroller: {
    height: 120,
    width: '100%',
  },
  pickerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  pickerItemSelected: {
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    borderRadius: 5,
  },
  pickerItemText: {
    fontSize: 16,
    color: '#333',
  },
  pickerItemTextSelected: {
    color: Colors.light.tint,
    fontWeight: 'bold',
  },
  timeSeparator: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 10,
    marginTop: 30,
  },
  pickerActions: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cancelButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    width: '45%',
    alignItems: 'center',
  },
  confirmButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.light.tint,
    width: '45%',
    alignItems: 'center',
  },
  cancelText: {
    color: '#333',
    fontWeight: '500',
  },
  confirmText: {
    color: 'white',
    fontWeight: '500',
  },
}); 