import { Colors } from '@/constants/Colors';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface CarouselItem {
    id: string;
    image: string;
    title: string;
}

const data: CarouselItem[] = [
    {
        id: '1',
        image: 'https://example.com/image1.jpg', 
        title: 'Support Our Cause',
    },
    {
        id: '2',
        image: 'https://example.com/image2.jpg', 
        title: 'Help Us Make a Difference',
    },
    {
        id: '3',
        image: 'https://example.com/image3.jpg',
        title: 'Join Us in Our Mission',
    },
];

const CarouselCards = () => {
    const renderItem = ({ item }: { item: CarouselItem }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Donate Now</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
        height: screenHeight * 0.3,
        justifyContent: 'center',
        paddingBottom: 5,
    },
    card: {
        width: screenWidth * 0.8, 
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        marginHorizontal: 10, 
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 5,
    },
    image: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
    title: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: Colors.light.tint,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default CarouselCards;