import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

export default function NGOSettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [autoAccept, setAutoAccept] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Settings',
          headerShown: true,
        }}
      />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <SettingRow
          icon="bell"
          label="Push Notifications"
          value={notifications}
          onValueChange={setNotifications}
        />
        <SettingRow
          icon="envelope"
          label="Email Alerts"
          value={emailAlerts}
          onValueChange={setEmailAlerts}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Donations</Text>
        <SettingRow
          icon="check-circle"
          label="Auto-accept Donations"
          value={autoAccept}
          onValueChange={setAutoAccept}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Appearance</Text>
        <SettingRow
          icon="moon-o"
          label="Dark Mode"
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.linkRow}>
          <FontAwesome name="user" size={20} color={Colors.light.tint} style={styles.icon} />
          <Text style={styles.linkText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkRow}>
          <FontAwesome name="lock" size={20} color={Colors.light.tint} style={styles.icon} />
          <Text style={styles.linkText}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkRow}>
          <FontAwesome name="shield" size={20} color={Colors.light.tint} style={styles.icon} />
          <Text style={styles.linkText}>Privacy Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Support</Text>
        <TouchableOpacity style={styles.linkRow}>
          <FontAwesome name="question-circle" size={20} color={Colors.light.tint} style={styles.icon} />
          <Text style={styles.linkText}>Help Center</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkRow}>
          <FontAwesome name="file-text" size={20} color={Colors.light.tint} style={styles.icon} />
          <Text style={styles.linkText}>Terms of Service</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkRow}>
          <FontAwesome name="info-circle" size={20} color={Colors.light.tint} style={styles.icon} />
          <Text style={styles.linkText}>About</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function SettingRow({ icon, label, value, onValueChange }: { 
  icon: string; 
  label: string; 
  value: boolean; 
  onValueChange: (value: boolean) => void;
}) {
  return (
    <View style={styles.settingRow}>
      <View style={styles.settingLeft}>
        <FontAwesome name={icon} size={20} color={Colors.light.tint} style={styles.icon} />
        <Text style={styles.settingLabel}>{label}</Text>
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{ false: '#767577', true: Colors.light.tint }}
        thumbColor="#fff"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.light.tint,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  icon: {
    marginRight: 16,
    width: 24,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  linkText: {
    fontSize: 16,
    color: '#333',
  },
}); 