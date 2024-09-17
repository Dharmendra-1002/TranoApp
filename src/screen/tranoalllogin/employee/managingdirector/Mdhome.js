import React, { useEffect, useState } from "react";
import { Pressable ,Modal, View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, ActivityIndicator, Alert, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Feather from 'react-native-vector-icons/Feather';
import { decode } from "base-64";
import { jwtDecode } from "jwt-decode";
import Colors from '../../../../component/Colors';

global.atob = decode;


const IconSize = 24;


const Mdhome = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;
  const [loading, setLoading] = useState(true);
  const [esimData, setEsimData] = useState(null);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [data, setData] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);




  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: () => navigation.navigate('EmployeeLogin') }
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
         const decodedToken = jwtDecode(token);
         const userId = decodedToken.UserId;


          const response = await axios.get('http://testing-only-erp-api.containe.in/api/MobileDashboard/GetAllESimsAndAllDevicesCounts?userId=' + userId, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
            },
          });

          console.log('API Response:', response.data);
          setEsimData(response.data);
          setUserId(userId);
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
    <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87' }}>
  

      <View style={styles.header}>
        {/* <View style={styles.leftView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={IconSize} color={Colors.white} />
          </TouchableOpacity>
        </View> */}
 
        {/* Display the UserId directly */}
        <View style={{ justifyContent: "flex-start", alignItems: "flex-start", marginRight:"10%"}}>
       
        <Text className='text-white ml-10 mt-2'>Anand Kumar Seethala (Managing Director)</Text>
          <Text className='text-white ml-10'>Id - {userId ?? 'Loading...'}</Text>
        </View>
       
     
 
        <View style={styles.rightView}>
        <TouchableOpacity onPress={() => navigation.navigate('Credit_Limit_Notification', { token, userId })}>
            <Feather name="bell" size={IconSize} color={Colors.white} />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu} style={{ marginRight: "16%" }}>
            <Feather name="more-vertical" size={IconSize} color={Colors.white} />
          </TouchableOpacity>
          <Modal
            transparent={true}
            visible={menuVisible}
            animationType="fade"
            onRequestClose={() => setMenuVisible(false)}
          >
            <Pressable style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
              <View style={styles.menu}>
                <Pressable style={styles.menuItem} onPress={handleLogout}>
                  <Text style={styles.menuItemText}>Logout</Text>
                </Pressable>
              </View>
            </Pressable>
          </Modal>
        </View>
      </View>

      {/* Main content below the header */}
      <View style={{ flex: 1, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#4e2d87', height: 10 }}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            {/* Drawer open button */}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout}>
            {/* Logout button */}
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
                token={token}   // Pass token prop
                userId={userId}
              />





              <CardButton
                navigation={navigation}
                navigateTo='Mddevices'
                buttonText="DEVICES"
                buttonNumber={esimData ? esimData.allDevicesCount : "N/A"}
                imageSource={require('../../../../asset/tracking-app.png')}
                imageStyle={{ width: 48, height: 48, marginTop: 10 }}
                token={token}   // Pass token prop
                userId={userId}
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
                token={token}   // Pass token prop
                userId={userId}
              />
              
            </View>
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

const styles = StyleSheet.create({
  header:{
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4e2d87',
  
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  menu: {
    backgroundColor: 'white',
    borderRadius: 4,
    margin: 10,
    padding: 10,
    width: 150,
    elevation: 4,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.black,
  },
  rightView: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    
  },


})

export default Mdhome;


