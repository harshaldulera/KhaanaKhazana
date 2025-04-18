import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CarouselItem {
    id: string;
    image: string;
    title: string;
    description: string;
    collected: string;
    target: string;
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
        target: '10000'
    },
    {
        id: '2',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60',
        title: 'Ration Kit Distribution',
        description: 'Support daily-wage families with a basic ration kit for a week.',
        collected: '7200',
        target: '15000'
    },
    {
        id: '3',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop&q=60',
        title: 'Elderly Care Food Program',
        description: 'Provide nutritious meals to elderly citizens living alone.',
        collected: '5200',
        target: '12000'
    },
    {
        id: '4',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&auto=format&fit=crop&q=60',
        title: 'Hospital Food Support',
        description: 'Help provide meals to patients and their families at local hospitals.',
        collected: '9100',
        target: '20000'
    },
    {
        id: '5',
        type: 'event',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60',
        title: 'Community Kitchen Initiative',
        description: 'Support our community kitchen that serves 500 meals daily to those in need.',
        collected: '12800',
        target: '25000'
    }
];

const CarouselCards: React.FC = () => {
    const handleDonatePress = () => {
        router.replace("/(donor)/donate");
    };

    const renderItem = ({ item }: { item: CarouselItem }) => {
        const progress = (parseInt(item.collected) / parseInt(item.target)) * 100;
        
        return (
            <View style={styles.card}>
                <Image 
                    source={{ uri: item.image }} 
                    style={styles.image}
                    resizeMode="cover"
                />
                <LinearGradient
                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                    style={styles.gradient}
                />
                <View style={styles.eventContent}>
                    <View style={styles.eventInfo}>
                        <Text style={styles.eventTitle}>{item.title}</Text>
                        <Text style={styles.eventDescription} numberOfLines={2}>
                            {item.description}
                        </Text>
                        <View style={styles.progressContainer}>
                            <View style={styles.progressBar}>
                                <View style={[styles.progressFill, { width: `${progress}%` }]} />
                            </View>
                            <View style={styles.amountContainer}>
                                <Text style={styles.amountText}>
                                    ₹{parseInt(item.collected).toLocaleString()} raised
                                </Text>
                                <Text style={styles.targetText}>
                                    of ₹{parseInt(item.target).toLocaleString()}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.donateButton} onPress={handleDonatePress}>
                        <Text style={styles.donateButtonText}>Donate Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

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
        height: 280,
        borderRadius: 16,
        marginRight: 16,
        overflow: 'hidden',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '70%',
    },
    eventContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 16,
    },
    eventInfo: {
        marginBottom: 16,
    },
    eventTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
    },
    eventDescription: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.9)',
        marginBottom: 16,
        lineHeight: 20,
    },
    progressContainer: {
        marginBottom: 8,
    },
    progressBar: {
        height: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 2,
        overflow: 'hidden',
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: Colors.light.tint,
        borderRadius: 2,
    },
    amountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    amountText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
    },
    targetText: {
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.7)',
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