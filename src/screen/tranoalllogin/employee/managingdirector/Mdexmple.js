import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using Material Icons
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MdEsim = () => {
  const navigation = useNavigation();
  const [esimData, setEsimData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('userToken');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Failed to fetch token:', error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchEsimData = async () => {
      if (!token) return; // Skip fetching if token is not available

      try {
        const response = await axios.get('http://testing-only-erp-api.containe.in/api/ESim/ProfileWiseESimsStockCounts?userId=20', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
          },
        });
        setEsimData(response.data);
      } catch (error) {
        console.warn('Error fetching eSIM data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEsimData();
  }, [token]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (!esimData || esimData.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No eSIM data available</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.heading}>eSIM Data</Text>
          {esimData.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.itemLabel}>Profile Combination: {item.profileCombination || 'N/A'}</Text>
              <TextInput
                style={styles.textInput}
                value={`Allocated Stock: ${item.allocatedStock || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`Balance Stock: ${item.balanceStock || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`Bootstrap Stock: ${item.bootstrapStock || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`Commercial Activation Stock: ${item.commercialActivationStock || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`Expired Stock: ${item.expiredStock || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`New SIM Stock: ${item.newSimStock || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`Safe Custody Stock: ${item.safeCustodyStock || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`Suspended Stock: ${item.suspendedStock || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`Total: ${item.total || 'N/A'}`}
                editable={false}
              />
              <TextInput
                style={styles.textInput}
                value={`Total Stock: ${item.totalStock || 'N/A'}`}
                editable={false}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    padding: 16,
  },
  formContainer: {
    margin: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 12,
  },
  itemLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    marginTop: 4,
  },
});

export default MdEsim;
