import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Home from '../screen/home/Home';
import AuthenticationDashboard from '../screen/dashboard/AuthenticationDashboard';
import CustomHeader from './Customheader';
import Trano_All_Login from '../screen/tranoalllogin/Trano_All_Login';
import Test from '../Test';
import Test2 from '../Test2';
import Test3 from '../Test3';
import Mdhome from '../screen/tranoalllogin/employee/managingdirector/Mdhome';
import CustomDrawer from './CustomDrawer';
import WalletHome from '../screen/tranoalllogin/wallet/WalletHome';
// import Credit_Limit_Notification from '../screen/notification/Credit_Limit_Notification';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer  {...props} />}  screenOptions={({ route }) => ({
        header: route.name === 'Trano_All_Login' || route.name === 'Mdhome' ? props => <CustomHeader {...props} /> : undefined,
      })}>
   
      <Drawer.Screen name='Mdhome' component={Mdhome} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
        headerShown:true
      
      }} />
{/* 
<Drawer.Screen name='WalletHome' component={WalletHome} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
        headerShown:false
      
      }} /> */}


      <Drawer.Screen 
  name="WalletHome" 
  component={WalletHome} 
  options={{ headerShown: false }} 
/>


    </Drawer.Navigator>
  );
}
export default DrawerNavigation
