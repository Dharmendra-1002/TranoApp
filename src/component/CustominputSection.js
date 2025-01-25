import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const CustomInputSection = ({ label, inputLabel, editable = true, onChangeText }) => {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={{ fontSize: 20, color: '#4e2d87' }}>{label}</Text>
      <TextInput
        mode="outlined"
        label={inputLabel}
        editable={editable}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default CustomInputSection;
