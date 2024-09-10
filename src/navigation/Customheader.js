import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../component/Colors';

const CustomHeader = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  if (!isFocused) {
    return null; // Render nothing if not on the home screen
  }

  return (
    <View className="h-26 flex-row justify-between px-6 py-6 items-center" style={{backgroundColor: "#4e2d87"}}>
      <View className="flex-row space-x-5 items-center">
        {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Icon name="bars" size={30} color="#fff" />
        </TouchableOpacity> */}
        <View>
          <Text className="text-white font-medium text-base">Anand Kumar Seethala</Text>
          <Text className="text-white font-medium text-base">Managing Director</Text>
          <Text className="text-white font-medium text-base">ID - 00000</Text>
        </View>
      </View>

      <View className="flex-row items-center space-x-4">
        <TouchableOpacity onPress={() => navigation.navigate('Credit_Limit_Notification')}>
          <Icon name="bell" size={30} color="white" />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather name="more-vertical" size={30} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;




