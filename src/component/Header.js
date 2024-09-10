// import React from 'react'
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
// import { Badge, Surface, Title } from 'react-native-paper'
// import Feather from 'react-native-vector-icons/Feather'
// import Colors from '../component/Colors'

// const IconSize = 24;

// const Header = ({ style, menu, back, title, right, onRightPress, optionalBtn, optionalBtnPress, rightComponent, headerBg, iconColor, titleAlight, optionalBadge }) => {

//     const LeftView = () => (
//         <View style={styles.view}>
//             {menu && <TouchableOpacity onPress={() => { }}>
//                 <Feather name="menu" size={IconSize} color={Colors.white} />
//             </TouchableOpacity>}
//             {back && <TouchableOpacity onPress={() => { }}>
//                 <Feather name="arrow-left" size={IconSize} color={Colors.white} />
//             </TouchableOpacity>}
//         </View>
//     )
//     const RightView = () => (
//         rightComponent ? rightComponent :
//             <View style={[styles.view, styles.rightView]}>
//                 {optionalBtn && <TouchableOpacity style={styles.rowView} onPress={optionalBtnPress}>
//                     <Feather name={optionalBtn} size={IconSize} color={iconColor} />
//                     {optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
//                 </TouchableOpacity>}
//                 {right && <TouchableOpacity onPress={onRightPress}>
//                     <Feather name={right} size={IconSize} color={iconColor} />
//                 </TouchableOpacity>}
//             </View>
//     )
//     const TitleView = () => (
//         <View style={styles.titleView}>
//             <Title style={{ color: iconColor, textAlign: titleAlight }}>{title}</Title>
//         </View>
//     )
//     return (
//         <Surface style={[styles.header,]}>
//             <LeftView />
//             <TitleView />
//             <RightView />
//         </Surface>
//     )
// }



// const styles = StyleSheet.create({
//     header: {
//         height: 50,
//         elevation: 8,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexDirection: 'row',
//         backgroundColor: '#4e2d87',
//     },
//     view: {
//         marginHorizontal: 16,
//         alignItems: 'center',
//         flexDirection: 'row',
//     },
//     titleView: {
//         flex: 1,
//     },
//     rightView: {
//         justifyContent: 'flex-end',
//     },
//     rowView: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginRight: 10,
//     }
// })

// export default Header



// import { View, Text, StyleSheet, TouchableOpacity, Model ,Pressable} from 'react-native'
// import React, { useState } from 'react'
// import { Surface , Title ,Button, Menu, Divider, PaperProvider } from 'react-native-paper'
// import Feather from 'react-native-vector-icons/Feather'
// import Colors from '../component/Colors'
// import { useNavigation } from '@react-navigation/native'



// const IconSize = 24;

// const Header = ({menu,back,rght,rightFunction, optionalIcon, optionalFunc}) => {

//     return (
//         <Surface style={styles.header}>
//             <View style={[styles.View, styles.LeftView]}>

//                 {<TouchableOpacity>
//                     <Feather name="arrow-left" size={IconSize} colors={Colors.white} />
//                 </TouchableOpacity>}

//             </View>

            
//             <View style={[styles.View, styles.rightView]}>

//                 {<TouchableOpacity>
//                     <Feather name="bell" size={IconSize} colors={Colors.white} />
//                 </TouchableOpacity>}
//                 {<TouchableOpacity >
//                     <Feather name="more-vertical" size={IconSize} colors={Colors.white} />
//                 </TouchableOpacity>}

//             </View>
           
//             <View style={styles.View}></View>

//         </Surface>
//     )
// }

// export default Header

// const styles = StyleSheet.create({
//     header: {
//         height: 50,
//         elevation: 4,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexDirection: 'row',
//         backgroundColor: Colors.white,
//     },
//     leftView: {
//         flex: 1,
//         margin: 10,
//         alignItems: 'flex-start',
//         flexDirection: 'row',
//     },

//     rightView: {
//         flex:1,
        
//         alignItems: 'flex-end',
//         flexDirection: 'row',
//         justifyContent:'flex-end',
//     }
// })




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
