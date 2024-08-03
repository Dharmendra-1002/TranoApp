// import React, { useState , useEffect} from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Using Material Icons
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const MdEsim = () => {
//   const [isCollapsedBsnlVi, setIsCollapsedBsnlVi] = useState(true);
//   const [isCollapsedAirtelBsnl, setIsCollapsedAirtelBsnl] = useState(true);
//   const [isCollapsedViBsnl, setIsCollapsedViBsnl] = useState(true);
//   const navigation = useNavigation();
//   const [esimData, setEsimData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);

//   const toggleCollapseBsnlVi = () => {
//     setIsCollapsedBsnlVi(!isCollapsedBsnlVi);
//   };

//   const toggleCollapseAirtelBsnl = () => {
//     setIsCollapsedAirtelBsnl(!isCollapsedAirtelBsnl);
//   };

//   const toggleCollapseViBsnl = () => {
//     setIsCollapsedViBsnl(!isCollapsedViBsnl);
//   };

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const storedToken = await AsyncStorage.getItem('userToken');
//         if (storedToken) {
//           setToken(storedToken);
//         }
//       } catch (error) {
//         console.error('Failed to fetch token:', error);
//       }
//     };

//     fetchToken();
//   }, []);

//   useEffect(() => {
//     const fetchEsimData = async () => {
//       if (!token) return; // Skip fetching if token is not available

//       try {
//         const response = await axios.get('http://testing-only-erp-api.containe.in/api/ESim/ProfileWiseESimsStockCounts?userId=20', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
//           },
//         });
//         setEsimData(response.data);
//       } catch (error) {
//         console.warn('Error fetching eSIM data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEsimData();
//   }, [token]);

  

//   if (!esimData || esimData.length === 0) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>No eSIM data available</Text>
//       </SafeAreaView>
//     );
//   }



//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87' }}>
//       <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
//         <View style={{ width: '92%', backgroundColor: 'white', borderRadius: 10, marginTop: 20 }}>
//           <View>
//             <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>E-SIM</Text>
//           </View>
//           <View style={{ alignItems: 'center' }}>
//           {esimData.map((item, index) => (
//             <View key={index}>
//             <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Total Stock</Text>
//                 <TextInput style={styles.textinput1}
//                 value={`${item.totalStock || 'N/A'}`} editable={false}
                 
//                 />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Allocated Stock</Text>
//                 <TextInput style={styles.textinput1}
             
//              value={`${item.allocatedStock || 'N/A'}`}
//              editable={false}
//                 />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Balance Stock</Text>
//                 <TextInput style={styles.textinput1}
                
//                 value={`${item.balanceStock || 'N/A'}`}
//                 editable={false}
//                 />
//               </View>
//             </View>

//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//               <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10 ,borderRadius:10,width:110}}>BSNL+VI</Text>
//               <TouchableOpacity onPress={toggleCollapseBsnlVi} style={{ marginLeft: 10 }}>
//                 <Icon name={isCollapsedBsnlVi ? 'expand-more' : 'expand-less'} size={24} color="black" />
//               </TouchableOpacity>
//             </View>



//             <View style={{ backgroundColor: '#e2e8f0', width: '95%', borderRadius: 10, marginTop: 20 }}>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Total Stock</Text>
//                 <TextInput style={styles.textinput1}
//                  value={`${item.totalStock || 'N/A'}`} editable={false}
//                 />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Allocated Stock</Text>
//                 <TextInput style={styles.textinput1}
                 
//                  value={`${item.allocatedStock || 'N/A'}`}
//                  editable={false}
//                 />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Balance Stock</Text>
//                 <TextInput style={styles.textinput1}
                 
//                  value={`${item.balanceStock || 'N/A'}`}
//                   editable={false}
//                 />
//               </View>
//             </View>

//             {!isCollapsedBsnlVi && (
//               <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>New SIM</Text>
//                   <TextInput  style={styles.textinput1}
                   
//                    value={`${item.newSimStock || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>BootStrap</Text>
//                   <TextInput style={styles.textinput1}
                   
//                    value={`${item.bootstrapStock || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Commercial {"\n"} Activation</Text>
//                   <TextInput style={styles.textinput1}
                    
//                     value={`${item.commercialActivationStock || 'N/A'}`}
//                   editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Safe Custody</Text>
//                   <TextInput style={styles.textinput1}
                   
//                    value={`${item.safeCustodyStock || 'N/A'}`}
//                   editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Expired</Text>
//                   <TextInput style={styles.textinput1}
                  
//                   value={`${item.expiredStock || 'N/A'}`}
//                   editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Suspended</Text>
//                   <TextInput style={styles.textinput1}
                 
//                  value={`${item.suspendedStock || 'N/A'}`}
//                  editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Total</Text>
//                   <TextInput style={styles.textinput1}
                   
//                    value={`${item.total || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
//               </View>
//             )}

//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//               <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10 ,borderRadius:10}}>Airtel+BSNL</Text>
//               <TouchableOpacity onPress={toggleCollapseAirtelBsnl} style={{ marginLeft: 10 }}>
//                 <Icon name={isCollapsedAirtelBsnl ? 'expand-more' : 'expand-less'} size={24} color="black" />
//               </TouchableOpacity>
//             </View>


//             <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Total Stock</Text>
//                 <TextInput style={styles.textinput1}
//                   value={`${item.totalStock || 'N/A'}`} editable={false}
//                 />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Allocated Stock</Text>
//                 <TextInput style={styles.textinput1}
//                  value={`${item.allocatedStock || 'N/A'}`}
//                  editable={false}
//                 />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Balance Stock</Text>
//                 <TextInput style={styles.textinput1}
                  
//                   value={`${item.balanceStock || 'N/A'}`}
//                   editable={false}
//                 />
//               </View>
//             </View>

//             {!isCollapsedAirtelBsnl && (
//               <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>New SIM</Text>
//                   <TextInput style={styles.textinput1}
                  
//                   value={`${item.newSimStock || 'N/A'}`} editable={false} 
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>BootStrap</Text>
//                   <TextInput style={styles.textinput1}
                   
//                    value={`${item.bootstrapStock || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Commercial {"\n"} Activation</Text>
//                   <TextInput style={styles.textinput1}
                   
//                    value={`${item.commercialActivationStock || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Safe Custody</Text>
//                   <TextInput style={styles.textinput1}
                   
//                    value={`${item.safeCustodyStock || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Expired</Text>
//                   <TextInput style={styles.textinput1}
                  
//                   value={`${item.expiredStock || 'N/A'}`}
//                   editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Suspended</Text>
//                   <TextInput style={styles.textinput1}
//                     value={`${item.suspendedStock || 'N/A'}`}
//                     editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total</Text>
//                   <TextInput style={styles.textinput1}
                  
//                   value={`${item.total || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
//               </View>
//             )}

//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//               <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10 ,borderRadius:10 , width:110}}>Vi+BSNL</Text>
//               <TouchableOpacity onPress={toggleCollapseViBsnl} style={{ marginLeft: 10 }}>
//                 <Icon name={isCollapsedViBsnl ? 'expand-more' : 'expand-less'} size={24} color="black" />
//               </TouchableOpacity>
//             </View>


//             <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Total Stock</Text>
//                 <TextInput style={styles.textinput1}
                
//                 value={`${item.totalStock || 'N/A'}`} editable={false}
//                 />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Allocated Stock</Text>
//                 <TextInput style={styles.textinput1}
                
//                 value={`${item.allocatedStock || 'N/A'}`}
//                 editable={false}
//                 />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Balance Stock</Text>
//                 <TextInput style={styles.textinput1}
                  
//                   value={`${item.balanceStock || 'N/A'}`}
//                 editable={false}
//                 />
//               </View>
//             </View>


//             {!isCollapsedViBsnl && (
//               <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>New SIM</Text>
//                   <TextInput style={styles.textinput1}
                 
//                  value={`${item.newSimStock || 'N/A'}`} editable={false} 
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>BootStrap</Text>
//                   <TextInput style={styles.textinput1}
                 
//                  value={`${item.bootstrapStock || 'N/A'}`}
//                  editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={{ color: 'black', fontSize: 16, marginTop: 10}}>Commercial {"\n"} Activation</Text>
//                   <TextInput style={styles.textinput1}
                    
//                     value={`${item.commercialActivationStock || 'N/A'}`}
//                     editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Safe Custody</Text>
//                   <TextInput style={styles.textinput1}
                   
//                    value={`${item.safeCustodyStock || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Expired</Text>
//                   <TextInput style={styles.textinput1}
                  
//                   value={`${item.expiredStock || 'N/A'}`}
//                   editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Suspended</Text>
//                   <TextInput style={styles.textinput1}
//                     // style={{
                    
//                     value={`${item.suspendedStock || 'N/A'}`}
//                  editable={false}
//                   />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total</Text>
//                   <TextInput style={styles.textinput1}
                  
                  
//                   value={`${item.total || 'N/A'}`}
//                    editable={false}
//                   />
//                 </View>
            
//               </View>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   textinput1:{
//     borderWidth: 1,
//     borderColor: 'black',
//     padding: 5,
//     borderRadius: 5,
//     backgroundColor: 'white',
//     marginTop: 4,
//     width: 180,
//     marginLeft: 'auto'
//   },
//   text1:{
//     color:'black', 
//     fontSize: 16, 
//     marginTop:10
//   }
// });

// export default MdEsim;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialIcons'; // Using Material Icons
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const MdEsim = () => {
//   const [isCollapsedBsnlVi, setIsCollapsedBsnlVi] = useState(true);
//   const [isCollapsedAirtelBsnl, setIsCollapsedAirtelBsnl] = useState(true);
//   const [isCollapsedViBsnl, setIsCollapsedViBsnl] = useState(true);
//   const navigation = useNavigation();
//   const [esimData, setEsimData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);

//   const toggleCollapseBsnlVi = () => {
//     setIsCollapsedBsnlVi(!isCollapsedBsnlVi);
//   };

//   const toggleCollapseAirtelBsnl = () => {
//     setIsCollapsedAirtelBsnl(!isCollapsedAirtelBsnl);
//   };

//   const toggleCollapseViBsnl = () => {
//     setIsCollapsedViBsnl(!isCollapsedViBsnl);
//   };

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const storedToken = await AsyncStorage.getItem('userToken');
//         if (storedToken) {
//           setToken(storedToken);
//         }
//       } catch (error) {
//         console.error('Failed to fetch token:', error);
//       }
//     };

//     fetchToken();
//   }, []);

//   useEffect(() => {
//     const fetchEsimData = async () => {
//       if (!token) return; // Skip fetching if token is not available

//       try {
//         const response = await axios.get('http://testing-only-erp-api.containe.in/api/ESim/ProfileWiseESimsStockCounts?userId=20', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
//           },
//         });
//         setEsimData(response.data);
//       } catch (error) {
//         console.warn('Error fetching eSIM data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEsimData();
//   }, [token]);

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Loading...</Text>
//       </SafeAreaView>
//     );
//   }

//   if (!esimData || esimData.length === 0) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>No eSIM data available</Text>
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87' }}>
//       <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
//         <View style={{ width: '92%', backgroundColor: 'white', borderRadius: 10, marginTop: 20 }}>
//           <View>
//             <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>E-SIM</Text>
//           </View>
//           <View style={{ alignItems: 'center' }}>
//             {esimData.map((item, index) => (
//               <View key={index}>
            
//                 <View style={{ backgroundColor: '#e2e8f0', width: '50%', borderRadius: 10, marginTop: 20 }}>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Total Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
//                   </View>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Allocated Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
//                   </View>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Balance Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
//                   </View>
//                 </View>

//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//                   <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10, borderRadius: 10, width: 110 }}>BSNL+VI</Text>
//                   <TouchableOpacity onPress={toggleCollapseBsnlVi} style={{ marginLeft: 10 }}>
//                     <Icon name={isCollapsedBsnlVi ? 'expand-more' : 'expand-less'} size={24} color="black" />
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{ backgroundColor: '#e2e8f0', width: '95%', borderRadius: 10, marginTop: 20 }}>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Total Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
//                   </View>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Allocated Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
//                   </View>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Balance Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
//                   </View>
//                 </View>

//                 {!isCollapsedBsnlVi && (
//                   <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>New SIM</Text>
//                       <TextInput style={styles.textinput1} value={`${item.newSimStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>BootStrap</Text>
//                       <TextInput style={styles.textinput1} value={`${item.bootstrapStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Commercial {"\n"} Activation</Text>
//                       <TextInput style={styles.textinput1} value={`${item.commercialActivationStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Safe Custody</Text>
//                       <TextInput style={styles.textinput1} value={`${item.safeCustodyStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Expired</Text>
//                       <TextInput style={styles.textinput1} value={`${item.expiredStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Suspended</Text>
//                       <TextInput style={styles.textinput1} value={`${item.suspendedStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Total</Text>
//                       <TextInput style={styles.textinput1} value={`${item.total || 'N/A'}`} editable={false} />
//                     </View>
//                   </View>
//                 )}

//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//                   <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10, borderRadius: 10 }}>Airtel+BSNL</Text>
//                   <TouchableOpacity onPress={toggleCollapseAirtelBsnl} style={{ marginLeft: 10 }}>
//                     <Icon name={isCollapsedAirtelBsnl ? 'expand-more' : 'expand-less'} size={24} color="black" />
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Total Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
//                   </View>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Allocated Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
//                   </View>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Balance Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
//                   </View>
//                 </View>

//                 {!isCollapsedAirtelBsnl && (
//                   <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>New SIM</Text>
//                       <TextInput style={styles.textinput1} value={`${item.newSimStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>BootStrap</Text>
//                       <TextInput style={styles.textinput1} value={`${item.bootstrapStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Commercial {"\n"} Activation</Text>
//                       <TextInput style={styles.textinput1} value={`${item.commercialActivationStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Safe Custody</Text>
//                       <TextInput style={styles.textinput1} value={`${item.safeCustodyStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Expired</Text>
//                       <TextInput style={styles.textinput1} value={`${item.expiredStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Suspended</Text>
//                       <TextInput style={styles.textinput1} value={`${item.suspendedStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Total</Text>
//                       <TextInput style={styles.textinput1} value={`${item.total || 'N/A'}`} editable={false} />
//                     </View>
//                   </View>
//                 )}

//                 <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//                   <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10, borderRadius: 10 }}>VI+BSNL</Text>
//                   <TouchableOpacity onPress={toggleCollapseViBsnl} style={{ marginLeft: 10 }}>
//                     <Icon name={isCollapsedViBsnl ? 'expand-more' : 'expand-less'} size={24} color="black" />
//                   </TouchableOpacity>
//                 </View>

//                 <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Total Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
//                   </View>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Allocated Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
//                   </View>
//                   <View style={{ flexDirection: 'row', padding: 10 }}>
//                     <Text style={styles.text1}>Balance Stock</Text>
//                     <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
//                   </View>
//                 </View>

//                 {!isCollapsedViBsnl && (
//                   <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>New SIM</Text>
//                       <TextInput style={styles.textinput1} value={`${item.newSimStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>BootStrap</Text>
//                       <TextInput style={styles.textinput1} value={`${item.bootstrapStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Commercial {"\n"} Activation</Text>
//                       <TextInput style={styles.textinput1} value={`${item.commercialActivationStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Safe Custody</Text>
//                       <TextInput style={styles.textinput1} value={`${item.safeCustodyStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Expired</Text>
//                       <TextInput style={styles.textinput1} value={`${item.expiredStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Suspended</Text>
//                       <TextInput style={styles.textinput1} value={`${item.suspendedStock || 'N/A'}`} editable={false} />
//                     </View>
//                     <View style={{ flexDirection: 'row', padding: 10 }}>
//                       <Text style={styles.text1}>Total</Text>
//                       <TextInput style={styles.textinput1} value={`${item.total || 'N/A'}`} editable={false} />
//                     </View>
//                   </View>
//                 )}
//               </View>
//             ))}
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4e2d87',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text1: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   textinput1: {
//     fontSize: 16,
//     marginLeft: 10,
//     flex: 1,
//     padding: 10,
//     backgroundColor: 'white',
//     borderRadius: 5,
//   },
// });

// export default MdEsim;


// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';

// const MdEsim = () => {
//   const [isCollapsedBsnlVi, setIsCollapsedBsnlVi] = useState(true);
//   const [isCollapsedAirtelBsnl, setIsCollapsedAirtelBsnl] = useState(true);
//   const [isCollapsedViBsnl, setIsCollapsedViBsnl] = useState(true);
//   const navigation = useNavigation();
//   const [esimData, setEsimData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);

//   const toggleCollapseBsnlVi = () => {
//     setIsCollapsedBsnlVi(!isCollapsedBsnlVi);
//   };

//   const toggleCollapseAirtelBsnl = () => {
//     setIsCollapsedAirtelBsnl(!isCollapsedAirtelBsnl);
//   };

//   const toggleCollapseViBsnl = () => {
//     setIsCollapsedViBsnl(!isCollapsedViBsnl);
//   };

//   useEffect(() => {
//     const fetchToken = async () => {
//       try {
//         const storedToken = await AsyncStorage.getItem('userToken');
//         if (storedToken) {
//           setToken(storedToken);
//         }
//       } catch (error) {
//         console.error('Failed to fetch token:', error);
//       }
//     };

//     fetchToken();
//   }, []);

//   useEffect(() => {
//     const fetchEsimData = async () => {
//       if (!token) return; // Skip fetching if token is not available

//       try {
//         const response = await axios.get('http://testing-only-erp-api.containe.in/api/ESim/ProfileWiseESimsStockCounts?userId=20', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
//           },
//         });
//         setEsimData(response.data);
//       } catch (error) {
//         console.warn('Error fetching eSIM data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEsimData();
//   }, [token]);

//   if (loading) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>Loading...</Text>
//       </SafeAreaView>
//     );
//   }

//   if (!esimData || esimData.length === 0) {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text>No eSIM data available</Text>
//       </SafeAreaView>
//     );
//   }

//   const item = esimData[0]; // Directly use the first item in the esimData array

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87' }}>
//       <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
//         <View style={{ width: '92%', backgroundColor: 'white', borderRadius: 10, marginTop: 20 }}>
//           <View>
//             <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>E-SIM</Text>
//           </View>
//           <View style={{ alignItems: 'center' }}>
//             <View style={{ backgroundColor: '#e2e8f0', width: '95%', borderRadius: 10, marginTop: 20 }}>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Total Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Allocated Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Balance Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
//               </View>
//             </View>

//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//               <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10, borderRadius: 10, width: 110 }}>BSNL+VI</Text>
//               <TouchableOpacity onPress={toggleCollapseBsnlVi} style={{ marginLeft: 10 }}>
//                 <Icon name={isCollapsedBsnlVi ? 'expand-more' : 'expand-less'} size={24} color="black" />
//               </TouchableOpacity>
//             </View>

//             <View style={{ backgroundColor: '#e2e8f0', width: '95%', borderRadius: 10, marginTop: 20 }}>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Total Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Allocated Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Balance Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
//               </View>
//             </View>

//             {!isCollapsedBsnlVi && (
//               <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>New SIM</Text>
//                   <TextInput style={styles.textinput1} value={`${item.newSimStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>BootStrap</Text>
//                   <TextInput style={styles.textinput1} value={`${item.bootstrapStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Commercial {"\n"} Activation</Text>
//                   <TextInput style={styles.textinput1} value={`${item.commercialActivationStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Safe Custody</Text>
//                   <TextInput style={styles.textinput1} value={`${item.safeCustodyStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Expired</Text>
//                   <TextInput style={styles.textinput1} value={`${item.expiredStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Suspended</Text>
//                   <TextInput style={styles.textinput1} value={`${item.suspendedStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Total</Text>
//                   <TextInput style={styles.textinput1} value={`${item.total || 'N/A'}`} editable={false} />
//                 </View>
//               </View>
//             )}

//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//               <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10, borderRadius: 10 }}>Airtel+BSNL</Text>
//               <TouchableOpacity onPress={toggleCollapseAirtelBsnl} style={{ marginLeft: 10 }}>
//                 <Icon name={isCollapsedAirtelBsnl ? 'expand-more' : 'expand-less'} size={24} color="black" />
//               </TouchableOpacity>
//             </View>

            
//             <View style={{ backgroundColor: '#e2e8f0', width: '95%', borderRadius: 10, marginTop: 20 }}>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Total Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Allocated Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Balance Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
//               </View>
//             </View>
//             {!isCollapsedAirtelBsnl && (
//               <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>New SIM</Text>
//                   <TextInput style={styles.textinput1} value={`${item.newSimStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>BootStrap</Text>
//                   <TextInput style={styles.textinput1} value={`${item.bootstrapStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Commercial {"\n"} Activation</Text>
//                   <TextInput style={styles.textinput1} value={`${item.commercialActivationStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Safe Custody</Text>
//                   <TextInput style={styles.textinput1} value={`${item.safeCustodyStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Expired</Text>
//                   <TextInput style={styles.textinput1} value={`${item.expiredStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Suspended</Text>
//                   <TextInput style={styles.textinput1} value={`${item.suspendedStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Total</Text>
//                   <TextInput style={styles.textinput1} value={`${item.total || 'N/A'}`} editable={false} />
//                 </View>
//               </View>
//             )}

//             <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
//               <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10, borderRadius: 10 }}>VI+BSNL</Text>
//               <TouchableOpacity onPress={toggleCollapseViBsnl} style={{ marginLeft: 10 }}>
//                 <Icon name={isCollapsedViBsnl ? 'expand-more' : 'expand-less'} size={24} color="black" />
//               </TouchableOpacity>
//             </View>
            
//             <View style={{ backgroundColor: '#e2e8f0', width: '95%', borderRadius: 10, marginTop: 20 }}>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Total Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Allocated Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
//               </View>
//               <View style={{ flexDirection: 'row', padding: 10 }}>
//                 <Text style={styles.text1}>Balance Stock</Text>
//                 <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
//               </View>
//             </View>

//             {!isCollapsedViBsnl && (
//               <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>New SIM</Text>
//                   <TextInput style={styles.textinput1} value={`${item.newSimStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>BootStrap</Text>
//                   <TextInput style={styles.textinput1} value={`${item.bootstrapStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Commercial {"\n"} Activation</Text>
//                   <TextInput style={styles.textinput1} value={`${item.commercialActivationStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Safe Custody</Text>
//                   <TextInput style={styles.textinput1} value={`${item.safeCustodyStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Expired</Text>
//                   <TextInput style={styles.textinput1} value={`${item.expiredStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Suspended</Text>
//                   <TextInput style={styles.textinput1} value={`${item.suspendedStock || 'N/A'}`} editable={false} />
//                 </View>
//                 <View style={{ flexDirection: 'row', padding: 10 }}>
//                   <Text style={styles.text1}>Total</Text>
//                   <TextInput style={styles.textinput1} value={`${item.total || 'N/A'}`} editable={false} />
//                 </View>
//               </View>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text1: {
//     flex: 1,
//     fontSize: 16,
//   },
//   textinput1: {
//     flex: 1,
//     fontSize: 16,
//     borderWidth: 1,
//     borderColor: 'gray',
//     padding: 5,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     textAlign: 'center',
//   },
// });

// export default MdEsim;



import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const MdEsim = () => {
  const [isCollapsed, setIsCollapsed] = useState({
    BSNL_VI: true,
    Airtel_BSNL: true,
    VI_BSNL: true,
  });
  const navigation = useNavigation();
  const [esimData, setEsimData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  const toggleCollapse = (profile) => {
    setIsCollapsed(prevState => ({
      ...prevState,
      [profile]: !prevState[profile],
    }));
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
    const fetchEsimData = async () => {
      if (!token) return; // Skip fetching if token is not available

      try {
        const response = await axios.get('http://testing-only-erp-api.containe.in/api/ESim/ProfileWiseESimsStockCounts?userId=20', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
          },
        });
        setEsimData(response.data);
      } catch (error) {
        console.warn('Error fetching eSIM data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEsimData();
  }, [token]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (!esimData || esimData.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No eSIM data available</Text>
      </SafeAreaView>
    );
  }

  const renderStockInfo = (item) => (
    <>
       <View style={styles.stockInfo}>
        <Text style={styles.text1}>Total Stock</Text>
        <TextInput style={styles.textinput1} value={`${item.totalStock || 'N/A'}`} editable={false} />
      </View>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>Allocated Stock</Text>
        <TextInput style={styles.textinput1} value={`${item.balanceStock || 'N/A'}`} editable={false} />
      </View>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>Balance Stock</Text>
        <TextInput style={styles.textinput1} value={`${item.allocatedStock || 'N/A'}`} editable={false} />
      </View>
     
    </>
  );

  const renderCollapsedInfo = (item) => (
    <View style={styles.collapsedInfo}>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>New SIM</Text>
        <TextInput style={styles.textinput1} value={`${item.newSimStock || 'N/A'}`} editable={false} />
      </View>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>BootStrap</Text>
        <TextInput style={styles.textinput1} value={`${item.bootstrapStock || 'N/A'}`} editable={false} />
      </View>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>Commercial Activation</Text>
        <TextInput style={styles.textinput1} value={`${item.commercialActivationStock || 'N/A'}`} editable={false} />
      </View>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>Safe Custody</Text>
        <TextInput style={styles.textinput1} value={`${item.safeCustodyStock || 'N/A'}`} editable={false} />
      </View>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>Expired</Text>
        <TextInput style={styles.textinput1} value={`${item.expiredStock || 'N/A'}`} editable={false} />
      </View>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>Suspended</Text>
        <TextInput style={styles.textinput1} value={`${item.suspendedStock || 'N/A'}`} editable={false} />
      </View>
      <View style={styles.stockInfo}>
        <Text style={styles.text1}>Total</Text>
        <TextInput style={styles.textinput1} value={`${item.total || 'N/A'}`} editable={false} />
      </View>
    </View>
  );

  const renderProfileSection = (profile, item) => (
    <View key={profile}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileText}>{profile}</Text>
        <TouchableOpacity onPress={() => toggleCollapse(profile.replace(/ /g, '_'))}>
          <Icon name={isCollapsed[profile.replace(/ /g, '_')] ? 'expand-more' : 'expand-less'} size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.stockContainer}>
        {renderStockInfo(item)}
      </View>
      {!isCollapsed[profile.replace(/ /g, '_')] && renderCollapsedInfo(item)}
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}  className="bg-[#4e2d87]w-[92%] h-[95%] rounded-md mt-5">
      <ScrollView contentContainerStyle={styles.scrollView}>
        {esimData.map((item, index) => renderProfileSection(item.profileCombination || `Profile ${index + 1}`, item))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    width: '95%',
  },
  profileText: {
    fontSize: 16,
    color: 'white',
    backgroundColor: '#4e2d87',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  stockContainer: {
    backgroundColor: '#e2e8f0',
    width: '99%',
    borderRadius: 10,
    marginTop: 20,
  },
  stockInfo: {
    flexDirection: 'row',
    padding: 10,
    width:'95%'
  },
  collapsedInfo: {
    backgroundColor: '#e2e8f0',
    width: '99%',
    borderRadius: 10,
    marginTop: 20,
  },
  text1: {
    flex: 1,
    fontSize: 16,
  },
  textinput1: {
    flex: 1,
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
});

export default MdEsim;

