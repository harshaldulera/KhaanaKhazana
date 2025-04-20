import { Tabs } from 'expo-router';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

export default function VolunteerLayout() {
    return (
        <Tabs
            screenOptions={{ 
                tabBarActiveTintColor: '#FF6B6B',
                tabBarInactiveTintColor: '#666',
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopWidth: 1,
                    borderTopColor: '#eee',
                    height: 60,
                    paddingBottom: 8,
                    paddingTop: 8,
                },
            }}
        >
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
               name="rewards"
               options={{
                title: 'Rewards',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="medal" size={size} color={color} />
                ),
                headerShown: false,
               }}
            />
            <Tabs.Screen 
               name="history"
               options={{
                title: 'History',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome name="history" size={size} color={color} />
                ),
                headerShown: false,
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
        </Tabs>
    )
}