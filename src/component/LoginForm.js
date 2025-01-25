import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-paper';

const LoginForm = ({ logo, apiUrl, apiKey, onSuccessNavigate, title }) => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const optionalConfigObject = {
    title: 'Authentication Required',
    imageColor: '#e00606',
    imageErrorColor: '#ff0000',
    sensorDescription: 'Touch sensor',
    sensorErrorDescription: 'Failed',
    cancelText: 'Cancel',
    fallbackLabel: 'Show Passcode',
    unifiedErrors: false,
    passcodeFallback: false,
  };


  const handleLogin = async () => {
    try {
      const response = await axios.post(
        apiUrl,
        { userName: userId, password: password },
        {
          headers: {
            'Content-Type': 'application/json',
            MobileAPISecKey: apiKey,
          },
        }
      );

      const data = response.data;
      console.log('====================================');
      console.log('data=================', data);
      console.log('====================================');
      if (data.code === '200') {
        await AsyncStorage.setItem('userToken', data.token);
        navigation.navigate(onSuccessNavigate);
      } else {
        Alert.alert('Login Failed', data.message || 'Unexpected error occurred');
      }
    } catch (error) {
      Alert.alert('Login Error', error.message || 'Network error occurred');
    }
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#4e2d87' }}>
      <View className="flex-1">
        <View className="items-center py-5">
          <Image source={logo} style={{ width: 350, height: 80, marginBottom: 1 }} resizeMode="cover" />
        </View>
        <View>
          <Text className="text-white text-lg font-medium p-2 ml-5">{title}</Text>
        </View>
        <View className="px-5">
          <View className="w-[100%] h-[82%] bg-white rounded-lg shadow-lg px-5 py-5">
            <View className="space-y-3 mt-9">
              <TextInput
                mode="outlined"
                label="UserName"
                value={userId}
                onChangeText={setUserId}
                style={{ marginBottom: 27 }}
              />


              <TextInput
                mode="outlined"
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                style={{ marginBottom: 80 }}
                right={
                  <TextInput.Icon
                    icon={showPassword ? 'eye-off' : 'eye'}
                    onPress={toggleShowPassword}
                  />
                }

              />
              <TouchableOpacity onPress={handleLogin} className="bg-[#4e2d87] mt-20 rounded-lg py-2.5 w-[100%] ">
                <Text className="text-center text-white text-lg font-medium">Login</Text>
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginForm;


