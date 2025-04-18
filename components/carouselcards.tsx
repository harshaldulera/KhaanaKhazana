import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import { router } from 'expo-router';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CarouselItem {
    id: string;
    image: string;
    title: string;
    description: string;
    collected: string;
    type: 'event';
}

const data: CarouselItem[] = [
    {
        id: '1',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60',
        title: 'Meals for School Kids',
        description: 'Help provide mid-day meals for children at the local municipal school.',
        collected: '3500',
    },
    {
        id: '2',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60',
        title: 'Ration Kit Distribution',
        description: 'Support daily-wage families with a basic ration kit for a week.',
        collected: '7200',
    },
    {
        id: '3',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop&q=60',
        title: 'Elderly Care Food Program',
        description: 'Provide nutritious meals to elderly citizens living alone.',
        collected: '5200',
    },
    {
        id: '4',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60',
        title: 'Hospital Food Support',
        description: 'Help provide meals to patients and their families at local hospitals.',
        collected: '9100',
    },
    {
        id: '5',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60',
        title: 'Community Kitchen Initiative',
        description: 'Support our community kitchen that serves 500 meals daily to those in need.',
        collected: '12800',
    }
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
            <View style={styles.eventContent}>
                <View style={styles.eventInfo}>
                    <Text style={styles.eventTitle}>{item.title}</Text>
                    <Text style={styles.eventDescription} numberOfLines={2}>
                        {item.description}
                    </Text>
                    <View style={styles.collectedContainer}>
                        <Text style={styles.rupeeSymbol}>₹</Text>
                        <Text style={styles.collected}>{parseInt(item.collected).toLocaleString()}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.donateButton} onPress={handleDonatePress}>
                    <Text style={styles.donateButtonText}>Donate Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item: CarouselItem) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={screenWidth - 32}
            decelerationRate="fast"
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    card: {
        width: screenWidth - 32,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginRight: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.08,
        shadowRadius: 2,
        elevation: 2,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 160,
    },
    eventContent: {
        padding: 16,
    },
    eventInfo: {
        marginBottom: 12,
    },
    eventTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 6,
    },
    eventDescription: {
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
        marginBottom: 8,
    },
    collectedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rupeeSymbol: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.light.tint,
        marginRight: 1,
    },
    collected: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.light.tint,
    },
    donateButton: {
        backgroundColor: Colors.light.tint,
        paddingVertical: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    donateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
});

export default CarouselCards;