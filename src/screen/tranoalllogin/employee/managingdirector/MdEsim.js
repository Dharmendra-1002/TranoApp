import React, { Component, useState } from "react";
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity ,SafeAreaView} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';
import DropDownItem from 'react-native-drop-down-item';


function MdEsim(props) {

  const navigation = useNavigation();

  const [isDrop, setIsDrop] = useState(false)
  const [isDrops, setIsDrops] = useState(false)
  const [isDrops1, setIsDrops1] = useState(false)
  const containerStyle = isDrops ? styles.containerCentered : styles.containerLeft;


  return (
    <SafeAreaView className=" flex-1 items-center" style={{backgroundColor: '#4e2d87'}}>
     <View className="bg-white w-[92%] h-[95%] rounded-md mt-5">
    <ScrollView Vertical={true} style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.VerticleContent}>
          <Text style={styles.eSims}>E-Sims</Text>
          <View style={styles.loremIpsumRow}>
            <Text style={styles.loremIpsum}></Text>
            <View style={styles.rect3}>
              <View style={styles.totalStockRow}>
                <Text style={styles.totalStock}>Total Stock</Text>
                <View style={styles.rect}>
                  <TextInput
                    placeholder=""
                    style={styles.placeholder}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.allocatedStockRow}>
                <Text style={styles.allocatedStock}>Allocated Stock</Text>
                <View style={styles.rect1}>
                  <TextInput
                    placeholder=""
                    style={styles.placeholder2}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.balanceStockRow}>
                <Text style={styles.balanceStock}>Balance Stock</Text>
                <View style={styles.rect2}>
                  <TextInput
                    placeholder=""
                    style={styles.placeholder3}
                  ></TextInput>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rect12}>
            <Text style={styles.viBsnl}>BSNL + VI</Text>
          </View>
       
          <TouchableOpacity onPress={() => setIsDrop(!isDrop)}>
            <View style={containerStyle}>
              <Icon name="caret-down" style={styles.icon3} size={32} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.rect3}>
      <View style={styles.stockInward2Row}>
            <Text style={styles.stockInward2}>Stock Inward</Text>
            <View style={styles.rect13Stack}>
              <View style={styles.rect13}></View>
              <TextInput
                placeholder=""
                style={styles.placeholder10}
              ></TextInput>
            </View>
          </View>
          <View style={styles.allocated4Row}>
            <Text style={styles.allocated4}>Allocated</Text>
            <View style={styles.rect14Stack}>
              <View style={styles.rect14}></View>
              <TextInput
                placeholder=""
                style={styles.placeholder11}
              ></TextInput>
            </View>
          </View>
          <View style={styles.balance4Row}>
            <Text style={styles.balance4}>Balance</Text>
            <View style={styles.rect15}>
              <TextInput
                placeholder=""
                style={styles.placeholder12}
              ></TextInput>
            </View>
          </View>
          </View>
          {
            isDrop && (

              <View>



                <Text>{"\n"}</Text>
                {/* <br></br> */}

                <View>
                  <View style={styles.rect16}>
                  <View style={styles.newSimRow}>
                    <Text style={styles.newSim}>New SIM</Text>
                    <View style={styles.rect17}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder13}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.bootstrapRow}>
                    <Text style={styles.bootstrap}>Bootstrap</Text>
                    <View style={styles.rect18}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder14}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.loremIpsum2Row}>
                    <Text style={styles.loremIpsum2}>Commercial{"\n"}Activation</Text>
                    <View style={styles.rect19}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder15}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.safeCustodyRow}>
                    <Text style={styles.safeCustody}>Safe Custody</Text>
                    <View style={styles.rect20}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder16}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.expiredRow}>
                    <Text style={styles.expired}>Expired</Text>
                    <View style={styles.rect21}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder17}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.suspendedRow}>
                    <Text style={styles.suspended}>Suspended</Text>
                    <View style={styles.rect22}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder18}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.totalRow2}>
                    <Text style={styles.total2}>TOTAL</Text>
                    <View style={styles.rect23}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder19}
                      ></TextInput>
                    </View>
                  </View>
                  </View>
                </View>
              </View>
            )
          }
          

         





          <View style={styles.rect12}>
            <Text style={styles.airtelBsnl}>Airtel + BSNL</Text>
          </View>
          {/* <TouchableOpacity>
      <Icon name="caret-down" style={styles.icon2} size={22} color="grey" ></Icon>
      </TouchableOpacity> */}
          <TouchableOpacity onPress={() => setIsDrops(!isDrops)}>
            <View style={containerStyle}>
              <Icon name="caret-down" style={styles.icon3} size={32} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.rect3}>
      <View style={styles.stockInward2Row}>
            <Text style={styles.stockInward2}>Stock Inward</Text>
            <View style={styles.rect13Stack}>
              <View style={styles.rect13}></View>
              <TextInput
                placeholder=""
                style={styles.placeholder10}
              ></TextInput>
            </View>
          </View>
          <View style={styles.allocated4Row}>
            <Text style={styles.allocated4}>Allocated</Text>
            <View style={styles.rect14Stack}>
              <View style={styles.rect14}></View>
              <TextInput
                placeholder=""
                style={styles.placeholder11}
              ></TextInput>
            </View>
          </View>
          <View style={styles.balance4Row}>
            <Text style={styles.balance4}>Balance</Text>
            <View style={styles.rect15}>
              <TextInput
                placeholder=""
                style={styles.placeholder12}
              ></TextInput>
            </View>
          </View>
          </View>

         
          {
            isDrops && (

              <View>



                <Text>{"\n"}</Text>
                {/* <br></br> */}

                <View>
                  <View style={styles.rect16A}>
                  <View style={styles.newSimRow}>
                    <Text style={styles.newSim}>New SIM</Text>
                    <View style={styles.rect17}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder13}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.bootstrapRow}>
                    <Text style={styles.bootstrap}>Bootstrap</Text>
                    <View style={styles.rect18}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder14}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.loremIpsum2Row}>
                    <Text style={styles.loremIpsum2}>Commercial{"\n"}Activation</Text>
                    <View style={styles.rect19}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder15}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.safeCustodyRow}>
                    <Text style={styles.safeCustody}>Safe Custody</Text>
                    <View style={styles.rect20}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder16}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.expiredRow}>
                    <Text style={styles.expired}>Expired</Text>
                    <View style={styles.rect21}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder17}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.suspendedRow}>
                    <Text style={styles.suspended}>Suspended</Text>
                    <View style={styles.rect22}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder18}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.totalRow2}>
                    <Text style={styles.total2}>TOTAL</Text>
                    <View style={styles.rect23}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder19}
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </View>
              </View>
            )
          }



          <View style={styles.rect12}>
            <Text style={styles.viBsnl}>VI + BSNL</Text>
          </View>
          {/* <TouchableOpacity>
      <Icon name="caret-down" style={styles.icon2} size={22} color="grey" ></Icon>
      </TouchableOpacity> */}
          <TouchableOpacity onPress={() => setIsDrops1(!isDrops1)}>
            <View style={containerStyle}>
              <Icon name="caret-down" style={styles.icon3} size={32} color="black" />
            </View>
          </TouchableOpacity>
          <View style={styles.rect3}>
      <View style={styles.stockInward2Row}>
            <Text style={styles.stockInward2}>Stock Inward</Text>
            <View style={styles.rect13Stack}>
              <View style={styles.rect13}></View>
              <TextInput
                placeholder=""
                style={styles.placeholder10}
              ></TextInput>
            </View>
          </View>
          <View style={styles.allocated4Row}>
            <Text style={styles.allocated4}>Allocated</Text>
            <View style={styles.rect14Stack}>
              <View style={styles.rect14}></View>
              <TextInput
                placeholder=""
                style={styles.placeholder11}
              ></TextInput>
            </View>
          </View>
          <View style={styles.balance4Row}>
            <Text style={styles.balance4}>Balance</Text>
            <View style={styles.rect15}>
              <TextInput
                placeholder=""
                style={styles.placeholder12}
              ></TextInput>
            </View>
          </View>
          </View>

          {
            isDrops1 && (

              <View>



                <Text>{"\n"}</Text>
                {/* <br></br> */}

                <View>
                  <View style={styles.rect16B}>
                  <View style={styles.newSimRow}>
                    <Text style={styles.newSim}>New SIM</Text>
                    <View style={styles.rect17}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder13}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.bootstrapRow}>
                    <Text style={styles.bootstrap}>Bootstrap</Text>
                    <View style={styles.rect18}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder14}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.loremIpsum2Row}>
                    <Text style={styles.loremIpsum2}>Commercial{"\n"}Activation</Text>
                    <View style={styles.rect19}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder15}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.safeCustodyRow}>
                    <Text style={styles.safeCustody}>Safe Custody</Text>
                    <View style={styles.rect20}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder16}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.expiredRow}>
                    <Text style={styles.expired}>Expired</Text>
                    <View style={styles.rect21}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder17}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.suspendedRow}>
                    <Text style={styles.suspended}>Suspended</Text>
                    <View style={styles.rect22}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder18}
                      ></TextInput>
                    </View>
                  </View>
                  <View style={styles.totalRow2}>
                    <Text style={styles.total2}>TOTAL</Text>
                    <View style={styles.rect23}>
                      <TextInput
                        placeholder=""
                        style={styles.placeholder19}
                      ></TextInput>
                    </View>
                  </View>
                </View>
              </View>
              </View>
            )
          }
        </View>
      </View>
    </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    borderWidth: 0,
    borderColor: "#000000",
    height: 1650,
   

  },
  eSims: {
    
    color: "rgba(78,45,135,1)",
    fontWeight: "bold",
    fontSize: 19,
    marginTop: 28,
    marginLeft: 50
  },
  loremIpsum: {
   
    color: "#121212",
    marginLeft: -1,
    marginTop: 92
  },
  rect3: {
    width: 300,
    height: 123,
    backgroundColor: "#e9e9e9",
    borderColor: "#000000",
    marginLeft: 40,
    borderRadius:15
  },
  BorderDropdown: {
    width: 350,
    height: 230,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginLeft: 10
  },
  totalStock: {
    fontWeight:"bold",
    color: "#121212"
  },
  rect: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 42,
    marginTop:-5
  },
  placeholder: {
    
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  totalStockRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 9,
    marginRight: 56
  },
  allocatedStock: {
    fontWeight:"bold",
    color: "#121212"
  },
  rect1: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 14,
    marginTop:-5
  },
  placeholder2: {
   
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  allocatedStockRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 9,
    marginRight: 56
  },
  balanceStock: {
    fontWeight:"bold",
    color: "#121212",
    marginLeft: -1
  },
  rect2: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 25,
    marginTop:-5
  },
  placeholder3: {
    
    color: "#121212",
    height: 28,
    width: 113,
    marginTop: 1,
    marginLeft: 10
  },
  balanceStockRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 9,
    marginRight: 56
  },
  loremIpsumRow: {
    height: 123,
    flexDirection: "row",
    marginTop: 3,
    marginLeft: 7,
    marginRight: 38
  },
  rect4: {
    width: 120,
    height: 25,
    backgroundColor: "rgba(254,190,64,1)",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginLeft: -1,
    marginTop: 1
  },
  bsnlVi: {
    
    color: "rgba(255,255,255,1)",
    marginTop: 3,
    marginLeft: 28
  },


  rect4Row: {
    height: 25,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 114,
    marginRight: 96
  },
  stockInward: {
    fontWeight:"bold",
    color: "#121212"
  },
  rect5: {
    width: 133,
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 32
  },
  placeholder4: {
   
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  stockInwardRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 23,
    marginLeft: 20,
    marginRight: 94
  },
  allocated2: {
    fontWeight:"bold",
    color: "#121212",
    marginTop: 1
  },
  rect6: {
    top: 1,
    left: 0,
    width: 133,
    height: 23,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15
  },
  placeholder5: {
    top: 0,
    left: 10,
    position: "absolute",
    
    color: "#121212",
    height: 28,
    width: 113
  },
  rect6Stack: {
    width: 133,
    height: 18,
    marginLeft: 54
  },
  allocated2Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 94
  },
  balance2: {
   
    color: "#121212"
  },
  rect7: {
    top: 1,
    left: 0,
    width: 133,
    height: 23,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000000"
  },
  placeholder6: {
    top: 0,
    left: 10,
    position: "absolute",
   
    color: "#121212",
    height: 28,
    width: 113
  },
  rect7Stack: {
    width: 133,
    height: 18,
    marginLeft: 62
  },
  balance2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 20,
    marginRight: 95
  },
  rect8: {
    width: 120,
    height: 25,
    backgroundColor: "rgba(254,190,64,1)",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 29,
    marginLeft: 115
  },
  airtelBsnl: {
   fontWeight:"bold",
    color: "rgba(255,255,255,1)",
    marginTop: 6,
    marginLeft: 17
  },

  stockInward1: {
    
    color: "#121212"
  },
  rect9: {
    width: 133,
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 32
  },
  placeholder7: {
    
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  stockInward1Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 20,
    marginRight: 94
  },
  allocated3: {
    
    color: "#121212"
  },
  rect10: {
    width: 133,
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 53
  },
  placeholder8: {
   
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  allocated3Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 20,
    marginRight: 95
  },
  balance3: {
   
    color: "#121212"
  },
  rect11: {
    width: 133,
    height: 23,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 15,
    marginLeft: 62
  },
  placeholder9: {
   
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  balance3Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 20,
    marginRight: 95
  },
  rect12: {
    width: 120,
    height: 35,
    backgroundColor: "#4e2d87",
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    marginTop: 40,
    marginLeft: 115
  },
  viBsnl: {
    fontWeight:"bold",
    color: "rgba(255,255,255,1)",
    marginTop: 8,
    marginLeft: 30
  },
  stockInward2: {
    fontWeight:"bold",
    color: "#121212",
    marginTop: 1
  },
  rect13: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 3,
    marginTop:-5
  },
  placeholder10: {
    top: -3,
    left: 15,
    position: "absolute",
    
    color: "#121212",
    height: 28,
    width: 113
  },
  rect13Stack: {
    width: 133,
    height: 18,
    marginLeft: 33
  },

  hairlineWidth: {
    width: 50,
  },
  stockInward2Row: {
    height: 18,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 19,
    marginRight: 94
  },
  allocated4: {
    fontWeight:"bold",
    color: "#121212",
    marginTop: 3
  },
  rect14: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 4,
    marginTop:-5
  },
  placeholder11: {
    top: -3,
    left: 15,
    position: "absolute",
   
    color: "#121212",
    height: 28,
    width: 113
  },
  rect14Stack: {
    width: 133,
    height: 18,
    marginLeft: 53
  },
  allocated4Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 20,
    marginRight: 95
  },
  balance4: {
    fontWeight:"bold",
    color: "#121212"
  },
  rect15: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 66,
    marginTop:-5
  },
  placeholder12: {
    
    color: "#121212",
    height: 28,
    width: 117,
    marginLeft: 10
  },
  balance4Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 16,
    marginLeft: 20,
    marginRight: 95
  },
  rect16: {
    width: 300,
    height: 260,
    backgroundColor: "#e9e9e9",
    borderColor: "#000000",
    marginLeft: 40,
    borderRadius:15,
    marginTop:-10
  },
  rect16A:{
    width: 300,
    height: 260,
    backgroundColor: "#e9e9e9",
    borderColor: "#000000",
    marginLeft: 40,
    borderRadius:15,
    marginTop:-10
  },
  rect16B:{
    width: 300,
    height: 260,
    backgroundColor: "#e9e9e9",
    borderColor: "#000000",
    marginLeft: 40,
    borderRadius:15,
    marginTop:-10
  },

  newSim: {

    fontWeight:"bold",
    color: "#121212",
    marginTop: 1,

  },
  rect17: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 60,
    marginTop:-5
  },
  placeholder13: {
    
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  newSimRow: {
    height: 18,
    flexDirection: "row",
    marginTop: 7,
    marginLeft: 20,
    marginRight: 95
  },

  boxContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    height: 200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  bootstrap: {
    fontWeight:"bold",
    color: "#121212"
  },
  rect18: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 55,
    marginTop:0
  },
  placeholder14: {
   
    color: "#121212",
    height: 28,
    width: 117,
    marginLeft: 10
  },
  bootstrapRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 20,
    marginRight: 95
  },
  loremIpsum2: {
    fontWeight:"bold",
    color: "#121212"
  },
  rect19: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 42,
    marginTop:5
  },
  placeholder15: {
   
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  loremIpsum2Row: {
    height: 33,
    flexDirection: "row",
    marginTop: 12,
    marginLeft: 18,
    marginRight: 95
  },
  safeCustody: {
    fontWeight:"bold",
    color: "#121212"
  },
  rect20: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 33,
    marginTop:-8
  },
  placeholder16: {
   
    color: "#121212",
    height: 28,
    width: 115,
    marginLeft: 10
  },
  safeCustodyRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 20,
    marginRight: 97
  },
  expired: {
    top:5,
    fontWeight:"bold",
    color: "#121212"
  },
  rect21: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 69,
    marginTop:-2
  },
  placeholder17: {
   
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  expiredRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 98
  },
  suspended: {
    top:10,
    fontWeight:"bold",
    color: "#121212"
  },
  rect22: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 48,
    marginTop:4
  },
  placeholder18: {
  
    color: "#121212",
    height: 28,
    width: 112,
    marginLeft: 10
  },
  suspendedRow: {
    height: 17,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 18,
    marginRight: 97
  },
  total2: {
    fontWeight:"bold",
    color: "#121212",
    marginTop: 15,
    marginLeft: 20
  },
  rect23: {
    width: 133,
    height: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "#4e2d87",
    borderRadius: 10,
    marginLeft: 49,
    marginTop:10

  },
  placeholder19: {
   
    color: "#121212",
    height: 28,
    width: 113,
    marginLeft: 10
  },
  totalRow2: {
    height: 32,
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 25,
    marginRight: 97
  },
  icon2: {

    marginTop: -20,
    marginBottom: 0,
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    marginLeft: 130,
    flexDirection: "row"
  },
  icon3: {
    // marginLeft:245,
    // marginTop:-25
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    marginLeft: 245,
    flexDirection: "row",
    marginTop: -20
  },
  containerStyle: {
    marginBottom: 2,
    marginTop: 5,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 22,
    marginLeft: 13,
    flexDirection: "row"
  },
});

export default MdEsim;
