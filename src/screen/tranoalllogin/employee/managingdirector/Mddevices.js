import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const Mddevices = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1" style={{backgroundColor:'#4e2d87'}}>
      <View className="flex-1 m-8 items-center">
       
          <View className="flex justify-center items-center">
          <View className="bg-white rounded-lg mt-26 p-5" style={{width:'100%' , height:'100%'}}>
             
              <TouchableOpacity onPress={()=>navigation.navigate('HomeDeviceDashboardForm')}>
              <View className="w-74 h-12 mt-1 ml-1 rounded-xl bg-green-700">
                  <Text className="text-white ml-6 mt-3 font-bold">For STATEWISE-LIVE STATUS - Click here</Text>
              </View>
              </TouchableOpacity>
              <View className="flex flex-row mt-6">
                <TouchableOpacity>
                <View className="w-36 h-24 mx-1.5 bg-white rounded-xl" style={{borderWidth:2, borderColor:'#4e2d87'}}>
                  <Text className="text-black mt-4 ml-6 font-bold" style={{fontSize:16}}>Total Devices{"\n"}</Text>
                  <View className="bg-slate-300" style={{borderWidth:2, borderColor:'#4e2d87', width:'103%', height:'50%',marginLeft:-2,marginTop:-10, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                    <Text className="text-black ml-10 text-lg font-bold">10,000</Text>
                  </View>
                </View>
                </TouchableOpacity>

                <TouchableOpacity>
                <View className="w-36 h-24 mx-1.5 bg-white rounded-xl" style={{borderWidth:2, borderColor:'#4e2d87'}}>
                  <Text className="text-black mt-4 ml-2 font-bold" style={{fontSize:16}}>Installed Devices{"\n"}</Text>
                  <View className="bg-slate-300" style={{borderWidth:2, borderColor:'#4e2d87', width:'103%', height:'50%',marginLeft:-2,marginTop:-10, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                    <Text className="text-black ml-10 text-lg font-bold">8,000</Text>
                  </View>
                </View>
                </TouchableOpacity>
           </View>
              <Text className="font-bold text-xl mt-1 self-center text-violet-800 underline">Live Status</Text>
              <View className="flex flex-row mt-1">
              <TouchableOpacity>
                <View className="w-36 h-24 mx-1.5 bg-white rounded-xl" style={{borderWidth:2, borderColor:'#4e2d87'}}>
                  <Text className="mt-4 ml-4 font-bold text-green-600" style={{fontSize:16}}>Device ONLINE{"\n"}</Text>
                  <View className="bg-slate-300" style={{borderWidth:2, borderColor:'#4e2d87', width:'103%', height:'50%',marginLeft:-2,marginTop:-10, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                    <Text className="text-black ml-10 text-lg font-bold">7,000</Text>
                  </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View className="w-36 h-24 mx-1.5 bg-white rounded-xl" style={{borderWidth:2, borderColor:'#4e2d87'}}>
                  <Text className="mt-4 ml-2 font-bold text-slate-500" style={{fontSize:16}}>Device OFFLINE{"\n"}</Text>
                  <View className="bg-slate-300" style={{borderWidth:2, borderColor:'#4e2d87', width:'103%', height:'50%',marginLeft:-2,marginTop:-10, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                    <Text className="text-black ml-10 text-lg font-bold">1,000</Text>
                  </View>
                </View>
                </TouchableOpacity>
              
              </View>
              <View className="flex flex-row mt-5">
              <TouchableOpacity>
                <View className="w-36 h-24 mx-1.5 bg-white rounded-xl" style={{borderWidth:2, borderColor:'#4e2d87'}}>
                  <Text className="mt-2 ml-4 font-bold text-slate-500" style={{fontSize:16}}>     OFFLINE {"\n"} since 24 Hours</Text>
                  <View className="bg-slate-300" style={{borderWidth:2, borderColor:'#4e2d87', width:'103%', height:'50%',marginLeft:-2,marginTop:0, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                    <Text className="text-black ml-12 text-lg font-bold">700</Text>
                  </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View className="w-36 h-24 mx-1.5 bg-white rounded-xl" style={{borderWidth:2, borderColor:'#4e2d87'}}>
                  <Text className="mt-2 ml-2 font-bold text-slate-500" style={{fontSize:16, marginTop:6}}>     OFFLINE {"\n"} since 48 Hours</Text>
                  <View className="bg-slate-300" style={{borderWidth:2, borderColor:'#4e2d87', width:'103%', height:'50%',marginLeft:-2, marginTop:0, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                    <Text className="text-black ml-12 text-lg font-bold">600</Text>
                  </View>
                </View>
                </TouchableOpacity>
              </View>
              <View className="flex flex-row mt-5 ">
              <TouchableOpacity>
                <View className="w-36 h-24 mx-1.5 bg-white rounded-xl" style={{borderWidth:2, borderColor:'#4e2d87'}}>
                  <Text className="mt-2 ml-4 font-bold text-slate-500" style={{fontSize:16}}>     OFFLINE {"\n"} since 72 Hours</Text>
                  <View className="bg-slate-300" style={{borderWidth:2, borderColor:'#4e2d87', width:'103%', height:'50%',marginLeft:-2,marginTop:0, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                    <Text className="text-black ml-12 text-lg font-bold">550</Text>
                  </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity>
                <View className="w-36 h-24 mx-1.5 bg-white rounded-xl" style={{borderWidth:2, borderColor:'#4e2d87'}}>
                  <Text className="mt-2 ml-4 font-bold text-red-600" style={{fontSize:16}}>    OFFLINE {"\n"} since 7 Days</Text>
                  <View className="bg-slate-300" style={{borderWidth:2, borderColor:'#4e2d87', width:'103%', height:'50%',marginLeft:-2,marginTop:0, borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                    <Text className="ml-12 text-lg font-bold text-red-600">400</Text>
                  </View>
                </View>
                </TouchableOpacity>
             </View>
            
             </View>
          </View>
        </View>
    
    </SafeAreaView>
  );
};

export default Mddevices;