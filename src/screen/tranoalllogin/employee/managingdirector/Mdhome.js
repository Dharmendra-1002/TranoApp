

// import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';

// const Mdhome = () => {
//   const navigation = useNavigation();

//   return (
//     // Main container with SafeAreaView to handle device-specific safe areas
//     <SafeAreaView className="flex-1 items-center bg-[#4e2d87]">
//       {/* Outer View to contain the main content with white background */}
//       <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
//         {/* Row to hold two buttons side by side with padding */}
//         <View className="flex-row justify-between py-12 px-6">
//           {/* Button to navigate to EsimReport screen */}
//           <TouchableOpacity
//             className="w-[43%] h-[89px] items-center bg-[#4e2d87] shadow-md rounded-2xl"
//             onPress={() => navigation.navigate('MdEsim')}
//           >
//             <Text className="text-white font-medium text-lg py-1">E-SIM</Text>
//             <View className="w-full py-2 bg-[#af84f8] rounded-2xl mt-2 items-center">
//               <Text className="text-white font-medium text-lg">57,476</Text>
//             </View>
//           </TouchableOpacity>

//           {/* Button for Devices */}
//           <TouchableOpacity className="w-[43%] h-[89px] items-center bg-[#4e2d87] shadow-md rounded-2xl"
//             onPress={() => navigation.navigate('Mddevices')}>
//             <Text className="text-white font-medium text-lg py-1">DEVICES</Text>
//             <View className="w-full py-2 bg-[#af84f8] rounded-2xl mt-2 items-center">
//               <Text className="text-white font-medium text-lg">57,476</Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         {/* Wallet button positioned at the bottom */}
//         <View className="items-center mt-8">
//           <TouchableOpacity
//             className="bg-[#432d87] py-2 rounded-full items-center w-[85%] mb-[450px]"
//             onPress={() => navigation.navigate('MdWallet')}
//           >
//             <Text className="text-white font-normal text-lg">Wallet</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Mdhome;





import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';

const Mdhome = () => {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get('window').width;

  return (
<SafeAreaView className=" flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>
     <View className="bg-white w-[92%] h-[95%] rounded-md mt-5 items-center">
  
      <View className="mt-5 bg-gray-200 rounded-lg p-5 items-center" style={{ width: screenWidth * 0.9 }}>
        <View className="flex-row justify-between w-full">
          <CardButton
            navigation={navigation}
            navigateTo='MdEsim'
            buttonText="E-SIM"
            buttonNumber="57,476"
            imageSource={require('../../../../asset/electronic-board.png')} // Replace with your actual image path
             imageStyle="w-12 h-12 mt-2.5"
          />
          <CardButton
            navigation={navigation}
            navigateTo='Mddevices'
            buttonText="DEVICES"
            buttonNumber="57,476"
            imageSource={require('../../../../asset/tracking-app.png')}
            imageStyle="w-12 h-12 mt-2.5"
          />
        </View>
        <View className="flex-row justify-between w-full mt-10">
          <CardButton
            navigation={navigation}
            navigateTo='MdWallet'
            buttonText="Wallet"
            buttonNumber="57,476"
            
            imageSource={require("../../../../asset/wallet1.png")}
             imageStyle="w-12 h-12 mt-2.5"
          />
          <CardButton
            navigation={navigation}
            navigateTo='MdWallet'
            buttonText="Wallet"
            buttonNumber="57,476"
            imageSource={require("../../../../asset/wallet1.png")}
             imageStyle="w-12 h-12 mt-2.5"
          />
        </View>
    </View>
    </View>
    </SafeAreaView>
  );
};

const CardButton = ({ navigation, navigateTo, imageSource, buttonText, buttonNumber, imageStyle }) => (
  <TouchableOpacity
    className="w-[45%] h-44 bg-[#4e2d87]  rounded-lg items-center justify-center shadow-lg"
    onPress={() => navigation.navigate(navigateTo)}
  >
    <Image
      source={imageSource}
      resizeMode="contain"
      className={`w-20 h-20 ${imageStyle}`}
    />
    <Text className="text-white text-lg font-bold">{buttonText}</Text>
    <Text className="text-white text-xl font-extrabold my-1.5">{buttonNumber}</Text>
    <View className="w-[80%] bg-white rounded-lg items-center py-1.5">
      <Text className="text-purple-900 font-bold text-base">View Report</Text>
    </View>
  </TouchableOpacity>
);

export default Mdhome;
