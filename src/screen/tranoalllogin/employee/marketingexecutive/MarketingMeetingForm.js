



import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const MarketingMeetingForm = () => {
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
        <ScrollView>
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



            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Date of order</Text>

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

            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>For State"</Text>

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

            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Select Distributor or Dealer</Text>

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

            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Business Name</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Contact Person Name</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Designation</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Contact Number</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>E-mail ID</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Billing Address</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Shipping Address</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>PAN NUMBER</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>"GST NUMBER</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Order From Device Type</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Rate</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Total Value</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Extra no of Panic Buttons</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Rate of Panic Buttons</Text>

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


            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Value of Extra Panic button</Text>

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



            <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Grand total Value</Text>

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





            <TouchableOpacity>
              <View className="items-center justify-center  ml-5 mr-5 mt-5" style={{ backgroundColor: '#32CD32' }}>
                <Text className="text-white py-3 font-bold">
                  Submit
                </Text>
              </View>
            </TouchableOpacity>











          </View>
          </ScrollView>
        </View>





    </SafeAreaView>

  )
}

export default MarketingMeetingForm






