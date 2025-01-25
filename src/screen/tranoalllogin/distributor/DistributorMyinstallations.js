import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, StyleSheet, Alert, ScrollView } from 'react-native';

const DistributorMyinstallations = () => {
  const [formData, setFormData] = useState([]);

  // Function to retrieve data from AsyncStorage
  const retrieveData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('formData');
      if (jsonValue != null) {
        setFormData([JSON.parse(jsonValue)]); // Parsed and stored in an array for FlatList
      } else {
        Alert.alert('No Data', 'No form data found in local storage.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };

  // Call retrieveData when the component mounts
  useEffect(() => {
    retrieveData();
  }, []);

  // Table Header component
  const TableHeader = () => (
    <View style={styles.headerRow}>
      <View style={styles.headerCell}><Text style={styles.headerText}>IMEI</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>Vehicle Make</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>Model</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>Vehicle No.</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>State</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>District</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>RTO Division</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>Engine No.</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>Chassis No.</Text></View>
      <View style={styles.headerCell}><Text style={styles.headerText}>No. of SOS</Text></View>
    </View>
  );

  // Alternate row background color based on index
  const renderItem = ({ item, index }) => (
    <View style={[styles.row, index % 2 === 0 ? styles.evenRow : styles.oddRow]}>
      <View style={styles.cell}><Text style={styles.cellText}>{item.imeiText}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.vehicleMakeText}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.vehicleModelText}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.vehicleNumberText}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.selectedState}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.selectedDistrict}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.selectedrtoDivisions}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.engineNumber}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.chasisNumber}</Text></View>
      <View style={styles.cell}><Text style={styles.cellText}>{item.noOfSos}</Text></View>
    </View>
  );

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={styles.tableHeader}>
          <Text style={styles.title}>Stored Form Data</Text>
        </View>
        <TableHeader />
        <FlatList
          data={formData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </ScrollView>
  );
};

export default DistributorMyinstallations;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  tableHeader: {
    width:160,
    backgroundColor: '#4e2d87',
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#4e2d87',
    padding: 10,
  },
  headerCell: {
    flex: 1,
    paddingLeft:15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  evenRow: {
    backgroundColor: 'rgb(221 214 254)',
    padding: 10,
  },
  oddRow: {
    backgroundColor: 'rgb(226 232 240)',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  cell: {
    flex: 1,
    padding: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cellText: {
    fontSize: 14,
    textAlign: 'center',
  },
});



