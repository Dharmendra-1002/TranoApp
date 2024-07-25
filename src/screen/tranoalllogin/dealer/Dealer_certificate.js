import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Card, IconButton } from 'react-native-paper';

const Dealer_certificate = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 items-center" style={{ backgroundColor: '#4e2d87' }}>
      <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
        <View className={`w-full h-full bg-white rounded-lg shadow-lg p-4`}>
          <View className={`flex justify-center items-center`}>
            <View className={`w-11/12 bg-gray-300 rounded-lg shadow-lg mt-6 mb-4`}>
            <TouchableOpacity onPress={() => navigation.navigate('WalletLogin')}>
            <Card.Title
                title="Wallet "
                subtitle="Login"
                left={(props) => <Avatar.Icon {...props} icon="wallet" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
            </TouchableOpacity>
              
            </View>
            <View className={`w-11/12 bg-gray-300 rounded-lg shadow-lg mb-4`}>
            <TouchableOpacity onPress={() => navigation.navigate('Dowanloadcertificate')}>
            <Card.Title
                title="Dowanload"
                subtitle="Certificate"
                left={(props) => <Avatar.Icon {...props} icon="cloud-download" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
            </TouchableOpacity>
             
            </View>

            <View className={`w-11/12 bg-gray-300 rounded-lg shadow-lg mb-4`}>
            <TouchableOpacity onPress={() => navigation.navigate('Self_ValidityLogin')}>
            <Card.Title
                title="Give Self"
                subtitle="Validity"
                left={(props) => <Avatar.Icon {...props} icon="monitor-cellphone" />}
                right={(props) => <IconButton {...props} icon="dots-vertical" onPress={() => {}} />}
              />
            </TouchableOpacity>
             
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Dealer_certificate;
