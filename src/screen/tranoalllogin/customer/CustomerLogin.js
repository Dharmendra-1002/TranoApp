// import React, { useState } from 'react';
// import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import TouchID from 'react-native-touch-id';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { TextInput } from 'react-native-paper';

// const PasswordInput = ({ value, onChangeText }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <View>
//       <Text className="text-violet-950 py-2 font-normal text-lg"></Text>
//       <View style={{ position: 'relative' }}>
//         <TextInput
//           mode="outlined"
//           label="Password"
//           value={value}
//           onChangeText={onChangeText}
//           secureTextEntry={!showPassword}
//           right={
//             <TextInput.Icon
//               icon={showPassword ? 'eye-off' : 'eye'}
//               onPress={toggleShowPassword}
//             />
//           }
//         />
//       </View>
//     </View>
//   );
// };

// const CustomerLogin = () => {
//   const navigation = useNavigation();
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');

//   const optionalConfigObject = {
//     title: 'Authentication Required', // Android
//     imageColor: '#e00606', // Android
//     imageErrorColor: '#ff0000', // Android
//     sensorDescription: 'Touch sensor', // Android
//     sensorErrorDescription: 'Failed', // Android
//     cancelText: 'Cancel', // Android
//     fallbackLabel: 'Show Passcode', // iOS (if available)
//     unifiedErrors: false, // use unified error messages (default false)
//     passcodeFallback: false, // iOS
//   };

//   const handleFingerprintAuthentication = () => {
//     TouchID.authenticate('Authenticate with fingerprint', optionalConfigObject)
//       .then(success => {
//         // Optional: Remove this alert if you don't want any success message
//         Alert.alert('Authenticated Successfully');
//         navigation.navigate('OemWallet');
//       })
//       .catch(error => {
//         Alert.alert('Authentication Failed');
//       });
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(
//         'http://testing-only-erp-api.containe.in/api/Account/Login',
//         {
//           userName: userId,
//           password: password,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             MobileAPISecKey: 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
//           },
//         },
//       );

//       const data = response.data;
//       console.log('data=================', data);

//       if (data.code === '200') {
//         console.log('=================', data.token);
//         await AsyncStorage.setItem('userToken', data.token);
//         // Remove or comment out the success alert
//         // Alert.alert('Login Successful');
//         navigation.navigate('Tranocertificate');
//       } else {
//         Alert.alert('Login Failed', data.message);
//       }
//     } catch (error) {
//       Alert.alert('Login Error', error.message);
//     }
//   };

//   return (
//     <SafeAreaView className="flex-1" style={{ backgroundColor: '#4e2d87' }}>
//       <View className="flex-1">
//         <View className="items-center py-5">
//           <Image
//             source={require('../../../asset/ctpllogo.png')}
//             style={{ width: 350, height: 80, marginBottom: 1 }}
//             resizeMode="cover"
//           />
//         </View>

//         <View>
//           <Text className="text-white text-lg font-medium p-2 ml-5">
//             Sign in to Continue
//           </Text>
//         </View>

//         <View className="px-5">
//           <View className="w-[100%] h-[82%] bg-white rounded-lg shadow-lg px-5 py-5">
//             <View className="space-y-3">
//               <View>
//                 <Text className="text-violet-950 py-2 font-normal text-lg"></Text>
//                 <TextInput
//                   mode="outlined"
//                   label="UserName"
//                   value={userId}
//                   onChangeText={setUserId}
//                 />
//               </View>

//               <PasswordInput value={password} onChangeText={setPassword} />
//               <View className="items-center justify-center">
//                 <TouchableOpacity
//                   onPress={handleLogin}
//                   className="bg-[#4e2d87] rounded-lg py-2.5 w-[100%] mt-20">
//                   <Text className="text-center text-white text-lg font-medium">
//                     Login
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default CustomerLogin;









// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
// } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import TouchID from 'react-native-touch-id';
// import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { TextInput } from 'react-native-paper';

// const PasswordInput = ({ value, onChangeText }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   const toggleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <View>
//       <Text style={styles.inputLabel}></Text>
//       <View style={{ position: 'relative' }}>
//         <TextInput
//           mode="outlined"
//           label="Password"
//           value={value}
//           onChangeText={onChangeText}
//           secureTextEntry={!showPassword}
//           right={
//             <TextInput.Icon
//               icon={showPassword ? 'eye-off' : 'eye'}
//               onPress={toggleShowPassword}
//             />
//           }
//         />
//       </View>
//     </View>
//   );
// };

// const CustomerLogin = () => {
//   const navigation = useNavigation();
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');

//   const optionalConfigObject = {
//     title: 'Authentication Required',
//     imageColor: '#e00606',
//     imageErrorColor: '#ff0000',
//     sensorDescription: 'Touch sensor',
//     sensorErrorDescription: 'Failed',
//     cancelText: 'Cancel',
//     fallbackLabel: 'Show Passcode',
//     unifiedErrors: false,
//     passcodeFallback: false,
//   };

//   const handleFingerprintAuthentication = () => {
//     TouchID.authenticate('Authenticate with fingerprint', optionalConfigObject)
//       .then(() => {
//         Alert.alert('Authenticated Successfully');
//         navigation.navigate('OemWallet');
//       })
//       .catch(() => {
//         Alert.alert('Authentication Failed');
//       });
//   };

//   const handleLogin = async () => {
//     try {
//       console.log('Attempting login with:', { userName: userId, password });

//       const response = await axios.post(
//         'http://testing-only-erp-api.containe.in/api/Account/Login',
//         {
//           userName: userId,
//           password,
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             MobileAPISecKey: 'K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY',
//           },
//         }
//       );

//       console.log('Login Response:', response.data);

//       const data = response.data;
//       if (data.code === '200') {
//         await AsyncStorage.setItem('userToken', data.token);
//         console.log('Token saved successfully:', data.token);

//         // Navigate to the desired screen
//         navigation.navigate('Tranocertificate');
//       } else {
//         Alert.alert('Login Failed', data.message || 'Unexpected error occurred');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       Alert.alert('Login Error', error.message || 'Network error occurred');
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../../../asset/ctpllogo.png')}
//           style={styles.logo}
//           resizeMode="cover"
//         />
//       </View>

//       <Text style={styles.signInText}>Sign in to Continue</Text>

//       <View style={styles.formContainer}>
//         <View style={styles.form}>
//           <TextInput
//             mode="outlined"
//             label="UserName"
//             value={userId}
//             onChangeText={setUserId}
//           />

//           <PasswordInput value={password} onChangeText={setPassword} />

//           <TouchableOpacity
//             onPress={handleLogin}
//             style={styles.loginButton}>
//             <Text style={styles.loginButtonText}>Login</Text>
//           </TouchableOpacity>

//           <TouchableOpacity
//             onPress={handleFingerprintAuthentication}
//             style={styles.fingerprintButton}>
//             <Text style={styles.fingerprintButtonText}>Use Fingerprint</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#4e2d87',
//   },
//   logoContainer: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },
//   logo: {
//     width: 350,
//     height: 80,
//   },
//   signInText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     padding: 10,
//     marginLeft: 20,
//   },
//   formContainer: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   form: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 20,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 5,
//   },
//   inputLabel: {
//     color: '#4e2d87',
//     paddingBottom: 5,
//     fontSize: 16,
//   },
//   loginButton: {
//     backgroundColor: '#4e2d87',
//     borderRadius: 8,
//     paddingVertical: 12,
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   fingerprintButton: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   fingerprintButtonText: {
//     color: '#4e2d87',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
// });

// export default CustomerLogin;




import React from 'react';
import LoginForm from '../../../component/LoginForm';

const CustomerLogin = () => {
  return (
    <LoginForm
      logo={require('../../../asset/ctpllogo.png')}
      apiUrl="http://testing-only-erp-api.containe.in/api/Account/Login"
      apiKey="K9qPw2Nx8V0rRy7LJ4bMhZtWaEp5FgY"
      onSuccessNavigate="Tranocertificate"
      title="Customer Login"
    />
  );
};

export default CustomerLogin
