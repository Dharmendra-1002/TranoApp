// import React from "react";
// import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
// import { useNavigation } from '@react-navigation/native';

// function HomeDeviceDashboardForm(props) {
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView className="flex-1 items-center justify-center bg-[#4e2d87]">
//       {/* Outer View to contain the main content with white background */}
//       <View className="bg-white w-[92%] h-[95%] rounded-md flex items-center">
//         {/* Row to hold two buttons side by side with padding */}
//         <View>
//           <TouchableOpacity onPress={() => navigation.navigate('HomeDeviceDashboardForm')}>
//             <View className="bg-[#4e2d87] rounded-lg p-3 mt-5 ">
//               <Text className="text-white font-bold text-center">For State Wise - Live - Status - Click here</Text>
//             </View>
//           </TouchableOpacity>
//         </View>

//         <View className="flex-row justify-between py-12 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Total Devices</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">10,000</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Installed Devices</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">8,000</Text>
//           </View>
//         </View>

//         <View className="w-full px-6 ">
//           <Text className="font-extrabold text-[#4e2d87] text-left">Live Status</Text>
//         </View>

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Devices Online</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">7,000</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Devices Offline</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">1,000</Text>
//           </View>
//         </View>

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 24 Hours</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">700</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 48 Hours</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">600</Text>
//           </View>
//         </View>

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 72 Hours</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">550</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline {"\n"} Since 7 Days</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">400</Text>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// export default HomeDeviceDashboardForm;

// import React, { useState } from "react";
// import { View, Text, SafeAreaView, TextInput } from "react-native";
// import { useNavigation } from '@react-navigation/native';
// import { Picker } from '@react-native-picker/picker';

// function HomeDeviceDashboardForm(props) {
//   const navigation = useNavigation();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedValue, setSelectedValue] = useState('java');

//   return (
//     <SafeAreaView className="flex-1 items-center justify-center bg-[#4e2d87]">
//       {/* Outer View to contain the main content with white background */}
//       <View className="bg-white w-[92%] h-[95%] rounded-md flex items-center">
//         {/* Row to hold search input and select menu */}
//         <View className="w-full px-6 mt-5">
//           <TextInput
//             className="bg-[#f0f0f0] rounded-lg p-3 mb-3"
//             placeholder="Search..."
//             value={searchQuery}
//             onChangeText={setSearchQuery}
//           />
          
//         </View>

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">No of Installed Devices</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">10,000</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Devices              Online</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">8,000</Text>
//           </View>
//         </View>

       

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Devices                Offline</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">7,000</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 24 Hours</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">1,000</Text>
//           </View>
//         </View>

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 48 Hours</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">700</Text>
//           </View>

//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 72 Hours</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">600</Text>
//           </View>
//         </View>

//         <View className="flex-row justify-between py-8 px-6">
//           <View className="bg-[#4e2d87] rounded-lg p-3 w-[48%] h-[90px] flex items-left mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 7 Hours</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">550</Text>
            
//           </View>
//           <View className="bg-[#fff] rounded-lg p-3 w-[48%] h-[90px] flex items-center mx-2">
//             <Text className="text-white font-bold text-center">Offline Since 72 Hours</Text>
//             <View className="w-full h-[2px] bg-white my-2" />
//             <Text className="text-white font-bold text-center">600</Text>
//           </View>

         
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// }

// export default HomeDeviceDashboardForm;



import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

function HomeDeviceDashboardForm(props) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4e2d87' }}>
      {/* Outer View to contain the main content with white background */}
      <View style={{ backgroundColor: 'white', width: '92%', height: '95%', borderRadius: 10, alignItems: 'center' }}>
        {/* Row to hold search input and select menu */}
        <View style={{ width: '100%', paddingHorizontal: 12, marginTop: 20 }}>
          <TextInput
            style={{ backgroundColor: '#f0f0f0', borderRadius: 10, padding: 12, marginBottom: 12 }}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingHorizontal: 12 }}>
          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>No of Installed Devices</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>10,000</Text>
          </View>

          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Devices Online</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>8,000</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingHorizontal: 12 }}>
          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Devices Offline</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>7,000</Text>
          </View>

          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 24 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>1,000</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingHorizontal: 12 }}>
          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 48 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>700</Text>
          </View>

          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 72 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>600</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingHorizontal: 12 }}>
          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 7 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>550</Text>
          </View>

          <View style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 72 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: '#fff', marginVertical: 8 }} />
            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>600</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeDeviceDashboardForm;

