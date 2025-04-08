import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CarouselItem {
    id: string;
    image: string;
    title: string;
    description: string;
}

const data: CarouselItem[] = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60',
        title: 'Delicious Food',
        description: 'Discover amazing recipes and cooking tips'
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60',
        title: 'Healthy Living',
        description: 'Learn about nutritious meals and healthy eating'
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&fit=crop&q=60',
        title: 'Cooking Tips',
        description: 'Expert advice for better cooking'
    },
];

const CarouselCards: React.FC = () => {
    const renderItem = ({ item }: { item: CarouselItem }) => (
        <View style={styles.card}>
            <Image 
                source={{ uri: item.image }} 
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Learn More</Text>
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
        height: 150,
    },
    contentContainer: {
        padding: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    button: {
        backgroundColor: Colors.light.tint,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CarouselCards;