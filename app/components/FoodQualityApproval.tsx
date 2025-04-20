import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useMutation } from '@apollo/client';
import { UPDATE_FOOD_QUALITY } from '@/graphql/mutations';
import { Colors } from '@/constants/Colors';

interface FoodQualityApprovalProps {
  transactionId: number;
  onApprovalComplete: () => void;
}

type QualityStatus = 'good' | 'bad';

export function FoodQualityApproval({ transactionId, onApprovalComplete }: FoodQualityApprovalProps) {
  const [quality, setQuality] = useState<QualityStatus | null>(null);
  const [updateFoodQuality] = useMutation(UPDATE_FOOD_QUALITY);

  const handleSubmit = async () => {
    if (!quality) {
      Alert.alert('Error', 'Please select the food quality status');
      return;
    }

    try {
      await updateFoodQuality({
        variables: {
          transaction_id: transactionId,
          status: quality === 'good' ? 'QUALITY_APPROVED' : 'QUALITY_REJECTED',
        },
      });

      Alert.alert('Success', 'Food quality status has been updated');
      onApprovalComplete();
    } catch (error) {
      Alert.alert('Error', 'Failed to update food quality status');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Quality Approval</Text>
      <View style={styles.content}>
        <View style={styles.radioGroup}>
          <Text style={styles.label}>Food Quality Assessment</Text>
          <TouchableOpacity
            style={[styles.radioButton, quality === 'good' && styles.selected]}
            onPress={() => setQuality('good')}
          >
            <Text style={styles.radioLabel}>Good Quality - Safe for Distribution</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.radioButton, quality === 'bad' && styles.selected]}
            onPress={() => setQuality('bad')}
          >
            <Text style={styles.radioLabel}>Poor Quality - Cannot be Distributed</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.submitButton, !quality && styles.submitButtonDisabled]}
          onPress={handleSubmit}
          disabled={!quality}
        >
          <Text style={styles.submitButtonText}>Submit Assessment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  content: {
    gap: 24,
  },
  radioGroup: {
    gap: 16,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  radioButton: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  selected: {
    backgroundColor: '#f0f9ff',
    borderColor: Colors.light.tint,
  },
  radioLabel: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: Colors.light.tint,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonDisabled: {
    opacity: 0.5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
}); 