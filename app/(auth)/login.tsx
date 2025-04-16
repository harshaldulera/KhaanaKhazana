import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { router } from "expo-router";
import { useLazyQuery } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const logo = require('@/assets/images/logo.png');

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");

  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
    onCompleted: async (data) => {
      let userData = null;
      
      if (role === 'donor' && data.donar && data.donar.length > 0) {
        userData = data.donar[0];
      } else if (role === 'ngo' && data.ngo && data.ngo.length > 0) {
        userData = data.ngo[0];
      } else if (role === 'volunteer' && data.volunteer && data.volunteer.length > 0) {
        userData = data.volunteer[0];
      }
      
      if (userData) {
        // Store user info in AsyncStorage
        await AsyncStorage.setItem('userInfo', JSON.stringify({
          id: userData.id,
          name: userData.name,
          email: userData.email,
          role: role
        }));
        
        // Navigate to appropriate dashboard
        switch (role) {
          case 'donor':
            router.replace("/(donor)/dashboard");
            break;
          case 'ngo':
            router.replace("/(ngo)/dashboard");
            break;
          case 'volunteer':
            router.replace("/(volunteer)/dashboard");
            break;
        }
      } else {
        Alert.alert('Login Failed', 'Invalid email or password');
      }
    },
    onError: (error) => {
      Alert.alert('Error', error.message || 'Something went wrong');
    }
  });

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }
    
    loginUser({
      variables: {
        email,
        password
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.signInBox}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        <View style={styles.roleSelector}>
          <TouchableOpacity
            style={[styles.roleButton, role === 'donor' && styles.selectedRole]}
            onPress={() => setRole('donor')}
          >
            <Text style={styles.roleText}>Donor</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, role === 'ngo' && styles.selectedRole]}
            onPress={() => setRole('ngo')}
          >
            <Text style={styles.roleText}>NGO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.roleButton, role === 'volunteer' && styles.selectedRole]}
            onPress={() => setRole('volunteer')}
          >
            <Text style={styles.roleText}>Volunteer</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity 
            style={[styles.button, loading && styles.buttonDisabled]} 
            onPress={handleLogin}
            disabled={loading}
          >
            <Text style={styles.buttonText}>
              {loading ? 'Signing In...' : 'Sign In'}
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.replace("/(auth)/registerscreen");
          }}
        >
          <Text style={styles.registerText}>or register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    height: 100,
    width: 100,
    alignSelf: "center",
    marginBottom: 24,
  },
  signInBox: {
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
  roleSelector: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "space-between",
  },
  roleButton: {
    flex: 1,
    padding: 12,
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: "#eee",
  },
  selectedRole: {
    backgroundColor: Colors.light.tint,
  },
  roleText: {
    fontWeight: "bold",
    color: "#333",
  },
  form: {
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    textAlign: "center",
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
