import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const Credit_Limit_Notification = () => {
  const route = useRoute(); 
  const token = route.params?.token;
  const userId = route.params?.userId;
  console.log('====================================');
  console.log(token, '=====================token');
  console.log('====================================');

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, [token]);

  const getData = async () => {
    try {
      const res = await axios.get(
        'http://testing-only-erp-api.containe.in/api/Wallet/GetPendingApprovalListForNotification',
        {
          headers: {
            'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
            'Authorization': token
          }
        }
      );

      console.log('data', res.data);
      setData(res.data);
      setLoading(false);  // Set loading to false after data is fetched
    } catch (error) {
      console.error(error);
      setLoading(false);  // Set loading to false on error as well
    }
  };

  if (loading) {
    return (
      <SafeAreaView className="bg-violet-950 flex-1">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#FFF' }}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView  style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
        <View style={{ backgroundColor: 'white', width: '92%', height: '95%', borderRadius: 10, marginTop: 2, alignItems: 'center' }}>
        {/* <View style={{ marginTop: 20, backgroundColor: '#f0f0f0', borderRadius: 10, padding: 20,  }}> */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
          <ScrollView>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              {data.map((item, index) => (
                <View key={index} style={{ width: '90%', height: 200, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                  <Text style={{ fontSize: 20, color: '#4E2D87', textAlign: 'center' }}>Credit LIMIT Approval</Text>
                  <Text style={{ fontSize: 15, color: '#000', marginTop: 10 }}>User Name: {item.userName}</Text>
                  <Text style={{ fontSize: 15, color: '#000' }}>Transaction ID: {item.transactionId}</Text>
                  <Text style={{ fontSize: 15, color: '#000' }}>Pending Amount: {item.pendingAmount}</Text>
                  <Text style={{ fontSize: 15, color: '#000' }}>Approved Status: {item.approvedStatusName}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 20 }}>
                      <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#DC143C', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>HOLD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log('Approve button pressed')} style={{ marginTop: 20, marginLeft: 10 }}>
                      <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: '#7ed321', borderRadius: 40, paddingHorizontal: 20, paddingVertical: 10 }}>Approve</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
          </View>
          {/* </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Credit_Limit_Notification;
