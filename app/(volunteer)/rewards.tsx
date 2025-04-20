import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import { Stack } from 'expo-router';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Badge {
  name: string;
  icon: 'medal' | 'crown';
  color: string;
  deliveries: number;
  description: string;
}

const BADGE_LEVELS: Badge[] = [
  {
    name: 'Bronze Volunteer',
    icon: 'medal',
    color: '#CD7F32',
    deliveries: 10,
    description: 'Complete 10 deliveries to earn this badge',
  },
  {
    name: 'Silver Volunteer',
    icon: 'medal',
    color: '#C0C0C0',
    deliveries: 50,
    description: 'Complete 50 deliveries to earn this badge',
  },
  {
    name: 'Gold Volunteer',
    icon: 'medal',
    color: '#FFD700',
    deliveries: 100,
    description: 'Complete 100 deliveries to earn this badge',
  },
  {
    name: 'Platinum Hero',
    icon: 'crown',
    color: '#E5E4E2',
    deliveries: 200,
    description: 'Complete 200 deliveries to become a Platinum Hero',
  },
];

export default function RewardsScreen() {
  const [totalDeliveries, setTotalDeliveries] = useState<number>(0);
  const [currentBadge, setCurrentBadge] = useState<Badge | null>(null);
  const [nextBadge, setNextBadge] = useState<Badge | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadDeliveryCount();
  }, []);

  const loadDeliveryCount = async () => {
    try {
      // In a real app, this would come from your backend
      const deliveryCount = 45; // Example count
      setTotalDeliveries(deliveryCount);
      
      // Calculate current and next badge
      const current = BADGE_LEVELS.filter(badge => deliveryCount >= badge.deliveries).pop() || null;
      const next = BADGE_LEVELS.find(badge => deliveryCount < badge.deliveries) || null;
      
      setCurrentBadge(current);
      setNextBadge(next);
      setLoading(false);
    } catch (error) {
      console.error('Error loading delivery count:', error);
      setLoading(false);
    }
  };

  const calculateProgress = () => {
    if (!nextBadge) return 100;
    const prevDeliveries = currentBadge ? currentBadge.deliveries : 0;
    const progress = ((totalDeliveries - prevDeliveries) / (nextBadge.deliveries - prevDeliveries)) * 100;
    return Math.min(Math.max(progress, 0), 100);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.light.tint} />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My Rewards',
          headerStyle: {
            backgroundColor: Colors.light.tint,
          },
          headerTintColor: '#fff',
          headerShown: true,
        }}
      />

      <View style={styles.statsContainer}>
        <View style={styles.deliveryCount}>
          <Text style={styles.deliveryNumber}>{totalDeliveries}</Text>
          <Text style={styles.deliveryText}>Total Deliveries</Text>
        </View>

        {currentBadge && (
          <View style={styles.currentBadgeContainer}>
            <MaterialCommunityIcons
              name={currentBadge.icon}
              size={40}
              color={currentBadge.color}
            />
            <Text style={styles.currentBadgeText}>{currentBadge.name}</Text>
          </View>
        )}
      </View>

      {nextBadge && (
        <View style={styles.progressContainer}>
          <Text style={styles.progressTitle}>Next Badge: {nextBadge.name}</Text>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { width: `${calculateProgress()}%`, backgroundColor: nextBadge.color },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            {nextBadge.deliveries - totalDeliveries} deliveries to go!
          </Text>
        </View>
      )}

      <Text style={styles.sectionTitle}>Available Badges</Text>
      {BADGE_LEVELS.map((badge) => (
        <View
          key={badge.name}
          style={[
            styles.badgeCard,
            totalDeliveries >= badge.deliveries && styles.badgeCardEarned,
          ]}
        >
          <MaterialCommunityIcons
            name={badge.icon}
            size={40}
            color={totalDeliveries >= badge.deliveries ? badge.color : '#ccc'}
          />
          <View style={styles.badgeInfo}>
            <Text style={styles.badgeName}>{badge.name}</Text>
            <Text style={styles.badgeDescription}>{badge.description}</Text>
          </View>
          {totalDeliveries >= badge.deliveries && (
            <FontAwesome5 name="check-circle" size={24} color="#4CAF50" />
          )}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  deliveryCount: {
    alignItems: 'center',
    marginBottom: 16,
  },
  deliveryNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  deliveryText: {
    fontSize: 16,
    color: '#666',
  },
  currentBadgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  currentBadgeText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  progressContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
    color: '#333',
  },
  badgeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  badgeCardEarned: {
    borderLeftWidth: 4,
    borderLeftColor: Colors.light.tint,
  },
  badgeInfo: {
    flex: 1,
    marginLeft: 16,
  },
  badgeName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  badgeDescription: {
    fontSize: 14,
    color: '#666',
  },
}); 