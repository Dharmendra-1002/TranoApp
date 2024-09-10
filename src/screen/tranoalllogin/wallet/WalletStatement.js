import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import Orientation from 'react-native-orientation-locker';
import TouchID from 'react-native-touch-id';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import Orientation
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { Card } from 'react-native-paper';


const WalletStatement = () => {
  // const navigation = useNavigation();
  const route = useRoute()
  const token = route.params?.token;
  const userId = route.params?.userId;
  console.log('====================================');
  console.log(token, '=====================token');
  console.log('====================================');
  const [isExpanded, setIsExpanded] = useState(false);
  const [TableData, setTableData] = useState([])
  console.log('TableData', TableData)


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
    getTableData()
  }, [token])

  const getTableData = async () => {
    try {
      const res = await axios.get(
        // 'http://testing-only-erp-api.containe.in/api/Wallet/GetAllAccountStatementPagination?loginUserID=${171}&sortColumn=RowNumber&sortDirection=ASC&OffsetValue=0&PagingSize=10',
        `http://testing-only-erp-api.containe.in/api/Wallet/GetAllAccountStatementPagination?loginUserID=${userId}&sortColumn=RowNumber&sortDirection=ASC&OffsetValue=0&PagingSize=10`,
        {
          headers: {
            'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
            'Authorization': token
          }

        }
      );
      console.log('table data' + res);
      setTableData(res.data)
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item, index }) => (
    <DataTable.Row style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
      <DataTable.Cell style={styles.cell}> {item.rowNumber}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}>{item.batchId}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}>{item.transactionDate}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}>{item.particulars}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}>{item.transactionId}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.viewTransactionSheet}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.referenceUTRNumber}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.debit}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.credit}</DataTable.Cell>
      <DataTable.Cell style={styles.cell}> {item.balance}</DataTable.Cell>



    </DataTable.Row>)



  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }}>
       <Card className="flex-1 w-[95%] bg-white rounded-lg shadow-lg p-4 mt-5 mb-5">
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ textDecorationLine: 'underline', fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>
              Statement
            </Text>
          </View>

        </View>

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
                      <Text style={styles.headerText}>Batch-Id</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Transaction-Date</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Particulars</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Transaction ID</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>View Transactional Sheet</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Reference UTR Number</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Debit</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Credit</Text>
                    </DataTable.Title>
                    <DataTable.Title style={styles.columnHeader}>
                      <Text style={styles.headerText}>Balance</Text>
                    </DataTable.Title>
                  </DataTable.Header>

                  <FlatList
                    data={TableData}
                    renderItem={renderItem}
                    keyExtractor={item => item.rowNumber}
                  />
                </DataTable>
              </View>
            </View>
          </ScrollView>
        </View>
        </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    textDecorationLine: 'underline',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  tableHeader: {
    fontcolor: '#fff',
    backgroundColor: '#4e2d87',
    borderRadius: 10,

  },
  cell: {
    justifyContent: 'center',
    paddingHorizontal: 10,
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

export default WalletStatement;







