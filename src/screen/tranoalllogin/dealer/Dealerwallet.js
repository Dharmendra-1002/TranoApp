import React, { useState } from 'react';
import { View, Text, TouchableOpacity ,Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';


const Dealerwallet = () => {
  const navigation = useNavigation();

  const [isCreditLimitVisible, setCreditLimitVisible] = useState(false);


  const toggleCreditLimitVisibility = () => {
    setCreditLimitVisible(!isCreditLimitVisible);
  };



  return (

    <SafeAreaView >
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#4e2d87' }} >

   
    <View style={{ backgroundColor: 'white', width: '92%', height: '98%', borderRadius: 8, marginTop: 5 }}>
    <Text className="text-violet-950 text-left text-lg ml-3">Hi RajeMotors !</Text>
    <Text className="text-violet-950 text-left text-xs ml-3">Distributor  </Text>
    <Text className="text-violet-950 text-left text-xs ml-3">ID - 1201236</Text>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '90%', height: 200, margin: 40, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, padding: 16, backgroundColor: '#4e2d87' }}>
          <View>
        
          <Image className="w-9 h-9 mt-1"
              source={require("../../../asset/wallet.png")}
              // style={{ width: '100%', height: '5%', alignSelf: 'left' }}
            ></Image>
            <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center', marginTop:-40 }}>My Wallet</Text>
            <TouchableOpacity onPress={toggleCreditLimitVisibility} style={{ marginLeft: '80%', marginTop: -15 }}>
              <Icon name={isCreditLimitVisible ? 'eye-off' : 'eye'} size={25} color="#fff" />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '6%', marginLeft: '20%' }}>
              <Text style={{ fontSize: 15, color: '#fff' }}>Credit limit</Text>

            </View>
            {isCreditLimitVisible && <Text style={{ fontSize: 15, color: '#fff', marginLeft: '70%', marginTop: -20 }}>Rs.1,00,000</Text>}
            <Text style={{ fontSize: 15, color: '#fff', marginLeft: '20%' }}>Balance Wallet </Text>
            {isCreditLimitVisible && <Text style={{ fontSize: 15, color: '#fff', marginLeft: '70%', marginTop: -20 }}>Rs.80,000</Text>}
            <TouchableOpacity onPress={() => navigation.navigate('DistributorRechaegeWallet')}>
              <View className="justify-end items-end">
                <Text className="bg-lime-600 text-white p-2 mt-7 rounded-md font-normal">Recharge Wallet</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>


        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop:2}}>
          <TouchableOpacity onPress={() => navigation.navigate('DistributorStatement')}>
            <View style={{ width: 150, paddingVertical: 20, alignItems: 'center', borderRadius: 8, backgroundColor: '#4e2d87' }}>
             
          <Image className="w-12 h-12 mt-1"
              source={require("../../../asset/evaluation.png")}
              // style={{ width: '100%', height: '5%', alignSelf: 'left' }}
            ></Image>
              <Text style={{ color: 'white', fontSize: 18, margin: 4, textAlign: 'center' }}>STATEMENT</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('DistributorRecharges')}>
            <View style={{ width: 150, paddingVertical: 20, alignItems: 'center', borderRadius: 8, backgroundColor: '#4e2d87' }}>
            <Image className="w-12 h-12 mt-1"
              source={require("../../../asset/recycling.png")}
              // style={{ width: '100%', height: '5%', alignSelf: 'left' }}
            ></Image>
              <Text style={{ color: 'white', fontSize: 18, margin: 4 }}>RECHARGES</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 16 }}>
         <TouchableOpacity onPress={() => navigation.navigate('DistributorSpends')}>
            <View style={{ width: 150, paddingVertical: 20, alignItems: 'center', borderRadius: 8, backgroundColor: '#4e2d87' }}>
            <Image className="w-12 h-12 mt-1"
              source={require("../../../asset/payroll.png")}
              // style={{ width: '100%', height: '5%', alignSelf: 'left' }}
            ></Image>
               <Text style={{ color: 'white', fontSize: 18, margin: 4 }}>SPENDS</Text>
         </View>
       </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.navigate('DistributorHistory')}>
           <View style={{ width: 150, paddingVertical: 20, alignItems: 'center', borderRadius: 8, backgroundColor: '#4e2d87' }}>
           <Image className="w-12 h-12 mt-1"
              source={require("../../../asset/history.png")}
              // style={{ width: '100%', height: '5%', alignSelf: 'left' }}
            ></Image>
             <Text style={{ color: 'white', fontSize: 18, margin: 4 }}>HISTORY</Text>
            </View>
          </TouchableOpacity>
       </View>




       <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '90%', height: 200, margin: 40, borderRadius: 8, shadowColor: '#000', shadowOpacity: 0.1, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, padding: 16, backgroundColor: '#4e2d87' }}>
          <View>
          <Image className="w-10 h-10 mt-1"
              source={require("../../../asset/commission.png")}
              // style={{ width: '100%', height: '5%', alignSelf: 'left' }}
            ></Image>
            <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' ,marginTop:-40  }}>My Royality Account</Text>
            <TouchableOpacity onPress={toggleCreditLimitVisibility} style={{ marginLeft: '80%', marginTop: -15 }}>
              <Icon name={isCreditLimitVisible ? 'eye-off' : 'eye'} size={25} color="#fff" />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '6%', marginLeft: '20%' }}>
              <Text style={{ fontSize: 15, color: '#fff' }}>Credit limit</Text>

            </View>
            {isCreditLimitVisible && <Text style={{ fontSize: 15, color: '#fff', marginLeft: '70%', marginTop: -20 }}>Rs.1,00,000</Text>}
            <Text style={{ fontSize: 15, color: '#fff', marginLeft: '20%' }}>Debit Wallet </Text>
            {isCreditLimitVisible && <Text style={{ fontSize: 15, color: '#fff', marginLeft: '70%', marginTop: -20 }}>Rs.80,000</Text>}
           
            <Text style={{ fontSize: 15, color: '#fff', marginLeft: '20%' }}>Balance Wallet </Text>
            {isCreditLimitVisible && <Text style={{ fontSize: 15, color: '#fff', marginLeft: '70%', marginTop: -20 }}>Rs.1,00,000</Text>}
           
              
            <TouchableOpacity onPress={() => navigation.navigate('DistributorRoyalityAccount')}>
              <View className="justify-end items-end" >
                <Text className="bg-lime-600 text-white p-2 mt-2 rounded-md font-normal" >View Account</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
      </View>
</ScrollView>
    </SafeAreaView>
  );
}

export default Dealerwallet;

