

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
import Dealer from '../dealer/Dealer';


const Distributorinstallationfrom = () => {
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
    const [Customer, setCustomer] = useState('');
    const [DealerName, setDealerName] = useState('');
    const [DateofInstallation, setDateofInstallation] = useState(' ');
    const [IMEI, setIMEI] = useState(' ');
    const [ICCID, setICCID] = useState(' ');
    const [SIMONE, setSIMONE] = useState(' ');
    const [SIMTWO, setSIMTWO] = useState(' ');
    const [NetworkProfiles, setNetworkProfiles] = useState('');
    const [ValidityStartDate, setValidityStartDate] = useState(' ');
    const [ValidityEndDate, setValidityEndDate] = useState(' ');
    const [FitmentcertificateNo, setFitmentcertificateNo] = useState('');
    const [DowanloadCertificate, setDowanloadCertificate] = useState('');
    const [DepartmentCopy, setDepartmentCopy] = useState(' ');
    const [CustomerCopy, setCustomerCopy] = useState('');



    const handleCustomerTextChange = (text) => {
        setCustomer(text);
        // You can add further logic, such as validation or formatting
    };

    const handleDealerNameTextChange = (text) => {
        setDealerName(text);
        // You can add further logic, such as validation or formatting
    };


    const handleDateofInstallationTextChange = (text) => {
        setDateofInstallation(text);
        // You can add further logic, such as validation or formatting
    };

    const handleIMEITextChange = (text) => {
        setIMEI(text);
        // You can add further logic, such as validation or formatting
    };


    const handleSIMTWOTextChange = (text) => {
        setSIMTWO(text);
        // You can add further logic, such as validation or formatting
    };

    const handleICCIDTextChange = (text) => {
        setICCID(text);
        // You can add further logic, such as validation or formatting
    };

    const handleSIMONETextChange = (text) => {
        setSIMONE(text);
        // You can add further logic, such as validation or formatting
    };


    const handleNetworkProfilesTextChange = (text) => {
        setNetworkProfiles(text);
        // You can add further logic, such as validation or formatting
    };


    const handleValidityStartDateTextChange = (text) => {
        setValidityStartDate(text);
        // You can add further logic, such as validation or formatting
    };

    const handleValidityEndDateTextChange = (text) => {
        setValidityEndDate(text);
        // You can add further logic, such as validation or formatting
    };

    const handleFitmentcertificateNoTextChange = (text) => {
        setFitmentcertificateNo(text);
        // You can add further logic, such as validation or formatting
    };

    const handleDowanloadCertificateTextChange = (text) => {
        setDowanloadCertificate(text);
        // You can add further logic, such as validation or formatting
    };


    const handleDepartmentCopyTextChange = (text) => {
        setDepartmentCopy(text);
        // You can add further logic, such as validation or formatting
    };


    const handleCustomerCopyTextChange = (text) => {
        setCustomerCopy(text);
        // You can add further logic, such as validation or formatting
    };













    const handleVehicleNumberTextChange = (text) => {
        setVehicleNumberText(text);
    };

    const [loading, setLoading] = useState(false);
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
        setLoading(false);
        try {
            const response = await axios.get(
                `http://testing-only-erp-api.containe.in/VehicleModel/AutoCompleteVehicleModel?prefix=${input}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'MobileAPISecKey': 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
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
        setLoading(false);
        try {
            const response = await axios.get(
                `http://testing-only-erp-api.containe.in/VehicleMake/AutoCompleteVehicleMake?prefix=${input}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'MobileAPISecKey': 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
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
                    'MobileAPISecKey': 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
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
        setLoading(false);
        try {
            const response = await axios.get('http://testing-only-erp-api.containe.in/States', {
                headers: {
                    'MobileAPISecKey': 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
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
        setLoading(false);
        try {
            const response = await axios.get(
                `http://testing-only-erp-api.containe.in/DeviceManagement/AutoCompleteIMEI?prefix=${input}&userId=${userId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'MobileAPISecKey': 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
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
                    'MobileAPISecKey': 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
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
                    'MobileAPISecKey': 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
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
        if (!imeiText || !Customer || !selectedState || !selectedDistrict || !selectedRtoDivision || !vehicleMakeText || !vehicleModelText) {
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
            <View className="bg-white w-[92%] h-[95%] rounded-md mt-5 p-5 ">
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>

                    <View className="py-5">
                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>IMEI</Text>
                        <TextInput
                            mode="outlined"
                            label="IMEI"
                            value={imeiText}
                            keyboardType="numeric"  // This will open a numeric keypad
                            onChangeText={(text) => {
                                // Use a regular expression to allow only numbers
                                const numericText = text.replace(/[^0-9]/g, '');
                                handleImeiTextChange(numericText); // Call the handler with only numeric text
                            }}
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




                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Customer</Text>
                        <TextInput
                            mode="outlined"
                            label="Customer"

                            onChangeText={handleCustomerTextChange}
                        />



                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>ICCID</Text>
                        <TextInput
                            mode="outlined"
                            label="ICCID"

                            onChangeText={handleICCIDTextChange}
                        />



                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Network Profiles</Text>
                        <TextInput
                            mode="outlined"
                            label="Network Profiles"

                            onChangeText={handleNetworkProfilesTextChange}
                        />







                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Date of Installation</Text>
                        <TextInput
                            mode="outlined"
                            label="Date of Installation"

                            onChangeText={handleDateofInstallationTextChange}
                        />


                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>SIM ONE</Text>
                        <TextInput
                            mode="outlined"
                            label="SIM ONE"

                            onChangeText={handleSIMONETextChange}
                        />

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>SIM Two</Text>
                        <TextInput
                            mode="outlined"
                            label="SIM TWO"

                            onChangeText={handleSIMTWOTextChange}
                        />


                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Validity Start Date</Text>
                        <TextInput
                            mode="outlined"
                            label="Validity Start Date"

                            onChangeText={handleValidityStartDateTextChange}
                        />

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Validity End Date</Text>
                        <TextInput
                            mode="outlined"
                            label="Validity End Date"

                            onChangeText={handleValidityEndDateTextChange}
                        />

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Fitment certificate No</Text>
                        <TextInput
                            mode="outlined"
                            label="Fitment certificate No"

                            onChangeText={handleFitmentcertificateNoTextChange}
                        />

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Dowanload certificate</Text>
                        <TextInput
                            mode="outlined"
                            label="Dowanload Certificate"

                            onChangeText={handleDowanloadCertificateTextChange}
                        />

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Department copy</Text>
                        <TextInput
                            mode="outlined"
                            label="Department copy"

                            onChangeText={handleDepartmentCopyTextChange}
                        />


                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Customer Copy</Text>
                        <TextInput
                            mode="outlined"
                            label="Customer Copy"

                            onChangeText={handleCustomerCopyTextChange}
                        />










                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>DealerName</Text>
                        <TextInput
                            mode="outlined"
                            label="Customer"

                            onChangeText={handleDealerNameTextChange}
                        />



                        <Text className=" mt-5" style={{ fontSize: 20, color: '#4e2d87' }}>RTO Details</Text>
                        <Text style={styles.label}>Select a State:</Text>
                        <View style={styles.pickerContainer}>
                            <Picker

                                selectedValue={selectedState}
                                onValueChange={handleStateChange}
                                style={styles.picker}


                            >
                                <Picker.Item label="Select a state" value="" />
                                {states.map((state) => (
                                    <Picker.Item key={state.stateId} label={state.stateName} value={state.stateId} color="#000000" />
                                ))}
                            </Picker>
                        </View>

                        <Text style={styles.label}>Select a District:</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedDistrict}
                                onValueChange={setSelectedDistrict}
                                style={styles.picker}
                            >
                                <Picker.Item label="Select a district" value="" color="#000000" />
                                {districts.map((district) => (
                                    <Picker.Item key={district.districtId} label={district.districtName} value={district.districtName} color="#000000" />
                                ))}
                            </Picker>
                        </View>




                        <Text style={styles.label}>Select an RTO Division:</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={selectedRtoDivision}
                                onValueChange={setSelectedRtoDivision}
                                style={styles.picker}
                            >
                                <Picker.Item label="Select RTO division" value="" color="#000000" />
                                {rtoDivisions.map((rto) => (
                                    <Picker.Item key={rto.rtaDivisionName} label={rto.rtaDivisionName} value={rto.rtaDivisionName} color="#000000" />
                                ))}
                            </Picker>
                        </View>

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Add Vehicle Detail</Text>

                        <Text style={styles.label}>Vehicle Birth</Text>
                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={vehicleType}
                                onValueChange={(itemValue) => setVehicleType(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Select Vehicle Type" value="" color="#000000" />
                                <Picker.Item label="Old" value="old" />
                                <Picker.Item label="New" value="new" />
                            </Picker>
                        </View>


                        <Text style={styles.label}>Vehicle Number</Text>


                        <TextInput
                            mode="outlined"
                            label="Enter Vehicle Number"
                            value={VehicleNumberText}
                            onChangeText={handleVehicleNumberTextChange}
                        />

                        <Text style={styles.label}>Vehicle Type</Text>


                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={vehicleType}
                                onValueChange={(itemValue) => setVehicleType(itemValue)}
                                style={styles.picker}
                            >
                                <Picker.Item label="Select Vehicle Type" value="" />
                                {vehicleTypes.map((vehicle) => (
                                    <Picker.Item key={vehicle.id} label={vehicle.name} value={vehicle.id} color="#000000" />
                                ))}
                            </Picker>
                        </View>

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


                        <View style={styles.pickerContainer}>
                            <Picker
                                selectedValue={noOfSos}
                                onValueChange={(itemValue) => setNoOfSos(itemValue)}
                                style={styles.picker} color="#000000"
                            >
                                <Picker.Item label="Select Number of SOS" value="" color="#000000" />
                                {Array.from({ length: 10 }, (_, i) => (
                                    <Picker.Item key={i + 1} label={`${i + 1}`} value={`${i + 1}`} />
                                ))}
                            </Picker>
                        </View>

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
        color: 'black'

    },
    picker: {
        marginBottom: 20,
        backgroundColor: '#fff',
        height: 29,
        borderColor: 'black', // or any color you want
        borderWidth: 1,       // set the width of the border
        borderRadius: 1,
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

    pickerContainer: {
        borderWidth: 1, // Border thickness
        borderColor: '#000000', // Border color (black)
        borderRadius: 1, // Optional: rounded corners
        overflow: 'hidden', // Ensure content doesn't overflow rounded corners
        backgroundColor: '#000000',
    },
});

export default Distributorinstallationfrom;




import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DocumentPicker from 'react-native-document-picker';

// Validation schema
const validationSchema = Yup.object().shape({
    dealer: Yup.string().required('Dealer is required'),
    technician: Yup.string().required('Technician is required'),
    imei: Yup.string().required('IMEI is required'),
    customer: Yup.string().required('Customer name is required'),
    iccid: Yup.string().required('ICCID is required'),
    networkProfiles: Yup.string().required('Network Profiles is required'),
    dateOfInstallation: Yup.date().nullable().required('Date of Installation is required'),
    simOne: Yup.string().required('SIM ONE is required'),
    simTwo: Yup.string().required('SIM TWO is required'),
    validityStartDate: Yup.date().nullable().required('Validity Start Date is required'),
    validityEndDate: Yup.date().nullable().required('Validity End Date is required'),
    fitmentCertificateNo: Yup.string().required('Fitment Certificate No is required'),
    dealerName: Yup.string().required('Dealer Name is required'),
    state: Yup.string().required('State is required'),
    district: Yup.string().required('District is required'),
    rtoDivision: Yup.string().required('RTO Division is required'),
    vehicleBirth: Yup.string().required('Vehicle Birth is required'),
    vehicleNumber: Yup.string().required('Vehicle Number is required'),
    vehicleType: Yup.string().required('Vehicle Type is required'),
    vehicleMake: Yup.string().required('Vehicle Make is required'),
    vehicleModel: Yup.string().required('Vehicle Model is required'),
    engineNumber: Yup.string().required('Engine Number is required'),
    chasisNumber: Yup.string().required('Chasis Number is required'),
    numberOfSOS: Yup.number().required('Number of SOS is required'),
});

const DistributorInstallationForm = () => {
    const [search, setSearch] = React.useState('');

    const handleFileUpload = async (setFieldValue, fieldName) => {
        try {
            const result = await DocumentPicker.pickSingle();
            setFieldValue(fieldName, result.uri);
        } catch (err) {
            if (!DocumentPicker.isCancel(err)) {
                console.error(err);
            }
        }
    };



    // const selectImage = async () => {
    //             try {
    //                 const pickedImage = await ImageCropPicker.openPicker({
    //                     width: 300,
    //                     height: 400,
    //                     cropping: true,
    //                     includeBase64: true
    //                 });
        
    //                 setImage({ uri: `data:${pickedImage.mime};base64,${pickedImage.data}` });
    //             } catch (error) {
    //                 console.log('Error selecting image:', error);
    //             }
    //         };
        
    //         const clearImage = () => {
    //             setImage(null);
    //         };
        

            const DocumentUpload = ({ label, onBrowse, onClear }) => {
                return (
                    <View className="mb-5">
                        <Text className="mb-2 text-lg font-bold">* {label}</Text>
                        <View className="flex-row">
                            <Button title="Browse" onPress={onBrowse} color="green" />
                            <View className="ml-3">
                                <Button title="Clear" onPress={onClear} color="red" />
                            </View>
                        </View>
                    </View>
                );
            };

            const App = () => {
                const selectImage = () => {
                    console.log('Browse pressed');
                };
            
                const clearImage = () => {
                    console.log('Clear pressed');
                };











    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
                    <Formik
                        initialValues={{
                            dealer: '',
                            technician: '',
                            imei: '',
                            customer: '',
                            iccid: '',
                            networkProfiles: '',
                            dateOfInstallation: null,
                            simOne: '',
                            simTwo: '',
                            validityStartDate: null,
                            validityEndDate: null,
                            fitmentCertificateNo: '',
                            dealerName: '',
                            state: '',
                            district: '',
                            rtoDivision: '',
                            vehicleBirth: '',
                            vehicleNumber: '',
                            vehicleType: '',
                            vehicleMake: '',
                            vehicleModel: '',
                            engineNumber: '',
                            chasisNumber: '',
                            numberOfSOS: '',
                            vehicleImage: '',
                            vehicleRc: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            values,
                            errors,
                            touched,
                        }) => (
                            <>
                                {[
                                    { name: 'dealer', label: 'Dealer' },
                                    { name: 'technician', label: 'Technician' },
                                    { name: 'imei', label: 'IMEI' },
                                    { name: 'customer', label: 'Customer' },
                                    { name: 'state', label: 'State' },
                                    { name: 'district', label: 'District' },
                                    { name: 'rtoDivision', label: 'RTO Division' },
                                    { name: 'vehicleBirth', label: 'Vehicle Birth' },
                                    { name: 'vehicleNumber', label: 'Vehicle Number' },
                                    { name: 'vehicleType', label: 'Vehicle Type' },
                                    { name: 'vehicleMake', label: 'Vehicle Make' },
                                    { name: 'vehicleModel', label: 'Vehicle Model' },
                                    { name: 'engineNumber', label: 'Engine Number' },
                                    { name: 'chasisNumber', label: 'Chasis Number' },
                                    { name: 'numberOfSOS', label: 'Number of SOS' },
                                    { name: 'iccid', label: 'ICCID' },
                                ].map((field) => (
                                    <View key={field.name} style={styles.inputContainer}>
                                        <Text>{field.label}</Text>
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={handleChange(field.name)}
                                            onBlur={handleBlur(field.name)}
                                            value={values[field.name]}
                                        />
                                        {touched[field.name] && errors[field.name] && (
                                            <Text style={styles.error}>{errors[field.name]}</Text>
                                        )}
                                    </View>
                                ))}

                                {/* <Text>Upload Vehicle Image</Text>
                                <Button
                                    title="Upload"
                                    onPress={() => handleFileUpload(setFieldValue, 'vehicleImage')}
                                />
                                {errors.vehicleImage && touched.vehicleImage && (
                                    <Text style={styles.error}>{errors.vehicleImage}</Text>
                                )}

                                <Text>Upload Vehicle RC</Text>
                                <Button
                                    title="Upload"
                                    onPress={() => handleFileUpload(setFieldValue, 'vehicleRc')}
                                />
                                {errors.vehicleRc && touched.vehicleRc && (
                                    <Text style={styles.error}>{errors.vehicleRc}</Text>
                                )}

                                <Button title="Submit" onPress={handleSubmit} /> */}


                                <Text style={{ fontSize: 20, color: '#4e2d87' }}>Upload Documents</Text>

{/* <Text> * Vehicle Image</Text>
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
</View> */}


<View className="p-5">
            <DocumentUpload label="Vehicle Image" onBrowse={selectImage} onClear={clearImage} />
            <DocumentUpload label="Vehicle RC" onBrowse={selectImage} onClear={clearImage} />
            <DocumentUpload label="Vehicle Device Image" onBrowse={selectImage} onClear={clearImage} />
            <DocumentUpload label="Customer Aadhar Card" onBrowse={selectImage} onClear={clearImage} />
            <DocumentUpload label="Customer Pan Card" onBrowse={selectImage} onClear={clearImage} />
        </View>



<Button title="Submit" onPress={handleSubmit} />







                            </>
                        )}
                    </Formik>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 5,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
});

export default DistributorInstallationForm;



import React from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    ScrollView,
    StyleSheet,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DocumentPicker from 'react-native-document-picker';

// Validation schema
const validationSchema = Yup.object().shape({
    dealer: Yup.string().required('Dealer is required'),
    technician: Yup.string().required('Technician is required'),
    imei: Yup.string().required('IMEI is required'),
    customer: Yup.string().required('Customer name is required'),
    iccid: Yup.string().required('ICCID is required'),
    networkProfiles: Yup.string().required('Network Profiles is required'),
    dateOfInstallation: Yup.date().nullable().required('Date of Installation is required'),
    simOne: Yup.string().required('SIM ONE is required'),
    simTwo: Yup.string().required('SIM TWO is required'),
    validityStartDate: Yup.date().nullable().required('Validity Start Date is required'),
    validityEndDate: Yup.date().nullable().required('Validity End Date is required'),
    fitmentCertificateNo: Yup.string().required('Fitment Certificate No is required'),
    dealerName: Yup.string().required('Dealer Name is required'),
    state: Yup.string().required('State is required'),
    district: Yup.string().required('District is required'),
    rtoDivision: Yup.string().required('RTO Division is required'),
    vehicleBirth: Yup.string().required('Vehicle Birth is required'),
    vehicleNumber: Yup.string().required('Vehicle Number is required'),
    vehicleType: Yup.string().required('Vehicle Type is required'),
    vehicleMake: Yup.string().required('Vehicle Make is required'),
    vehicleModel: Yup.string().required('Vehicle Model is required'),
    engineNumber: Yup.string().required('Engine Number is required'),
    chasisNumber: Yup.string().required('Chasis Number is required'),
    numberOfSOS: Yup.number().required('Number of SOS is required'),
});

const DistributorInstallationForm = () => {
    const [search, setSearch] = React.useState('');

    const handleFileUpload = async (setFieldValue, fieldName) => {
        try {
            const result = await DocumentPicker.pickSingle();
            setFieldValue(fieldName, result.uri);
        } catch (err) {
            if (!DocumentPicker.isCancel(err)) {
                console.error(err);
            }
        }
    };

    const selectImage = () => {
        console.log('Browse pressed');
    };

    const clearImage = () => {
        console.log('Clear pressed');
    };

    const DocumentUpload = ({ label, onBrowse, onClear }) => (
        <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>{label}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Button title="Browse" onPress={onBrowse} color="green" />
                <View style={{ marginLeft: 10 }}>
                    <Button title="Clear" onPress={onClear} color="red" />
                </View>
            </View>
        </View>
    );

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={styles.container}>
                    <Formik
                        initialValues={{
                            dealer: '',
                            technician: '',
                            imei: '',
                            customer: '',
                            iccid: '',
                            networkProfiles: '',
                            dateOfInstallation: null,
                            simOne: '',
                            simTwo: '',
                            validityStartDate: null,
                            validityEndDate: null,
                            fitmentCertificateNo: '',
                            dealerName: '',
                            state: '',
                            district: '',
                            rtoDivision: '',
                            vehicleBirth: '',
                            vehicleNumber: '',
                            vehicleType: '',
                            vehicleMake: '',
                            vehicleModel: '',
                            engineNumber: '',
                            chasisNumber: '',
                            numberOfSOS: '',
                        }}
                        validationSchema={validationSchema}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            setFieldValue,
                            values,
                            errors,
                            touched,
                        }) => (
                            <>
                                {[{ name: 'dealer', label: 'Dealer' }].map((field) => (
                                    <View key={field.name} style={styles.inputContainer}>
                                        <Text>{field.label}</Text>
                                        <TextInput
                                            style={styles.input}
                                            onChangeText={handleChange(field.name)}
                                            onBlur={handleBlur(field.name)}
                                            value={values[field.name]}
                                        />
                                        {touched[field.name] && errors[field.name] && (
                                            <Text style={styles.error}>{errors[field.name]}</Text>
                                        )}
                                    </View>
                                ))}

                                <Text style={{ fontSize: 20, color: '#4e2d87' }}>
                                    Upload Documents
                                </Text>
                                <DocumentUpload
                                    label="Vehicle Image"
                                    onBrowse={selectImage}
                                    onClear={clearImage}
                                />
                                <Button title="Submit" onPress={handleSubmit} />
                            </>
                        )}
                    </Formik>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputContainer: {
        marginBottom: 15,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        borderRadius: 5,
    },
    error: {
        color: 'red',
        fontSize: 12,
    },
});

export default DistributorInstallationForm;










import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DocumentPicker from 'react-native-document-picker';

// Validation schema
const validationSchema = Yup.object().shape({
  dealer: Yup.string().required('Dealer is required'),
  // Add other fields...
});

const DistributorInstallationForm = () => {
  const selectImage = () => console.log('Browse pressed');
  const clearImage = () => console.log('Clear pressed');

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView className="p-4" contentContainerStyle={{ paddingBottom: 20 }}>
          <Formik
            initialValues={{
              dealer: '',
              // Add other fields...
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <View className="mb-5">
                  <Text className="text-lg font-bold">Dealer</Text>
                  <TextInput
                    className="border border-gray-300 rounded p-2"
                    onChangeText={handleChange('dealer')}
                    onBlur={handleBlur('dealer')}
                    value={values.dealer}
                  />
                  {touched.dealer && errors.dealer && (
                    <Text className="text-red-500 text-sm">{errors.dealer}</Text>
                  )}
                </View>

                <View className="p-5">
                  <DocumentUpload label="Vehicle Image" onBrowse={selectImage} onClear={clearImage} />
                  <DocumentUpload label="Vehicle RC" onBrowse={selectImage} onClear={clearImage} />
                  {/* Add more fields as necessary */}
                </View>

                <Button title="Submit" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const DocumentUpload = ({ label, onBrowse, onClear }) => {
  return (
    <View className="mb-5">
      <Text className="mb-2 text-lg font-bold">* {label}</Text>
      <View className="flex-row">
        <Button title="Browse" onPress={onBrowse} color="green" />
        <View className="ml-3">
          <Button title="Clear" onPress={onClear} color="red" />
        </View>
      </View>
    </View>
  );
};

export default DistributorInstallationForm;



import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DistributorInstallationForm = ({ route, navigation }) => {
    const { token, userId } = route.params; // Extract token and userId from route params

    useEffect(() => {
        // Log the token and userId to verify they are being passed correctly
        console.log('Token:', token);
        console.log('UserId:', userId);
    }, [token, userId]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Distributor Installation Form</Text>
            <Text style={styles.text}>Token: {token}</Text>
            <Text style={styles.text}>UserId: {userId}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()} // Navigate back to DistributorHome
            >
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#007bff',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default DistributorInstallationForm;




import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, HelperText, Button } from 'react-native-paper';

const PaperTextInputExample = () => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const validateInput = () => {
    return text.trim().length < 5; // Example validation rule: Minimum 5 characters.
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Your Input"
        value={text}
        onChangeText={setText}
        mode="outlined" // Available modes: 'flat', 'outlined'
        style={styles.textInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        error={validateInput() && isFocused} // Highlight error only when field loses focus
        right={<TextInput.Icon name="check" color={validateInput() ? 'red' : 'green'} />}
      />
      <HelperText type="error" visible={validateInput() && isFocused}>
        Input must be at least 5 characters long.
      </HelperText>
      <Button mode="contained" onPress={() => console.log("Submitted:", text)} style={styles.button}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  textInput: {
    marginBottom: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default PaperTextInputExample;


















// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import useApi from '../../../customhook/useApi'; 
// import { useRoute } from '@react-navigation/native';

// const DistributorInstallationForm = () => {
//     const [token, setToken] = useState(null);
//     const [formData, setFormData] = useState({
//         vehicleMake: '',
//         vehicleModel: '',
//         dealer: '',
//         technician: '',
//         imei: '',
//         customer: '',
//         state: '',
//         district: '',
//         rtodivision: '',
//         vehiclebirth: '',
//         vehiclenumber: '',
//         vehicletype: '',
//         manufacturingyear: '',
//         enginenumber: '',
//         chassisnumber: '',
//         sos: '',
//     });

//     const [image, setImage] = useState(null);
//     const [showSuggestions, setShowSuggestions] = useState({
//         vehicleMake: false,
//         vehicleModel: false,
//     });

//     const route = useRoute();
//     const userId = route.params?.userId;

//     const { data: vehicleMakes, fetchData: fetchVehicleMakes } = useApi(
//         'http://testing-only-erp-api.containe.in/VehicleMake/AutoCompleteVehicleMake',
//         token
//     );
//     const { data: vehicleModels, fetchData: fetchVehicleModels } = useApi(
//         'http://testing-only-erp-api.containe.in/VehicleModel/AutoCompleteVehicleModel',
//         token
//     );

//     const vehicleMakeInputRef = useRef(null);
//     const vehicleModelInputRef = useRef(null);

//     useEffect(() => {
//         const fetchToken = async () => {
//             try {
//                 const storedToken = await AsyncStorage.getItem('userToken');
//                 if (storedToken) setToken(storedToken);
//             } catch (error) {
//                 console.error('Failed to fetch token:', error);
//             }
//         };
//         fetchToken();
//     }, []);

//     const handleImageSelection = async () => {
//         try {
//             const pickedImage = await ImageCropPicker.openPicker({
//                 width: 300,
//                 height: 400,
//                 cropping: true,
//                 includeBase64: true,
//             });
//             setImage({ uri: `data:${pickedImage.mime};base64,${pickedImage.data}` });
//         } catch (error) {
//             console.error('Error selecting image:', error);
//         }
//     };

//     const handleInputChange = (key, value) => {
//         setFormData((prev) => ({ ...prev, [key]: value }));
//         if (key === 'vehicleMake' && value.length >= 3) {
//             fetchVehicleMakes({ prefix: value });
//             setShowSuggestions((prev) => ({ ...prev, vehicleMake: true }));
//         }
//         if (key === 'vehicleModel' && value.length >= 3) {
//             fetchVehicleModels({ prefix: value });
//             setShowSuggestions((prev) => ({ ...prev, vehicleModel: true }));
//         }
//     };

//     const handleFormSubmit = () => {
//         console.log('Form Data:', formData);
//         if (!formData.vehicleMake || !formData.vehicleModel) {
//             alert('Please fill all mandatory fields!');
//             return;
//         }
//         // Submit logic here
//     };

//     return (
//         <ScrollView style={styles.container}>
//             <TextInput
//                 ref={vehicleMakeInputRef}
//                 mode="outlined"
//                 label="Vehicle Make"
//                 value={formData.vehicleMake}
//                 onChangeText={(text) => handleInputChange('vehicleMake', text)}
//                 style={{ marginBottom: 16 }}
//             />
//             {showSuggestions.vehicleMake &&
//                 vehicleMakes?.map((make, index) => (
//                     <TouchableOpacity
//                         key={index}
//                         onPress={() => {
//                             handleInputChange('vehicleMake', make);
//                             setShowSuggestions((prev) => ({ ...prev, vehicleMake: false }));
//                             vehicleMakeInputRef.current.blur();
//                         }}
//                     >
//                         <Text style={styles.suggestion}>{make}</Text>
//                     </TouchableOpacity>
//                 ))}

//             <TextInput
//                 ref={vehicleModelInputRef}
//                 mode="outlined"
//                 label="Vehicle Model"
//                 value={formData.vehicleModel}
//                 onChangeText={(text) => handleInputChange('vehicleModel', text)}
//                 style={{ marginBottom: 16 }}
//             />
//             {showSuggestions.vehicleModel &&
//                 vehicleModels?.map((model, index) => (
//                     <TouchableOpacity
//                         key={index}
//                         onPress={() => {
//                             handleInputChange('vehicleModel', model);
//                             setShowSuggestions((prev) => ({ ...prev, vehicleModel: false }));
//                             vehicleModelInputRef.current.blur();
//                         }}
//                     >
//                         <Text style={styles.suggestion}>{model}</Text>
//                     </TouchableOpacity>
//                 ))}

//             <Button mode="contained" onPress={handleImageSelection} style={styles.button}>
//                 Select Image
//             </Button>
//             {image && <Image source={{ uri: image.uri }} style={styles.image} />}

//             <Button mode="contained" onPress={handleFormSubmit} style={styles.submitButton}>
//                 Submit
//             </Button>
//         </ScrollView>
//     );
// };

// const styles = {
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     suggestion: {
//         padding: 10,
//         fontSize: 16,
//         backgroundColor: '#f1f1f1',
//         marginTop: 5,
//     },
//     button: {
//         marginTop: 20,
//     },
//     image: {
//         width: 100,
//         height: 100,
//         marginTop: 20,
//     },
//     submitButton: {
//         marginTop: 30,
//     },
// };

// export default DistributorInstallationForm;
















import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageCropPicker from 'react-native-image-crop-picker';
import useApi from '../../../customhook/useApi';
import { useRoute } from '@react-navigation/native';

const DistributorInstallationForm = () => {
    const [token, setToken] = useState(null);
    const [vehicleMake, setVehicleMake] = useState('');
    const [vehicleModel, setVehicleModel] = useState('');
    const [image, setImage] = useState(null);
    const [showSuggestions, setShowSuggestions] = useState({ make: false, model: false });

    const route = useRoute();
    const userId = route.params?.userId;

    const { data: vehicleMakes, fetchData: fetchVehicleMakes } = useApi(
        'http://testing-only-erp-api.containe.in/VehicleMake/AutoCompleteVehicleMake',
        token
    );
    const { data: vehicleModels, fetchData: fetchVehicleModels } = useApi(
        'http://testing-only-erp-api.containe.in/VehicleModel/AutoCompleteVehicleModel',
        token
    );

    const vehicleMakeInputRef = useRef(null);

    useEffect(() => {
        const fetchToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem('userToken');
                if (storedToken) setToken(storedToken);
            } catch (error) {
                console.error('Failed to fetch token:', error);
            }
        };
        fetchToken();
    }, []);

    const handleImageSelection = async () => {
        try {
            const pickedImage = await ImageCropPicker.openPicker({
                width: 300,
                height: 400,
                cropping: true,
                includeBase64: true,
            });
            setImage({ uri: `data:${pickedImage.mime};base64,${pickedImage.data}` });
        } catch (error) {
            console.error('Error selecting image:', error);
        }
    };

    const handleInputChange = (text, type) => {
        if (type === 'make') {
            setVehicleMake(text);
            if (text.length >= 3) fetchVehicleMakes({ prefix: text });
            setShowSuggestions((prev) => ({ ...prev, make: true }));
        } else if (type === 'model') {
            setVehicleModel(text);
            if (text.length >= 3) fetchVehicleModels({ prefix: text });
            setShowSuggestions((prev) => ({ ...prev, model: true }));
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                ref={vehicleMakeInputRef}
                mode="outlined"
                label="Vehicle Make"
                value={vehicleMake}
                onChangeText={(text) => handleInputChange(text, 'make')}
                style={{ marginBottom: 27 }}
            />
            {showSuggestions.make &&
                vehicleMakes?.map((make, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            setVehicleMake(make);
                            setShowSuggestions((prev) => ({ ...prev, make: false }));
                            vehicleMakeInputRef.current.blur();
                        }}
                    >
                        <Text style={styles.suggestion}>{make}</Text>
                    </TouchableOpacity>
                ))}

            <TextInput
                mode="outlined"
                label="Vehicle Model"
                value={vehicleModel}
                onChangeText={(text) => handleInputChange(text, 'model')}
                style={{ marginBottom: 27 }}
            />
            {showSuggestions.model &&
                vehicleModels?.map((model, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => {
                            setVehicleModel(model);
                            setShowSuggestions((prev) => ({ ...prev, model: false }));
                        }}
                    >
                        <Text style={styles.suggestion}>{model}</Text>
                    </TouchableOpacity>
                ))}

            <Button mode="contained" onPress={handleImageSelection} style={styles.button}>
                Select Image
            </Button>
            {image && <Text>Image Selected</Text>}
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        padding: 16,
    },
    suggestion: {
        padding: 10,
        fontSize: 16,
        backgroundColor: '#f1f1f1',
        marginTop: 5,
    },
    button: {
        marginTop: 20,
    },
};

export default DistributorInstallationForm;




//code for distributor installation form 

import React, { useState, useEffect, useCallback } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute for route access
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import useApi from '../../../customhook/useApi'; // Custom hook to fetch data

const DistributorInstallationForm = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null); // State to store the token

  // Access route params using useRoute hook
  const route = useRoute();

  useEffect(() => {
    // Fetch token from AsyncStorage
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('userToken'); // Fetch the token
        if (storedToken) {
          setToken(storedToken); // Set token if it exists
        }
      } catch (error) {
        console.error('Failed to fetch token:', error); // Handle errors
      }
    };

    fetchToken();
  }, []); // Only run on component mount

  // Use the useApi hook with the dynamic token
  const { data, loading: apiLoading, error, fetchData } = useApi(
    'http://testing-only-erp-api.containe.in/User/GetDealersbyParent',
    token
  );

  console.log(data.data);
  // Handle input change and call fetchData
  const handleInputChange = useCallback(
    (text) => {
      setSearchText(text);

      if (!text) {
        setSuggestions([]); // Reset suggestions if text is empty
        return;
      }

      setLoading(true);
      fetchData({
        clientRoleId: 3,
        parentId: 171,
      }).finally(() => setLoading(false)); // Fetch data on input change
    },
    [fetchData]
  );

  // Filter suggestions based on search text
  const filteredSuggestions = data.filter((dealer) =>
    dealer.usersBusinessName.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for dealers"
        value={searchText}
        onChangeText={handleInputChange}
      />

      {loading || apiLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={filteredSuggestions}
          keyExtractor={(item) => item.usersId.toString()}
          renderItem={({ item }) => (
            <Text style={styles.suggestionItem}>{item.usersBusinessName}</Text>
          )}
        />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black', // Changed text color to black
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color: 'black', // Changed text color to black
  },
  errorText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'red',
  },
});

export default DistributorInstallationForm;






import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute for route access
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import useApi from '../../../customhook/useApi'; // Custom hook to fetch data
import { TextInput, Button } from 'react-native-paper';

const technicianInstallationForm = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

    const route = useRoute();



    const fetchToken = async () => {
        try {
          const storedToken = await AsyncStorage.getItem('userToken'); // Fetch the token
          if (storedToken) {
            setToken(storedToken); // Set token if it exists
          }
        } catch (error) {
          console.error('Failed to fetch token:', error); // Handle errors
        }
      };
  
      fetchToken();
    }, []); // Only run on component mount
  
    // Use the useApi hook with the dynamic token
    const { data, loading: apiLoading, error, fetchData } = useApi(
      'http://testing-only-erp-api.containe.in/User/GetDealerByTechnicianForInstalation',
      token
    );
  
    console.log(data.data);
    // Handle input change and call fetchData
    const handleInputChange = useCallback(
      (text) => {
        setSearchText(text);
  
        if (!text) {
          setSuggestions([]); // Reset suggestions if text is empty
          return;
        }
  
        setLoading(true);
        fetchData({
          clientRoleId: 3,
          technicianId: 220,
        }).finally(() => setLoading(false)); // Fetch data on input change
      },
      [fetchData]
    );
  
    // Filter suggestions based on search text
    const filteredSuggestions = data.filter((Technician) =>
        Technician.usersBusinessName.toLowerCase().includes(searchText.toLowerCase())
    );
  
    // Handle suggestion item click
    const handleSuggestionSelect = (item) => {
      setSearchText(item.usersBusinessName); // Set the input field to the selected item
      setSuggestions([]); // Close the suggestion list
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Search for dealers"
          mode="outlined"
          label="Technician Name"
          value={searchText}
          onChangeText={handleInputChange}
          style={{ marginBottom: 27 }}
        />
  
        {loading || apiLoading ? (
          <Text style={styles.loadingText}>Loading...</Text>
        ) : (
          <FlatList
            data={filteredSuggestions}
            keyExtractor={(item) => item.usersId.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleSuggestionSelect(item)}>
                <Text style={styles.suggestionItem}>{item.usersBusinessName}</Text>
              </TouchableOpacity>
            )}
          />
        )}
  
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      marginBottom: 10,
      color: 'black', // Changed text color to black
    },
    loadingText: {
      textAlign: 'center',
      marginTop: 10,
      fontSize: 16,
      color: '#666',
    },
    suggestionItem: {
      padding: 10,
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
      color: 'black', // Changed text color to black
    },
    errorText: {
      textAlign: 'center',
      marginTop: 10,
      color: 'red',
    },
  });
  
  export default DistributorInstallationForm;
  









