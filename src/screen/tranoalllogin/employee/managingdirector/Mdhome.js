

import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Mdhome = () => {
  const navigation = useNavigation();

  return (
    // Main container with SafeAreaView to handle device-specific safe areas
    <SafeAreaView className="flex-1 items-center bg-[#4e2d87]">
      {/* Outer View to contain the main content with white background */}
      <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
        {/* Row to hold two buttons side by side with padding */}
        <View className="flex-row justify-between py-12 px-6">
          {/* Button to navigate to EsimReport screen */}
          <TouchableOpacity
            className="w-[43%] h-[89px] items-center bg-[#4e2d87] shadow-md rounded-2xl"
            onPress={() => navigation.navigate('MdEsim')}
          >
            <Text className="text-white font-medium text-lg py-1">E-SIM</Text>
            <View className="w-full py-2 bg-[#af84f8] rounded-2xl mt-2 items-center">
              <Text className="text-white font-medium text-lg">57,476</Text>
            </View>
          </TouchableOpacity>

          {/* Button for Devices */}
          <TouchableOpacity className="w-[43%] h-[89px] items-center bg-[#4e2d87] shadow-md rounded-2xl"
            onPress={() => navigation.navigate('Mddevices')}>
            <Text className="text-white font-medium text-lg py-1">DEVICES</Text>
            <View className="w-full py-2 bg-[#af84f8] rounded-2xl mt-2 items-center">
              <Text className="text-white font-medium text-lg">57,476</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Wallet button positioned at the bottom */}
        <View className="items-center mt-8">
          <TouchableOpacity
            className="bg-[#432d87] py-2 rounded-full items-center w-[85%] mb-[450px]"
            onPress={() => navigation.navigate('MdWallet')}
          >
            <Text className="text-white font-normal text-lg">Wallet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Mdhome;
