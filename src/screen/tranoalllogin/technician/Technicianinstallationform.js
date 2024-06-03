import React, { useState } from 'react';

import { View, Text, TextInput, Button, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ImageCropPicker from 'react-native-image-crop-picker';
import { SafeAreaView } from 'react-native-safe-area-context';



const Technicianinstallationform = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
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
        console.log(formData);
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
        <SafeAreaView className=" flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>



            <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
                <ScrollView>
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
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
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
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
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
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
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
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
                        />


                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>District</Text>

                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
                        />

                        <Text style={{ fontSize: 20, color: '#4e2d87' }}>Add Vehicle Details</Text>
                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Vehicle birth</Text>

                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
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
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
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
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
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
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
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
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
                        />



                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Engine Number</Text>

                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
                        />


                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>Chasis Number</Text>

                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
                        />


                        <Text style={{ fontSize: 18, color: "Black", marginTop: 5, marginLeft: 22 }}>No of SOS/Panic Button</Text>

                        <TextInput
                            style={{
                                borderWidth: 1,
                                borderColor: 'black',
                                padding: 10,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                marginTop: 5,
                            }}
                            onChangeText={(text) => handleInputChange('email', text)}
                            placeholder="Enter Your Name" className="mt-3 mr-5 ml-5"
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

                        <Button title="Submit" color="green" />


                        {image && <Image source={image} style={{ width: 200, height: 200 }} />}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Technicianinstallationform;








