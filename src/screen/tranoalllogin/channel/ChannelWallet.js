import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ChannelWallet = () => {
  const [isHidden, setIsHidden] = useState(true);
  const navigation = useNavigation();

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <SafeAreaView className=" flex-1" style={{ backgroundColor: '#4e2d87' }}>
      <View className="flex-1 justify-center items-center">
        <View className="w-11/12 h-5/6 bg-white rounded-lg shadow-lg p-4">
          <View className="flex justify-center items-center">
            <View className="w-11/12 h-52 bg-violet-950 m-10 rounded-lg shadow-lg p-4">
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>My Wallet</Text>
                <TouchableOpacity onPress={toggleVisibility} style={{ marginLeft: '5%', marginTop: 1}}>
                  <Icon name={isHidden ? "eye" : "eye-off"} size={24} color="#fff" />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ fontSize: 15, color: '#fff', marginTop: '6%', marginLeft: '20%' }}>
                  Credit {isHidden ? '' : '       Rs. 1,00,000 '}
                </Text>
                <Text style={{ fontSize: 15, color: '#fff', marginTop: '2%', marginLeft: '20%' }}>
                  Debit {isHidden ? '' : '         Rs. 1,00,000'}
                </Text>
                <Text style={{ fontSize: 15, color: '#fff', marginLeft: '20%', marginTop: '2%' }}>
                  Balance {isHidden ? '' : '    Rs. 80,000 '}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-row justify-evenly">
            <TouchableOpacity onPress={() => navigation.navigate('ChannelStatement')}>
              <View className="w-[140] py-5 bg-violet-950 items-center rounded-lg">
                <Text className="text-white text-lg m-1 text-center">STATEMENT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChannelWallet;
