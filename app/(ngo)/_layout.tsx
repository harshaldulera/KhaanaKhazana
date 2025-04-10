import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function NGOLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Donations',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gift" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="accepted"
        options={{
          title: 'Accepted',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="check-circle" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
} 