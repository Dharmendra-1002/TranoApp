


// import { View, Text } from 'react-native';
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import AppNavigation from './src/navigation/AppNavigation';

// // Define the Home component


// const Tab = createBottomTabNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
      
//         <Tab.Screen name="AppNavigation" component={AppNavigation}  options={{ headerShown: false }}/>
       
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
// import AppNavigation from './src/navigation/AppNavigation';

// const Tab = createBottomTabNavigator();

// const MenuIcon = ({ color, size }) => (
//   <FontAwesome name="bars" color={color} size={size} /> // Example using FontAwesome's "bars" icon
// );

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="AppNavigation"
//           component={AppNavigation}
//           options={{
//             tabBarIcon: ({ color, size }) => <MenuIcon color={color} size={size} />,
//             tabBarLabel: 'Menu', // Optional label for the tab
//             headerShown: false,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
// import AppNavigation from './src/navigation/AppNavigation';

// const Tab = createBottomTabNavigator();

// const MenuIcon = ({ color, size }) => (
//   <FontAwesome name="bars" color={color} size={size} /> // Using FontAwesome's "bars" icon
// );

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           style: {
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             borderTopWidth: 0, // Remove top border to seamlessly integrate with screen
//           },
//           tabStyle: {
//             justifyContent: 'right',
//             alignItems: 'right',
//           },
//           labelStyle: {
//             fontSize: 12,
//           },
//         }}
//       >
//         <Tab.Screen
//           name="AppNavigation"
//           component={AppNavigation}
//           options={{
//             tabBarIcon: ({ color, size }) => <MenuIcon color={color} size={size} />,
//             tabBarLabel: 'Menu',
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
// import AppNavigation from './src/navigation/AppNavigation';
// import OemLogin from './src/screen/tranoalllogin/oem/OemLogin';


// const Tab = createBottomTabNavigator();

// const MenuIcon = ({ color, size }) => (
//   <FontAwesome name="home" color={color} size={size} /> // Using FontAwesome's "bars" icon
// );


// const MenuIcons = ({ color, size }) => (
//   <FontAwesome name="money" color={color} size={size} /> // Using FontAwesome's "bars" icon
// );







// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         tabBarOptions={{
//           style: {
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             borderTopWidth: 0, // Remove top border to seamlessly integrate with screen
//             flexDirection: 'row', // Align items horizontally
//             justifyContent: 'space-between', // Push items to opposite ends
//             paddingHorizontal: 20, // Add padding for better alignment
//           },
//           labelStyle: {
//             fontSize: 12,
//           },
//         }}
//       >
//         <Tab.Screen
//           name="AppNavigation"
//           component={AppNavigation}
//           options={{
//             tabBarIcon: ({ color, size }) => <MenuIcon color={color} size={size} />,
//             tabBarLabel: 'Menu',headerShown: false 
//           }}
//         />



// <Tab.Screen
//           name="OemLogin"
//           component={OemLogin}
//           options={{
//             tabBarIcon: ({ color, size }) => <MenuIcons color={color} size={size} />,
//             tabBarLabel: 'Oem Login',headerShown: false 
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome
// import AppNavigation from './src/navigation/AppNavigation';
// import OemLogin from './src/screen/tranoalllogin/oem/OemLogin';

// const Tab = createBottomTabNavigator();

// const MenuIcon = ({ color, size }) => (
//   <FontAwesome name="home" color={color} size={size} /> // Using FontAwesome's "bars" icon
// );

// const MenuIcons = ({ color, size }) => (
//   <FontAwesome name="money" color={color} size={size} /> // Using FontAwesome's "bars" icon
// );

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={{
//           tabBarStyle: {
//             position: 'absolute',
//             bottom: 0,
//             left: 0,
//             right: 0,
//             borderTopWidth: 0, // Remove top border to seamlessly integrate with screen
//             flexDirection: 'row', // Align items horizontally
//             justifyContent: 'space-between', // Push items to opposite ends
//             paddingHorizontal: 20, // Add padding for better alignment
//           },
//           tabBarLabelStyle: {
//             fontSize: 12,
//           },
//         }}
//       >
//         <Tab.Screen
//           name="AppNavigation"
//           component={AppNavigation}
//           options={{
//             tabBarIcon: ({ color, size }) => <MenuIcon color={color} size={size} />,
//             tabBarLabel: 'Menu',
//             headerShown: false,
//           }}
//         />
//         <Tab.Screen
//           name="OemLogin"
//           component={OemLogin}
//           options={{
//             tabBarIcon: ({ color, size }) => <MenuIcons color={color} size={size} />,
//             tabBarLabel: 'Oem Login',
//             headerShown: false,
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;




import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}