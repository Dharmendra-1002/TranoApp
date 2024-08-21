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
//       const fetchEsimData = async () => {
//         try {
//           const response = await axios.get('http://testing-only-erp-api.containe.in/api/MobileDashboard/GetAllESimsAndAllDevicesCounts?userId=20', {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
//             },
//           });
//           setEsimData(response.data);
//         } catch (error) {
//           console.warn('Error fetching eSIM data:', error);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchEsimData();
//     }
//   }, [token]);

//   if (loading) {
//     return (
//       <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4e2d87' }}>
//         <ActivityIndicator size="large" color="#fff" />
//       </SafeAreaView>
//     );
//   }

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87', alignItems:'center'}}>
//       <View style={{ backgroundColor: 'white', width: '92%', height: '95%', borderRadius: 10, marginTop: 20, alignItems: 'center' }}>
//         <View style={{ marginTop: 20, backgroundColor: '#f0f0f0', borderRadius: 10, padding: 20, width: screenWidth * 0.9 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
//             <CardButton
//               navigation={navigation}
//               navigateTo='MdEsim'
//               buttonText="E-SIM"
//               buttonNumber={esimData ? esimData.allEsimCount : "N/A"}
//               imageSource={require('../../../../asset/electronic-board.png')}
//               imageStyle={{ width: 48, height: 48, marginTop: 10 }}
//             />
//             <CardButton
//               navigation={navigation}
//               navigateTo='Mddevices'
//               buttonText="DEVICES"
//               buttonNumber={esimData ? esimData.allDevicesCount : "N/A"}
//               imageSource={require('../../../../asset/tracking-app.png')}
//               imageStyle={{ width: 48, height: 48, marginTop: 10 }}
//             />
//           </View>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
//             <CardButton
//               navigation={navigation}
//               navigateTo='MdWallet'
//               buttonText="Wallet"
//               buttonNumber="57,476"
//               imageSource={require("../../../../asset/wallet1.png")}
//               imageStyle={{ width: 48, height: 48, marginTop: 10 }}
//             />
//             <CardButton
//               navigation={navigation}
//               navigateTo='MdWallet'
//               buttonText="Wallet"
//               buttonNumber="57,476"
//               imageSource={require("../../../../asset/wallet1.png")}
//               imageStyle={{ width: 48, height: 48, marginTop: 10 }}
//             />
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const CardButton = ({ navigation, navigateTo, imageSource, buttonText, buttonNumber, imageStyle }) => (
//   <TouchableOpacity
//     style={{ width: '45%', height: 176, backgroundColor: '#4e2d87', borderRadius: 10, alignItems: 'center', justifyContent: 'center', elevation: 5 }}
//     onPress={() => navigation.navigate(navigateTo)}
//   >
//     <Image
//       source={imageSource}
//       resizeMode="contain"
//       style={[{ width: 80, height: 80 }, imageStyle]}
//     />
//     <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{buttonText}</Text>
//     <Text style={{ color: 'white', fontSize: 24, fontWeight: '800', marginVertical: 6 }}>{buttonNumber}</Text>
//     <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 10, alignItems: 'center', paddingVertical: 6 }}>
//       <Text style={{ color: '#4e2d87', fontWeight: 'bold', fontSize: 16 }}>View Report</Text>
//     </View>
//   </TouchableOpacity>
// );

// export default Mdhome;



import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, ActivityIndicator ,Alert
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Header from "../../../../component/Header";
import ModernHeader from "react-native-modern-header";
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Mdhome = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const [loading, setLoading] = useState(true);
  const [esimData, setEsimData] = useState(null);
  const [token, setToken] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);




  const handleLogout = () => {
    // Show a confirmation alert
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => {
          // Add your logout logic here
          // For example, clear authentication tokens and navigate to login screen
          navigation.navigate('EmployeeLogin');
        } }
      ]
    );
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

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4e2d87' }}>
        <ActivityIndicator size="large" color="#fff" />
      </SafeAreaView>
    );
  }

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87', alignItems: 'center' }}>

      {/* <ModernHeader
        title="MD HOME"
        titleTextStyle={{ color: '#fff' }}
        style={{ backgroundColor: '#4e2d87' }}
        onLeftPress={() => navigation.navigate('EmployeeLogin')}
        rightIcon={<Icon name="logout" size={24} color="#fff" />}
        onRightPress={() => handleLogout()} 
        rightImageSource={require('../../../../asset/logout.png')}
        leftImageSource={require('../../../../asset/list.png')}
        // Show menu when right button is pressed
      /> */}






      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#4e2d87',height:10}}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}> 
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
      </TouchableOpacity>
    </View>


      <View style={{ backgroundColor: 'white', width: '92%', height: '88%', borderRadius: 10, marginTop: 2, alignItems: 'center' }}>

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
        {/* <TouchableOpacity onPress={() => navigation.navigate('EmployeeLogin')} style={{ marginTop: 20, padding: 10, backgroundColor: '#4e2d87', borderRadius: 10 }}> 
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
        </TouchableOpacity> */}
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

