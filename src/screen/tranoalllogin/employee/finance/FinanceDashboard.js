import { View, Text, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const FinanceDashboard = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className=" flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
    <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
        <View className={`w-full h-full bg-white  rounded-lg shadow-lg p-4`}>
        <View className="flex-row justify-between w-full">


          <TouchableOpacity
            className="w-[45%] h-44 bg-[#4e2d87] rounded-lg items-center justify-center shadow-lg"
            onPress={() => navigation.navigate('FinanceAddAmountTable')}
          >
            <Image
              source={require("../../../../asset/wallet.png")}
              resizeMode="contain"
              className="mt-[-10] w-30 h-20"
            />
            <Text className="mt-2 text-white text-lg font-bold">Add Amount</Text>
            <View className="mt-5 w-4/5 bg-white rounded-sm items-center py-1">
              <Text className="text-violet-950 font-bold text-base rounded-sm">View Report</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-[45%] h-44 bg-[#4e2d87] rounded-lg items-center justify-center shadow-lg"
            onPress={() => navigation.navigate('FinanceDebitRoyalityAccount')}
          >
            <Image
              source={require("../../../../asset/commission.png")}
              resizeMode="contain"
              className="w-12 h-12"
            />
            <Text className="text-white text-lg font-bold mt-4">Debit Royality Account</Text>
            <View className="mt-2 w-4/5 bg-white rounded-sm items-center py-1">
              <Text className="text-violet-950 font-bold text-base rounded-sm">View Report</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      </View>
  </SafeAreaView>
  );
};

export default FinanceDashboard;
