import React from 'react';
import { Colors } from '@/constants/Colors';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';

const { width: screenWidth } = Dimensions.get('window');
const buttonPadding = 10;
const buttonMargin = 5;
const numberOfButtons = 4;
const availableWidth = screenWidth - (buttonPadding * 2) - (buttonMargin * (numberOfButtons * 2));
const buttonWidth = availableWidth / numberOfButtons;

const ButtonRow = () => {
    const handleButtonPress = (buttonType: string) => {
        console.log(`${buttonType} button pressed`);
        router.replace("/(tabs)/ngolist");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Donate Food')}>
                <Text style={styles.buttonText}>Donate Food</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Donate Grocery')}>
                <Text style={styles.buttonText}>Donate Grocery</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Donate Money')}>
                <Text style={styles.buttonText}>Donate Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('Sponsor Food')}>
                <Text style={styles.buttonText}>Sponsor Food</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: buttonPadding,
    },
    button: {
        width: buttonWidth,
        height: 50, // Ensure buttons have the same height
        marginHorizontal: buttonMargin,
        backgroundColor: Colors.light.tint,
        paddingVertical: 10,
        paddingHorizontal: 5, // Add some horizontal padding
        borderRadius: 8, // Slightly more rounded corners
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center', // Center text vertically
    },
    buttonText: {
        color: '#fff',
        fontSize: 14, // Slightly smaller font size for better fit
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default ButtonRow;