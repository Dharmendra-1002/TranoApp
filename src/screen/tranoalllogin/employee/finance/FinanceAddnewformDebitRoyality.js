import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const FinanceAddnewformDebitRoyality = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: new Date(),
    // Add more fields as needed
  });

  const [open, setOpen] = useState(false);

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
        <View className="mt-3 ml-2">
          <Text className={"text-xl text-black"}>New Debit Royality Account</Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Date</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'black', padding: 1, borderRadius: 5, backgroundColor: 'white', marginTop: 5, marginLeft: 22, marginRight: 22 }}>
            <TextInput
              style={{ flex: 1 }}
              placeholder="Select Date"
              value={formData.date.toDateString()}
              editable={false}
            />
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Icon name="calendar-today" size={24} color="black" className="margin"/>
            </TouchableOpacity>
          </View>

          <DatePicker
            modal
            open={open}
            date={formData.date}
            onConfirm={(date) => {
              setOpen(false);
              handleInputChange('date', date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />

          <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Select Associate Partner Channel</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              borderRadius: 5,
              backgroundColor: 'white',
              marginTop: 5,
              marginLeft: 22,
              marginRight: 22,
            }}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter Your Name"
          />

          <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Select from dropdown</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              borderRadius: 5,
              backgroundColor: 'white',
              marginTop: 5,
              marginLeft: 22,
              marginRight: 22,
            }}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter Number"
          />


<Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Reference number</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              borderRadius: 5,
              backgroundColor: 'white',
              marginTop: 5,
              marginLeft: 22,
              marginRight: 22,
            }}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter Number"
          />

          <Text style={{ fontSize: 18, color: "black", marginTop: 5, marginLeft: 22 }}>Debit Amount</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              borderRadius: 5,
              backgroundColor: 'white',
              marginTop: 5,
              marginLeft: 22,
              marginRight: 22,
            }}
            onChangeText={(text) => handleInputChange('email', text)}
            placeholder="Enter Amount"
          />

          <TouchableOpacity onPress={handleSubmit}>
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

export default FinanceAddnewformDebitRoyality


