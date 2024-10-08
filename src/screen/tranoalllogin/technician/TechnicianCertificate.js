// import React, { useState, useEffect } from 'react';
// import { ScrollView, View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { DataTable } from 'react-native-paper';
// import Orientation from 'react-native-orientation-locker'; // Import Orientation

// const TechnicianCertificate = () => {
//   const navigation = useNavigation();
//   const [isExpanded, setIsExpanded] = useState(false);

//   // useEffect to manage orientation when component mounts or is unmounted
//   useEffect(() => {
//     if (isExpanded) {
//       Orientation.lockToLandscape();
//     } else {
//       Orientation.unlockAllOrientations();
//     }

//     return () => {
//       Orientation.unlockAllOrientations();
//     };
//   }, [isExpanded]);

//   const fullTableHead = [
//     'S.No - ', '  Date of Installation -  ', ' Vehicle No. - ', 'Vehicle Make Model - ', 'Device IMEI - ','Customer Name - ','Dealer Name - ', 'Fitment Certificate No. - ', 'Download Certificate '
//   ];

//   const collapsedTableHead = ['S.no - ','Date of Installation - ', ' Vehicle No.  '];

//   const fullTableData = [
//     ['01', '     21-02-24','      JH12445', 'Pulser', '         Jharkhand','Dharmendra','Mr. Ashwin', 'TRANS001', 'Download here'],
//     // Add more rows as needed
//     ['01', '     21-02-24','      JH12445', 'Pulser', '         Jharkhand','Dharmendra','Mr. Ashwin', 'TRANS001', 'Download here'],
//     // Additional rows...
//   ];

//   const collapsedTableData = fullTableData.map(row => [row[0],row[1], row[2]]);

//   return (
//     <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }}>
//       <View style={{ backgroundColor: '#fff', width: '92%', height: '95%', borderRadius: 10, marginTop: 20 }}>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//           <View style={{ flexDirection: 'column' }}>
//             <Text style={{ textDecorationLine: 'underline', fontSize: 18, fontWeight: 'bold', marginLeft: 20, marginTop: 20 }}>
//              View Certificate
//             </Text>
//           </View>
       
//         </View>

//         <View style={styles.container}>
//           <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} style={{ marginBottom: 10 }}>
//             <Text style={{ color: '#4e2d87', fontSize: 16 }}>{isExpanded ? 'Collapse' : 'Expand'}</Text>
//           </TouchableOpacity>
//           <ScrollView horizontal>
//             <DataTable>
//               <DataTable.Header style={styles.tableHeader}>
//                 {(isExpanded ? fullTableHead : collapsedTableHead).map((title, index) => (
//                   <DataTable.Title key={index} style={styles.columnHeader}>
//                     <Text style={styles.headerText}>{title}</Text>
//                   </DataTable.Title>
//                 ))}
//               </DataTable.Header>

//               {isExpanded ? fullTableData.map((row, rowIndex) => (
//                 <DataTable.Row key={rowIndex} style={rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow}>
//                   {row.map((cell, cellIndex) => (
//                     <DataTable.Cell key={cellIndex}>{cell}</DataTable.Cell>
//                   ))}
//                 </DataTable.Row>
//               )) : collapsedTableData.map((row, rowIndex) => (
//                 <DataTable.Row key={rowIndex} style={rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow}>
//                   {row.map((cell, cellIndex) => (
//                     <DataTable.Cell key={cellIndex}>{cell}</DataTable.Cell>
//                   ))}
//                 </DataTable.Row>
//               ))}
//             </DataTable>
//           </ScrollView>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 15,
//   },
//   tableHeader: {
//     backgroundColor: '#4e2d87',
//     borderRadius: 10,
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   columnHeader: {
//     justifyContent: 'center',
//     paddingHorizontal: 3, // Add horizontal padding for spacing
//   },
//   evenRow: {
//     backgroundColor: 'rgb(221 214 254)',
//     borderRadius:5,
  
    
//   },
//   oddRow: {
//     backgroundColor: 'rgb(226 232 240)',
//     borderRadius:5,
//   },
// });

// export default TechnicianCertificate;



// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const TechnicianCertificate = () => {
//     const [tableData, setTableData] = useState([]);
//     const route = useRoute();

//     useEffect(() => {
//         // Retrieve formData passed from the form
//         const { formData } = route.params;
//         if (formData) {
//             // Append new form data to the existing table data
//             setTableData((prevData) => [...prevData, formData]);
//         }
//     }, [route.params]);

//     const renderItem = ({ item, index }) => (
//         <View style={styles.row}>
//             <Text style={styles.cell}>{index + 1}</Text>
//             <Text style={styles.cell}>{item.imei}</Text>
//             <Text style={styles.cell}>{item.vehicleMake}</Text>
//             <Text style={styles.cell}>{item.vehicleModel}</Text>
//             <Text style={styles.cell}>{item.vehicleNumber}</Text>
//         </View>
//     );

//     return (
//         <View style={{ padding: 20 }}>
//             <Text style={styles.header}>Vehicle Data Table</Text>
//             <View style={styles.table}>
//                 <View style={styles.rowHeader}>
//                     <Text style={styles.headerCell}>#</Text>
//                     <Text style={styles.headerCell}>IMEI</Text>
//                     <Text style={styles.headerCell}>Make</Text>
//                     <Text style={styles.headerCell}>Model</Text>
//                     <Text style={styles.headerCell}>Number</Text>
//                 </View>
//                 <FlatList
//                     data={tableData}
//                     renderItem={renderItem}
//                     keyExtractor={(item, index) => index.toString()}
//                 />
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     header: {
//         fontSize: 20,
//         fontWeight: 'bold',
//         marginBottom: 10,
//     },
//     table: {
//         borderWidth: 1,
//         borderColor: '#ddd',
//     },
//     row: {
//         flexDirection: 'row',
//         borderBottomWidth: 1,
//         borderBottomColor: '#ddd',
//         paddingVertical: 10,
//     },
//     rowHeader: {
//         flexDirection: 'row',
//         backgroundColor: '#f2f2f2',
//         paddingVertical: 10,
//     },
//     cell: {
//         flex: 1,
//         textAlign: 'center',
//         paddingHorizontal: 5,
//     },
//     headerCell: {
//         flex: 1,
//         textAlign: 'center',
//         fontWeight: 'bold',
//         paddingHorizontal: 5,
//     },
// });

// export default TechnicianCertificate;




import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const TechnicianCertificate = () => {
    const [tableData, setTableData] = useState([]);
    const route = useRoute();

    useEffect(() => {
        // Check if route.params exists before accessing formData
        if (route.params && route.params.formData) {
            const { formData } = route.params;
            // Append new form data to the existing table data
            setTableData((prevData) => [...prevData, formData]);
        }
    }, [route.params]);

    const renderItem = ({ item, index }) => (
        <View style={styles.row}>
            <Text style={styles.cell}>{index + 1}</Text>
            <Text style={styles.cell}>{item.imei}</Text>
            <Text style={styles.cell}>{item.vehicleMake}</Text>
            <Text style={styles.cell}>{item.vehicleModel}</Text>
            <Text style={styles.cell}>{item.vehicleNumber}</Text>
        </View>
    );

    return (
        <View style={{ padding: 20 }}>
            <Text style={styles.header}>Vehicle Data Table</Text>
            <View style={styles.table}>
                <View style={styles.rowHeader}>
                    <Text style={styles.headerCell}>#</Text>
                    <Text style={styles.headerCell}>IMEI</Text>
                    <Text style={styles.headerCell}>Make</Text>
                    <Text style={styles.headerCell}>Model</Text>
                    <Text style={styles.headerCell}>Number</Text>
                </View>
                <FlatList
                    data={tableData}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    table: {
        borderWidth: 1,
        borderColor: '#ddd',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
    },
    rowHeader: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        paddingVertical: 10,
    },
    cell: {
        flex: 1,
        textAlign: 'center',
        paddingHorizontal: 5,
    },
    headerCell: {
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingHorizontal: 5,
    },
});

export default TechnicianCertificate;
