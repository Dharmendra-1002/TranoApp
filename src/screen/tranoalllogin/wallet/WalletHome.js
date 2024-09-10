import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Modal, Pressable, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Colors from '../../../component/Colors';
import { jwtDecode } from "jwt-decode";
import { decode } from "base-64";
import { Alert } from 'react-native';

global.atob = decode;
 
const IconSize = 24;
 
const WalletHome = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [isCreditLimitVisible, setCreditLimitVisible] = useState(false);
  const [isCreditLimitVisibles, setCreditLimitVisibles] = useState(false);
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
        { text: "Yes", onPress: () => {
            console.log('Logout confirmed');
            setMenuVisible(false);
            navigation.navigate('WalletLogin');
          }
        }
      ]
    );
  };
  
  const toggleCreditLimitVisibility = () => {
    setCreditLimitVisible(!isCreditLimitVisible);
  };
 
  const toggleCreditLimitVisibilitys = () => {
    setCreditLimitVisibles(!isCreditLimitVisibles);
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
      const fetchData = async () => {
        try {
          const decodedToken = jwtDecode(token);
          const userId = decodedToken.UserId;
 
          const response = await axios.get(
            'http://testing-only-erp-api.containe.in/api/Wallet/GetWalletDashboard?id=' + userId,
            {
              headers: {
                'Authorization': `Bearer ${token}`,
                'MobileAPISecKey': 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
              }
            }
          );
          console.log('API Response:', response.data);
          setData(response.data);
          setUserId(userId);
        } catch (error) {
          console.warn('Error fetching Wallet data:', error);
        } finally {
          setLoading(false);
        }
      };
 
      fetchData();
    }
  }, [token]);
 
  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }
 
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        {/* <View style={styles.leftView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={IconSize} color={Colors.white} />
          </TouchableOpacity>
        </View> */}
 
        {/* Display the UserId directly */}
        <View style={{ justifyContent: "flex-start", alignItems: "flex-start", marginRight:"60%"}}>
         
        
          <Text className='text-white ml-10'>UserId - {userId ?? 'Loading...'}</Text>
        </View>
       
     
 
        <View style={styles.rightView}>
          <TouchableOpacity>
            <Feather name="" size={IconSize} color={Colors.white} />
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
 
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87', justifyContent: 'center' }}>
          <View style={{ backgroundColor: 'white', width: '92%', height: '98%', borderRadius: 8, marginTop: 5 }}>
          
           
            <View style={{ justifyContent: "flex-start", alignItems: "flex-start",  marginLeft:"10%"}}>
            <Text className='text-black'>WELCOME</Text>
              <Text className='text-black'>{data?.usersBusinessName ?? 'N/A'}</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.walletContainer}>
              
                <View>
                  <Image source={require("../../../asset/wallet.png")} style={styles.walletImage} />
                  <Text style={styles.walletTitle}>My Wallet</Text>
                  <TouchableOpacity onPress={toggleCreditLimitVisibility} style={styles.eyeIconContainer}>
                    <Icon name={isCreditLimitVisible ? 'eye-off' : 'eye'} size={25} color="#fff" />
                  </TouchableOpacity>
                  <View style={styles.creditLimitContainer}>
                    <Text style={styles.creditLimitText}>Credit Limit</Text>
                  </View>
                  {isCreditLimitVisible && <Text style={styles.creditLimitValue}>{data?.creditLimit ?? 'N/A'}</Text>}
                  <Text style={styles.walletBalanceLabel}>Balance Wallet</Text>
                  {isCreditLimitVisible && <Text style={styles.walletBalanceValue}>{data?.balanceWalletAmount ?? 'N/A'}</Text>}
                  <TouchableOpacity onPress={() => navigation.navigate('DistributorRechaegeWallet')}>
                    <View style={styles.rechargeButton}>
                      <Text style={styles.rechargeButtonText}>Recharge Wallet</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
 
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => navigation.navigate('WalletStatement', { token, userId })}>
                <View style={styles.buttonContainer}>
                  <Image source={require("../../../asset/evaluation.png")} style={styles.buttonImage} />
                  <Text style={[styles.buttonText,  { fontSize: 15 } ]}>STATEMENT</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('WalletRecharges', { token, userId })}>
                <View style={styles.buttonContainer}>
                  <Image source={require("../../../asset/recycling.png")} style={styles.buttonImage} />
                  <Text style={[styles.buttonText,  { fontSize: 15 } ]}>ADDED AMOUNTS</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonRow}>
              <TouchableOpacity onPress={() => navigation.navigate('WalletSpends', { token, userId })}>
                <View style={styles.buttonContainer}>
                  <Image source={require("../../../asset/payroll.png")} style={styles.buttonImage} />
                  <Text style={[styles.buttonText,  { fontSize: 15 } ]}>SPENDS</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('WalletHistory', { token, userId })}>
                <View style={styles.buttonContainer}>
                  <Image source={require("../../../asset/history.png")} style={styles.buttonImage} />
                  <Text style={[styles.buttonText,  { fontSize: 15 } ]}>HISTORY</Text>
                </View>
              </TouchableOpacity>
            </View>
 
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.royaltyContainer}>
                <View>
                  <Image source={require("../../../asset/commission.png")} style={styles.royaltyImage} />
                  <Text style={styles.royaltyTitle}>My Royality Account</Text>
                  <TouchableOpacity onPress={toggleCreditLimitVisibilitys} style={styles.eyeIconContainer}>
                    <Icon name={isCreditLimitVisibles ? 'eye-off' : 'eye'} size={25} color="#fff" />
                  </TouchableOpacity>
                  <View style={styles.creditLimitContainer}>
                    <Text style={styles.creditLimitText}>Credit Limit</Text>
                  </View>
                  {isCreditLimitVisibles && <Text style={styles.creditLimitValue}>1,00,000</Text>}
                  <Text style={styles.walletBalanceLabel}>Debit Wallet</Text>
                  {isCreditLimitVisibles && <Text style={styles.walletBalanceValue}>80,000</Text>}
                  <Text style={styles.walletBalanceLabel}>Balance Wallet</Text>
                  {isCreditLimitVisibles && <Text style={styles.walletBalanceValue}>1,00,000</Text>}
                  <TouchableOpacity onPress={() => navigation.navigate('OemRoyalityAccount')}>
                    <View style={styles.viewAccountButton}>
                      <Text style={styles.viewAccountButtonText}>View Account</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4e2d87',
  },
  leftView: {
    flex: 1,
    margin: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  rightView: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
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
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.black,
  },
  welcomeText: {
    fontSize: 20,
    color: '#4e2d87',
    margin: 16,
  },
  walletContainer: {
    width: '90%',
    height: 200,
    margin: 40,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    padding: 16,
    backgroundColor: '#4e2d87',
    marginTop: 16,

  },
  walletImage: {
    width: 36,
    height: 36,
    marginTop: 16,
  },
  walletTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: -40,
  },
  eyeIconContainer: {
    marginLeft: '85%',
    marginTop: -24,
  },
 creditLimitContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4%',
    marginLeft: '20%',
  },
  creditLimitText: {
    fontSize: 15,
    color: '#fff',
  },
  creditLimitValue: {
    fontSize: 15,
    color: '#fff',
    marginLeft: '70%',
    marginTop: -20,
  },
  walletBalanceLabel: {
    fontSize: 15,
    color: '#fff',
    marginLeft: '20%',
  },
  walletBalanceValue: {
    fontSize: 15,
    color: '#fff',
    marginLeft: '70%',
    marginTop: -20,
  },
  rechargeButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  
 
  rechargeButtonText: {
    color: '#4e2d87',
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 16,
  },
  buttonContainer: {
    width: 150,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#4e2d87',
  },
  buttonImage: {
    width: 36,
    height: 36,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    margin: 4,
    textAlign: 'center',
  },
  royaltyContainer: {
    width: '90%',
    height: 200,
    margin: 40,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    padding: 16,
    backgroundColor: '#4e2d87',
  },
  royaltyImage: {
    width: 40,
    height: 40,
    marginTop: 16,
  },
  royaltyTitle: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginTop: -40,
  },
  viewAccountButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  viewAccountButtonText: {
    color: '#4e2d87',
    fontSize: 16,
  },
});
 
export default WalletHome;
 
 


