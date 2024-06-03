
import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, img, SafeAreaView } from "react-native";
import { useNavigation } from '@react-navigation/native';


function TechnicianHome(props) {
    const navigation = useNavigation();
    return (
        <SafeAreaView className=" flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>
        <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
            <View style={styles.container}>
                <View style={styles.rect2}>
                    <View style={styles.rect1}>
                        <TouchableOpacity onPress={() => navigation.navigate('Technicianinstallationform')}>
                            <View style={styles.imageRow}>
                                <Image
                                    source={require("../../../asset/check.png")}
                                    resizeMode="contain"
                                    style={styles.image}
                                ></Image>
                                <Text style={styles.loremIpsum2}>Installation{"\n"} Form</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.rect3}>
                    <View style={styles.loremIpsum3Stack}>
                        <TouchableOpacity onPress={() => navigation.navigate('TechnicianCertificate')}>
                            <View style={styles.rect4}>
                                <View style={styles.myInstallations2Row}>
                                    <Text style={styles.myInstallations2}>My Installations</Text>
                                    <View style={styles.rect8}>
                                        <View style={styles.all3Row}>
                                            <Text style={styles.all3}>All</Text>
                                            <Text style={styles.loremIpsum9}>360</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.rect5Row}>
                                    <TouchableOpacity onPress={() => navigation.navigate('TechnicianCertificate')}>
                                        <View style={styles.rect5}>
                                            <Text style={styles.today}>Today</Text>
                                            <Text style={styles.loremIpsum4}>10</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('TechnicianCertificate')}>
                                        <View style={styles.rect6}>
                                            <Text style={styles.thisWeek}>This{"\n"}Week</Text>
                                            <Text style={styles.loremIpsum5}>70</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('TechnicianCertificate')}>
                                        <View style={styles.rect7}>
                                            <Text style={styles.thisMonth}>This{"\n"}Month</Text>
                                            <Text style={styles.loremIpsum8}>200</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    rect2: {
        width: 334,
        height: 203,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginTop: 50,
        alignSelf: "center",
        borderRadius: 15
    },
    rect1: {
        width: 311,
        height: 171,
        backgroundColor: "rgba(78,45,135,1)",
        borderRadius: 15,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        flexDirection: "row",
        marginTop: 15,
        marginLeft: 13
    },
    image: {
        width: 114,
        height: 87
    },
    loremIpsum2: {
        fontWeight: "bold",
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 24,
        marginLeft: 23,
        marginTop: 14
    },
    imageRow: {
        height: 87,
        flexDirection: "row",
        flex: 1,
        marginRight: 39,
        marginLeft: 14,
        marginTop: 43
    },
    rect3: {

        width: 334,
        height: 313,
        backgroundColor: "rgba(233,233,233,1)",
        borderRadius: 15,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 30,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginTop: 21,

    },
    loremIpsum3: {
        top: 8,
        left: 99,
        position: "absolute",
        fontFamily: "roboto-regular",
        color: "#121212"
    },
    rect4: {
        top: 0,
        left: 0,
        width: 311,
        height: 250,
        position: "absolute",
        backgroundColor: "rgba(78,45,135,1)",
        borderRadius: 15
    },
    myInstallations2: {
        fontWeight: "bold",
        fontFamily: "roboto-700",
        color: "rgba(255,255,255,1)",
        fontSize: 18,
        marginTop: 5
    },
    rect8: {
        width: 96,
        height: 32,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        flexDirection: "row",
        marginLeft: 56
    },
    all3: {
        fontWeight: "bold",
        fontFamily: "roboto-700",
        color: "#121212",
        fontSize: 16,
        marginTop: 1
    },
    loremIpsum9: {
        fontWeight: "bold",
        fontFamily: "roboto-500",
        color: "rgba(78,45,135,1)",
        fontSize: 20,
        marginLeft: 13,
        marginTop: -2
    },
    all3Row: {
        height: 25,
        flexDirection: "row",
        flex: 1,
        marginRight: 14,
        marginLeft: 13,
        marginTop: 4
    },
    myInstallations2Row: {
        height: 32,
        flexDirection: "row",
        marginTop: 24,
        marginLeft: 15,
        marginRight: 15
    },
    rect5: {
        width: 89,
        height: 120,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15
    },
    today: {
        fontWeight: "bold",
        fontFamily: "roboto-500",
        color: "#121212",
        fontSize: 16,
        marginTop: 24,
        marginLeft: 20
    },
    loremIpsum4: {
        fontWeight: "bold",
        fontFamily: "roboto-500",
        color: "rgba(78,45,135,1)",
        fontSize: 20,
        marginTop: 27,
        marginLeft: 31
    },
    rect6: {
        width: 89,
        height: 120,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginLeft: 11
    },
    thisWeek: {
        fontWeight: "bold",
        fontFamily: "roboto-500",
        color: "#121212",
        fontSize: 16,
        marginTop: 13,
        marginLeft: 22
    },
    loremIpsum5: {
        fontWeight: "bold",
        fontFamily: "roboto-500",
        color: "rgba(78,45,135,1)",
        fontSize: 20,
        marginTop: 18,
        marginLeft: 30
    },
    rect7: {
        width: 89,
        height: 120,
        backgroundColor: "rgba(255,255,255,1)",
        borderRadius: 15,
        marginLeft: 10
    },
    thisMonth: {
        fontWeight: "bold",
        fontFamily: "roboto-500",
        color: "#121212",
        fontSize: 16,
        marginTop: 14,
        marginLeft: 22
    },
    loremIpsum8: {
        fontWeight: "bold",
        fontFamily: "roboto-500",
        color: "rgba(78,45,135,1)",
        fontSize: 20,
        marginTop: 17,
        marginLeft: 28
    },
    rect5Row: {
        height: 120,
        flexDirection: "row",
        marginTop: 23,
        marginLeft: 12,
        marginRight: 11
    },
    loremIpsum3Stack: {
        width: 311,
        height: 250,
        marginTop: 23,
        marginLeft: 11
    }
});

export default TechnicianHome;
