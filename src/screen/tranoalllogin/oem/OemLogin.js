import React, { useState } from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const PasswordInput = ({ value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
 <View>
      <Text className='text-violet-950 py-2 font-normal text-lg'>Password</Text>
      <View style={{ position: 'relative' }}>

        <TextInput
          className='text-xl text-neutral-800 py-7'
          placeholder='Password'
          placeholderTextColor={'black'}
          secureTextEntry={!showPassword}
          style={{
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 50,
            shadowRadius: 1,
            elevation: 28 // For Android shadow
          }}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity onPress={toggleShowPassword} style={{ position: 'absolute', top: "35%", right: "10%" }}>
          <Icon name={showPassword ? 'eye-slash' : 'eye'} size={30} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OemLogin= () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className=" flex-1" style={{backgroundColor: '#4e2d87'}}>
    
      <View className={`flex-1 `}>
        <View className='items-center py-5'>
          <Image source={require('../../../asset/ctpllogo.png')}
            style={{ width: 350, height: 80, marginBottom: 1 }} resizeMode='cover' />
         
        </View>

        <View>
        <Text className='text-white text-lg font-medium p-2 ml-5 '>Sign in to Continue</Text>
        </View>

        <View className='px-5'>
          <View className={`w-[100%] h-[80%] bg-white rounded-lg shadow-lg px-5 py-5`}>
            <View className='space-y-3'>
              <View>
                <Text className='text-violet-950 py-2 font-normal text-lg'>User ID / Name</Text>
                <TextInput
                  className='text-xl text-neutral-800 py-7'
                  placeholder='User ID / Name'
                  placeholderTextColor={'black'}
                  style={{
                    padding: 20,
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 50,
                    shadowRadius: 1,
                    elevation: 30 // For Android shadow
                  }}
                  value={userId}
                  onChangeText={setUserId}
                />
              </View>

              <PasswordInput value={password} onChangeText={setPassword} />
              <TouchableOpacity>

                <View>
                  <Text className={"text-center text-violet-950 font-medium text-lg pt-10"}>Forget Password ?</Text>
                </View>
              </TouchableOpacity>


              <View className='items-center justify-center'>
                <TouchableOpacity onPress={() => navigation.navigate('OemWallet')} className='bg-amber-500  rounded-lg py-2.5 w-[100%]'>
                  <Text className=" text-center text-white text-lg font-medium"> Login</Text>
                </TouchableOpacity>
              </View>



              <TouchableOpacity>
                <View>
                  <Text className="text-center text-violet-950 font-medium text-lg">
                    Not a member ? Join Now
                  </Text>
                </View>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default OemLogin;
