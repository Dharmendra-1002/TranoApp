import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInput, View, Text, Modal, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';

const WalletHistory = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const route = useRoute();
  const userId = route.params?.userId;

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

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('userToken');
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Failed to fetch token:', error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `http://testing-only-erp-api.containe.in/api/Wallet/GetWalletHistoryByUser?loginUserID=${userId}`,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
                'Accept': '*/*'
              }
            }
          );
          setData(response.data);
        } catch (error) {
          console.warn('Error fetching Wallet data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [token]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <SafeAreaView className="flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
      <View className="w-[95%] h-[95%] bg-white rounded-lg shadow-lg p-4 mt-5">
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: '101%' }}>
          {/* Calendar Code */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, marginRight: 60 }} className="text-black text-lg">Start Date</Text>
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
          {/* End Calendar Code */}

          <TouchableOpacity>
            <View className="mt-5">
              <Text className="bg-yellow-300 text-center font-black p-3 rounded-lg">DOWNLOAD PDF</Text>
            </View>
          </TouchableOpacity>

          <View style={{ width: '105%', height: '95%', marginTop: 50, backgroundColor: '#FFF', borderRadius: 20, padding: 20 }}>
            <Text style={{ fontSize: 20, color: '#4E2D87', textAlign: 'start', marginLeft: 18 }}>History</Text>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

              {data?.map((item, index) => (
                <View key={index} style={{ width: '90%', height: 140, backgroundColor: '#EDE9FE', marginVertical: 10, borderRadius: 10, padding: 10 }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => console.log('HOLD button pressed')} style={{ marginTop: 5 }}>
                      <Text style={{ fontSize: 15, color: '#FFF', backgroundColor: item.type === 'Debit' ? '#DC143C' : '#7ed321', borderRadius: 40, paddingHorizontal: 25, paddingVertical: 10 }}>
                        {item.type}
                      </Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, color: '#000', marginTop: 18 }}> Rs {item.approvedAmount.toFixed(2)}</Text>
                  </View>
                  <Text style={{ fontSize: 18, color: '#000' }}>Transaction-Id : {item.transactionId} </Text>
                  <Text style={{ fontSize: 18, color: '#000' }}>Transaction-Date : {new Date(item.transactionDate).toLocaleDateString()}</Text>
                  <Text style={{ fontSize: 18, color: '#000' }}>Created-Date : {new Date(item.createdDate).toLocaleTimeString()}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Calendar Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
            <Calendar onDayPress={onDayPress} />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 20, padding: 10, backgroundColor: '#4e2d87', borderRadius: 5 }}>
              <Text style={{ color: '#fff', textAlign: 'center' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default WalletHistory;



