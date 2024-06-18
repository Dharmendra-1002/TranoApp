import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';

const AuthenticationCreditLimit = () => {
    const navigation = useNavigation();
    return (


        <SafeAreaView className=" flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
            <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
                <View className={`w-full h-full bg-white  rounded-lg shadow-lg p-4`}>
                    <View className={`flex justify-center items-center `}>

                    <View className="bg-gray-200 h-28 w-80 mt-20 rounded-xl ">
                        <View className="bg-violet-950 h-16 w-60 mt-6  rounded-xl " style={{ marginLeft: 40 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('AuthenticationAssignCreditLimit')}>
                                <View className="justify-center items-center">
                                    <Text className="text-white mt-4 text-lg font-bold">Set credit limit</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default AuthenticationCreditLimit