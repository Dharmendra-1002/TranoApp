import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Colors from '../component/Colors';
import { useNavigation } from '@react-navigation/native';

const IconSize = 24;

const Header = ({ menu, back, rght, rightFunction, optionalIcon, optionalFunc }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logout pressed');
    setMenuVisible(false);
    navigation.navigate('WalletLogin');
  };

  return (
    <View style={styles.header}>
      <View style={[styles.leftView]}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={IconSize} color={Colors.white} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.text}>Wallet Home</Text>
      </View>






      <View style={[styles.rightView]}>
        {/* <TouchableOpacity>
          <Feather name="bell" size={IconSize} color={Colors.white} />
        </TouchableOpacity> */}

        <TouchableOpacity onPress={toggleMenu}>
          <Feather name="more-vertical" size={IconSize} color={Colors.white} />
        </TouchableOpacity>

        <Modal
          transparent={true}
          visible={menuVisible}
          animationType="fade"
          onRequestClose={() => setMenuVisible(false)}
        >
          <Pressable style={styles.modalOverlay} onPress={() => setMenuVisible(false)}>
            <View style={styles.menu}>
              <Pressable style={styles.menuItem} onPress={handleLogout}>
                <Text style={styles.menuItemText}>Logout</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      </View>

      <View style={styles.View}></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#4e2d87',
  },
  leftView: {
    flex: 1,
    margin: 10,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  rightView: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menu: {
    backgroundColor: 'white',
    borderRadius: 4,
    margin: 10,
    padding: 10,
    width: 150,
    elevation: 4,
  },
  menuItem: {
    padding: 10,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.black,
  },


  text: {
    fontSize: 18, // equivalent to 'text-lg'
    color: 'white', // equivalent to 'text-white'
  },
});
