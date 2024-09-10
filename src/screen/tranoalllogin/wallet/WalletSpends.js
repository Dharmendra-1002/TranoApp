import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Button, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { IconButton } from 'react-native-paper';
import Orientation from 'react-native-orientation-locker'; // Import Orientation
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
import { Card } from 'react-native-paper';


const WalletSpends = () => {
  const route = useRoute()
  const token = route.params?.token;
  const userId = route.params?.userId;
  console.log('====================================');
  console.log(token, '=====================token');
  console.log('====================================');
  const [isExpanded, setIsExpanded] = useState(false);
  const [MobileData, setMobileData] = useState([])
  console.log('MobileData', MobileData)

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const navigation = useNavigation();

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


  // useEffect to manage orientation when component mounts or is unmounted
  useEffect(() => {
    if (isExpanded) {
      Orientation.lockToLandscape();
    } else {
      Orientation.unlockAllOrientations();
    }

    return () => {
      Orientation.unlockAllOrientations();
    };
  }, [isExpanded]);


  useEffect(() => {
    getMobileData()
  }, [token])


  const getMobileData = async () => {
    try {
      const res = await axios.get(

        // `http://testing-only-erp-api.containe.in/api/Wallet/GetAllAccountStatementPagination?loginUserID=${userId}&sortColumn=RowNumber&sortDirection=ASC&OffsetValue=0&PagingSize=10`,
        `http://testing-only-erp-api.containe.in/api/Wallet/GetAllSpendsListPagination?loginUserID=${userId}&sortColumn=RowNumber&sortDirection=ASC&OffsetValue=0&PagingSize=10`,
        {
          headers: {
            'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
            'Authorization': token
          }

        }
      );
      console.log('mobile data' + res);
      setMobileData(res.data)
    } catch (error) {
      console.error(error);
    }
  };



  const renderItem = ({ item, index }) => (
    <DataTable.Row style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
      <DataTable.Cell style={styles.cell}> {item.rowNumber}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.dateofSpends.split('T')[0]}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.amount}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.batchId}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.transactionId}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.batchTransactionFileName}</DataTable.Cell>
    </DataTable.Row>)

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }}>
    <Card className="flex-1 w-[95%] bg-white rounded-lg shadow-lg p-4 mt-5 mb-5">
    {/* <View style={{ width: '95%', height: '95%', backgroundColor: 'white', borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.3, shadowRadius: 10, padding: 16, marginTop: 20 }}> */}
      
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ textDecorationLine: 'underline', fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>
              Spends List
            </Text>
          </View>

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, marginRight: 60, color: 'black', fontSize: 18 }}>Date</Text>
              <TouchableOpacity onPress={() => openCalendar('start')} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 1, borderRadius: 5, paddingLeft: 0, gap: -20 }}>
                <Text style={{ marginRight: 10 }}>{startDate ? startDate : 'Start Date'}</Text>
                <IconButton
                  icon="calendar"
                  color="#000"
                  size={30}
                />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ marginBottom: 5, marginRight: 60, color: 'black', fontSize: 18 }}>End Date</Text>
              <TouchableOpacity onPress={() => openCalendar('end')} style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, padding: 1, borderRadius: 5, paddingLeft: 0, gap: -15 }}>
                <Text style={{ marginRight: 10 }}>{endDate ? endDate : 'End Date'}</Text>
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
        
            <Text className="bg-[#4e2d87] text-center text-white p-3 rounded-lg">DOWNLOAD PDF</Text>

          </View>
        </TouchableOpacity>


        <View style={styles.container}>
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={{ marginBottom: 10 }}>
            <Text style={{ color: '#4e2d87', fontSize: 16 }}>{isExpanded ? 'Collapse' : 'Expand'}</Text>
          </TouchableOpacity>
          <ScrollView horizontal>
            <View>

              <View style={{ padding: 16 }}>
                <DataTable>
                  <DataTable.Header style={styles.tableHeader}>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>S.NO</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}> Date of Spend</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>amount</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Batch-Id</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Transaction ID</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>View Transactional Sheet</Text>
                    </DataTable.Title>

                  </DataTable.Header>

                  <FlatList
                    data={MobileData}
                    renderItem={renderItem}
                    keyExtractor={item => item.rowNumber}
                  />
                </DataTable>
              </View>
            </View>
          </ScrollView>
        </View>
        {/* </View> */}
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    backgroundColor: '#4e2d87',
    borderRadius: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  columnHeader: {
    justifyContent: 'center',
    paddingHorizontal: 3, // Add horizontal padding for spacing
  },
  evenRow: {
    backgroundColor: 'rgb(221 214 254)',
    borderRadius: 5,


  },
  oddRow: {
    backgroundColor: 'rgb(226 232 240)',
    borderRadius: 5,
  },
});

export default WalletSpends;


