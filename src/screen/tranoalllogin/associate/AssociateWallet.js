import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const AssociateWallet = () => {
  const navigation = useNavigation();
  const [showCreditLimit, setShowCreditLimit] = useState(true);
  const [showDebit, setShowDebit] = useState(true);
  const [showBalance, setShowBalance] = useState(true);

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#4e2d87' }}>
      <View className={`flex-1 justify-center items-center`}>
        <View className={`w-11/12 h-5/6 bg-white rounded-lg shadow-lg p-4`}>
          <View className={`flex justify-center items-center`}>
            <View className={`w-11/12 h-52 bg-violet-950 m-10 rounded-lg shadow-lg p-4`}>
              <View>
                <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>
                  My Wallet
                </Text>
              </View>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', marginTop: 24, marginLeft: '20%' }}
              >
                <Text style={{ fontSize: 15, color: '#fff' }}>Credit</Text>
                <Text style={{ fontSize: 15, color: '#fff', marginLeft: 10 }}>
                  {showCreditLimit ? '     Rs.  1,00,000' : '******'}
                </Text>
                <TouchableOpacity onPress={() => setShowCreditLimit(!showCreditLimit)} style={{ marginLeft: 10 }}>
                  <Icon
                    name={showCreditLimit ? "eye" : "eye-off"}
                    size={20}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '20%' }}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Debit</Text>
                <Text style={{ fontSize: 15, color: '#fff', marginLeft: 10 }}>
                  {showDebit ? '       Rs.  1,00,000' : '******'}
                </Text>
                <TouchableOpacity onPress={() => setShowDebit(!showDebit)} style={{ marginLeft: 10 }}>
                  <Icon name={showDebit ? "eye" : "eye-off"} size={20} color="#fff" />
                </TouchableOpacity>
              </View>


              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '20%' }}>
                <Text style={{ fontSize: 15, color: '#fff' }}>Balanc</Text>
                <Text style={{ fontSize: 15, color: '#fff', marginLeft: 10 }}>
                  {showBalance ? '    Rs.  1,00,000' : '******'}
                </Text>
                <TouchableOpacity onPress={() => setShowBalance(!showBalance)} style={{ marginLeft: 10 }}>
                  <Icon name={showBalance ? "eye" : "eye-off"} size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View className='flex-row justify-evenly'>
            <TouchableOpacity onPress={() => navigation.navigate('AssociateStatement')}>
              <View className='w-[140] py-5 bg-violet-950 items-center rounded-lg'>
                <Text className='text-white text-lg m-1 text-center'>STATEMENT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AssociateWallet;