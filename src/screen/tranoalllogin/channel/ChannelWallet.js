// import { View, Text, TouchableOpacity } from 'react-native';
// import React, { useState } from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const ChannelWallet = () => {
//   const [isHidden, setIsHidden] = useState(true);
//   const navigation = useNavigation();

//   const toggleVisibility = () => {
//     setIsHidden(!isHidden);
//   };

//   return (
//     <SafeAreaView className=" flex-1" style={{ backgroundColor: '#4e2d87' }}>
//       <View className="flex-1 justify-center items-center">
//         <View className="w-11/12 h-5/6 bg-white rounded-lg shadow-lg p-4">
//           <View className="flex justify-center items-center">
//             <View className="w-11/12 h-52 bg-violet-950 m-10 rounded-lg shadow-lg p-4">
//               <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
//                 <Text style={{ fontSize: 20, color: '#fff', textAlign: 'center' }}>My Wallet</Text>
//                 <TouchableOpacity onPress={toggleVisibility} style={{ marginLeft: '5%', marginTop: 1}}>
//                   <Icon name={isHidden ? "eye" : "eye-off"} size={24} color="#fff" />
//                 </TouchableOpacity>
//               </View>
//               <View>
//                 <Text style={{ fontSize: 15, color: '#fff', marginTop: '6%', marginLeft: '20%' }}>
//                   Credit {isHidden ? '' : '       Rs. 1,00,000 '}
//                 </Text>
//                 <Text style={{ fontSize: 15, color: '#fff', marginTop: '2%', marginLeft: '20%' }}>
//                   Debit {isHidden ? '' : '         Rs. 1,00,000'}
//                 </Text>
//                 <Text style={{ fontSize: 15, color: '#fff', marginLeft: '20%', marginTop: '2%' }}>
//                   Balance {isHidden ? '' : '    Rs. 80,000 '}
//                 </Text>
//               </View>
//             </View>
//           </View>
//           <View className="flex-row justify-evenly">
//             <TouchableOpacity onPress={() => navigation.navigate('ChannelStatement')}>
//               <View className="w-[140] py-5 bg-violet-950 items-center rounded-lg">
//                 <Text className="text-white text-lg m-1 text-center">STATEMENT</Text>
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default ChannelWallet;



import { View, Text, TouchableOpacity, style, StyleSheet, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';


const ChannelWallet = () => {
  const navigation = useNavigation();
  const [isCreditLimitVisible, setCreditLimitVisible] = useState(false);
  const [isCreditLimitVisibleCard2, setCreditLimitVisibleCard2] = useState(false);
  const toggleCreditLimitVisibility = () => {
    setCreditLimitVisible(!isCreditLimitVisible);
  };
  const toggleCreditLimitVisibilityCard2 = () => {
    setCreditLimitVisibleCard2(!isCreditLimitVisibleCard2);
  };
  const [isHidden, setIsHidden] = useState(true);

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
                <Text className="text-white text-lg  text-center">STATEMENT</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 16 }}>
          <TouchableOpacity>
            <View className="bg-violet-950 rounded-lg mt-4 ">
              <ImageBackground
                style={styles.rect}
                imageStyle={styles.rect_imageStyle}
                // source={require('./../../../asset/Gradle.png')}
              >
                <Text style={styles.myRoyalityAccount}>MY ROYALITY ACCOUNT</Text>
                <TouchableOpacity onPress={toggleCreditLimitVisibilityCard2} style={{ marginLeft: '85%', marginTop: -25 }}>
                  <Icon name={isCreditLimitVisibleCard2 ? 'eye-off' : 'eye'} size={25} color="#fff" />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '6%', marginLeft: '10%' }}>
                  <Text style={{ fontSize: 16, color: '#fff',fontWeight:"500" }}>Credit</Text>
                </View>
                {isCreditLimitVisibleCard2 && <Text style={{ fontSize: 16, color: '#fff', marginLeft: '60%', marginTop: -20 ,fontWeight:"500"}}>Rs.1,00,000</Text>}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '0%', marginLeft: '10%' }}>
                  <Text style={{ fontSize: 16, color: '#fff',fontWeight:"500" ,fontWeight:"500"}}>Debit</Text>
                </View>
                {isCreditLimitVisibleCard2 && <Text style={{ fontSize: 16, color: '#fff', marginLeft: '60%', marginTop: -20 ,fontWeight:"500"}}>Rs.1,00,000</Text>}
                <Text style={{ fontSize: 15, color: '#fff', marginLeft: '10%',fontWeight:"500" }}>Balance Wallet</Text>
                {isCreditLimitVisibleCard2 && <Text style={{ fontSize: 16, color: '#fff', marginLeft: '60%', marginTop: -20 ,fontWeight:"500"}}>Rs.80,000</Text>}
              <TouchableOpacity onPress={() => navigation.navigate('ChannelRoyalityAccount')}>
              <View style={{backgroundColor:'#fff', width:150, height:25, marginLeft:'30%', marginTop:'2%', borderRadius:10}}>
                <Text style={{color:"#000000", fontWeight:"500", fontSize:16, marginLeft:'15%'}}>View Account</Text>
              </View>
              </TouchableOpacity>
            </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 316,
    height: 190,
    borderRadius: 15,
    marginTop: 10,
    marginLeft: 0,
    overflow: 'hidden'
  },
  rect_imageStyle: {},
  myRoyalityAccount: {
    fontFamily: 'roboto-700',
    color: '#ffff',
    marginTop: 29,
    marginLeft: 69,
    fontWeight: '800',
    fontSize: 16,
  },
  text2: {
    fontFamily: 'roboto-regular',
    color: '#fff',
    marginTop: 138,
    marginLeft: 180
  }
});

export default ChannelWallet;

