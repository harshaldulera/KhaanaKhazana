import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo-client';
import { Stack } from 'expo-router';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // TODO: Check authentication status and user role from storage/API
    // For now, we'll just simulate a loading state
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#FF6B6B" />
      </View>
    );
  }

  return (
    <ApolloProvider client={client}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#FF6B6B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(donor)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(ngo)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(volunteer)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(shared)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ApolloProvider>
  );
}
