


import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Modal, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import RNPickerSelect from 'react-native-picker-select';

function HomeDeviceDashboardForm(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedName, setSelectedName] = useState("");

  const data = ["State1", "State2", "State3", "State4"]; // Example data

  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.selectNameStack}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Select Name..."
                value={selectedName}
                style={styles.selectName}
                editable={false}
              />
              <Icon name="chevron-small-down" style={styles.icon} />
            </View>
          </TouchableOpacity>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.modalView}>
            <FlatList
              data={data}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => {
                    setSelectedName(item);
                    setModalVisible(false);
                  }}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </Modal>

        <View style={styles.rect2Row}>
          <TouchableOpacity>
            <View style={styles.rect2}>
              <Text style={styles.loremIpsum}>
                No. of Installed{"\n"} Devices
              </Text>
              <View style={styles.rect3}>
                <Text style={styles.loremIpsum2}>10,000</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.rect4Stack}>
              <View style={styles.rect4}>
                <Text style={styles.devicesOnline}>Devices ONLINE</Text>
              </View>
              <View style={styles.rect5}>
                <Text style={styles.loremIpsum3}>7000</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rect6StackRow}>
          <TouchableOpacity>
            <View style={styles.rect6Stack}>
              <View style={styles.rect6}>
              <Text style={styles.loremIpsum9}>    Devices</Text>
                <Text style={styles.loremIpsum91}>    OFFLINE</Text>
              </View>
              <View style={styles.rect7}>
                <Text style={styles.loremIpsum4}>1000</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.rect8Stack}>
              <View style={styles.rect8}>
              <Text style={styles.loremIpsum9}>    OFFLINE</Text>
                <Text style={styles.loremIpsum91}>since 24 Hours</Text>
              </View>
              <View style={styles.rect9}>
                <Text style={styles.loremIpsum6}>700</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rect10Row}>
          <TouchableOpacity>
            <View style={styles.rect10}>
            <Text style={styles.loremIpsum9}>    OFFLINE</Text>
                <Text style={styles.loremIpsum91}>since 48 Hours</Text>
              <View style={styles.rect11}>
                <Text style={styles.loremIpsum8}>600</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.rect12Stack}>
              <View style={styles.rect12}>
                <Text style={styles.loremIpsum9}>    OFFLINE</Text>
                <Text style={styles.loremIpsum91}>since 72 Hours</Text>
              </View>
              <View style={styles.rect13}>
                <Text style={styles.loremIpsum10}>550</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.rect14Stack}>
          <TouchableOpacity>
            <View style={styles.rect14}>
              <Text style={styles.offlineSince7Days}>
                   OFFLINE{"\n"}since 7 Days
              </Text>
            </View>
            <View style={styles.rect15}>
              <Text style={styles.loremIpsum11}>400</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(78,45,135,1)"
  },
  rect: {
    width: 346,
    height: 679,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 10,
    alignSelf: "center"
  },
  selectName: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 286,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5
  },
  icon: {
    top: 0,
    left: 246,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    height: 44,
    width: 40
  },
  selectNameStack: {
    width: 286,
    height: 44,
    marginTop: 56,
    marginLeft: 29
  },
  rect2: {
    width: 129,
    height: 95,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginLeft:17
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 13,
    marginLeft: 11,
    fontWeight:"bold"

  },
  rect3: {
    width: 129,
    height: 43,
    left:-1,
    backgroundColor: "rgba(127,142,165,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 5
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 8,
    marginLeft: 34,
    fontWeight:"bold"

  },
  rect4: {
    top: 0,
    left: 1,
    width: 129,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  modalView: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 130,
    marginBottom:400,
    marginLeft:'50',
    marginHorizontal: 30,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth:2,
    borderColor:'#4e2d87'
  },
  option: {
    padding: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
   

  },
  optionText: {
    fontSize: 18,
  },
  devicesOnline: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 22,
    marginLeft: 7,
    fontWeight:"bold"
  },
  rect5: {
    top: 54,
    left: 1,
    width: 129,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(127,142,165,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  loremIpsum3: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 46,
    fontWeight:"bold"

  },
  rect4Stack: {
    width: 120,
    height: 85,
    marginLeft: 11
  },
  rect2Row: {
    height: 85,
    flexDirection: "row",
    marginTop: 21,
    marginLeft: 19,
    marginRight: 28
  },
  rect6: {
    top: 15,
    left: 7,
    width: 129,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  devicesOffline: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 23,
    marginLeft: 5
  },
  rect7: {
    top: 68,
    left: 7,
    width: 129,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(127,142,165,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 40,
    fontWeight:"bold"

  },
  rect6Stack: {
    width: 119,
    height: 86
  },
  rect8: {
    top: 15,
    left: -13,
    width: 129,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  loremIpsum5: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 15,
    marginLeft: 12
  },
  rect9: {
    top: 68,
    left: -13,
    width: 129,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(127,142,165,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  loremIpsum6: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 49
  },
  rect8Stack: {
    width: 120,
    height: 86,
    marginLeft: 41
  },
  rect6StackRow: {
    height: 86,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 30,
    marginRight: 28
  },
  rect10: {
    width: 129,
    height: 95,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop:25,
    marginLeft:10
  },
  loremIpsum7: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 11,
    marginLeft: 13,
    fontWeight:"bold"
 },
  rect11: {
    width: 129,
    height: 43,
    backgroundColor: "rgba(127,142,165,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 7,
    left:-1
  },
  loremIpsum8: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 8,
    marginLeft: 43
  },
  rect12: {
    top: 25,
    left: -30,
    width: 129,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  loremIpsum9: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop: 12,
    marginLeft: 12,
    fontWeight:"bold"
  },
  loremIpsum91: {
    fontFamily: "roboto-700",
    color: "#121212",
    marginTop:-3,
    marginLeft: 12,
    fontWeight:"bold"

  },
  rect13: {
    top: 79,
    left: -30,
    width: 129,
    height: 43,
    position: "absolute",
    backgroundColor: "rgba(127,142,165,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  loremIpsum10: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    marginTop: 9,
    marginLeft: 47,
    fontWeight:"bold"

  },
  rect12Stack: {
    width: 120,
    height: 85,
    marginLeft: 41
  },
  rect10Row: {
    height: 85,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 29,
    marginRight: 28
  },
  rect14: {
    top: 38,
    left: 10,
    width: 129,
    height: 95,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  offlineSince7Days: {
    fontFamily: "roboto-700",
    color: "#FF0000",
    marginTop: 10,
    marginLeft: 15,
    fontWeight:"bold",
    fontSize:15
  },
  rect15: {
    top: 92,
    left: 10,
    width: 129,
    height: 45,
    position: "absolute",
    backgroundColor: "rgba(127,142,165,1)",
    borderWidth: 1,
    borderColor: "rgba(78,45,135,1)",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 30,
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  loremIpsum11: {
    fontFamily: "roboto-regular",
    color: "#FF0000",
    marginTop: 7,
    marginLeft: 41,
    fontWeight:"bold"
  },
  rect14Stack: {
    width: 120,
    height: 85,
    marginTop: 15,
    marginLeft: 29
  }
});

export default HomeDeviceDashboardForm;
