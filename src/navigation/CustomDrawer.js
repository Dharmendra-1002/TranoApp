import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <Text style={styles.title}>Menu</Text>
        <DrawerItemList {...props} />
        {/* <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => props.navigation.navigate('EmployeeLogin')}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity> */}


        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => props.navigation.navigate('WalletLogin')}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f44336',
    borderRadius: 5,
  },
  logoutButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CustomDrawer;
