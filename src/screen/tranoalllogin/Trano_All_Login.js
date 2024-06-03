import { StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Trano_All_Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <ScrollView>
                <View style={styles.rect8Stack}>
                    <View style={styles.rect8} className='items-center  justify-center'>
                        <Image
                            source={require("../../asset/ctpllogo.png")}
                            resizeMode='cover' className="w-72 h-16 mr-28"
                        />
                    </View>
                    <View className='justify-end items-end pt-10 mx-10'>

                        <View className=' w-24 h-24 border-white bg-[#432d87] border-[8px] absolute rounded-full justify-center items-center '>
                            <Image source={require("../../asset/car.png")}
                                resizeMode='cover' className="w-14 h-14" />
                        </View>
                    </View>
                </View>
                <View className='px-4 py-5'>
                    <View style={styles.rect2} className='py-5'>
                        <View className=' flex-row items-center justify-between space-x-2 px-4'>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} className='w-[33%] flex-col items-center justify-center'>
                                <Image
                                    source={require("../../asset/person.png")}
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
                        <View className='flex-row space-x-2 mt-2 px-4 items-center justify-center'>
                            <TouchableOpacity onPress={() => navigation.navigate('CustomerLogin')} className='w-[33%] flex-col items-center justify-center'>
                                <Text className='font-normal text-lg text-[#4e2d87]'>Customer Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Distributor')} className='w-[33%] flex-col items-center justify-center'>
                                <Text className='font-normal text-lg text-[#4e2d87]'>DistributorDealer Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} className='w-[33%] flex-col items-center justify-center'>
                                <Text className='font-normal text-lg text-[#4e2d87]'>Parent Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View className='px-4 py-4'>
                    <View className='space-y-3' style={styles.rect3}>

                        <View className=' flex-row w-[100%] justify-between' >
                            <TouchableOpacity onPress={() => navigation.navigate('OemLogin')} className=' bg-[#4e2d87] w-[48%] items-center justify-center py-3 rounded-md'>
                            <View >
                                    <Image
                                        source={require("../../asset/manu.png")}
                                        resizeMode="contain"
                                        style={styles.image10}
                                    />
                                    <Text className='text-white'>OEM Login</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('ManagersLogin')} className=' bg-[#4e2d87] w-[48%] items-center justify-center py-3 rounded-md '>
                            <View >
                                <Image
                                        source={require("../../asset/empl.png")}
                                        resizeMode="contain"
                                        style={styles.image13}
                                    />
                              
                                    <Text style={styles.downloadCertificate1}>Employee{"\n"}Login</Text>
                                    
                                </View>
                            </TouchableOpacity>
                        </View>
                     
                        <View className=' flex-row w-[100%] justify-between' >
                            <TouchableOpacity onPress={() => navigation.navigate('Give_Self_Validity')}className=' bg-[#4e2d87] w-[48%] items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Text style={styles.giveSelfValidity1}>Give Self Validity</Text>
                                    <Image
                                        source={require("../../asset/self.png")}
                                        resizeMode="contain"
                                        style={styles.image13}  
                                    />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Tranocertificate')}className=' bg-[#4e2d87] w-[48%] items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/downwhite.png")}
                                        resizeMode="contain"
                                        style={styles.image13}
                                    />
                                    <Text style={styles.downloadCertificate1}>Download{"\n"}Certificate</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                      
                        <View className=' flex-row w-[100%] justify-between' >
                            <TouchableOpacity onPress={() => navigation.navigate('WalletLogin')}className=' bg-[#4e2d87] w-[48%] items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/wallet.png")}
                                        resizeMode="contain"
                                        style={styles.image12}
                                    />
                                    <Text style={styles.WalletLogin}>Wallet Login</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('TechnicianLogin')}className=' bg-[#4e2d87] w-[48%] items-center justify-center py-3 rounded-md'>
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
                            <TouchableOpacity onPress={() => navigation.navigate('AssociateLogin')}className=' bg-[#4e2d87] w-[48%] items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/agreement.png")}
                                        resizeMode="contain"
                                        style={styles.image12}
                                    />
                                    <Text style={styles.WalletLogin}>Associate{"\n"}Partner</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('ChannelLogin')}className=' bg-[#4e2d87] w-[48%] items-center justify-center py-3 rounded-md'>
                                <View >
                                    <Image
                                        source={require("../../asset/channels.png")}
                                        resizeMode="contain"
                                        style={styles.image13}
                                    />
                                    <Text style={styles.downloadCertificate1}>Channel{"\n"}Partner</Text>
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
   
     
       
        backgroundColor: "rgba(255,255,255,1)",
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
        height: 42,
      
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
        marginTop: 15,
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