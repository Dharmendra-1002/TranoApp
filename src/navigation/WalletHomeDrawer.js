import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WalletHomeDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('WalletHome')}>
        <Text style={styles.item}>Wallet Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('WalletLogin')}>
        <Text style={styles.item}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    fontSize: 16,
  },
});

export default WalletHomeDrawer;
