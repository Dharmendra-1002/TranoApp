import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { Calendar } from 'react-native-calendars';
import { IconButton } from 'react-native-paper';
import { View, Text, Modal, Button, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { Card } from 'react-native-paper';
import { white } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const WalletRecharges = () => {
  const route = useRoute();
  const token = route.params?.token;
  const userId = route.params?.userId;

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [loading, setLoading] = useState(true);
  const [BoxData, setBoxData] = useState([]);

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
    getBoxData();
  }, [token]);

  const getBoxData = async () => {
    try {
      const res = await axios.get(
        `http://testing-only-erp-api.containe.in/api/Wallet/RechargesListPagination?loginUserID=${userId}&sortColumn=RowNumber&sortDirection=ASC&OffsetValue=0&PagingSize=10`,
        {
          headers: {
            'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log('box data:', res.data);
      setBoxData(res.data);
    } catch (error) {
      console.error('Error fetching Wallet data:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }}>
      {/* <View style={{ width: '95%', height: '95%', backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, padding: 16, marginTop: 20 }}> */}
      <Card className="flex-1 w-[95%] bg-white rounded-lg shadow-lg p-4 mt-5 mb-5">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ marginBottom: 5, marginRight: 60, color: 'black', fontSize: 18 }}>Start Date</Text>
            <TouchableOpacity onPress={() => openCalendar('start')} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 1, borderRadius: 2 }}>
              <Text style={{ marginRight: 10 }}>{startDate ? startDate : 'Start Date'}</Text>
              <IconButton icon="calendar" color="#000" size={30} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ marginBottom: 5, marginRight: 60, color: 'black', fontSize: 18 }}>End Date</Text>
            <TouchableOpacity onPress={() => openCalendar('end')} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 1, borderRadius: 5 }}>
              <Text style={{ marginRight: 10 }}>{endDate ? endDate : 'End Date'}</Text>
              <IconButton icon="calendar" color="#000" size={30} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View style={{ marginTop: 20 }}>
            <Text style={{ backgroundColor: '#4e2d87', textAlign: 'center', fontWeight: 'bold', padding: 12, borderRadius: 10, color: 'white'}}>DOWNLOAD PDF</Text>
          </View>
        </TouchableOpacity>

       
        <ScrollView showsVerticalScrollIndicator={false}>
        <Card style={{ flex: 1, width: '100%', marginTop: 20, backgroundColor: '#f3f4f6', borderRadius: 20, padding: 20 }}>
        <Text style={{ fontSize: 20, color: '#4e2d87', textAlign: 'start', marginLeft: 5 }}>Recharge List</Text>
          <View style={{ alignItems: 'center', marginTop: 20 }}>
            {BoxData.length > 0 ? (
              BoxData.map((data, index) => (
                <View key={index} style={{ backgroundColor: '#E0E0FF', padding: 20, borderRadius: 20, marginVertical: 10, width:"auto" }}>
                  <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ color: 'black', fontSize: 18, marginRight: 50 }}>S.No</Text>
                    <Text style={{ color: 'black', fontSize: 18 }}>{data?.rowNumber ?? 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ color: 'black', fontSize: 18, marginRight: 20 }}>Date of Recharges</Text>
                    <Text style={{ color: 'black', fontSize: 18 }}>{data?.transactionDate.split('T')[0] ?? 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginBottom: 10 }}>
                    <Text style={{ color: 'black', fontSize: 18, marginRight: 50 }}>Amount(Rs)</Text>
                    <Text style={{ color: 'black', fontSize: 18 }}>20,000</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontSize: 18, marginRight: 30 }}>Transaction ID</Text>
                    <Text style={{ color: 'black', fontSize: 18 }}>{data?.transactionId ?? '3492178'}</Text>
                  </View>
                </View>
              ))
            ) : (
              <Text style={{ color: 'black', fontSize: 18 }}>No recharges found</Text>
            )}
          </View>
          </Card>
        </ScrollView>
        
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
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
              <Button title="Close Calendar" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </Modal>
      </Card>
    </SafeAreaView>
  );
};

export default WalletRecharges;
