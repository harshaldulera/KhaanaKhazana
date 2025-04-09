import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';

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
        image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=60',
        title: 'Meals for School Kids',
        description: 'Help provide mid-day meals for children at the local municipal school.',
        collected: '3500',
    },
    {
        id: '2',
        image: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&auto=format&fit=crop&q=60',
        title: 'Ration Kit Distribution',
        description: 'Support daily-wage families with a basic ration kit for a week.',
        collected: '7200',
    },
    {
        id: '3',
        image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800&auto=format&fit=crop&q=60',
        title: 'Evening Meals for Homeless',
        description: 'Contribute towards distributing hot evening meals in slum areas.',
        collected: '5800',
    },
    {
        id: '4',
        image: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=800&auto=format&fit=crop&q=60',
        title: 'Food Drive at Orphanage',
        description: 'Sponsor groceries and snacks for 30 kids in a nearby orphanage.',
        collected: '4300',
    },
];

const EventHighlights = () => {
    const renderItem = ({ item }: { item: Event }) => (
        <TouchableOpacity style={styles.card}>
            <Image 
                source={{ uri: item.image }} 
                style={styles.image}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description} numberOfLines={2}>{item.description}</Text>
                <View style={styles.collectedContainer}>
                    <MaterialIcons name="attach-money" size={16} color={Colors.light.tint} />
                    <Text style={styles.collected}>{parseInt(item.collected).toLocaleString()}</Text>
                </View>
            </View>
        </TouchableOpacity>
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
        marginBottom: 15,
        color: '#333',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
        alignItems: 'center',
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
        marginRight: 15,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
        lineHeight: 20,
    },
    collectedContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    collected: {
        fontSize: 16,
        fontWeight: '600',
        color: Colors.light.tint,
        marginLeft: 4,
    },
});

export default EventHighlights;
