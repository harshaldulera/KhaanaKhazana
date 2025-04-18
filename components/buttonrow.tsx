import React from 'react';
import { Colors } from '@/constants/Colors';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

const { width: screenWidth } = Dimensions.get('window');

const donationTypes = [
    {
        id: 'food',
        title: 'Donate Food',
        icon: 'restaurant',
        description: 'Share excess food from events or restaurants',
        route: '/(donor)/donate'
    },
    {
        id: 'grocery',
        title: 'Donate Grocery',
        icon: 'shopping-basket',
        description: 'Contribute essential grocery items',
        route: '/(donor)/donate'
    },
    {
        id: 'money',
        title: 'Donate Money',
        icon: 'attach-money',
        description: 'Support food distribution programs',
        route: '/(donor)/donate'
    }
];

const ButtonRow = () => {
    const handleButtonPress = (route: string) => {
        router.replace(route);
    };

    return (
        <View style={styles.container}>
            {donationTypes.map((type) => (
                <TouchableOpacity 
                    key={type.id}
                    style={styles.button} 
                    onPress={() => handleButtonPress(type.route)}
                >
                    <View style={styles.iconContainer}>
                        <MaterialIcons name={type.icon as any} size={24} color={Colors.light.tint} />
                    </View>
                    <Text style={styles.buttonTitle}>{type.title}</Text>
                    <Text style={styles.buttonDescription} numberOfLines={2}>
                        {type.description}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
    },
    button: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 8,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0, 122, 255, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonTitle: {
        color: '#333',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        textAlign: 'center',
    },
    buttonDescription: {
        color: '#666',
        fontSize: 12,
        textAlign: 'center',
        lineHeight: 16,
    },
});

export default ButtonRow;