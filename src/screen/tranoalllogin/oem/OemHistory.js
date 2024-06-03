import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const OemHistory = () => {
  return (

    <SafeAreaView className=" flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>
    <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
        <View style={{ width: '100%', height: '95%',marginTop:'50', backgroundColor: '#FFF', borderRadius: 20, padding: 20 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OemHistory;

