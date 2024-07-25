import React, { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context'

import { ScrollView } from 'react-native-gesture-handler'
import { TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { IconButton } from 'react-native-paper';
import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';

const DealerRecharge = () => {
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
<SafeAreaView className=" flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>

      <View className={`w-[95%] h-[95%] bg-white rounded-lg shadow-lg p-4 mt-5`}>
      
     {/* {calender code } */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, marginRight:60 }} className="text-black text-lg ">Start Date</Text>
              <TouchableOpacity onPress={() => openCalendar('start')} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 1, borderRadius: 5, paddingLeft:10,gap:-20 }}>
                <Text style={{ marginRight: 10 }}>{startDate ? startDate : 'Select Start Date'}</Text>
                <IconButton
                  icon="calendar"
                  color="#000"
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, marginRight:60 }} className="text-black text-lg">End Date</Text>
              <TouchableOpacity onPress={() => openCalendar('end')} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 1, borderRadius: 5, paddingLeft:10, gap:-15}}>
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
        <ScrollView showsVerticalScrollIndicator={false}>

          <View className="flex-1 justify-center items-center">
            <View className="bg-indigo-200 mt-5 " style={{ height: 200, width: 360, justifyContent: 'center', borderRadius: 20 }}>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">S.No</Text>

                <Text className="text-black ml-44 text-xl " >1</Text>
              </View>

              <View className="flex flex-row">
                <Text className="text-black ml-6 text-xl">Date of Recharges</Text>
                <Text className="text-black ml-14 text-xl">24-01-26</Text>
              </View>

              <View className=" flex flex-row">
                <Text className="text-black  ml-6 text-xl">Amount(Rs)</Text>
                <Text className="text-black ml-28 text-xl">20,000</Text>
              </View>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">Transaction ID</Text>
                <Text className="text-black  text-xl" style={{marginLeft:90}}>3492178</Text>
              </View>
            </View>
          </View>

          <View className="flex-1 justify-center items-center">
            <View className="bg-indigo-200 mt-5 " style={{ height: 200, width: 360, justifyContent: 'center', borderRadius: 20 }}>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">S.No</Text>

                <Text className="text-black ml-44 text-xl " >2</Text>
              </View>

              <View className="flex flex-row">
                <Text className="text-black ml-6 text-xl">Date of Recharges</Text>
                <Text className="text-black ml-14 text-xl">24-01-26</Text>
              </View>

              <View className=" flex flex-row">
                <Text className="text-black  ml-6 text-xl">Amount(Rs)</Text>
                <Text className="text-black ml-28 text-xl">20,000</Text>
              </View>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">Transaction ID</Text>
                <Text className="text-black  text-xl" style={{marginLeft:90}}>3492178</Text>
              </View>
            </View>
          </View>

          <View className="flex-1 justify-center items-center">
            <View className="bg-indigo-200 mt-5 " style={{ height: 200, width: 360, justifyContent: 'center', borderRadius: 20 }}>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">S.No</Text>

                <Text className="text-black ml-44 text-xl " >3</Text>
              </View>

              <View className="flex flex-row">
                <Text className="text-black ml-6 text-xl">Date of Recharges</Text>
                <Text className="text-black ml-14 text-xl">24-01-26</Text>
              </View>

              <View className=" flex flex-row">
                <Text className="text-black  ml-6 text-xl">Amount(Rs)</Text>
                <Text className="text-black ml-28 text-xl">20,000</Text>
              </View>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">Transaction ID</Text>
                <Text className="text-black  text-xl" style={{marginLeft:90}}>3492178</Text>
              </View>
            </View>
          </View>


          <View className="flex-1 justify-center items-center">
            <View className="bg-indigo-200 mt-5 " style={{ height: 200, width: 360, justifyContent: 'center', borderRadius: 20 }}>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">S.No</Text>

                <Text className="text-black ml-44 text-xl " >4</Text>
              </View>

              <View className="flex flex-row">
                <Text className="text-black ml-6 text-xl">Date of Recharges</Text>
                <Text className="text-black ml-14 text-xl">24-01-26</Text>
              </View>

              <View className=" flex flex-row">
                <Text className="text-black  ml-6 text-xl">Amount(Rs)</Text>
                <Text className="text-black ml-28 text-xl">20,000</Text>
              </View>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">Transaction ID</Text>
                <Text className="text-black  text-xl" style={{marginLeft:90}}>3492178</Text>
              </View>
            </View>
          </View>

          <View className="flex-1 justify-center items-center">
            <View className="bg-indigo-200 mt-5 " style={{ height: 200, width: 360, justifyContent: 'center', borderRadius: 20 }}>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">S.No</Text>

                <Text className="text-black ml-44 text-xl " >5</Text>
              </View>

              <View className="flex flex-row">
                <Text className="text-black ml-6 text-xl">Date of Recharges</Text>
                <Text className="text-black ml-14 text-xl">24-01-26</Text>
              </View>

              <View className=" flex flex-row">
                <Text className="text-black  ml-6 text-xl">Amount(Rs)</Text>
                <Text className="text-black ml-28 text-xl">20,000</Text>
              </View>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">Transaction ID</Text>
                <Text className="text-black  text-xl" style={{marginLeft:90}}>3492178</Text>
              </View>
            </View>
          </View>

          <View className="flex-1 justify-center items-center">
            <View className="bg-indigo-200 mt-5 " style={{ height: 200, width: 360, justifyContent: 'center', borderRadius: 20 }}>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">S.No</Text>

                <Text className="text-black ml-44 text-xl " >6</Text>
              </View>

              <View className="flex flex-row">
                <Text className="text-black ml-6 text-xl">Date of Recharges</Text>
                <Text className="text-black ml-14 text-xl">24-01-26</Text>
              </View>

              <View className=" flex flex-row">
                <Text className="text-black  ml-6 text-xl">Amount(Rs)</Text>
                <Text className="text-black ml-28 text-xl">20,000</Text>
              </View>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">Transaction ID</Text>
                <Text className="text-black  text-xl" style={{marginLeft:90}}>3492178</Text>
              </View>
            </View>
          </View>
          

          
         

          
          

          

          <View className="flex-1 justify-center items-center">
            <View className="bg-indigo-200 mt-5 " style={{ height: 200, width: 360, justifyContent: 'center', borderRadius: 20 }}>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">S.No</Text>

                <Text className="text-black ml-44 text-xl " >7</Text>
              </View>

              <View className="flex flex-row">
                <Text className="text-black ml-6 text-xl">Date of Recharges</Text>
                <Text className="text-black ml-11 text-xl">24-01-26</Text>
              </View>

              <View className=" flex flex-row">
                <Text className="text-black  ml-6 text-xl">Amount(Rs)</Text>
                <Text className="text-black ml-24 text-xl">20,000</Text>
              </View>
              <View className=" flex flex-row">
                <Text className="text-black ml-6 text-xl">Transaction ID</Text>
                <Text className="text-black ml-20 text-xl">3492178</Text>
              </View>
              <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <View style={{ backgroundColor: 'white', borderRadius: 10, padding: 16 }}>
                <Calendar
                  markedDates={{
                    [startDate]: { selected: true, startingDay: true, color: 'green' },
                    [endDate]: { selected: true, endingDay: true, color: 'green' },
                  }}
                  onDayPress={onDayPress}
                />
                <Button title="Close Calendar" onPress={() => setModalVisible(false)} ></Button>
              </View>
            </View>
          </Modal>
            </View>
          </View>
        </ScrollView>
      </View>

  
  </SafeAreaView>

)
}

export default DealerRecharge
