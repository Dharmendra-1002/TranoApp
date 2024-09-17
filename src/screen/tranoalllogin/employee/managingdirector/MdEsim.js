// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useRoute } from '@react-navigation/native';

// const MdEsim = () => {
//   const [expandedCards, setExpandedCards] = useState([]);
//   const [esimData, setEsimData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);

//   const route = useRoute();
//   const userId = route.params?.userId;

//   // Fetch token from AsyncStorage
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

//   // Fetch eSIM data from API
//   useEffect(() => {
//     const fetchEsimData = async () => {
//       if (!token || !userId) return; // Skip fetching if token or userId is not available

//       try {
//         const response = await axios.get(
//           `http://testing-only-erp-api.containe.in/api/ESim/ProfileWiseESimsStockCounts?userId=${userId}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               MobileAPISecKey: 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
//             },
//           }
//         );
//         setEsimData(response.data); // Update state with fetched data
//         setExpandedCards(Array(response.data.length).fill(false)); // Initialize expanded cards state
//       } catch (error) {
//         console.warn('Error fetching eSIM data:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEsimData();
//   }, [token, userId]);

//   // Handle card expansion
//   const toggleExpandCard = (index) => {
//     setExpandedCards((prevState) => {
//       const newState = [...prevState];
//       newState[index] = !newState[index];
//       return newState;
//     });
//   };



//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }









//   return (
//     <ScrollView>
//       {esimData.map((item, index) => (
//         <View key={index} style={{ backgroundColor: '#FFFFFF', width: '95%', borderRadius: 10, marginTop: 20, shadowColor: "rgba(0,0,0,1)", shadowOffset: { width: 3, height: 3 }, elevation: 50, shadowOpacity: 0.7, shadowRadius: 10, padding: 6, alignSelf: 'center' }}>
//           <View style={{ backgroundColor: '#4e2d87', width: '95%', borderRadius: 10, marginTop: '1%', marginLeft: '2%', paddingBottom: expandedCards[index] ? 20 : 6 }}>
//             <Text className="text-white text-lg mt-2 ml-4" style={{ fontWeight: "bold" }}>{item.profileName}</Text>
//             <View>
//               <View style={{ flexDirection: "row", alignItems: "center", marginTop: 12 }}>
//                 <Image
//                   source={require("../../../../asset/analysis.png")}
//                   resizeMode="contain"
//                   style={{ width: 80, height: 87, marginLeft: 35 }}
//                 />
//                 <View style={{ marginLeft: 25 }}>
//                 <View style={{ flexDirection: "row" }}>
                  
//                   <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>SIM : </Text>
//                   <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.profileCombination || 'N/A'}</Text>
//                 </View>



//                   <View style={{ flexDirection: "row" }}>
                  
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Total Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.totalStock}</Text>
//                   </View>
//                   <View style={{ flexDirection: "row" }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Allocated Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.allocatedStock}</Text>
//                   </View>
//                   <View style={{ flexDirection: "row" }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Balance Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.balanceStock}</Text>
//                   </View>
//                 </View>
//               </View>

//               {expandedCards[index] && (
//                 <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
//                   {/* Display additional data */}
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Profile Combination: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.profileCombination || 'N/A'}</Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>New SIM Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.newSimStock || 'N/A'}</Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Bootstrap Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.bootstrapStock || 'N/A'}</Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Commercial Activation Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.commercialActivationStock || 'N/A'}</Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Safe Custody Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.safeCustodyStock || 'N/A'}</Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Expired Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.expiredStock || 'N/A'}</Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Suspended Stock: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.suspendedStock || 'N/A'}</Text>
//                   </View>
//                   <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Total: </Text>
//                     <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.total || 'N/A'}</Text>
//                   </View>
//                 </View>
//               )}
//             </View>
//           </View>

//           <TouchableOpacity onPress={() => toggleExpandCard(index)}>
//             <View className="rounded-md " style={{ backgroundColor: '#4e2d87', width: '95%', marginLeft: '2%', marginTop: '1%' }}>
//               <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>
//                 {expandedCards[index] ? "View Less" : "View More"}
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// export default MdEsim;



import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MdEsim = () => {
  const [expandedCards, setExpandedCards] = useState(Array(10).fill(false));
  const [esimData, setEsimData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  // Fetch token from AsyncStorage
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

  // Fetch eSIM data from API
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
        setEsimData(response.data); // Update state with fetched data
      } catch (error) {
        console.warn('Error fetching eSIM data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEsimData();
  }, [token]);

  // Handle card expansion
  const toggleExpandCard = (index) => {
    setExpandedCards(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {esimData.map((item, index) => (
        <View key={index} style={{ backgroundColor: '#FFFFFF', width: '95%', borderRadius: 10, marginTop: 20, shadowColor: "rgba(0,0,0,1)", shadowOffset: { width: 3, height: 3 }, elevation: 50, shadowOpacity: 0.7, shadowRadius: 10, padding: 6, alignSelf: 'center' }}>
          <View style={{ backgroundColor: '#4e2d87', width: '95%', borderRadius: 10, marginTop: '1%', marginLeft: '2%', paddingBottom: expandedCards[index] ? 20 : 6 }}>
            <Text className="text-white text-lg mt-2 ml-4" style={{ fontWeight: "bold" }}>{item.profileName}</Text>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center", marginTop: 12 }}>
                <Image
                  source={require("../../../../asset/analysis.png")}
                  resizeMode="contain"
                  style={{ width: 80, height: 87, marginLeft: 35 }}
                />
                <View style={{ marginLeft: 25 }}>
                <View style={{ flexDirection: "row" }}>
                  
                  <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>SIM : </Text>
                  <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.profileCombination || 'N/A'}</Text>
                </View>



                  <View style={{ flexDirection: "row" }}>
                  
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Total Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.totalStock}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Allocated Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.allocatedStock}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Balance Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.balanceStock}</Text>
                  </View>
                </View>
              </View>

              {expandedCards[index] && (
                <View style={{ marginTop: 10, paddingHorizontal: 10 }}>
                  {/* Display additional data */}
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Profile Combination: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.profileCombination || 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>New SIM Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.newSimStock || 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Bootstrap Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.bootstrapStock || 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Commercial Activation Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.commercialActivationStock || 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Safe Custody Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.safeCustodyStock || 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Expired Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.expiredStock || 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Suspended Stock: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.suspendedStock || 'N/A'}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 2 }}>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>Total: </Text>
                    <Text style={{ color: 'white', fontWeight: "bold", fontSize: 16 }}>{item.total || 'N/A'}</Text>
                  </View>
                </View>
              )}
            </View>
          </View>

          <TouchableOpacity onPress={() => toggleExpandCard(index)}>
            <View className="rounded-md " style={{ backgroundColor: '#4e2d87', width: '95%', marginLeft: '2%', marginTop: '1%' }}>
              <Text style={{ color: '#ffffff', textAlign: 'center', fontSize: 16, fontWeight: "bold", marginVertical: 10 }}>
                {expandedCards[index] ? "View Less" : "View More"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

export default MdEsim;