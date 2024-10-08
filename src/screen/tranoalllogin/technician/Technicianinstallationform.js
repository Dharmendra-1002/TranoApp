import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Alert, TouchableOpacity, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { TextInput } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useRoute } from '@react-navigation/native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useNavigation } from '@react-navigation/native';

const TechnicianInstallationForm = () => {
    const [vehicleType, setVehicleType] = useState('');
    const [imeiData, setImeiData] = useState([]);
    const [VehicleMakeData, setVehicleMakeData] = useState([]);
    const [VehicleModelData, setVehicleModelData] = useState([]);
    const [states, setStates] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [rtoDivisions, setRtoDivisions] = useState([]); // State for RTO divisions
    const [selectedState, setSelectedState] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedRtoDivision, setSelectedRtoDivision] = useState(''); // State for selected RTO division
    const [imeiText, setImeiText] = useState('');
    const [vehicleMakeText, setvehicleMakeText] = useState('');
    const [vehicleModelText, setvehicleModelText] = useState('');
    const [VehicleNumberText, setVehicleNumberText] = useState('');
    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [engineNumber, setEngineNumber] = useState('');
    const [chasisNumber, setChasisNumber] = useState('');
    const [noOfSos, setNoOfSos] = useState('');
    const [image, setImage] = useState(null);
    const navigation = useNavigation();

    const handleVehicleNumberTextChange = (text) => {
        setVehicleNumberText(text);
    };

    const [loading, setLoading] = useState(true);
    const [showImeiSuggestions, setShowImeiSuggestions] = useState(false);
    const [showVehicleMakeSuggestions, setShowVehicleMakeSuggestions] = useState(false);
    const [showVehicleModelSuggestions, setShowVehicleModelSuggestions] = useState(false);
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


    const fetchVehicleModel = useCallback(async (input) => {
        if (!token || input.length < 3) {
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(
                `http://testing-only-erp-api.containe.in/VehicleModel/AutoCompleteVehicleModel?prefix=${input}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                        'Accept': '*/*',
                    },
                }
            );
            setVehicleModelData(response.data);
            setShowVehicleModelSuggestions(true);
        } catch (error) {
            console.warn('Error fetching VehicleModel data:', error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    }, [token]);

    const handleVehicleModelTextChange = (text) => {
        setvehicleModelText(text);
        if (text.length >= 3) {
            fetchVehicleModel(text);
        } else {
            setShowVehicleModelSuggestions(false);
        }
    };

    const handleVehicleModelSuggestionSelect = (suggestion) => {
        setvehicleModelText(suggestion);
        setShowVehicleModelSuggestions(false);
    };


    const fetchVehicleMake = useCallback(async (input) => {
        if (!token || input.length < 3) {
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get(
                `http://testing-only-erp-api.containe.in/VehicleMake/AutoCompleteVehicleMake?prefix=${input}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                        'Accept': '*/*',
                    },
                }
            );
            setVehicleMakeData(response.data);
            setShowVehicleMakeSuggestions(true);
        } catch (error) {
            console.warn('Error fetching VehicleMake data:', error.response ? error.response.data : error.message);
        } finally {
            setLoading(false);
        }
    }, [token]);



    const selectImage = async () => {
        try {
            const pickedImage = await ImageCropPicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
                includeBase64: true
            });

            setImage({ uri: `data:${pickedImage.mime};base64,${pickedImage.data}` });
        } catch (error) {
            console.log('Error selecting image:', error);
        }
    };

    const clearImage = () => {
        setImage(null);
    };



    const handleVehicleMakeTextChange = (text) => {
        setvehicleMakeText(text);
        if (text.length >= 3) {
            fetchVehicleMake(text);
        } else {
            setShowVehicleMakeSuggestions(false);
        }
    };

    const handleVehicleMakeSuggestionSelect = (suggestion) => {
        setvehicleMakeText(suggestion);
        setShowVehicleMakeSuggestions(false);
    };



    const fetchVehicleTypes = async () => {
        try {
            const response = await axios.get('http://testing-only-erp-api.containe.in/VehicleType', {
                headers: {
                    'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                    'Authorization': `Bearer ${token}`,
                }
            });
            const fetchedVehicleTypes = response.data;
            if (Array.isArray(fetchedVehicleTypes)) {
                setVehicleTypes(fetchedVehicleTypes);
            } else {
                console.warn('Unexpected response format:', fetchedVehicleTypes);
                setVehicleTypes([]);
            }
        } catch (error) {
            console.error('Error fetching vehicle types:', error.response ? error.response.data : error.message);
            Alert.alert('Error', 'Failed to fetch vehicle types');
        }
    };

    useEffect(() => {
        if (token) {
            fetchStates();
            fetchVehicleTypes(); // Fetch vehicle types when the token is available
        }
    }, [token]);


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



    const handleSubmit = async () => {
        if (!imeiText || !selectedState || !selectedDistrict || !selectedRtoDivision || !vehicleMakeText || !vehicleModelText) {
            Alert.alert('Validation Error', 'Please fill out all the required fields.');
            return;
        }


        const formData = {
            imei: imeiText,
            state: selectedState,
            district: selectedDistrict,
            rtoDivision: selectedRtoDivision,
            vehicleMake: vehicleMakeText,
            vehicleNumber: VehicleNumberText,
            vehicleModel: vehicleModelText,
            engineNumber: engineNumber,
            chasisNumber: chasisNumber,
            noOfSos: noOfSos
            
        };

        try {
            // Store the form data locally using AsyncStorage
            await AsyncStorage.setItem('formData', JSON.stringify(formData));
            console.log('Form data submitted:', formData);

            Alert.alert('Success', 'Form data has been submitted and stored locally!');

            // Reset form fields after submission
            setImeiText('');
            setvehicleMakeText('');
            setvehicleModelText('');
            setVehicleNumberText('');
            setSelectedState('');
            setSelectedDistrict('');
            setSelectedRtoDivision('');
            setEngineNumber('');
            setChasisNumber('');
            setNoOfSos('');

        } catch (error) {
            console.error('Error storing form data:', error);
            Alert.alert('Error', 'Failed to submit the form.');
        }



        navigation.navigate('TechnicianCertificate', { formData });
    };


    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    return (
        <SafeAreaView className=" flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
           <View className="bg-white w-[92%] h-[95%] rounded-md mt-5 ">
            <ScrollView>
            <View className="py-5">
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



                <Picker
                    selectedValue={vehicleType}
                    onValueChange={(itemValue) => setVehicleType(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Select Vehicle Type" value="" />
                    {vehicleTypes.map((vehicle) => (
                        <Picker.Item key={vehicle.id} label={vehicle.name} value={vehicle.id} />
                    ))}
                </Picker>

                <Text style={styles.label}>Vehicle Make</Text>

                <TextInput
                    label="Enter Vehicle Make"
                    value={vehicleMakeText}
                    onChangeText={handleVehicleMakeTextChange}
                    mode="outlined"
                />
                {showVehicleMakeSuggestions && VehicleMakeData.length > 0 && (
                    <View style={styles.suggestionsContainer}>
                        {VehicleMakeData.map((item) => (
                            <TouchableOpacity
                                key={item}
                                onPress={() => handleVehicleMakeSuggestionSelect(item)}
                                style={styles.suggestionItem}
                            >
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}

                <Text style={styles.label}>Vehicle Model</Text>





                <TextInput
                    label="Enter Vehicle Model"
                    value={vehicleModelText}
                    onChangeText={handleVehicleModelTextChange}
                    mode="outlined"
                />
                {showVehicleModelSuggestions && VehicleModelData.length > 0 && (
                    <View style={styles.suggestionsContainer}>
                        {VehicleModelData.map((item) => (
                            <TouchableOpacity
                                key={item}
                                onPress={() => handleVehicleModelSuggestionSelect(item)}
                                style={styles.suggestionItem}
                            >
                                <Text style={styles.itemText}>{item}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}




                <Text style={styles.label}>Engine Number</Text>

                <TextInput
                    label="Enter Engine Number"
                    value={engineNumber}
                    onChangeText={setEngineNumber}
                    mode="outlined"
                />


                <Text style={styles.label}>Chasis Number:</Text>
                <TextInput

                    label="Enter Chasis Number"
                    value={chasisNumber}
                    onChangeText={setChasisNumber}
                    mode="outlined"
                />


                <Text style={styles.label}>Number of SOS:</Text>
                <TextInput

                    label="Enter Number of SOS"
                    value={noOfSos}
                    onChangeText={setNoOfSos}
                    mode="outlined"
                />

                <Text style={{ fontSize: 20, color: '#4e2d87' }}>Upload Documents</Text>

                <Text> * Vehicle Image</Text>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Button title="Browse" onPress={selectImage} color="green" />
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Clear" onPress={clearImage} color="red" />
                    </View>
                </View>


                <Text> *  Vehicle Rc</Text>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Button title="Browse" onPress={selectImage} color="green" />
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Clear" onPress={clearImage} color="red" />
                    </View>
                </View>


                <Text> * Vehicle Device image</Text>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Button title="Browse" onPress={selectImage} color="green" />
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Clear" onPress={clearImage} color="red" />
                    </View>
                </View>


                <Text> Customer Aadhar Card</Text>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Button title="Browse" onPress={selectImage} color="green" />
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Clear" onPress={clearImage} color="red" />
                    </View>
                </View>


                <Text> Customer Pan Card </Text>
                <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                    <Button title="Browse" onPress={selectImage} color="green" />
                    <View style={{ marginLeft: 10 }}>
                        <Button title="Clear" onPress={clearImage} color="red" />
                    </View>
                </View>


                <Button title="Submit" onPress={handleSubmit} />


                </View>
            </ScrollView>
            </View>
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


