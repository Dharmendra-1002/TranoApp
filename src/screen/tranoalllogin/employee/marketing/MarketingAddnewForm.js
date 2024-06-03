


import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler';

const MarketingAddnewForm = () => {
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
    return (
        <SafeAreaView className="flex-1 items-center justify-center" style={{ backgroundColor: '#4e2d87' }}>


            <View className="bg-white w-[90%] h-[95%] rounded-md mt-5">

                <View style={{ marginBottom: 20 }}>
                    <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Marketing Executive Name</Text>

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



                    <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>State</Text>

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

                    <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Date of Expense</Text>

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
                        placeholder="Date of Expense" className="mt-3 mr-5 ml-5"
                    />

                    <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Expense head</Text>

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
                        placeholder="Expense head" className="mt-3 mr-5 ml-5"
                    />

                    <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Amount</Text>

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
                        placeholder="Amount" className="mt-3 mr-5 ml-5"
                    />

                    <TouchableOpacity>
                        <View className="items-center justify-center  ml-5 mr-5 mt-5" style={{ backgroundColor: '#32CD32' }}>
                            <Text className="text-white py-3 font-bold">
                                Submit
                            </Text>
                        </View>
                    </TouchableOpacity>




                </View>
            </View>





        </SafeAreaView>

    )
}

export default MarketingAddnewForm