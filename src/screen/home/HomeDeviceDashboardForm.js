import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

function HomeDeviceDashboardForm(props) {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#4e2d87' }}>
      {/* Outer View to contain the main content with white background */}
      <View style={{ backgroundColor: 'white', width: '92%', height: '95%', borderRadius: 10, alignItems: 'center' }}>
        {/* Row to hold search input and select menu */}
        <View style={{ width: '100%', paddingHorizontal: 12, marginTop: 20 }}>
          <TextInput
            style={{ backgroundColor: '#f0f0f0', borderRadius: 10, padding: 12, marginBottom: 12 }}
            placeholder="Search..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingHorizontal: 12 }}>
          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>No of Installed Devices</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>10,000</Text>
          </View>

          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Devices Online</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>8,000</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingHorizontal: 12 }}>
          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Devices Offline</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>7,000</Text>
          </View>

          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 24 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>1,000</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingHorizontal: 12 }}>
          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 48 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>700</Text>
          </View>

          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 72 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>600</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 16, paddingHorizontal: 12 }}>
          <View style={{ backgroundColor: '#5f3da3', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 7 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: 'white', marginVertical: 8 }} />
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>550</Text>
          </View>

          <View style={{ backgroundColor: '#ffffff', borderRadius: 10, padding: 12, width: '48%', height: 90, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6 }}>
            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>Offline Since 72 Hours</Text>
            <View style={{ width: '100%', height: 2, backgroundColor: '#fff', marginVertical: 8 }} />
            <Text style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}>600</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeDeviceDashboardForm;

