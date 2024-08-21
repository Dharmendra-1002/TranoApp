import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity,Button,Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import { Calendar } from 'react-native-calendars';
import { IconButton } from 'react-native-paper';
import Orientation from 'react-native-orientation-locker'; // Import Orientation

const OemSpendList = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

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

  const fullTableHead = [
    'S.No - ', '  Date of Spend -   ', '   Amount(Rs.)  -  ', 'Transaction ID - ', 'View Transaction Sheet '
  ];

  const collapsedTableHead = ['S.no. - ', 'Date of Spends - ', 'Amount(Rs.) '];

  const fullTableData = [
    ['01','21-02-24', 'Dharmendra', '         10,000', 'TRANS001'],
    // Add more rows as needed
    ['02',  '21-2-22','Tripti kumari', '       20,000', 'TRANS002'],
    // Additional rows...
  ];

  const collapsedTableData = fullTableData.map(row => [row[0],row[1], row[3]]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }}>
      <View style={{ backgroundColor: '#fff', width: '92%', height: '95%', borderRadius: 10, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ textDecorationLine: 'underline', fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>
              Spends List
            </Text>
          </View>
       
        </View>
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
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={{ marginBottom: 10 }}>
            <Text style={{ color: '#4e2d87', fontSize: 16 }}>{isExpanded ? 'Collapse' : 'Expand'}</Text>
          </TouchableOpacity>
          <ScrollView horizontal>
            <DataTable>
              <DataTable.Header style={styles.tableHeader}>
                {(isExpanded ? fullTableHead : collapsedTableHead).map((title, index) => (
                  <DataTable.Title key={index} style={styles.columnHeader}>
                    <Text style={styles.headerText}>{title}</Text>
                  </DataTable.Title>
                ))}
              </DataTable.Header>

              {isExpanded ? fullTableData.map((row, rowIndex) => (
                <DataTable.Row key={rowIndex} style={rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  {row.map((cell, cellIndex) => (
                    <DataTable.Cell key={cellIndex}>{cell}</DataTable.Cell>
                  ))}
                </DataTable.Row>
              )) : collapsedTableData.map((row, rowIndex) => (
                <DataTable.Row key={rowIndex} style={rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow}>
                  {row.map((cell, cellIndex) => (
                    <DataTable.Cell key={cellIndex}>{cell}</DataTable.Cell>
                  ))}
                </DataTable.Row>
              ))}
            </DataTable>
          </ScrollView>
        </View>
      </View>
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
    borderRadius:5,
  
    
  },
  oddRow: {
    backgroundColor: 'rgb(226 232 240)',
    borderRadius:5,
  },
});

export default OemSpendList;






