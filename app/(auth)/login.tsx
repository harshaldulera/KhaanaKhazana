import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { Text, View } from "react-native";
import { Colors } from "../../constants/Colors";
import { router } from "expo-router";
import logo from "@/assets/images/logo.png";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "Please enter a valid email");
      return;
    }

    // Here you would typically make an API call to validate credentials
    // For now, we'll just navigate to the main app
    router.replace("/(auth)/registerscreen");
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.signInBox}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
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
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Sign In</Text>
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
    padding: 20,
    backgroundColor: Colors.light.background,
    justifyContent: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.text,
    marginBottom: 8,
    alignSelf: "center",
  },
  signInBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  registerText: {
    fontSize: 14,
    color: Colors.light.text,
    textAlign: "center",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.light.icon,
    marginBottom: 32,
    alignSelf: "center",
  },
  form: {
    gap: 16,
  },
  input: {
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  logo: {
    width: 200,
    height: 150,
    marginBottom: 5,
    alignSelf: "center",
  },
});
