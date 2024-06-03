import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';


const MarketingHome = () => {
    const navigation = useNavigation();
    return (
<SafeAreaView className=" flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>
     <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
                <View className={`w-full h-full bg-white  rounded-lg shadow-lg p-4`}>
                    <View className={`flex justify-center items-center `}>
                        <View className={` w-11/12 h-70 bg-purple-200 m-10 rounded-lg shadow-lg p-4`}>
                          
                          
                            
                            <TouchableOpacity onPress={() => navigation.navigate('MarketingHeadExpense')}>
                                <View>
                                    <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Marketing Head Expense</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('MarketingSalesOrderForm')}>
                                <View>
                                    <Text className="bg-violet-950 p-5 rounded-lg text-white m-2 text-center">Sales Order </Text>
                                </View>
                            </TouchableOpacity>


                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>

    )
}

export default MarketingHome












































