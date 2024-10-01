import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView , ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { decode } from "base-64";



global.atob = decode;


const TechnicianHome = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

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
            'http://testing-only-erp-api.containe.in/api/MobileDashboard/GetMyInstallationCounts?userId=' + userId,
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
    <SafeAreaView className="flex-1 items-center bg-[#4e2d87]">
      <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
        <View className="flex-1 items-center">
          {/* First Button */}
          <View className="w-[334px] h-[203px] bg-white shadow-lg shadow-black rounded-lg mt-12">
            <View className="w-[311px] h-[171px] bg-[#4e2d87] rounded-lg shadow-lg shadow-black flex-row mt-3 ml-3">
              <TouchableOpacity onPress={() => navigation.navigate('Technicianinstallationform', { token, userId })}>
                <View className="flex-row h-[87px] mx-[14px] mt-[43px] mr-[39px]">
                  <Image
                    source={require("../../../asset/check.png")}
                    resizeMode="contain"
                    className="w-[114px] h-[87px]"
                  />
                  <Text className="font-bold text-white text-[24px] ml-6 mt-4">Installation{"\n"}Form</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {/* Second Button */}
          <View className="w-[334px] h-[313px] bg-[#e9e9e9] rounded-lg shadow-lg shadow-black mt-5">
            <View className="relative w-[311px] h-[250px] ml-3 mt-6">
              <TouchableOpacity onPress={() => navigation.navigate('TechnicianCertificate')}>
                <View className="absolute top-0 left-0 w-[311px] h-[250px] bg-[#4e2d87] rounded-lg">
                  <View className="flex-row mt-6 mx-3">
                    <Text className="font-bold text-white text-[18px]">My Installations</Text>
                    <View className="w-[96px] h-[32px] bg-white rounded-lg flex-row ml-14">
                      <Text className="font-bold text-black text-[16px] mt-1 ml-3">All</Text>
                      <Text className="font-bold text-[#4e2d87] text-[20px] ml-3 mt-[-2px]"> {data?.allCount ?? 'N/A'}</Text>
                    </View>
                  </View>
                  <View className="flex-row mt-6 mx-3">
                    <TouchableOpacity onPress={() => navigation.navigate('TechnicianCertificate')}>
                      <View className="w-[89px] h-[120px] bg-white rounded-lg">
                        <Text className="font-bold text-black text-[16px] mt-6 ml-5">Today</Text>
                        <Text className="font-bold text-[#4e2d87] text-[20px] mt-6 ml-8">{data?.todayCount ?? 'N/A'}</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('TechnicianCertificate')} className="ml-3">
                      <View className="w-[89px] h-[120px] bg-white rounded-lg">
                        <Text className="font-bold text-black text-[16px] mt-3 ml-6">This{"\n"}Week</Text>
                        <Text className="font-bold text-[#4e2d87] text-[20px] mt-3 ml-7">{data?.thisWeekCount ?? 'N/A'}</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('TechnicianCertificate')} className="ml-3">
                      <View className="w-[89px] h-[120px] bg-white rounded-lg">
                        <Text className="font-bold text-black text-[16px] mt-3 ml-6">This{"\n"}Month</Text>
                        <Text className="font-bold text-[#4e2d87] text-[20px] mt-3 ml-7">{data?.thisMonthCount ?? 'N/A'}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default TechnicianHome;



