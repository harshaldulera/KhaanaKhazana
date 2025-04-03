import React from "react";
import { View, TouchableOpacity, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useSegments } from "expo-router";

const Topbar = () => {
    const segments = useSegments();

    const handleProfilePress = () => {
        router.replace('/(tabs)/profile');
    };

    const handleBackPress = () => {
        router.replace('/(tabs)');
    };

    const isProfileScreen = segments[segments.length - 1] === 'profile';

    return (
        <View style={styles.container}>
            {isProfileScreen ? (
                <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
                    <MaterialIcons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.hamburger}>
                    <MaterialIcons name="menu" size={24} color="black" />
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleProfilePress} style={styles.profileCircle}>
                <Image
                    source={{ uri: 'https://example.com/profile.jpg' }} 
                    style={styles.profileImage}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 10,
    },
    hamburger: {
        padding: 10,
    },
    profileCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    profileImage: {
        width: '100%',
        height: '100%',
    },
});

export default Topbar;