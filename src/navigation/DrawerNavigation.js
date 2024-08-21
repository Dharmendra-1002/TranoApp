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
// import Credit_Limit_Notification from '../screen/notification/Credit_Limit_Notification';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator  drawerContent={props => <CustomDrawer  {...props} />}  screenOptions={({ route }) => ({
        header: route.name === 'Trano_All_Login' || route.name === 'Mdhome' ? props => <CustomHeader {...props} /> : undefined,
      })}>
      {/* <Drawer.Screen name="Home" component={Home} /> */}
         



   
      <Drawer.Screen name='Mdhome' component={Mdhome} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
        headerShown:true
      
      }} />




{/* 
<Drawer.Screen name='Trano_All_Login' component={Trano_All_Login} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
        headerShown:false
      
      }} /> */}






{/*                
<Drawer.Screen name='Test' component={Test} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
      
      }} /> */}


{/* <Drawer.Screen name='Test2' component={Test2} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
      
      }} /> */}

{/* 
<Drawer.Screen name='Test3' component={Test3} options={{
        headerStyle: {
          backgroundColor: '#4e2d87',
        }, headerTintColor: '#ffff',
      
      }} /> */}





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
