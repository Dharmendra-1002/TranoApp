// import React, { useState } from 'react';
// import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import TouchID from 'react-native-touch-id';

// const PasswordInput = ({ value, onChangeText }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <View>
//       <Text className='text-violet-950 py-2 font-normal text-lg'>Password</Text>
//       <View style={{ position: 'relative' }}>
//         <TextInput
//           className='text-xl text-neutral-800 py-7'
//           placeholder='Password'
//           placeholderTextColor={'black'}
//           secureTextEntry={!showPassword}
//           style={{
//             padding: 20,
//             shadowColor: '#000',
//             shadowOffset: { width: 0, height: 2 },
//             shadowOpacity: 50,
//             shadowRadius: 1,
//             elevation: 28 // For Android shadow
//           }}
//           value={value}
//           onChangeText={onChangeText}
//         />
//         <TouchableOpacity onPress={toggleShowPassword} style={{ position: 'absolute', top: "35%", right: "10%" }}>
//           <Icon name={showPassword ? 'eye-slash' : 'eye'} size={30} color={'black'} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const AssociateLogin = () => {
//   const navigation = useNavigation();
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');

//   const optionalConfigObject = {
//     title: "Authentication Required", // Android
//     imageColor: "#e00606", // Android
//     imageErrorColor: "#ff0000", // Android
//     sensorDescription: "Touch sensor", // Android
//     sensorErrorDescription: "Failed", // Android
//     cancelText: "Cancel", // Android
//     fallbackLabel: "Show Passcode", // iOS (if available)
//     unifiedErrors: false, // use unified error messages (default false)
//     passcodeFallback: false, // iOS
//   };

//   const handleFingerprintAuthentication = () => {
//     TouchID.authenticate('Authenticate with fingerprint', optionalConfigObject)
//       .then(success => {
//         Alert.alert('Authenticated Successfully');
//         navigation.navigate('OemWallet');
//       })
//       .catch(error => {
//         Alert.alert('Authentication Failed');
//       });
//   };

//   return (
//     <SafeAreaView className="flex-1" style={{ backgroundColor: '#4e2d87' }}>
//       <View className="flex-1">
//         <View className='items-center py-5'>
//           <Image source={require('../../../asset/ctpllogo.png')}
//             style={{ width: 350, height: 80, marginBottom: 1 }} resizeMode='cover' />
//         </View>

//         <View>
//           <Text className='text-white text-lg font-medium p-2 ml-5'>Sign in to Continue</Text>
//         </View>

//         <View className='px-5'>
//           <View className="w-[100%] h-[82%] bg-white rounded-lg shadow-lg px-5 py-5">
//             <View className='space-y-3'>
//               <View>
//                 <Text className='text-violet-950 py-2 font-normal text-lg'>User ID / Name</Text>
//                 <TextInput
//                   className='text-xl text-neutral-800 py-7'
//                   placeholder='User ID / Name'
//                   placeholderTextColor={'black'}
//                   style={{
//                     padding: 20,
//                     shadowColor: '#000',
//                     shadowOffset: { width: 0, height: 2 },
//                     shadowOpacity: 50,
//                     shadowRadius: 1,
//                     elevation: 30 // For Android shadow
//                   }}
//                   value={userId}
//                   onChangeText={setUserId}
//                 />
//               </View>

//               <PasswordInput value={password} onChangeText={setPassword} />

//               <TouchableOpacity>
//                 <View>
//                   <Text className="text-center text-violet-950 font-medium text-lg pt-10">Forget Password ?</Text>
//                 </View>
//               </TouchableOpacity>

//               <View className='items-center justify-center'>
//                 <TouchableOpacity onPress={() => navigation.navigate('AssociateWallet')} className='bg-amber-500 rounded-lg py-2.5 w-[100%]'>
//                   <Text className="text-center text-white text-lg font-medium">Login</Text>
//                 </TouchableOpacity>
//               </View>

//               <View className='items-center justify-center'>
//                 <TouchableOpacity onPress={handleFingerprintAuthentication} className='rounded-lg py-2.5'>
//                   <MaterialCommunityIcons name="fingerprint" size={50} color={'black'} />
//                 </TouchableOpacity>
//               </View>

             
//             </View>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// export default AssociateLogin;



import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-paper';

const PasswordInput = ({ value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      <Text className="text-violet-950 py-2 font-normal text-lg"></Text>
      <View style={{ position: 'relative' }}>
        <TextInput
          mode="outlined"
          label="Password"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={!showPassword}
          right={
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={toggleShowPassword}
            />
          }
        />
      </View>
    </View>
  );
};

const AssociateLogin = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if available)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS
  };

 
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://testing-only-erp-api.containe.in/api/Account/Login',
        {
          userName: userId,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            MobileAPISecKey: 'X7vNc2Pg4L0kRy1FJ8sBhMzWaEt5DpQx',
          },
        },
      );

      const data = response.data;
      console.log('data=================', data);

      if (data.code === '200') {
        console.log('=================', data.token);
        await AsyncStorage.setItem('userToken', data.token);
        // Remove or comment out the success alert
        // Alert.alert('Login Successful');
        navigation.navigate('AssociateWallet');
      } else {
        Alert.alert('Login Failed', data.message);
      }
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  return (
    <SafeAreaView className="flex-1" style={{ backgroundColor: '#4e2d87' }}>
      <View className="flex-1">
        <View className="items-center py-5">
          <Image
            source={require('../../../asset/ctpllogo.png')}
            style={{ width: 350, height: 80, marginBottom: 1 }}
            resizeMode="cover"
          />
        </View>

        <View>
          <Text className="text-white text-lg font-medium p-2 ml-5">
            Sign in to Continue
          </Text>
        </View>

        <View className="px-5">
          <View className="w-[100%] h-[82%] bg-white rounded-lg shadow-lg px-5 py-5">
            <View className="space-y-3">
              <View>
                <Text className="text-violet-950 py-2 font-normal text-lg"></Text>
                <TextInput
                  mode="outlined"
                  label="UserName"
                  value={userId}
                  onChangeText={setUserId}
                />
              </View>

              <PasswordInput value={password} onChangeText={setPassword} />
              <View className="items-center justify-center">
                <TouchableOpacity
                  onPress={handleLogin}
                  className="bg-[#4e2d87] rounded-lg py-2.5 w-[100%] mt-20">
                  <Text className="text-center text-white text-lg font-medium">
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AssociateLogin;
