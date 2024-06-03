import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeWallet = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className=" flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
      <View className=" bg-gray-100 w-[92%] h-[95%] rounded-md mt-5">
        <View className="items-center">
          <View className="bg-white  w-[80%] h-[47%] rounded-md mt-32" style={{elevation:100}}>
            {/* BUtton  1*/}
            <TouchableOpacity onPress={() => navigation.navigate('HomeCreditLimit')}>
              <View className=" flex:1 items-center">
                <Text className=" text-white p-4  w-60  font-bold pt-5 mt-10 rounded-md text-center"style={{ backgroundColor: '#4e2d87' }} >
                Set Credit Limit
                </Text>
              </View>
            </TouchableOpacity>

            {/* Button 2 */}
            <TouchableOpacity onPress={() => navigation.navigate('HomeAddAmounttable')}>
              <View className=" flex:1 items-center">
                <Text className=" text-white p-4  w-60  font-bold pt-5 mt-10 rounded-md text-center"style={{ backgroundColor: '#4e2d87' }}>
                Add Amount
                </Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeWallet