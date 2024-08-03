// import React, { useEffect, useState } from "react";
// import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, ActivityIndicator } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// const Mdhome = () => {
//   const navigation = useNavigation();
//   const screenWidth = Dimensions.get('window').width;
//   const [loading, setLoading] = useState(true);
//   const [esimData, setEsimData] = useState(null);


//   const [token, setToken] = useState(null);
//   console.log(token, '==========================');

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
//       try {
//         const response = await axios.get('http://testing-only-erp-api.containe.in/api/MobileDashboard/GetAllESimsAndAllDevicesCounts?userId=20', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//             'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
//           },
//         });
//         console.log(response.data, '==========================');
//         // setEsimData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.warn('Error fetching eSIM data:', error);
//         setLoading(false);
//       }
//     };

//     fetchEsimData();
//   }, [token]);

//   // if (loading) {
//   //   return (
//   //     <SafeAreaView className="flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>
//   //       <ActivityIndicator size="large" color="#fff" />
//   //     </SafeAreaView>
//   //   );
//   // }

//   return (
//     <SafeAreaView className="flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
//       <View className="bg-white w-[92%] h-[95%] rounded-md mt-5 items-center">
//         <View className="mt-5 bg-gray-200 rounded-lg p-5 items-center" style={{ width: screenWidth * 0.9 }}>
//           <View className="flex-row justify-between w-full">
//             <CardButton
//               navigation={navigation}
//               navigateTo='MdEsim'
//               buttonText="E-SIM"
//               buttonNumber={esimData ? esimData.esimCount : "N/A"}
//               imageSource={require('../../../../asset/electronic-board.png')}
//               imageStyle="w-12 h-12 mt-2.5"
//             />
//             <CardButton
//               navigation={navigation}
//               navigateTo='Mddevices'
//               buttonText="DEVICES"
//               buttonNumber="57,476"
//               imageSource={require('../../../../asset/tracking-app.png')}
//               imageStyle="w-12 h-12 mt-2.5"
//             />
//           </View>
//           <View className="flex-row justify-between w-full mt-10">
//             <CardButton
//               navigation={navigation}
//               navigateTo='MdWallet'
//               buttonText="Wallet"
//               buttonNumber="57,476"
//               imageSource={require("../../../../asset/wallet1.png")}
//               imageStyle="w-12 h-12 mt-2.5"
//             />
//             <CardButton
//               navigation={navigation}
//               navigateTo='MdWallet'
//               buttonText="Wallet"
//               buttonNumber="57,476"
//               imageSource={require("../../../../asset/wallet1.png")}
//               imageStyle="w-12 h-12 mt-2.5"
//             />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const CardButton = ({ navigation, navigateTo, imageSource, buttonText, buttonNumber, imageStyle }) => (
//   <TouchableOpacity
//     className="w-[45%] h-44 bg-[#4e2d87] rounded-lg items-center justify-center shadow-lg"
//     onPress={() => navigation.navigate(navigateTo)}
//   >
//     <Image
//       source={imageSource}
//       resizeMode="contain"
//       className={`w-20 h-20 ${imageStyle}`}
//     />
//     <Text className="text-white text-lg font-bold">{buttonText}</Text>
//     <Text className="text-white text-xl font-extrabold my-1.5">{buttonNumber}</Text>
//     <View className="w-[80%] bg-white rounded-lg items-center py-1.5">
//       <Text className="text-purple-900 font-bold text-base">View Report</Text>
//     </View>
//   </TouchableOpacity>
// );

// export default Mdhome;


import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Mdhome = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const [loading, setLoading] = useState(true);
  const [esimData, setEsimData] = useState(null);
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
      const fetchEsimData = async () => {
        try {
          const response = await axios.get('http://testing-only-erp-api.containe.in/api/MobileDashboard/GetAllESimsAndAllDevicesCounts?userId=20', {
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
    }
  }, [token]);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4e2d87' }}>
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87' }}>
      <View style={{ backgroundColor: 'white', width: '92%', height: '95%', borderRadius: 10, marginTop: 20, alignItems: 'center' }}>
        <View style={{ marginTop: 20, backgroundColor: '#f0f0f0', borderRadius: 10, padding: 20, width: screenWidth * 0.9 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
            <CardButton
              navigation={navigation}
              navigateTo='MdEsim'
              buttonText="E-SIM"
              buttonNumber={esimData ? esimData.allEsimCount : "N/A"}
              imageSource={require('../../../../asset/electronic-board.png')}
              imageStyle={{ width: 48, height: 48, marginTop: 10 }}
            />
            <CardButton
              navigation={navigation}
              navigateTo='Mddevices'
              buttonText="DEVICES"
              buttonNumber={esimData ? esimData.allDevicesCount : "N/A"}
              imageSource={require('../../../../asset/tracking-app.png')}
              imageStyle={{ width: 48, height: 48, marginTop: 10 }}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
            <CardButton
              navigation={navigation}
              navigateTo='MdWallet'
              buttonText="Wallet"
              buttonNumber="57,476"
              imageSource={require("../../../../asset/wallet1.png")}
              imageStyle={{ width: 48, height: 48, marginTop: 10 }}
            />
            <CardButton
              navigation={navigation}
              navigateTo='MdWallet'
              buttonText="Wallet"
              buttonNumber="57,476"
              imageSource={require("../../../../asset/wallet1.png")}
              imageStyle={{ width: 48, height: 48, marginTop: 10 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const CardButton = ({ navigation, navigateTo, imageSource, buttonText, buttonNumber, imageStyle }) => (
  <TouchableOpacity
    style={{ width: '45%', height: 176, backgroundColor: '#4e2d87', borderRadius: 10, alignItems: 'center', justifyContent: 'center', elevation: 5 }}
    onPress={() => navigation.navigate(navigateTo)}
  >
    <Image
      source={imageSource}
      resizeMode="contain"
      style={[{ width: 80, height: 80 }, imageStyle]}
    />
    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{buttonText}</Text>
    <Text style={{ color: 'white', fontSize: 24, fontWeight: '800', marginVertical: 6 }}>{buttonNumber}</Text>
    <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, alignItems: 'center', paddingVertical: 6 }}>
      <Text style={{ color: '#4e2d87', fontWeight: 'bold', fontSize: 16 }}>View Report</Text>
    </View>
  </TouchableOpacity>
);

export default Mdhome;
