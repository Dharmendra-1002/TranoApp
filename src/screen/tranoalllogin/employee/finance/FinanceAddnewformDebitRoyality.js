
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Modal, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

function FinanceAddnewformDebitRoyality(props) {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedName, setSelectedName] = useState("");
const data = ["State1", "State2", "State3", "State4"]; // Example data
const data2 = ["Option1", "Option2", "Option3", "Option4"]; // Example data2
const data3 = ["Option5", "Option6", "Option8", "Option9"]; // Example data3
const data4 = ["Option10", "Option11", "Option12", "Option13"]; // Example data3
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.loremIpsum}>New Debit Royality Account</Text>
        <Text style={styles.date}>Date</Text>
        <TextInput
          placeholder="Select Date..."
          style={styles.selectDate}
        ></TextInput>
       
        <Text style={styles.loremIpsum2}>
          Select Associate Partner/{"\n"}Channel Partner
        </Text>
            <View style={styles.selectNameStack}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Select Date..." 
                value={selectedName}
                style={styles.selectDate}
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
              data={data2}
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
        <Text style={styles.selectFromDropdown}>Select from Dropdown</Text>
       
        <View style={styles.selectNameStack}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Select Date..." 
                value={selectedName}
                style={styles.selectDate}
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
              data={data3}
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
        <Text style={styles.debitAmountRs}>Debit Amount (Rs.)</Text>
       
        <TextInput
          placeholder="placeholder"
          style={styles.placeholder3}
        ></TextInput>
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
    width: 361,
    height: 706,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 10,
    marginTop: 22,
    marginLeft: 14
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 55,
    marginLeft: 22
  },
  date: {
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    marginTop: 13,
    marginLeft: 26
  },
  selectDate: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: 302,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginLeft: 26
  },
  loremIpsum2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 12,
    marginLeft: 26
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: 302,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginLeft: 26
  },
  selectFromDropdown: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    marginTop: 20,
    marginLeft: 26
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: 302,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginTop: 3,
    marginLeft: 25
  },
  debitAmountRs: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 18,
    textAlign: "center",
    marginTop: 21,
    marginLeft:-160
  },
  placeholder3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 40,
    width: 302,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 5,
    marginTop: 1,
    marginLeft: 26
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
  }
});

export default FinanceAddnewformDebitRoyality;