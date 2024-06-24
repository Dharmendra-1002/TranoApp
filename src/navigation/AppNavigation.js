import { createStackNavigator } from '@react-navigation/stack';
import { View, Text,  } from 'react-native';
import React from 'react'
import DrawerNavigation from './DrawerNavigation';
import Home from '../screen/home/Home';
import HomeWallet from '../screen/home/HomeWallet';
import HomeCreditLimit from '../screen/home/HomeCreditLimit';
import HomeForm from '../screen/home/HomeForm';
import HomeAddAmountFrom from '../screen/home/HomeAddAmountFrom';
import HomeAddAmounttable from '../screen/home/HomeAddAmounttable';
import HomeAddnewForm from '../screen/home/HomeAddnewForm';
import OemLogin from '../screen/tranoalllogin/oem/OemLogin';
import OemWallet from '../screen/tranoalllogin/oem/OemWallet';
import OemHistory from '../screen/tranoalllogin/oem/OemHistory';
import OemStatement from '../screen/tranoalllogin/oem/OemStatement';
import OemRechargeList from '../screen/tranoalllogin/oem/OemRechargeList';
import OemSpendList from '../screen/tranoalllogin/oem/OemSpendList';
import ChannelLogin from '../screen/tranoalllogin/channel/ChannelLogin';
import AssociateLogin from '../screen/tranoalllogin/associate/AssociateLogin';
import AssociateWallet from '../screen/tranoalllogin/associate/AssociateWallet';
import AssociateStatement from '../screen/tranoalllogin/associate/AssociateStatement';
import ChannelWallet from '../screen/tranoalllogin/channel/ChannelWallet';
import ChannelStatement from '../screen/tranoalllogin/channel/ChannelStatement';
import TechnicianLogin from '../screen/tranoalllogin/technician/TechnicianLogin';
import TechnicianHome from '../screen/tranoalllogin/technician/TechnicianHome';
import Technicianinstallationform from '../screen/tranoalllogin/technician/Technicianinstallationform';
import TechnicianCertificate from '../screen/tranoalllogin/technician/TechnicianCertificate';
import WalletHistory from '../screen/tranoalllogin/wallet/WalletHistory';
import WalletHome from '../screen/tranoalllogin/wallet/WalletHome';
import WalletLogin from '../screen/tranoalllogin/wallet/WalletLogin';
import WalletRecharges from '../screen/tranoalllogin/wallet/WalletRecharges';
import WalletSpends from '../screen/tranoalllogin/wallet/WalletSpends';
import WalletStatement from '../screen/tranoalllogin/wallet/WalletStatement';
import Give_Self_Validity from '../screen/tranoalllogin/validity/Give_Self_Validity';
import Tranocertificate from '../screen/tranoalllogin/certificate/Tranocertificate';
import ManagersLogin from '../screen/tranoalllogin/employee/ManagersLogin';
import ManagingDirectorLogin from '../screen/tranoalllogin/employee/managingdirector/ManagingDirectorLogin';
import Mdhome from '../screen/tranoalllogin/employee/managingdirector/Mdhome';
import MdWallet from '../screen/tranoalllogin/employee/managingdirector/MdWallet';
import MdCreditLimit from '../screen/tranoalllogin/employee/managingdirector/MdCreditLimit';

import AuthenticationLogin from '../screen/tranoalllogin/employee/authentication/AuthenticationLogin';
import FinanceLogin from '../screen/tranoalllogin/employee/finance/FinanceLogin';
import MarketingLogin from '../screen/tranoalllogin/employee/marketing/MarketingLogin';
import StatemanagerLogin from '../screen/tranoalllogin/employee/statemanager/StatemanagerLogin';
import MarketingExecutiveLogin from '../screen/tranoalllogin/employee/marketingexecutive/MarketingExecutiveLogin';
import MarketingExecutiveHome from '../screen/tranoalllogin/employee/marketingexecutive/MarketingExecutiveHome';
import MarketingExpenseTable from '../screen/tranoalllogin/employee/marketingexecutive/MarketingExpenseTable';
import MarketingExecutiveExpense_Form from '../screen/tranoalllogin/employee/marketingexecutive/MarketingExecutiveExpense_Form';
import MarketingMeetingForm from '../screen/tranoalllogin/employee/marketingexecutive/MarketingMeetingForm';
import MarketingOrderForm from '../screen/tranoalllogin/employee/marketingexecutive/MarketingOrderForm';
import MarketingHome from '../screen/tranoalllogin/employee/marketing/MarketingHome';
import MarketingHeadExpense from '../screen/tranoalllogin/employee/marketing/MarketingHeadExpense';
import MarketingAddnewForm from '../screen/tranoalllogin/employee/marketing/MarketingAddnewForm';
import MarketingSalesOrderForm from '../screen/tranoalllogin/employee/marketing/MarketingSalesOrderForm';
import FinanceDashboard from '../screen/tranoalllogin/employee/finance/FinanceDashboard';
import FinanceAddAmountTable from '../screen/tranoalllogin/employee/finance/FinanceAddAmountTable';
import FinanceAddNewForm from '../screen/tranoalllogin/employee/finance/FinanceAddNewForm';
import AuthenticationCreditLimit from '../screen/tranoalllogin/employee/authentication/AuthenticationCreditLimit';
import AuthenticationAssignCreditLimit from '../screen/tranoalllogin/employee/authentication/AuthenticationAssignCreditLimit';
import HomeDevice from '../screen/home/HomeDevice';
import HomeEsim from '../screen/home/HomeEsim';
import HomeDeviceDashboardForm from '../screen/home/HomeDeviceDashboardForm';
import MdAddnewForm1 from '../screen/tranoalllogin/employee/managingdirector/MdAddnewForm1';
import Distributor from '../screen/tranoalllogin/distributor/Distributor';
import CustomerLogin from '../screen/tranoalllogin/customer/CustomerLogin';
import DistributorWallet from '../screen/tranoalllogin/distributor/DistributorWallet';
import DistributorHistory from '../screen/tranoalllogin/distributor/DistributorHistory';
import DistributorStatement from '../screen/tranoalllogin/distributor/DistributorStatement';
import DistributorSpends from '../screen/tranoalllogin/distributor/DistributorSpends';
import DistributorRecharges from '../screen/tranoalllogin/distributor/DistributorRecharges';
import MdEsim from '../screen/tranoalllogin/employee/managingdirector/MdEsim';
import Mddevices from '../screen/tranoalllogin/employee/managingdirector/Mddevices';
import AuthenticationAddNewForm from '../screen/tranoalllogin/employee/authentication/AuthenticationAddNewForm';
import StateMangerHome from '../screen/tranoalllogin/employee/statemanager/StateMangerHome';
import StateOrderForm from '../screen/tranoalllogin/employee/statemanager/StateOrderForm';
import StateExpenseForm from '../screen/tranoalllogin/employee/statemanager/StateExpenseForm';
import MdAddnewForm from '../screen/tranoalllogin/employee/managingdirector/MdAddNewForm';
import FinanceDebitRoyalityAccount from '../screen/tranoalllogin/employee/finance/FinanceDebitRoyalityAccount';
import FinanceAddnewformDebitRoyality from '../screen/tranoalllogin/employee/finance/FinanceAddnewformDebitRoyality';
import MarketingExecutiveOderForm from '../screen/tranoalllogin/employee/marketingexecutive/MarketingExecutiveOderForm';
import MarketingExecutiveAddnewForm from '../screen/tranoalllogin/employee/marketingexecutive/MarketingExecutiveAddnewForm';
import DistributorRechaegeWallet from '../screen/tranoalllogin/distributor/DistributorRechaegeWallet';
import Credit_Limit_Notification from '../screen/notification/Credit_Limit_Notification';
import EmployeeLogin from '../screen/tranoalllogin/employee/EmployeeLogin';
import Distibutorvltd_sld from '../screen/tranoalllogin/distributor/Distributorvltd_sld';
import Distributorwallet_certificate_gesture from '../screen/tranoalllogin/distributor/Distributorwallet_certificate_gesture';
import CustomerDowanload from '../screen/tranoalllogin/customer/CustomerDowanload';
import Self_ValidityLogin from '../screen/tranoalllogin/validity/Self_ValidityLogin';
import Dowanloadcertificate from '../screen/tranoalllogin/certificate/Dowanloadcertificate';

const Stack = createStackNavigator();
const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Root" component={DrawerNavigation} />
            <Stack.Screen name="Trano" component={Home} />
            {/* <Stack.Screen name="HomeWallet" component={HomeWallet} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} /> */}


<Stack.Screen name="MdEsim" component={MdEsim} options={{
                title: 'Md Esim',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />




<Stack.Screen name="Dowanloadcertificate" component={Dowanloadcertificate} options={{
                title: 'Dowanload certificate',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            
<Stack.Screen name="Self_ValidityLogin" component={Self_ValidityLogin} options={{
                title: 'Self_ValidityLogin',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


<Stack.Screen name="Distributorwallet_certificate_gesture" component={Distributorwallet_certificate_gesture} options={{
                title: 'Distributorwallet_certificate_gesture',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />







<Stack.Screen name="CustomerDowanload" component={CustomerDowanload} options={{
                title: 'CustomerDowanload',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />




<Stack.Screen name="EmployeeLogin" component={EmployeeLogin} options={{
                title: 'Employee Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


<Stack.Screen name="Distibutorvltd_sld" component={Distibutorvltd_sld} options={{
                title: 'Distibutorvltd_sld',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />









<Stack.Screen name="Credit_Limit_Notification" component={Credit_Limit_Notification} options={{
                title: 'Credit Limit Notification',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



<Stack.Screen name="DistributorRechaegeWallet" component={DistributorRechaegeWallet} options={{
                title: 'Leads to Payment',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />







<Stack.Screen name="MarketingExecutiveAddnewForm" component={MarketingExecutiveAddnewForm} options={{
                title: 'Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



<Stack.Screen name="MarketingExecutiveOderForm" component={MarketingExecutiveOderForm} options={{
                title: 'Marketing Executive OderForm',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />







<Stack.Screen name="FinanceAddnewformDebitRoyality" component={FinanceAddnewformDebitRoyality} options={{
                title: 'Debit Royality Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



<Stack.Screen name="FinanceDebitRoyalityAccount" component={FinanceDebitRoyalityAccount} options={{
                title: 'Finance Debit Royality Account',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />





<Stack.Screen name="MdAddnewForm" component={MdAddnewForm} options={{
                title: 'Md Add newForm',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="StateExpenseForm" component={StateExpenseForm} options={{
                title: 'State Expense Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="StateOrderForm" component={StateOrderForm} options={{
                title: 'State Order Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="StateMangerHome" component={StateMangerHome} options={{
                title: 'State Manger Home',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



<Stack.Screen name="AuthenticationAddNewForm" component={AuthenticationAddNewForm} options={{
                title: 'Authentication Add New Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
<Stack.Screen name="CustomerLogin" component={CustomerLogin} options={{
                title: 'Customer Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


<Stack.Screen name="Mddevices" component={Mddevices} options={{
                title: 'Md devices',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="DistributorStatement" component={DistributorStatement} options={{
                title: 'Distributor Statements',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


<Stack.Screen name="DistributorRecharges" component={DistributorRecharges} options={{
                title: 'Distributor Recharge',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



<Stack.Screen name="DistributorSpends" component={DistributorSpends} options={{
                title: 'Distributor Statement',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



            

<Stack.Screen name="DistributorHistory" component={DistributorHistory} options={{
                title: 'Distributor History',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />






<Stack.Screen name="DistributorWallet" component={DistributorWallet} options={{
                headerShown: true,
                headerTitle: () => (
                    <View style={{ backgroundColor: '#4e2d87'}}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 16 }}>Shashi kumar </Text>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 14 }}>Distributor </Text>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 12 }}>ID - 1201237</Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="HomeCreditLimit" component={HomeCreditLimit} options={{
                title: 'Credit Limit',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


<Stack.Screen name="Distributor" component={Distributor} options={{
                title: 'Distributor Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="MdAddnewForm1" component={MdAddnewForm1} options={{
                title: 'Add new Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="HomeDeviceDashboardForm" component={HomeDeviceDashboardForm} options={{
                title: 'Device Dashboard Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            
<Stack.Screen name="HomeDevice" component={HomeDevice} options={{
                title: 'Device',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="HomeEsim" component={HomeEsim} options={{
                title: 'Esim',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="AuthenticationAssignCreditLimit" component={AuthenticationAssignCreditLimit} options={{
                title: 'Assign Credit Limit',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



            
<Stack.Screen name="AuthenticationCreditLimit" component={AuthenticationCreditLimit} options={{
                title: 'Authentication Credit Limit',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="FinanceAddNewForm" component={FinanceAddNewForm} options={{
                title: 'AddNew Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="FinanceAddAmountTable" component={FinanceAddAmountTable} options={{
                title: 'Add Amount',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="FinanceDashboard" component={FinanceDashboard} options={{
                title: 'Finance Dashboard',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
<Stack.Screen name="MarketingSalesOrderForm" component={MarketingSalesOrderForm} options={{
                title: 'Marketing Sales OrderForm',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


<Stack.Screen name="MarketingAddnewForm" component={MarketingAddnewForm} options={{
                title: 'Marketing Add new Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


<Stack.Screen name="MarketingHeadExpense" component={MarketingHeadExpense} options={{
                title: 'Marketing Head Expense',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
<Stack.Screen name="MarketingHome" component={MarketingHome} options={{
                title: 'Marketing Home',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="MarketingMeetingForm" component={MarketingMeetingForm} options={{
                title: 'Marketing Meeting Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="MarketingOrderForm" component={MarketingOrderForm} options={{
                title: 'Marketing Order Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            
<Stack.Screen name="MarketingExecutiveExpense_Form" component={MarketingExecutiveExpense_Form} options={{
                title: 'Marketing Executive Expense Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="MarketingExecutiveHome" component={MarketingExecutiveHome} options={{
                title: 'Marketing Executive Home',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
<Stack.Screen name="MarketingExpenseTable" component={MarketingExpenseTable} options={{
                title: 'Marketing Expense',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="AuthenticationLogin" component={AuthenticationLogin} options={{
                title: 'Authentication Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="MarketingExecutiveLogin" component={MarketingExecutiveLogin} options={{
                title: 'Marketing Executive Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="StatemanagerLogin" component={StatemanagerLogin} options={{
                title: 'State manager Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="MarketingLogin" component={MarketingLogin} options={{
                title: 'Marketing Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="FinanceLogin" component={FinanceLogin} options={{
                title: 'Finance Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


{/* <Stack.Screen name="MdForm" component={MdForm} options={{
                title: 'Md from',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />  */}


            <Stack.Screen name="MdWallet" component={MdWallet} options={{
                title: 'Md Wallet',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

<Stack.Screen name="MdCreditLimit" component={MdCreditLimit} options={{
                title: 'Md Credit Limit',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />
            <Stack.Screen name="WalletLogin" component={WalletLogin} options={{
                title: 'Wallet Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Mdhome" component={Mdhome} options={{
                title: 'Md home',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="ManagingDirectorLogin" component={ManagingDirectorLogin} options={{
                title: 'Managing Director Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="ManagersLogin" component={ManagersLogin} options={{
                title: 'Managers Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="Tranocertificate" component={Tranocertificate} options={{
                title: 'Trano certificate',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="WalletHome" component={WalletHome} options={{
                title: 'Wallet Home',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



            <Stack.Screen name="Give_Self_Validity" component={Give_Self_Validity} options={{
                title: 'Self Validity',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



            <Stack.Screen name="WalletRecharges" component={WalletRecharges} options={{
                title: 'Wallet Recharges',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />



            <Stack.Screen name="WalletHistory" component={WalletHistory} options={{
                title: 'Wallet History',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="WalletSpends" component={WalletSpends} options={{
                title: 'Wallet Spends',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="WalletStatement" component={WalletStatement} options={{
                title: 'Wallet Statement',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="HomeForm" component={HomeForm} options={{
                title: 'Assign Credit Limit',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="HomeAddAmountFrom" component={HomeAddAmountFrom} options={{
                title: 'Assign Credit Limit',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="HomeAddAmounttable" component={HomeAddAmounttable} options={{
                title: 'Add Amount',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="HomeAddnewForm" component={HomeAddnewForm} options={{
                title: 'Add Amount ',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="OemLogin" component={OemLogin} options={{
                title: 'Oem Login',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            {/* <Stack.Screen name="OemWallet" component={OemWallet} options={{
                title: 'Oem Wallet',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} /> */}


<Stack.Screen name="OemWallet" component={OemWallet} options={{
                headerShown: true,
                headerTitle: () => (
                    <View style={{ backgroundColor: '#4e2d87'}}>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 16 }}>Sandhya</Text>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 14 }}>OEM</Text>
                        <Text style={{ color: '#ffffff', fontWeight: "bold", fontSize: 12 }}>ID - 1201237</Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="OemHistory" component={OemHistory} options={{
                title: 'History',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="OemStatement" component={OemStatement} options={{
                title: 'Statement',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="OemRechargeList" component={OemRechargeList} options={{
                title: 'Recharge',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="OemSpendList" component={OemSpendList} options={{
                title: 'Spend',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="AssociateLogin" component={AssociateLogin} options={{
                title: 'Associate Partner',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="ChannelLogin" component={ChannelLogin} options={{
                title: 'Channel Partner',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="AssociateWallet" component={AssociateWallet} options={{
                title: 'Associate Home',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="AssociateStatement" component={AssociateStatement} options={{
                title: 'Associate Statement',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="ChannelWallet" component={ChannelWallet} options={{
                title: 'Channel Partner',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />


            <Stack.Screen name="ChannelStatement" component={ChannelStatement} options={{
                title: 'Channel Partner',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="TechnicianLogin" component={TechnicianLogin} options={{
                title: 'Technician Partner',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="TechnicianHome" component={TechnicianHome} options={{
                title: 'Technician Home',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="Technicianinstallationform" component={Technicianinstallationform} options={{
                title: 'Installation Form',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />

            <Stack.Screen name="TechnicianCertificate" component={TechnicianCertificate} options={{
                title: 'View Certificate',
                headerShown: true,
                headerStyle: {
                    backgroundColor: '#4e2d87'
                }, headerTintColor: '#ffff'
            }} />





        </Stack.Navigator>


    )
}

export default AppNavigation