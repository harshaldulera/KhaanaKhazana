// app/(tabs)/tabs.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TopBar from '@/components/common/topbar';
import { Stack } from "expo-router";

const TabsLayout = () => {
    return (
        <View style={styles.container}>
            <TopBar />
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="profile" />
            </Stack>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default TabsLayout;