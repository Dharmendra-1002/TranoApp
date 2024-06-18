import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView,Linking } from "react-native";
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Trano_All_Login = () => {
    const navigation = useNavigation();





    const openUrl = () => {
        Linking.openURL('https://play.google.com/store/apps/details?id=com.tranogo&pli=1');
      };
      
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView>
                <View style={styles.rect8Stack}>
                    <View style={styles.rect8} className='items-center  justify-center'>
                        <Image
                            source={require("../../asset/ctpllogo.png")}
                            resizeMode='cover' className=" mr-24 mb-6" style={{width:276, height:64}}
                        />
                    </View>
                    <View className='justify-end items-end pt-8 mx-5'>
                        <View className=' w-24 h-24 border-white bg-[#432d87] border-[5px] absolute rounded-full justify-center items-center '>
                            <Image source={require("../../asset/car.png")}
                                resizeMode='cover' className="w-14 h-14" />
                        </View>
                    </View>
                </View>
                <View className='px-4 py-2'>
                    <View style={styles.rect2} className='py-4'>
                        <View className=' flex-row items-center justify-between space-x-2 px-4'>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} className='w-[28%] flex-col items-center justify-center'>
                                <Image
                                    source={require("../../asset/ic_launcher.png")}
                                    resizeMode="contain"
                                    style={styles.image1Row}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('DistributorLogin')} className='w-[33%] flex-col items-center justify-center'>
                                <Image
                                    source={require("../../asset/enter.png")}
                                    resizeMode="contain"
                                    style={styles.image1Row}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} className='w-[33%] flex-col items-center justify-center'>
                                <Image
                                    source={require("../../asset/leader.png")}
                                    resizeMode="contain"
                                    style={styles.image1Row}
                                />

                            </TouchableOpacity>
                        </View>
                        <View className='flex-row space-x-0 mt-0 px-4 items-center justify-center'>
                            <TouchableOpacity onPress={() => navigation.navigate('CustomerDowanload')} className='w-[33%] flex-col items-center justify-center'>
                                <Text className='font-normal text-[#4e2d87] text-sm' style={{fontWeight:"bold"}}>Customer {"\n"} Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Distibutorvltd_sld')} className='w-[35%] flex-col items-center justify-center'>
                                <Text className='font-normal text-[#4e2d87] text-sm' style={{fontWeight:"bold"}}>Distributor/{"\n"}Dealer Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} className='w-[33%] flex-col items-center justify-center'>
                                <Text className='font-normal text-[#4e2d87] text-sm' style={{fontWeight:"bold"}}>Parent {"\n"} Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View className='px-8 py-0'>
                    <View className='space-y-2' style={styles.rect3}>

                        <View className=' flex-row w-[100%] justify-between' >
                            <TouchableOpacity onPress={() => navigation.navigate('OemLogin')} className=' bg-[#4e2d87] w-[48%] h-28 items-center justify-center px-0 rounded-md'>
                            <View >
                                    <Image
                                        source={require("../../asset/manu.png")}
                                        resizeMode="contain"
                                        style={{width:65 , height:60, marginTop:5, marginLeft:18}}
                                    />
                                    <Text style={{marginLeft:10, marginTop:-2, fontFamily: "roboto-700",color: "rgba(255,255,255,1)",fontSize: 16}} >OEM Login</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('EmployeeLogin')} className=' bg-[#4e2d87] w-[48%] h-28 items-center justify-center py-3 rounded-md '>
                            <View >
                                <Image
                                        source={require("../../asset/empl.png")}
                                        resizeMode="contain"
                                       style={{width:75 , height:75, marginTop:10, marginLeft:27}}
                                    />
                              
                                    <Text style={{marginLeft:10, fontFamily: "roboto-700",color: "rgba(255,255,255,1)",fontSize: 16, marginBottom:20}}>Employee Login</Text>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>
                     
                        <View className=' flex-row w-[100%] justify-between' >
                            <TouchableOpacity onPress={() => navigation.navigate('Give_Self_Validity')}className=' bg-[#4e2d87] w-[48%] h-28 items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Text style={{ fontFamily: "roboto-700",color: "rgba(255,255,255,1)",fontSize: 16,top: 30, left: -25, position: "absolute"}}>Give Self Validity</Text>
                                    <Image
                                        source={require("../../asset/self.png")}
                                        resizeMode="contain"
                                        style={{width:50 , height:50, marginTop:-28, marginLeft:27,marginLeft:5}}
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Tranocertificate')}className=' bg-[#4e2d87] w-[48%] h-28 items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/downwhite.png")}
                                        resizeMode="contain"
                                        style={{width:45 , height:45, marginTop:-30, marginLeft:5}}
                                    />
                                    <Text style={{ fontFamily: "roboto-700",color: "rgba(255,255,255,1)",fontSize: 16,top: 15 , left: -5, position: "absolute"}}>Download{"\n"}Certificate</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                      
                        <View className=' flex-row w-[100%] justify-between' >
                            <TouchableOpacity onPress={() => navigation.navigate('WalletLogin')}className=' bg-[#4e2d87] w-[48%] h-28 items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/wallet.png")}
                                        resizeMode="contain"
                                        style={{width:45 , height:45, marginTop:-30, marginLeft:5}}
                                    />
                                    <Text style={{ fontFamily: "roboto-700",color: "rgba(255,255,255,1)",fontSize: 16,top: 25 , left: -15, position: "absolute"}}>Wallet Login</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('TechnicianLogin')}className=' bg-[#4e2d87] w-[48%] h-28 items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/engineer.png")}
                                        resizeMode="contain"
                                        style={styles.image13}
                                    />
                                    <Text style={styles.downloadCertificate1}>Technician{"\n"}Login</Text>
                                </View>
                            </TouchableOpacity>                    
                        </View>   
                        <View className=' flex-row w-[100%] justify-between' >
                            <TouchableOpacity onPress={() => navigation.navigate('AssociateLogin')}className=' bg-[#4e2d87] w-[48%] h-28 items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/agreement.png")}
                                        resizeMode="contain"
                                        style={{width:60 , height:50, marginTop:-30, marginLeft:5}}
                                    />
                                    <Text style={{ fontFamily: "roboto-700",color: "rgba(255,255,255,1)",fontSize: 16,top: 25 , left: -30, position: "absolute"}}>Associate Partner</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('ChannelLogin')}className=' bg-[#4e2d87] w-[48%] h-28 items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/channels.png")}
                                        resizeMode="contain"
                                        style={{width:60 , height:50, marginTop:-30, marginLeft:5}}
                                    />
                                    <Text style={{ fontFamily: "roboto-700",color: "rgba(255,255,255,1)",fontSize: 16,top: 25 , left: -22, position: "absolute"}}>Channel Partner</Text>
                                </View>
                            </TouchableOpacity>                    
                        </View>            
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}




const styles = StyleSheet.create({
    container: {

        backgroundColor: '#ffff',

    },
    rect8: {
        width: '100%',
        height: 105,
        backgroundColor: "rgba(78,45,135,1)",
    },
    image8: {
        width: 350,
        height: 80,
        size: 5

    },

    image9: {
        width: 45,
        height: 41,
        position: "absolute",
        top: 82,
        left: 256,
    },
    rect8Stack: {
        width: '100%',
        height: 142,
    },
    rect2: {
     marginTop:-13,
        backgroundColor: "#e4E7EB",
        borderRadius: 15,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 30,
        shadowOpacity: 0.6,
        shadowRadius: 10,


    },
    image1: {
        width: 35,
        height: 39,
    },
    image2: {
        width: 30,
        height: 39,
        marginLeft: 64,
        marginTop: 2


    },
    image3: {
        width: 35,
        height: 39,
        marginLeft: 66,
        marginTop: 2,
    },
    image1Row: {
        height: 40,
      
    },
    customerLogin1: {
        fontFamily: "roboto-700",
        color: "rgba(78,45,135,1)",
        fontSize: 12,
        lineHeight: 12,
        marginLeft: 8,
    },
    loremIpsum1: {
        fontFamily: "roboto-700",
        color: "rgba(78,45,135,1)",
        fontSize: 12,
        lineHeight: 12,
        marginLeft: 40,
        marginTop: 1,
    },
    parentLogin1: {
        fontFamily: "roboto-700",
        color: "rgba(78,45,135,1)",
        fontSize: 12,
        lineHeight: 12,
        marginLeft: 41,
        marginTop: 3,
    },
    customerLogin1Row: {
        height: 37,
        flexDirection: "row",
        marginTop: 3,
        marginLeft: 26,
        marginRight: 38,
    },
    rect3: {
        backgroundColor: "#ffff",
        shadowColor: "rgba(0,0,0,1)",
        borderRadius: 15,
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 2,
        shadowOpacity: 0.6,
        shadowRadius: 10,

    },
    rect4: {
        width: 139,
        height: 113,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 30,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        borderRadius: 15,
        backgroundColor: "rgba(78,45,135,1)",
    },
    image10: {
        width: 67,
        height: 63,
        // marginTop: 11,
        // marginLeft: 38,
    },
    oemLogin1: {
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginTop: 1,
        marginLeft: 32,
    },
    rect5: {
        width: 139,
        height: 113,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 30,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        borderRadius: 15,
        backgroundColor: "rgba(78,45,135,1)",
        marginLeft: 15,
        marginTop: 1,
    },
    employeeLogin1: {
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        // marginTop: 72,
        left: 0,
        position: "absolute",
    },
    image11: {
        width: 60,
        height: 48,
        justifyContent:"center",
        // marginTop: 15,
        // marginLeft: 50,
    },
    employeeLogin1Stack: {
        width: 114,
        height: 9,
        marginTop: 3,
        marginLeft: 12,
    },
    rect4Row: {
        height: 114,
        flexDirection: "row",
        marginTop: '5%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '5%'
    },
    rect6: {
        width: 139,
        height: 113,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 30,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        borderRadius: 15,
        backgroundColor: "rgba(78,45,135,1)",
    },
    giveSelfValidity1: {
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        top: 60,
        left: -6,
        position: "absolute",
    },
    image12: {
        width: 46,
        height: 48,
        marginLeft:10,
    },
    giveSelfValidity1Stack: {
        width: 12,
        height: 79,
        marginTop: 15,
        marginLeft: 9,
    },
    rect7: {
        width: 139,
        height: 113,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 30,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        borderRadius: 15,
        backgroundColor: "rgba(78,45,135,1)",
        marginLeft: 15,
    },
    image13: {
        width: 48,
        height: 48,
        marginTop: 10,
        marginLeft: 25,
    },
    image14: {
        width: 62,
        height: 61,
        top: 10,
        left: 40,
        position: "absolute",
    },
    downloadCertificate1: {
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        marginLeft: 20,
    },
    WalletLogin: {
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        top: 55,
        left: -5,
        position: "absolute",
    },
    rect6Row: {
        height: 113,
        flexDirection: "row",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '5%'
    },
    rect7Row: {
        height: 113,
        flexDirection: "row",

        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '5%'
    },
    rect9: {
        width: 139,
        height: 113,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3,
        },
        elevation: 30,
        shadowOpacity: 0.6,
        shadowRadius: 10,
        borderRadius: 15,
        backgroundColor: "rgba(78,45,135,1)",
    },




})

export default Trano_All_Login;