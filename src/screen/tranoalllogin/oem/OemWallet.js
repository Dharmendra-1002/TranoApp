import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const  OemWallet = () => {
  const navigation = useNavigation();
  const [isCreditLimitVisible, setCreditLimitVisible] = useState(true);

  const toggleCreditLimitVisibility = () => {
    setCreditLimitVisible(!isCreditLimitVisible);
  };

  return (

    <SafeAreaView style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }}>
      <View style={{ backgroundColor: 'white', width: '92%', height: '95%', borderRadius: 8, marginTop: 5 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: '90%', height: 200, margin: 40, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, padding: 16, backgroundColor: '#4e2d87' }}>
            <View>
              <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>My Wallet</Text>
              <TouchableOpacity onPress={toggleCreditLimitVisibility} style={{ marginLeft: '80%', marginTop: -20 }}>
                <Icon name={isCreditLimitVisible ? 'eye' : 'eye-off'} size={25} color="#fff" />
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '6%', marginLeft: '20%' }}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Credit limit</Text>

              </View>
              {isCreditLimitVisible && <Text style={{ fontSize: 15, color: '#fff', marginLeft: '70%', marginTop: -20 }}>Rs.1,00,000</Text>}
              <Text style={{ fontSize: 15, color: '#fff', marginLeft: '20%' }}>Balance Wallet </Text>
              {isCreditLimitVisible && <Text style={{ fontSize: 15, color: '#fff', marginLeft: '70%', marginTop: -20 }}>Rs.80,000</Text>}
              <TouchableOpacity>
                <View className="justify-end items-end">
                  <Text className="bg-lime-600 text-white p-2 mt-9 rounded-md font-normal">Recharge Wallet</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>



        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop:60}}>
          <TouchableOpacity onPress={() => navigation.navigate('OemStatement')}>
            <View style={{ width: 140, paddingVertical: 20, alignItems: 'center', borderRadius: 8, backgroundColor: '#4e2d87' }}>
              <Text style={{ color: 'white', fontSize: 18, margin: 4, textAlign: 'center' }}>STATEMENT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('OemRechargeList')}>
            <View style={{ width: 140, paddingVertical: 20, alignItems: 'center', borderRadius: 8, backgroundColor: '#4e2d87' }}>
              <Text style={{ color: 'white', fontSize: 18, margin: 4 }}>RECHARGES</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 16 }}>
         <TouchableOpacity onPress={() => navigation.navigate('OemSpendList')}>
            <View style={{ width: 140, paddingVertical: 20, alignItems: 'center', borderRadius: 8, backgroundColor: '#4e2d87' }}>
               <Text style={{ color: 'white', fontSize: 18, margin: 4 }}>SPENDS</Text>
         </View>
       </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('OemHistory')}>
           <View style={{ width: 140, paddingVertical: 20, alignItems: 'center', borderRadius: 8, backgroundColor: '#4e2d87' }}>
             <Text style={{ color: 'white', fontSize: 18, margin: 4 }}>HISTORY</Text>
            </View>
          </TouchableOpacity>
       </View>
      </View>


    </SafeAreaView>
  );
}

export default  OemWallet;


