import { View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Trano_All_Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ScrollView>
        {/* Logo Section */}
        <View className="w-full h-[142px] bg-[#4e2d87] items-center justify-center">
          <Image
            source={require('../../asset/ctpllogo.png')}
            resizeMode="cover"
            className="w-[277px] h-[64px] mr-12 mb-6"
          />
        </View>

        {/* Top Buttons Section */}
        <View className="px-4 py-2 space-y-5">
          <View className="py-4 rounded-2xl bg-[#e4e7eb] shadow-lg mt-3">
            <View className="flex-row items-center justify-between px-4 space-x-2">
              <TouchableOpacity
                onPress={() => navigation.navigate('CustomerDowanload')}
                className="w-[28%] items-center justify-center"
              >
                <Image source={require('../../asset/person.png')} resizeMode="contain" className="h-10" />
                <Text className="text-[#4e2d87] text-sm font-bold text-center">Customer{'\n'}Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Distibutorvltd_sld')}
                className="w-[33%] items-center justify-center"
              >
                <Image source={require('../../asset/enter.png')} resizeMode="contain" className="h-10" />
                <Text className="text-[#4e2d87] text-sm font-bold text-center">Distributor {'\n'}Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Dealervltd')}
                className="w-[33%] items-center justify-center"
              >
                <Image source={require('../../asset/deal.png')} resizeMode="contain" className="h-10" />
                <Text className="text-[#4e2d87] text-sm font-bold text-center">Dealer{'\n'}Login</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Options Section */}
          <View className="space-y-2">
            <View className="flex-row w-full justify-between">
              <TouchableOpacity
                onPress={() => navigation.navigate('OemLogin')}
                className="bg-[#4e2d87] w-[48%] h-28 items-center justify-center rounded-md"
              >
                <Image source={require('../../asset/manu.png')} resizeMode="contain" className="w-16 h-14" />
                <Text className="text-white text-base font-semibold mt-2">OEM Login</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('TechnicianLogin')}
                className="bg-[#4e2d87] w-[48%] h-28 items-center justify-center rounded-md"
              >
                <Image source={require('../../asset/engineer.png')} resizeMode="contain" className="w-12 h-12" />
                <Text className="text-white text-base font-semibold mt-2">Technician{'\n'}Login</Text>
              </TouchableOpacity>
            </View>

            {/* Additional Options */}
            <View className="flex-row w-full justify-between">
              <TouchableOpacity
                onPress={() => navigation.navigate('AssociateLogin')}
                className="bg-[#4e2d87] w-[48%] h-28 items-center justify-center rounded-md"
              >
                <Image source={require('../../asset/agreement.png')} resizeMode="contain" className="w-15 h-12" />
                <Text className="text-white text-base font-semibold mt-2">Associate Partner</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('ChannelLogin')}
                className="bg-[#4e2d87] w-[48%] h-28 items-center justify-center rounded-md"
              >
                <Image source={require('../../asset/channels.png')} resizeMode="contain" className="w-15 h-12" />
                <Text className="text-white text-base font-semibold mt-2">Channel Partner</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-4">
              <TouchableOpacity
                onPress={() => navigation.navigate('EmployeeLogin')}
                className="bg-[#4e2d87] w-full h-32 items-center justify-center rounded-md mt-2"
              >
                <Image source={require('../../asset/empl.png')} resizeMode="contain" className="w-20 h-20" />
                <Text className="text-white text-lg font-semibold mt-2">Employee Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Trano_All_Login;
