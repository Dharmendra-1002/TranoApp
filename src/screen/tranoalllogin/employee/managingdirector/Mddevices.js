// import React, { useEffect, useState } from "react";
// import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';  // Ensure AsyncStorage is imported correctly

// function Mddevices(props) {
//   const navigation = useNavigation();
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [token, setToken] = useState(null);

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
//     if (token) {
//       const fetchData = async () => {
//         try {
//           const response = await axios.get(
//             'http://testing-only-erp-api.containe.in/api/MobileDashboard/GetLiveStatusDevicesCounts?userId=20',
//             {
//               headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
//               }
//             }
//           );
//           setData(response.data);
//         } catch (error) {
//           console.warn('Error fetching eSIM data:', error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchData();
//     }
//   }, [token]);

//   if (loading) {
//     return (
//       <SafeAreaView className="flex-1 items-center justify-center bg-[#4e2d87]">
//         <ActivityIndicator size="large" color="#fff" />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView className="flex-1 items-center justify-center bg-[#4e2d87]">
//       <View className="bg-white w-[92%] h-[95%] rounded-md flex items-center">
//         <View>
//           <TouchableOpacity onPress={() => navigation.navigate('HomeDeviceDashboardForm')}>
//             <View className="bg-[#4e2d87] rounded-lg p-3 mt-5 ">
//               <Text className="text-white font-bold text-center">For State Wise - Live - Status - Click here</Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View className="flex-row justify-between py-12 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Total Devices</Text>
//             <View className="w-[120%] h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">{data?.devicesCount ?? 'N/A'}</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Installed Devices</Text>
//             <View className="w-[120%] h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">{data?.installedDevicesCount ?? 'N/A'}</Text>
//           </View>
//         </View>

//         <View className="w-full px-6 ">
//           <Text className="font-extrabold text-[#4e2d87] text-left">Live Status</Text>
//         </View>

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Devices Online</Text>
//             <View className="w-[120%] h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">7,000</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Devices Offline</Text>
//             <View className="w-[120%] h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">1,000</Text>
//           </View>
//         </View>

//         <View className="flex-row justify-between py-5 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 24 Hours</Text>
//             <View className="w-[120%] h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">700</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 48 Hours</Text>
//             <View className="w-[120%] h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">600</Text>
//           </View>
//         </View>

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 72 Hours</Text>
//             <View className="w-[120%] h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">550</Text>
//           </View>

//           <TouchableOpacity onPress={() => navigation.navigate('Mddevices7day')} className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline {"\n"} Since 7 Days</Text>
//             <View className="w-[120%] h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">400</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// export default Mddevices;


import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';  // Ensure AsyncStorage is imported correctly

function Mddevices(props) {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

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
            'http://testing-only-erp-api.containe.in/api/MobileDashboard/GetLiveStatusDevicesCounts?userId=20',
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
              }
            }
          );
          setData(response.data);
        } catch (error) {
          console.warn('Error fetching eSIM data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [token]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 items-center justify-center bg-[#4e2d87]">
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-[#4e2d87]">
      <View className="bg-white w-[92%] h-[95%] rounded-md flex items-center">
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('HomeDeviceDashboardForm')}>
            <View className="bg-[#4e2d87] rounded-lg p-3 mt-5 ">
              <Text className="text-white font-bold text-center">For State Wise - Live - Status - Click here</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-between py-12 px-6">
          <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
            <Text className="text-white font-bold text-center">Total Devices</Text>
            <View className="w-[120%] h-[2px] bg-white my-2" />
            <Text className="text-white font-bold text-center">{data?.devicesCount ?? 'N/A'}</Text>
          </View>

          <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
            <Text className="text-white font-bold text-center">Installed Devices</Text>
            <View className="w-[120%] h-[2px] bg-white my-2" />
            <Text className="text-white font-bold text-center">{data?.installedDevicesCount ?? 'N/A'}</Text>
          </View>
        </View>

        <View className="w-full px-6 ">
          <Text className="font-extrabold text-[#4e2d87] text-left">Live Status</Text>
        </View>

        <View className="flex-row justify-between py-8 px-6">
          <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
            <Text className="text-white font-bold text-center">Devices Online</Text>
            <View className="w-[120%] h-[2px] bg-white my-2" />
            <Text className="text-white font-bold text-center">7,000</Text>
          </View>

          <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
            <Text className="text-white font-bold text-center">Devices Offline</Text>
            <View className="w-[120%] h-[2px] bg-white my-2" />
            <Text className="text-white font-bold text-center">1,000</Text>
          </View>
        </View>

        <View className="flex-row justify-between py-5 px-6">
          <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
            <Text className="text-white font-bold text-center">Offline Since 24 Hours</Text>
            <View className="w-[120%] h-[2px] bg-white my-2" />
            <Text className="text-white font-bold text-center">700</Text>
          </View>

          <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
            <Text className="text-white font-bold text-center">Offline Since 48 Hours</Text>
            <View className="w-[120%] h-[2px] bg-white my-2" />
            <Text className="text-white font-bold text-center">600</Text>
          </View>
        </View>

        <View className="flex-row justify-between py-8 px-6">
          <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
            <Text className="text-white font-bold text-center">Offline Since 72 Hours</Text>
            <View className="w-[120%] h-[2px] bg-white my-2" />
            <Text className="text-white font-bold text-center">550</Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Mddevices7day')} className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
            <Text className="text-white font-bold text-center">Offline {"\n"} Since 7 Days</Text>
            <View className="w-[120%] h-[2px] bg-white my-2" />
            <Text className="text-white font-bold text-center">400</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Mddevices;