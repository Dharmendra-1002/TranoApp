import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageCropPicker from 'react-native-image-crop-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

const Technicianinstallationform = () => {
    const [formData, setFormData] = useState({
        imei: '',
        state: '',
        district: '',
        rtoDivision: '',
        vehicleBirth: '',
        vehicleNo: '',
        vehicleType: '',
        vehicleMake: '',
        vehicleModel: '',
        engineNumber: '',
        chasisNumber: '',
        sosButtonCount: '',
        // Add more fields as needed
    });

    const handleInputChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        });
    };

    const handleSubmit = () => {
        // Implement your form submission logic here
        console.log('Submitted Form Data:', formData);
    };

    const [image, setImage] = useState(null);

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

    return (
        <SafeAreaView className="flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
            <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
                <ScrollView showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}>
                    <View style={{ padding: 20 }}>
                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>IMEI</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('imei', text)}
                            placeholder="Enter IMEI"
                            className="mt-3 mr-5 ml-5"
                        />

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Rto Details</Text>
                        <Text style={{ fontSize: 15, color: "Black", marginTop: 5, marginLeft: 22 }}>State</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('state', text)}
                            placeholder="Enter State"
                            className="mt-3 mr-5 ml-5"
                        />

                        <Text style={{ fontSize: 15, color: "Black", marginTop: 5, marginLeft: 22 }}>District</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('district', text)}
                            placeholder="Enter District"
                            className="mt-3 mr-5 ml-5"
                        />

                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>RTO Division</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('rtoDivision', text)}
                            placeholder="Enter RTO Division"
                            className="mt-3 mr-5 ml-5"
                        />

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Add Vehicle Details</Text>
                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Vehicle Birth</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('vehicleBirth', text)}
                            placeholder="Enter Vehicle Birth"
                            className="mt-3 mr-5 ml-5"
                        />

                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Vehicle No</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('vehicleNo', text)}
                            placeholder="Enter Vehicle No"
                            className="mt-3 mr-5 ml-5"
                        />

                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Vehicle Type</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('vehicleType', text)}
                            placeholder="Enter Vehicle Type"
                            className="mt-3 mr-5 ml-5"
                        />




                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Vehicle Make</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('vehicleMake', text)}
                            placeholder="Enter Vehicle Make Type"
                            className="mt-3 mr-5 ml-5"
                        />


                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Vehicle Model</Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('vehicleModel', text)}
                            placeholder="Enter Vehicle Model"
                            className="mt-3 mr-5 ml-5"
                        />



                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Engine Number </Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('engineNumber', text)}
                            placeholder="Enter Engine Number"
                            className="mt-3 mr-5 ml-5"
                        />


                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>chasis Number </Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('ChasisNumber', text)}
                            placeholder="Enter chasis Number"
                            className="mt-3 mr-5 ml-5"
                        />


                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Sos Button Count </Text>
                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('sosButtonCount', text)}
                            placeholder="Enter sosButton Count"
                            className="mt-3 mr-5 ml-5"
                        />



                        {/* Add the rest of the inputs similarly... */}

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Upload Documents</Text>
                        <Text> * Vehicle Image</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <Button title="Browse" onPress={selectImage} color="green" />
                            <View style={{ marginLeft: 10 }}>
                                <Button title="Clear" onPress={clearImage} color="red" />
                            </View>
                        </View>


                        <Text> * Vehicle Rc</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <Button title="Browse" onPress={selectImage} color="green" />
                            <View style={{ marginLeft: 10 }}>
                                <Button title="Clear" onPress={clearImage} color="red" />
                            </View>
                        </View>



                        <Text> * Vehicle Device Image</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <Button title="Browse" onPress={selectImage} color="green" />
                            <View style={{ marginLeft: 10 }}>
                                <Button title="Clear" onPress={clearImage} color="red" />
                            </View>
                        </View>



                        <Text> * Customer Aadhar Card</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <Button title="Browse" onPress={selectImage} color="green" />
                            <View style={{ marginLeft: 10 }}>
                                <Button title="Clear" onPress={clearImage} color="red" />
                            </View>
                        </View>



                        <Text> * Customer Pan Card</Text>
                        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                            <Button title="Browse" onPress={selectImage} color="green" />
                            <View style={{ marginLeft: 10 }}>
                                <Button title="Clear" onPress={clearImage} color="red" />
                            </View>
                        </View>
                        {/* Other Image upload buttons... */}

                        <Button title="Submit" color="green" onPress={handleSubmit} />

                        {image && <Image source={image} style={{ width: 200, height: 200 }} />}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Technicianinstallationform;




