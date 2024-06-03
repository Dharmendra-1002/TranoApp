import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native-gesture-handler';

const  MdAddnewForm1 = () => {
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
          <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Date</Text>

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



          <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Select OEM/Distributor</Text>

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


          
<Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Select Name</Text>

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

          

          <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Reference UTR number</Text>

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
          <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Amount(Rs)</Text>

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
            <View className="items-center justify-center bg-lime-400 ml-5 mr-5 mt-5">
              <Text className="text-black py-3 font-bold">
                Submit
              </Text>
            </View>
          </TouchableOpacity>





        </View>
      </View>





    </SafeAreaView>

  )
}

export default  MdAddnewForm1

