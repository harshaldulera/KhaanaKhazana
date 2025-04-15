import React from 'react';
import { View, StyleSheet } from 'react-native';
import HistoryScreen from '../(shared)/history';

export default function DonorHistoryScreen() {
  return (
    <View style={styles.container}>
      <HistoryScreen />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})