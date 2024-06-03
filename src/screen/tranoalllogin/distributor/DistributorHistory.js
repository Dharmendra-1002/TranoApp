import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context'

import { ScrollView } from 'react-native-gesture-handler'
import { TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { IconButton } from 'react-native-paper';
import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';


const DistributorHistory = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);

  const onDayPress = (day) => {
    if (selectedBox === 'start') {
      setStartDate(day.dateString);
    } else if (selectedBox === 'end') {
      setEndDate(day.dateString);
    }
    setModalVisible(false);
  };

  const openCalendar = (box) => {
    setSelectedBox(box);
    setModalVisible(true);
  };




  return (
    <SafeAreaView className=" flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
     
        <View className={`w-[95%] h-[95%] bg-white rounded-lg shadow-lg p-4 mt-5`}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '101%', }}>

          {/* {calender code } */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, marginRight: 60 }} className="text-black text-lg ">Start Date</Text>
              <TouchableOpacity onPress={() => openCalendar('start')} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 1, borderRadius: 5, paddingLeft: 0, gap: -20 }}>
                <Text style={{ marginRight: 10 }}>{startDate ? startDate : 'Select Start Date'}</Text>
                <IconButton
                  icon="calendar"
                  color="#000"
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, marginRight: 60 }} className="text-black text-lg">End Date</Text>
              <TouchableOpacity onPress={() => openCalendar('end')} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 1, borderRadius: 5, paddingLeft: 0, gap: -15 }}>
                <Text style={{ marginRight: 10 }}>{endDate ? endDate : 'Select End Date'}</Text>
                <IconButton
                  icon="calendar"
                  color="#000"
                  size={30}
                />
              </TouchableOpacity>
            </View>
          </View>



          {/* {end calendar code} */}

          <TouchableOpacity>



            <View className="mt-5">
              {/* <Button title="DOWNLOAD PDF" color="#4e2d87" /> */}
              <Text className="bg-yellow-300 text-center font-black p-3 rounded-lg "> DOWNLOAD PDF</Text>

            </View>
          </TouchableOpacity>

          <View style={{ width: '100%', height: '95%', marginTop: '50', backgroundColor: '#FFF', borderRadius: 20, padding: 20 }}>

            <Text style={{ fontSize: 20, color: '#4E2D87', textAlign: 'start', marginLeft: 18 }}>History </Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

              <View style={{ width: '90%', height: 120, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#DC143C', borderRadius: 40, paddingHorizontal: 25, paddingVertical: 10 }}>Debit</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, color: '#000', marginTop: 18 }}>Rs. 23,400/-</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#000', }}>Transaction ID: 3459867</Text>
                <Text style={{ fontSize: 18, color: '#000', }}>23-01-24</Text>
              </View>


              <View style={{ width: '90%', height: 120, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#7ed321', borderRadius: 40, paddingHorizontal: 25, paddingVertical: 10 }}>Credit</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, color: '#000', marginTop: 18 }}>Rs. 40,400/-</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#000', }}>Transaction ID: 3459867</Text>
                <Text style={{ fontSize: 18, color: '#000', }}>23-01-24</Text>
              </View>

              <View style={{ width: '90%', height: 120, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#DC143C', borderRadius: 40, paddingHorizontal: 25, paddingVertical: 10 }}>Debit</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, color: '#000', marginTop: 18 }}>Rs. 23,400/-</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#000', }}>Transaction ID: 3459867</Text>
                <Text style={{ fontSize: 18, color: '#000', }}>23-01-24</Text>
              </View>


              <View style={{ width: '90%', height: 120, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#7ed321', borderRadius: 40, paddingHorizontal: 25, paddingVertical: 10 }}>Credit</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, color: '#000', marginTop: 18 }}>Rs. 40,400/-</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#000', }}>Transaction ID: 3459867</Text>
                <Text style={{ fontSize: 18, color: '#000', }}>23-01-24</Text>
              </View>


              <View style={{ width: '90%', height: 120, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#DC143C', borderRadius: 40, paddingHorizontal: 25, paddingVertical: 10 }}>Debit</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, color: '#000', marginTop: 18 }}>Rs. 23,400/-</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#000', }}>Transaction ID: 3459867</Text>
                <Text style={{ fontSize: 18, color: '#000', }}>23-01-24</Text>
              </View>


              <View style={{ width: '90%', height: 120, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 5 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#7ed321', borderRadius: 40, paddingHorizontal: 25, paddingVertical: 10 }}>Credit</Text>
                  </TouchableOpacity>
                  <Text style={{ fontSize: 18, color: '#000', marginTop: 18 }}>Rs. 40,400/-</Text>
                </View>
                <Text style={{ fontSize: 18, color: '#000', }}>Transaction ID: 3459867</Text>
                <Text style={{ fontSize: 18, color: '#000', }}>23-01-24</Text>
              </View>
            </View>

          </View>
          </ScrollView>
        </View>
      
    </SafeAreaView >
  );
}

export default DistributorHistory;

