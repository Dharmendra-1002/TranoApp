import { View, Text, SafeAreaView, TouchableOpacity, Image, Linking } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const CustomerDowanload = () => {

  const navigation = useNavigation();


  const openUrl = () => {
    Linking.openURL('https://play.google.com/store/apps/details?id=com.tranogo&pli=1');
  };

  return (
    <SafeAreaView className="flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
      <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 60 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Tranocertificate')} className=' bg-[#4e2d87] w-[43%] h-28 items-center justify-center py-3 rounded-md'>
            <Icon name="file-download" size={50} color="white" />
            <Text className=" text-sm text-white text-center">DOWNLOAD   CERTIFICATE</Text>
            <View>


            </View>



          </TouchableOpacity>

          <TouchableOpacity onPress={openUrl} className=' bg-[#4e2d87] w-[43%] h-28 items-center justify-center py-3 rounded-md'>
            <View >
              {/* <Image
                                        source={require("../../../asset/Trano.png")}
                                        resizeMode="contain"
                                        style={{width:100 , height:70, marginTop:5, marginLeft:5}}
                                    /> */}


              <Image
                source={require("../../../asset/ic_launcher.png")}
                resizeMode="contain"
                style={{ width: 100, height: 80, marginTop: 5, marginLeft: 5 }}
              />
              <Text className="text-lg text-white text-center">Login Here </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default CustomerDowanload;
