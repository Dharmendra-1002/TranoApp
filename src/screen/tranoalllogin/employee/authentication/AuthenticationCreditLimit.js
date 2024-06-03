import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const AuthenticationCreditLimit = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className={`flex-1 justify-start items-center bg-white `} >
         <View className="bg-gray-200 h-28 w-80 mt-20 rounded-xl ">
                <View className="bg-violet-950 h-16 w-60 mt-6  rounded-xl " style={{ marginLeft: 40 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('AuthenticationAssignCreditLimit')}>
                    <View className="justify-center items-center">
                    <Text className="text-white mt-4 text-lg font-bold">Set credit limit</Text>
                    </View>
                    </TouchableOpacity>
                   </View>
                  </View>
        </SafeAreaView>

    )
}

export default AuthenticationCreditLimit