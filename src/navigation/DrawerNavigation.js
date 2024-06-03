import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screen/home/Home';
import AuthenticationDashboard from '../screen/dashboard/AuthenticationDashboard';
import CustomHeader from './Customheader';
import Trano_All_Login from '../screen/tranoalllogin/Trano_All_Login';
// import Credit_Limit_Notification from '../screen/notification/Credit_Limit_Notification';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator   screenOptions={({ route }) => ({
        header: route.name === 'Home' || route.name === 'Mdhome' ? props => <CustomHeader {...props} /> : undefined,
      })}>
      <Drawer.Screen name="Home" component={Home} />
         
<Drawer.Screen name='Trano_All_Login' component={Trano_All_Login} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
      }} />




{/* 
<Drawer.Screen name='Credit_Limit_Notification' component={Credit_Limit_Notification} options={{
        headerStyle: {
         
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
        title: 'Notification',
      }} /> */}
      
    </Drawer.Navigator>
  );
}
export default DrawerNavigation

