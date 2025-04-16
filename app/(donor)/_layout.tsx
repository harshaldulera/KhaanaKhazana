import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import Topbar from '@/components/common/topbar';

export default function DonorLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#eee',
          // display: 'none',
        },
      }}
    >
      {/* <Topbar /> */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
        <Tabs.Screen
          name="history"
          options={{
            title: 'History',
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="list" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      <Tabs.Screen
        name="ngodisplay"
        options={{
          title: 'NGO Details',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="circle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="ngolist"
        options={{
          title: 'NGO List',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="circle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen 
        name='donate'
        options={{
          title: 'Donate',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name='shopping-cart' size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      
    </Tabs>
  );
} 