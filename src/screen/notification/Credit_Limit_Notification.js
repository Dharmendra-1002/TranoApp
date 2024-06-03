
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Credit_Limit_Notification
= () => {
  return (

    <SafeAreaView className="bg-violet-950 flex-1">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '90%', height: '90%', backgroundColor: '#FFF', borderRadius: 20, padding: 20 }}>
          <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
         
              <View style={{ width: '90%', height: 200, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                <Text style={{ fontSize: 20, color: '#4E2D87', textAlign: 'center' }}>Credit LIMIT Approval</Text>
                <Text style={{ fontSize: 15, color: '#000', marginTop: 10 }}>OEM/Distributor : OEM 1</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Name: J Technologies</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Credit Limit :6,00,000/-</Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#DC143C', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>HOLD</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log('Approve button pressed')} style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#7ed321', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>Approve</Text>
                  </TouchableOpacity>
                </View>
              </View>


              <View style={{ width: '90%', height: 200, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
              <Text style={{ fontSize: 20, color: '#4E2D87', textAlign: 'center' }}>Credit LIMIT Approval</Text>
                <Text style={{ fontSize: 15, color: '#000', marginTop: 10 }}>OEM/Distributor : OEM 1</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Name: J Technologies</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Credit Limit :6,00,000/-</Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#DC143C', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>HOLD</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log('Approve button pressed')} style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#7ed321', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>Approve</Text>
                  </TouchableOpacity>
                </View>




              </View>

              <View style={{ width: '90%', height: 200, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                <Text style={{ fontSize: 20, color: '#4E2D87', textAlign: 'center' }}>Credit LIMIT Approval</Text>
                <Text style={{ fontSize: 15, color: '#000', marginTop: 10 }}>OEM/Distributor : OEM 1</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Name: J Technologies</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Credit Limit :6,00,000/-</Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#DC143C', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>HOLD</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log('Approve button pressed')} style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#7ed321', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>Approve</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{ width: '90%', height: 200, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
              <Text style={{ fontSize: 20, color: '#4E2D87', textAlign: 'center' }}>Credit LIMIT Approval</Text>
                <Text style={{ fontSize: 15, color: '#000', marginTop: 10 }}>OEM/Distributor : OEM 1</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Name: J Technologies</Text>
                <Text style={{ fontSize: 15, color: '#000' }}>Credit Limit :6,00,000/-</Text>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 20 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#DC143C', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>HOLD</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => console.log('Approve button pressed')} style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#7ed321', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>Approve</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Credit_Limit_Notification
;

