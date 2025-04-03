import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface Event {
    id: string;
    image: string;
    title: string;
    description: string;
    collected: string;
}

const events: Event[] = [
    {
        id: '1',
        image: 'https://example.com/event1.jpg', // Replace with your image URL
        title: 'Community Clean-Up',
        description: 'Join us for a day of cleaning up the local park and making our community beautiful.',
        collected: '$150.000',
    },
    {
        id: '2',
        image: 'https://example.com/event2.jpg', // Replace with your image URL
        title: 'Food Drive',
        description: 'Help us collect food for those in need in our community.',
        collected: '$200.000',
    },
    {
        id: '3',
        image: 'https://example.com/event2.jpg', // Replace with your image URL
        title: 'Food Drive',
        description: 'Help us collect food for those in need in our community.',
        collected: '$200.000',
    },
    {
        id: '4',
        image: 'https://example.com/event2.jpg', // Replace with your image URL
        title: 'Food Drive',
        description: 'Help us collect food for those in need in our community.',
        collected: '$200.000',
    },
];

const EventHighlights = () => {
    const renderItem = ({ item }: { item: Event }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.collected}>Collected: {item.collected}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Event Highlights</Text>
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 15,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        marginRight: 2,
        marginLeft: 5,
        marginBottom: 15,
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
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 15,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginVertical: 5,
        color: '#666',
    },
    collected: {
        fontWeight: 'bold',
    },
});

export default EventHighlights;