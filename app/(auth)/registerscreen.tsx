import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useMutation } from '@apollo/client';
import { CREATE_DONOR, CREATE_NGO, CREATE_VOLUNTEER } from '../../graphql/mutations';

const roles = [
  { label: "Donor", value: "donor" },
  { label: "NGO", value: "ngo" },
  { label: "Volunteer", value: "volunteer" },
];

const cuisines = [
  { label: "Grocery", value: "grocery" },
  { label: "Multicuisine", value: "multicuisine" },
  { label: "Italian", value: "italian" },
  { label: "Indian", value: "indian" },
  { label: "Chinese", value: "chinese" },
];

const ngoTypes = [
  { label: "Trust", value: "trust" },
  { label: "Society", value: "society" },
  { label: "Section 8 Company", value: "section8" },
  { label: "Other", value: "other" },
];

const areasOfOperation = [
  { label: "City-wide", value: "city" },
  { label: "State-wide", value: "state" },
  { label: "National", value: "national" },
];

const donationTypes = [
  { label: "Cooked Food", value: "cooked" },
  { label: "Packaged", value: "packaged" },
  { label: "Groceries", value: "groceries" },
  { label: "Others", value: "others" },
];

const RegisterScreen = () => {
  const [role, setRole] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  // const [aadharNumber, setAadharNumber] = useState("");
  const [ngoName, setNgoName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [yearOfEstablishment, setYearOfEstablishment] = useState("");
  const [ngoType, setNgoType] = useState(null);
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [alternateContactNumber, setAlternateContactNumber] = useState("");
  const [pickupCapacity, setPickupCapacity] = useState("");
  const [storageFacility, setStorageFacility] = useState(null);
  const [areasOfOperationSelected, setAreasOfOperationSelected] = useState("");
  const [preferredDonationTypes, setPreferredDonationTypes] = useState("");
  const [cuisineType, setCuisineType] = useState(null);
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [vehicleType, setVehicleType] = useState(null);
  const [kycDocumentLink, setKycDocumentLink] = useState("");

  const [createDonor] = useMutation(CREATE_DONOR);
  const [createDonor] = useMutation(CREATE_DONOR);
  const [createNGO] = useMutation(CREATE_NGO);
  const [createVolunteer] = useMutation(CREATE_VOLUNTEER);

  const handleRegister = async () => {
    try {
      if (!role) {
        Alert.alert("Error", "Please select a role");
        return;
      }

      let response;
      switch (role) {
        case 'donor':
          if (!fullName || !email || !password || !address || !contactNumber) {
            Alert.alert('Error', 'Please fill in all required fields');
            return;
          }
          response = await createDonor({
          response = await createDonor({
            variables: {
              input: {
                name: fullName,
                email,
                password,
                phone_number: contactNumber,
                address,
                cuisine_type: cuisineType || null,
                kyc_document: aadharNumber || "pending"
              }
            }
          });
          break;

        case "ngo":
          if (
            !ngoName ||
            !registrationNumber ||
            !yearOfEstablishment ||
            !ngoType ||
            !contactNumber ||
            !email ||
            !address ||
            !state ||
            !city ||
            !pinCode
          ) {
            Alert.alert("Error", "Please fill in all required fields");
            return;
          }
          response = await createNGO({
            variables: {
              input: {
                name: ngoName,
                registrationNumber,
                yearOfEstablishment,
                type: ngoType,
                website,
                description,
                phoneNumber: contactNumber, 
                pocPhoneNumber: alternateContactNumber,
                pocName: fullName,
                email,
                password,
                address,
                state,
                city,
                pinCode,
                kycdoc: registrationNumber,
                areasOfOperation: areasOfOperationSelected,
                preferredDonationTypes,
                pickupCapacity,
                storageFacility,
              },
            },
          });
          break;

        case "volunteer":
          if (
            !fullName ||
            !email ||
            !password ||
            !contactNumber ||
            !vehicleNumber ||
            !vehicleType ||
            !kycDocumentLink
          ) {
            Alert.alert("Error", "Please fill in all required fields");
            return;
          }
          response = await createVolunteer({
            variables: {
              input: {
                name: fullName,
                email,
                password,
                phoneNumber: contactNumber,
                currentLocation: address,
                city,
                state,
                pinCode,
                kycdoc: aadharNumber,
                availability: "Available"
              }
            }
          });
          break;
      }

      if (response?.data) {
        Alert.alert("Success", "Registration successful!");
        // Navigate to appropriate dashboard based on role
        if (role === "donor") {
          router.replace("/(donor)/dashboard");
        } else if (role === "ngo") {
          router.replace("/(ngo)/dashboard");
        } else if (role === "volunteer") {
          router.replace("/(volunteer)/dashboard");
        }
      }
    } catch (error: any) {
      Alert.alert(
        "Error",
        error?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Register As</Text>

      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={roles}
        labelField="label"
        valueField="value"
        placeholder="Select Role"
        value={role}
        onChange={(item) => {
          setRole(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="user" size={20} />
        )}
      />

      {role === "donor" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
            multiline
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={cuisines}
            labelField="label"
            valueField="value"
            placeholder="Select Cuisine Type"
            value={cuisineType}
            onChange={(item) => {
              setCuisineType(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="fork"
                size={20}
              />
            )}
          />
          <TextInput
            style={styles.input}
            placeholder="Document Link (Google Drive/Dropbox URL)"
            value={registrationNumber}
            onChangeText={setRegistrationNumber}
            autoCapitalize="none"
            keyboardType="url"
          />
        </>
      )}

      {role === "ngo" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="NGO Name"
            value={ngoName}
            onChangeText={setNgoName}
          />
          <TextInput
            style={styles.input}
            placeholder="Registration Number"
            value={registrationNumber}
            onChangeText={setRegistrationNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="NGO Website (optional)"
            value={website}
            onChangeText={setWebsite}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="NGO Description / Mission Statement"
            value={description}
            onChangeText={setDescription}
            multiline
          />
          <TextInput
            style={styles.input}
            placeholder="POC Name"
            value={contactNumber}
            onChangeText={setContactNumber}
          />
          <TextInput
            style={styles.input}
            placeholder="Contact Number (with OTP verification)"
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Alternate Contact Number (optional)"
            value={alternateContactNumber}
            onChangeText={setAlternateContactNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Official Address"
            value={address}
            onChangeText={setAddress}
          />
        </>
      )}

      {role === "volunteer" && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Vehicle Number"
            value={vehicleNumber}
            onChangeText={setVehicleNumber}
            autoCapitalize="characters"
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={[
              { label: "Two Wheeler", value: "two_wheeler" },
              { label: "Three Wheeler", value: "three_wheeler" },
              { label: "Four Wheeler", value: "four_wheeler" },
              { label: "Mini Truck", value: "mini_truck" },
            ]}
            labelField="label"
            valueField="value"
            placeholder="Select Vehicle Type"
            value={vehicleType}
            onChange={(item) => {
              setVehicleType(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="car"
                size={20}
              />
            )}
          />
          <TextInput
            style={styles.input}
            placeholder="KYC Document Link (Google Drive/Dropbox URL)"
            value={kycDocumentLink}
            onChangeText={setKycDocumentLink}
            autoCapitalize="none"
            keyboardType="url"
          />
        </>
      )}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    // justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    marginBottom: 10,
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
export default RegisterScreen;

