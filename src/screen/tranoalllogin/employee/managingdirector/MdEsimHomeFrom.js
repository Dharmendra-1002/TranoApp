



import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Using Material Icons

const MdEsimHomeFrom = () => {
  const [isCollapsedBsnlVi, setIsCollapsedBsnlVi] = useState(true);
  const [isCollapsedAirtelBsnl, setIsCollapsedAirtelBsnl] = useState(true);
  const [isCollapsedViBsnl, setIsCollapsedViBsnl] = useState(true);

  const toggleCollapseBsnlVi = () => {
    setIsCollapsedBsnlVi(!isCollapsedBsnlVi);
  };

  const toggleCollapseAirtelBsnl = () => {
    setIsCollapsedAirtelBsnl(!isCollapsedAirtelBsnl);
  };

  const toggleCollapseViBsnl = () => {
    setIsCollapsedViBsnl(!isCollapsedViBsnl);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#4e2d87' }}>
      <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
        <View style={{ width: '92%', backgroundColor: 'white', borderRadius: 10, marginTop: 20 }}>
          <View>
            <Text style={{ fontSize: 16, marginLeft: 20, marginTop: 10 }}>E-SIM</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Allocated Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Balance Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10 ,borderRadius:10,width:110}}>BSNL+VI</Text>
              <TouchableOpacity onPress={toggleCollapseBsnlVi} style={{ marginLeft: 10 }}>
                <Icon name={isCollapsedBsnlVi ? 'expand-more' : 'expand-less'} size={24} color="black" />
              </TouchableOpacity>
            </View>



            <View style={{ backgroundColor: '#e2e8f0', width: '95%', borderRadius: 10, marginTop: 20 }}>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10}}>Allocated Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Balance Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
            </View>

            {!isCollapsedBsnlVi && (
              <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 4 }}>New SIM</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>BootStrap</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Commercial {"\n"} Activation</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      height: 42,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Safe Custody</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Expired</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Suspended</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
              </View>
            )}

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10 ,borderRadius:10}}>Airtel+BSNL</Text>
              <TouchableOpacity onPress={toggleCollapseAirtelBsnl} style={{ marginLeft: 10 }}>
                <Icon name={isCollapsedAirtelBsnl ? 'expand-more' : 'expand-less'} size={24} color="black" />
              </TouchableOpacity>
            </View>


            <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Allocated Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Balance Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
            </View>

            {!isCollapsedAirtelBsnl && (
              <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>New SIM</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>BootStrap</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Commercial {"\n"} Activation</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      height: 42,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Safe Custody</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Expired</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Suspended</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
              </View>
            )}

            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
              <Text style={{ fontSize: 16, color: 'white', backgroundColor: '#4e2d87', padding: 10 ,borderRadius:10 , width:110}}>Vi+BSNL</Text>
              <TouchableOpacity onPress={toggleCollapseViBsnl} style={{ marginLeft: 10 }}>
                <Icon name={isCollapsedViBsnl ? 'expand-more' : 'expand-less'} size={24} color="black" />
              </TouchableOpacity>
            </View>


            <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Allocated Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
              <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 16, marginTop:10}}>Balance Stock</Text>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: 'black',
                    padding: 5,
                    borderRadius: 5,
                    backgroundColor: 'white',
                    marginTop: 4,
                    width: 180,
                    marginLeft: 'auto'
                  }}
                  placeholder=""
                />
              </View>
            </View>


            {!isCollapsedViBsnl && (
              <View style={{ backgroundColor: '#e2e8f0', width: '92%', borderRadius: 10, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>New SIM</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>BootStrap</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10}}>Commercial {"\n"} Activation</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      height: 42,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Safe Custody</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Expired</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Suspended</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                  <Text style={{ color: 'black', fontSize: 16, marginTop: 10 }}>Total</Text>
                  <TextInput
                    style={{
                      borderWidth: 1,
                      borderColor: 'black',
                      padding: 5,
                      borderRadius: 5,
                      backgroundColor: 'white',
                      marginTop: 4,
                      width: 180,
                      marginLeft: 'auto'
                    }}
                    placeholder=""
                  />
                </View>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MdEsimHomeFrom;
