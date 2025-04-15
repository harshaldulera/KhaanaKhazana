import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import { DonarList } from '../../components/DonarList';
import { CreateDonarForm } from '../../components/CreateDonarForm';
import { TransactionList } from '../../components/TransactionList';
import { CreateTransactionForm } from '../../components/CreateTransactionForm';

export default function DonorScreen() {
  const [activeTab, setActiveTab] = useState('donors');

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'donors' && styles.activeTab]}
          onPress={() => setActiveTab('donors')}
        >
          <Text style={[styles.tabText, activeTab === 'donors' && styles.activeTabText]}>
            Donors
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'transactions' && styles.activeTab]}
          onPress={() => setActiveTab('transactions')}
        >
          <Text style={[styles.tabText, activeTab === 'transactions' && styles.activeTabText]}>
            Transactions
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === 'donors' ? (
          <>
            <CreateDonarForm />
            <DonarList />
          </>
        ) : (
          <>
            <CreateTransactionForm />
            <TransactionList />
          </>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6B6B',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
}); 