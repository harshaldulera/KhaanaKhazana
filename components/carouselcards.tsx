import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CarouselItem {
    id: string;
    image: string;
}

const data: CarouselItem[] = [
    {
        id: '1',
        image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop&q=60',
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop&q=60',
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&auto=format&fit=crop&q=60',
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
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Donate Food</Text>
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
        height: screenHeight * 0.25,
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
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
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