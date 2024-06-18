import { View, Text, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Distributorvltd_sld = () => {

  const navigation = useNavigation();

  const openUrl = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.tranogo&pli=1');
  };

  return (
    <SafeAreaView className="flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
      <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 60 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Distributorwallet_certificate_gesture')} className=' bg-[#4e2d87] w-[43%] h-28 items-center justify-center py-3 rounded-md'>
            <MaterialCommunityIcons name="crosshairs-gps" color="white" size={40} />
            <Text className=" text-sm text-white text-center">VLTD</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={openUrl} className=' bg-[#4e2d87] w-[43%] h-28 items-center justify-center py-3 rounded-md'>
            <View>
              <Text className="text-lg text-white text-center">SLD </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Distributorvltd_sld;
