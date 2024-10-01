import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Alert, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';

const TechnicianInstallationForm = () => {
    const [vehicleType, setVehicleType] = useState('');
    const [imeiData, setImeiData] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [rtoDivisions, setRtoDivisions] = useState([]); // State for RTO divisions
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedRtoDivision, setSelectedRtoDivision] = useState(''); // State for selected RTO division
    const [imeiText, setImeiText] = useState('');
    const [VehicleNumberText, setVehicleNumberText] = useState('');
    const handleVehicleNumberTextChange = (text) => {
        setVehicleNumberText(text);
    };

    const [loading, setLoading] = useState(true);
    const [showImeiSuggestions, setShowImeiSuggestions] = useState(false);
    const [token, setToken] = useState(null);
    const route = useRoute();
    const userId = route.params?.userId;

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

    const fetchStates = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://testing-only-erp-api.containe.in/States', {
                headers: {
                    'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                    'Authorization': `Bearer ${token}`
                }
            });

            const fetchedStates = response.data.result;
            if (Array.isArray(fetchedStates)) {
                setStates(fetchedStates);
            } else {
                console.warn('Unexpected response format:', fetchedStates);
                setStates([]);
            }
        } catch (error) {
            console.error('Error fetching states:', error.response ? error.response.data : error.message);
            Alert.alert('Error', 'Failed to fetch states data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (token) {
            fetchStates();
        }
    }, [token]);

    const fetchImei = useCallback(async (input) => {
        if (!token || input.length < 3) {
            return;
        }
        setLoading(true);
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
            setShowImeiSuggestions(true);
        } catch (error) {
            console.warn('Error fetching IMEI data:', error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    }, [token, userId]);

    const handleImeiTextChange = (text) => {
        setImeiText(text);
        if (text.length >= 3) {
            fetchImei(text);
        } else {
            setShowImeiSuggestions(false);
        }
    };

    const handleImeiSuggestionSelect = (suggestion) => {
        setImeiText(suggestion);
        setShowImeiSuggestions(false);
    };

    const fetchDistricts = async (stateId) => {
        try {
            const response = await axios.get(`http://testing-only-erp-api.containe.in/api/Districts/stateid?id=${stateId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                    'Accept': '*/*',
                },
            });
            const fetchedDistricts = response.data.result;
            if (Array.isArray(fetchedDistricts)) {
                setDistricts(fetchedDistricts);
            } else {
                console.warn('Unexpected response format for districts:', fetchedDistricts);
                setDistricts([]);
            }
        } catch (error) {
            console.error('Error fetching districts:', error);
            Alert.alert('Error', 'Failed to fetch districts data');
        }
    };

    const fetchRtoDivisions = async (stateId) => {
        try {
            const response = await axios.get(`http://testing-only-erp-api.containe.in/api/RTODivisions/GetRTODivisionsByState?stateId=${stateId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                    'Accept': '*/*',
                },
            });
            console.log('RTO Division Response:', response.data);
            const fetchedRtoDivisions = response.data; // Directly access response.data
            if (Array.isArray(fetchedRtoDivisions)) {
                setRtoDivisions(fetchedRtoDivisions);
            } else {
                console.warn('Unexpected response format for RTO divisions:', fetchedRtoDivisions);
                setRtoDivisions([]);
            }
        } catch (error) {
            console.error('Error fetching RTO divisions:', error.response ? error.response.data : error.message);
            Alert.alert('Error', 'Failed to fetch RTO divisions data');
        }
    };

    const handleStateChange = (stateId) => {
        setSelectedState(stateId);
        setSelectedDistrict('');
        setSelectedRtoDivision(''); // Reset RTO division when state changes
        fetchDistricts(stateId);
        fetchRtoDivisions(stateId); // Fetch RTO divisions when state changes
    };

    const handleSubmit = () => {
        if (!imeiText || !selectedState || !selectedDistrict || !selectedRtoDivision) {
            Alert.alert('Validation Error', 'Please fill out all fields.');
            return;
        }
        console.log('Submitted Form Data:', {
            imei: imeiText,
            state: selectedState,
            district: selectedDistrict,
            rtoDivision: selectedRtoDivision,
        });
        // Further processing logic here
    };

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={{ fontSize: 20, color: '#4e2d87' }}>IMEI</Text>
                <TextInput
                    mode="outlined"
                    label="IMEI"
                    value={imeiText}
                    onChangeText={handleImeiTextChange}
                />

                {showImeiSuggestions && imeiData.length > 0 && (
                    <View style={styles.suggestionsContainer}>
                        {imeiData.map((item) => (
                            <TouchableOpacity
                                key={item} // Use item as the unique key
                                onPress={() => handleImeiSuggestionSelect(item)}
                                style={styles.suggestionItem}
                            >
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}



                <Text style={{ fontSize: 20, color: '#4e2d87' }}>RTO Details</Text>
                <Text style={styles.label}>Select a State:</Text>
                <Picker
                    selectedValue={selectedState}
                    onValueChange={handleStateChange}
                    style={styles.picker}
                >
                    <Picker.Item label="Choose a state" value="" />
                    {states.map((state) => (
                        <Picker.Item key={state.stateId} label={state.stateName} value={state.stateId} />
                    ))}
                </Picker>

                <Text style={styles.label}>Select a District:</Text>
                <Picker
                    selectedValue={selectedDistrict}
                    onValueChange={setSelectedDistrict}
                    style={styles.picker}
                >
                    <Picker.Item label="Choose a district" value="" />
                    {districts.map((district) => (
                        <Picker.Item key={district.districtId} label={district.districtName} value={district.districtName} />
                    ))}
                </Picker>




                <Text style={styles.label}>Select an RTO Division:</Text>
                <Picker
                    selectedValue={selectedRtoDivision}
                    onValueChange={setSelectedRtoDivision}
                    style={styles.picker}
                >
                    <Picker.Item label="Choose an RTO division" value="" />
                    {rtoDivisions.map((rto) => (
                        <Picker.Item key={rto.rtaDivisionName} label={rto.rtaDivisionName} value={rto.rtaDivisionName} />
                    ))}
                </Picker>
                <Text style={{ fontSize: 20, color: '#4e2d87' }}>Add Vehicle Detail</Text>

                <Text style={styles.label}>Vehicle Birth</Text>

                <Picker
                    selectedValue={vehicleType}
                    onValueChange={(itemValue) => setVehicleType(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Vehicle Type" value="" />
                    <Picker.Item label="Old" value="old" />
                    <Picker.Item label="New" value="new" />
                </Picker>

                <Text style={styles.label}>Vehicle Number</Text>


                <TextInput
                    mode="outlined"
                    label="Vehicle Number"
                    value={VehicleNumberText}
                    onChangeText={handleVehicleNumberTextChange}
                />

                <Text style={styles.label}>Vehicle Type</Text>






                <Button title="Submit" onPress={handleSubmit} />



            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    picker: {
        marginBottom: 20,
        backgroundColor: '#f2f2f2',
    },
    suggestionsContainer: {
        backgroundColor: '#e0e0e0',
        marginVertical: 5,
        padding: 10,
    },
    suggestionItem: {
        padding: 8,
    },
    itemText: {
        fontSize: 16,
    },
});

export default TechnicianInstallationForm;


