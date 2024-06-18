import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';


const ManagersLogin = () => {
  const navigation = useNavigation();
  return (
<SafeAreaView className=" flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>
     <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
        <View className={`w-full h-full bg-white  rounded-lg shadow-lg p-4`}>
          <View className={`flex justify-center items-center `}>
            <View className={` w-11/12 h-70 bg-purple-200 m-10 rounded-lg shadow-lg p-4`}>
              <TouchableOpacity onPress={() => navigation.navigate('Mdhome')}>
                <View>
                  <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Managing Director </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('AuthenticationCreditLimit')}>
                <View>
                  <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Authentication Manager </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('FinanceDashboard')}>
                <View>
                  <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Finance Manager </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MarketingHome')}>
                <View>
                  <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Marketing Head</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('StateMangerHome')}>
                <View>
                  <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">State Manager</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MarketingExecutiveHome')}>
                <View>
                  <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Marketing Executive </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

    </SafeAreaView>

  )
}

export default ManagersLogin
