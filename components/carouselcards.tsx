import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import { router } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CarouselItem {
    id: string;
    image: string;
    title?: string;
    description?: string;
    collected?: string;
    type: 'food' | 'event';
}

const data: CarouselItem[] = [
    {
        id: '1',
        type: 'food',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60',
    },
    {
        id: '2',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60',
        title: 'Meals for School Kids',
        description: 'Help provide mid-day meals for children at the local municipal school.',
        collected: '3500',
    },
    {
        id: '3',
        type: 'food',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60',
    },
    {
        id: '4',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60',
        title: 'Ration Kit Distribution',
        description: 'Support daily-wage families with a basic ration kit for a week.',
        collected: '7200',
    },
];

const CarouselCards: React.FC = () => {
    const handleDonatePress = () => {
        router.replace("/(donor)/donate");
    };

    const renderItem = ({ item }: { item: CarouselItem }) => (
        <View style={styles.card}>
            <Image 
                source={{ uri: item.image }} 
                style={styles.image}
                resizeMode="cover"
            />
            {item.type === 'event' ? (
                <View style={styles.eventContent}>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                    <Text style={styles.eventDescription} numberOfLines={2}>
                        {item.description}
                    </Text>
                    <View style={styles.collectedContainer}>
                        {/* <MaterialIcons name="attach-money" size={16} color={Colors.light.tint} /> */}
                        <Text style={styles.collected}>₹{parseInt(item.collected || '0').toLocaleString()}</Text>
                    </View>
                </View>
            ) : (
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={handleDonatePress}>
                        <Text style={styles.buttonText}>Donate Food</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: CarouselItem) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={screenWidth * 0.8}
            decelerationRate="fast"
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        height: screenHeight * 0.35,
        justifyContent: 'center',
        paddingBottom: 5,
    },
    card: {
        width: screenWidth * 0.8,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    eventContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    eventTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    eventDescription: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 8,
        lineHeight: 20,
    },
    collectedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    collected: {
        color: Colors.light.tint,
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 4,
    },
    button: {
        backgroundColor: Colors.light.tint,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CarouselCards;