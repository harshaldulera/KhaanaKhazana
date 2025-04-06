import React from 'react';
import { Colors } from '@/constants/Colors';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

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
        padding: 10,
    },
    button: {
        flex: 1,
        marginHorizontal: 5,
        backgroundColor: Colors.light.tint,
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlign: 'center',
    },
});

export default ButtonRow;