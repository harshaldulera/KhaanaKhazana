import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StatusBar,
} from "react-native";
import { Stack, router } from "expo-router";
import { Colors } from "../../constants/Colors";
import CarouselCards from "@/components/carouselcards";
import { FontAwesome5 } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Donation options data
const donationOptions = [
  {
    id: "food",
    title: "Donate Food",
    icon: "utensils",
    description: "Share excess food from events or restaurants",
    route: "/(donor)/donate" as const,
    color: "#FF6B6B",
  },
  {
    id: "grocery",
    title: "Donate Grocery",
    icon: "shopping-basket",
    description: "Contribute essential grocery items",
    route: "/(donor)/donate" as const,
    color: "#4ECDC4",
  },
  {
    id: "money",
    title: "Donate Money",
    icon: "hand-holding-heart",
    description: "Support food distribution programs",
    route: "/(donor)/donate" as const,
    color: "#FF9F1C",
  },
];

// Recent NGOs data
const recentNGOs = [
  {
    id: "1",
    name: "The RobinHood",
    image: require("../../assets/images/robinhood.jpg"),
    route: "/(donor)/ngolist" as const,
  },
  {
    id: "2",
    name: "Humana",
    image: require("../../assets/images/humana.jpg"),
    route: "/(donor)/ngolist" as const,
  },
  {
    id: "3",
    name: "Seva Foundation",
    image: require("../../assets/images/logo.png"),
    route: "/(donor)/ngolist" as const,
  },
];

export default function DonorDashboard() {
  const [userName, setUserName] = useState("Donor");

  useEffect(() => {
    loadUserInfo();
  }, []);

  const loadUserInfo = async () => {
    try {
      const userInfo = await AsyncStorage.getItem("userInfo");
      if (userInfo) {
        const parsedInfo = JSON.parse(userInfo);
        if (parsedInfo.name) {
          setUserName(parsedInfo.name.split(" ")[0]);
        }
      }
    } catch (error) {
      console.error("Error loading user info:", error);
    }
  };

  const handleDonationPress = (
    route: (typeof donationOptions)[number]["route"]
  ) => {
    router.push(route);
  };

  const handleNGOPress = (route: (typeof recentNGOs)[number]["route"]) => {
    router.push(route);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.light.tint} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Stack.Screen
          options={{
            title: "Donor Dashboard",
            headerShown: false,
          }}
        />

        {/* Welcome Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.greeting}>Hello, {userName}!</Text>
            <Text style={styles.welcomeText}>Welcome to ShareBite</Text>

            <View style={styles.statsRow}>
              <View style={styles.statCard}>
                <View style={styles.statIconContainer}>
                  <FontAwesome5 name="hands-helping" size={18} color="#fff" />
                </View>
                <View>
                  <Text style={styles.statValue}>1000+</Text>
                  <Text style={styles.statLabel}>Meals Donated</Text>
                </View>
              </View>

              <View style={styles.statCard}>
                <View
                  style={[
                    styles.statIconContainer,
                    { backgroundColor: "#FF9F1C" },
                  ]}
                >
                  <FontAwesome5 name="heart" size={18} color="#fff" />
                </View>
                <View>
                  <Text style={styles.statValue}>500+</Text>
                  <Text style={styles.statLabel}>Lives Impacted</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Make a Difference Today</Text>
          <View style={styles.quickActions}>
            {donationOptions.map((option) => (
              <TouchableOpacity
                key={option.id}
                style={[styles.actionButton, { backgroundColor: option.color }]}
                onPress={() => handleDonationPress(option.route)}
              >
                <View style={styles.actionIconContainer}>
                  <FontAwesome5 name={option.icon} size={20} color="#fff" />
                </View>
                <Text style={styles.actionTitle}>{option.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Carousel Section */}
        <View style={styles.carouselSection}>
          <Text style={styles.sectionTitle}>Current Initiatives</Text>
          <CarouselCards />
        </View>

        {/* NGO Section */}
        <View style={styles.ngoSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Featured NGOs</Text>
            <TouchableOpacity onPress={() => router.push("/(donor)/ngolist")}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.ngoScrollView}
          >
            {recentNGOs.map((ngo) => (
              <TouchableOpacity
                key={ngo.id}
                style={styles.ngoCard}
                onPress={() => handleNGOPress(ngo.route)}
              >
                <Image source={ngo.image} style={styles.ngoImage} />
                <Text style={styles.ngoName}>{ngo.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Impact Message */}
        <View style={styles.impactMessage}>
          <FontAwesome5
            name="quote-left"
            size={20}
            color="#FF6B6B"
            style={styles.quoteIcon}
          />
          <Text style={styles.impactMessageText}>
            Every donation counts. Your generosity can bring a smile to
            someone's face today.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.light.tint,
  },
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  header: {
    backgroundColor: Colors.light.tint,
    paddingBottom: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "500",
    color: "rgba(255, 255, 255, 0.9)",
    marginBottom: 4,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 12,
    padding: 12,
    width: "48%",
  },
  statIconContainer: {
    backgroundColor: "#4ECDC4",
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  statLabel: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.9)",
  },
  quickActionsContainer: {
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4.65,
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 15,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionButton: {
    width: "31%",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  actionIconContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  actionTitle: {
    fontSize: 13,
    fontWeight: "500",
    color: "#fff",
    textAlign: "center",
  },
  carouselSection: {
    backgroundColor: "#f6f6f6",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  ngoSection: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    backgroundColor: "#fff",
    marginHorizontal: 15,
    marginTop: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.light.tint,
    fontWeight: "500",
  },
  ngoScrollView: {
    flexDirection: "row",
  },
  ngoCard: {
    width: 100,
    marginRight: 15,
    alignItems: "center",
  },
  ngoImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  ngoName: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#333",
  },
  impactMessage: {
    backgroundColor: "#fff",
    margin: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 30,
  },
  quoteIcon: {
    marginBottom: 10,
  },
  impactMessageText: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    fontWeight: "500",
  },
});
