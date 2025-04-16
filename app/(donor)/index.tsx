import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { CreateTransactionForm } from '../../components/CreateTransactionForm';

export default function DonorScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <CreateTransactionForm />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
}); 