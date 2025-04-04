import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";

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
  const [aadharNumber, setAadharNumber] = useState("");
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

  const handleRegister = () => {
    router.replace("/(tabs)");
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
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            onChangeText={setState}
          />
          <TextInput
            style={styles.input}
            placeholder="Pin Code"
            value={pinCode}
            onChangeText={setPinCode}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Aadhar Number"
            value={aadharNumber}
            onChangeText={setAadharNumber}
            keyboardType="numeric"
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
            placeholder="Year of Establishment"
            value={yearOfEstablishment}
            onChangeText={setYearOfEstablishment}
            keyboardType="numeric"
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={ngoTypes}
            labelField="label"
            valueField="value"
            placeholder="Type of NGO"
            value={ngoType}
            onChange={(item) => {
              setNgoType(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="home"
                size={20}
              />
            )}
          />
          <TextInput
            style={styles.input}
            placeholder="NGO Website (optional)"
            value={website}
            onChangeText={setWebsite}
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
            placeholder="Representative Name"
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
            placeholder="Email Address (verified)"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Official Address"
            value={address}
            onChangeText={setAddress}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            onChangeText={setState}
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            style={styles.input}
            placeholder="PIN Code"
            value={pinCode}
            onChangeText={setPinCode}
            keyboardType="numeric"
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={areasOfOperation}
            labelField="label"
            valueField="value"
            placeholder="Areas of Operation"
            value={areasOfOperationSelected}
            onChange={(item) => {
              setAreasOfOperationSelected(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                // name="environment"
                size={20}
              />
            )}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={donationTypes}
            labelField="label"
            valueField="value"
            placeholder="Preferred Donation Types"
            value={preferredDonationTypes}
            onChange={(item) => {
              setPreferredDonationTypes(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="gift"
                size={20}
              />
            )}
          />
          <TextInput
            style={styles.input}
            placeholder="Available Pickup Capacity"
            value={pickupCapacity}
            onChangeText={setPickupCapacity}
          />
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={[
              { label: "Yes", value: "yes" },
              { label: "No", value: "no" },
            ]}
            labelField="label"
            valueField="value"
            placeholder="Storage Facility Available?"
            value={storageFacility}
            onChange={(item) => {
              setStorageFacility(item.value);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color="black"
                name="checkcircle"
                size={20}
              />
            )}
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
          />
          <TextInput
            style={styles.input}
            placeholder="City"
            value={city}
            onChangeText={setCity}
          />
          <TextInput
            style={styles.input}
            placeholder="State"
            value={state}
            onChangeText={setState}
          />
          <TextInput
            style={styles.input}
            placeholder="PIN Code"
            value={pinCode}
            onChangeText={setPinCode}
            keyboardType="numeric"
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
