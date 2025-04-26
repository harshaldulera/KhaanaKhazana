import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SupportScreen() {
  const supportItems = [
    {
      title: "FAQs",
      icon: "help-circle-outline",
      description: "Find answers to commonly asked questions",
    },
    {
      title: "Contact Us",
      icon: "mail-outline",
      description: "Get in touch with our support team",
    },
    {
      title: "Report an Issue",
      icon: "warning-outline",
      description: "Report technical problems or bugs",
    },
    {
      title: "Feedback",
      icon: "chatbubble-outline",
      description: "Share your thoughts and suggestions",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Help & Support</Text>
      </View>

      <View style={styles.content}>
        {supportItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.supportItem}>
            <View style={styles.iconContainer}>
              <Ionicons name={item.icon as any} size={24} color="#007AFF" />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#ccc" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.contactTitle}>Contact Information</Text>
        <Text style={styles.contactText}>Email: support@ShareBite .com</Text>
        <Text style={styles.contactText}>Phone: +1 (555) 123-4567</Text>
        <Text style={styles.contactText}>
          Hours: Mon-Fri, 9:00 AM - 6:00 PM
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: {
    marginRight: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
  supportItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  itemDescription: {
    fontSize: 14,
    color: "#666",
  },
  contactInfo: {
    margin: 20,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  contactText: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
});
