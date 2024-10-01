import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';

const TechnicianInstallationForm = () => {
    const [imeiData, setImeiData] = useState([]);  // IMEI suggestions data
    const [StatesData, setStatesData] = useState([]);  // States suggestions data
    const [token, setToken] = useState(null);  // Token fetched from AsyncStorage
    const [loading, setLoading] = useState(false);  // Loading state for API requests
    const [showImeiSuggestions, setShowImeiSuggestions] = useState(false);  // Whether to show IMEI suggestions or not
    const [showStatesSuggestions, setShowStatesSuggestions] = useState(false);  // Whether to show States suggestions or not
    const route = useRoute();  // Get route params
    const userId = route.params?.userId;  // Extract userId from route params
    const [imeiText, setImeiText] = useState('');  // IMEI input state
    const [StatesText, setStatesText] = useState('');  // States input state
    const [formData, setFormData] = useState({
        imei: '',
        States: '',
        // Other form fields go here
    });

    // Fetch the token on mount
    useEffect(() => {
        const fetchToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('userToken');  // Correct key for token retrieval
                if (storedToken) {
                    setToken(storedToken);
                }
            } catch (error) {
                console.error('Failed to fetch token:', error);
            }
        };

        fetchToken();
    }, []);

    // Fetch IMEI suggestions based on input
    const fetchImei = useCallback(async (input) => {
        if (!token || input.length < 3) {
            return;
        }
        setLoading(true);  // Start loading when fetching data
        try {
            const response = await axios.get(
                `http://testing-only-erp-api.containe.in/DeviceManagement/AutoCompleteIMEI?prefix=${input}&userId=${userId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                        'Accept': '*/*',
                    },
                }
            );
            setImeiData(response.data);
            setShowImeiSuggestions(true);  // Show IMEI suggestions
        } catch (error) {
            console.warn('Error fetching IMEI data:', error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);  // Stop loading when data is fetched
        }
    }, [token, userId]);

    // Fetch States divisions based on state
    const fetchStatesDivisions = useCallback(async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `http://testing-only-erp-api.containe.in/States`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                        'Accept': '*/*',
                    },
                }
            );
            setStatesData(response.data);  // Set the fetched States data
            setShowStatesSuggestions(true);  // Show States suggestions
        } catch (error) {
            console.warn('Error fetching States data:', error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);  // Stop loading when data is fetched
        }
    }, [token]);

    // Handle IMEI input changes
    const handleImeiTextChange = (text) => {
        setImeiText(text);
        if (text.length >= 3) {
            fetchImei(text);
        } else {
            setShowImeiSuggestions(false);  // Hide suggestions if input length is less than 3
        }
    };

    // Handle States input changes
    const handleStatesTextChange = (text) => {
        setStatesText(text);
        fetchStatesDivisions();  // Fetch States divisions when States input is focused/changed
        setFormData({ ...formData, States: text });  // Update form data for States field
    };

    // Handle suggestion selection for IMEI
    const handleImeiSuggestionSelect = (suggestion) => {
        setImeiText(suggestion);   // Update the input text with the selected suggestion
        setFormData({ ...formData, imei: suggestion });  // Update the formData with the selected IMEI
        setShowImeiSuggestions(false);  // Hide suggestions after selection
    };

    // Handle suggestion selection for States
    const handleStatesSuggestionSelect = (suggestion) => {
        setStatesText(suggestion);   // Update the input text with the selected suggestion
        setFormData({ ...formData, States: suggestion });  // Update the formData with the selected States
        setShowStatesSuggestions(false);  // Hide suggestions after selection
    };