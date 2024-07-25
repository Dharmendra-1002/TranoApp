import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { DataTable } from 'react-native-paper';
import Orientation from 'react-native-orientation-locker';

const DistributorRoyalityAccount = () => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let isMounted = true;

    if (Orientation && isMounted) {
      if (isExpanded) {
        Orientation.lockToLandscape();
      } else {
        Orientation.unlockAllOrientations();
      }
    }

    return () => {
      isMounted = false;
      if (Orientation) {
        Orientation.unlockAllOrientations();
      }
    };
  }, [isExpanded]);

  const fullTableHead = [
    'S.No -', 'Date of Transaction -', 'Reference Transaction ID -', 'Reference Payment ID -', 'Number of SIMs - ',
    'Particulars -', 'Debit(Rs.) -', 'Credit(Rs.) -', 'Balance(Rs.) -'
  ];

  const collapsedTableHead = ['Date of Transaction -', 'Particulars -', 'Debit -', 'Credit -'];

  const fullTableData = [
    ['01', '2024-05-20', '4859585', 'ACC123', '2', '              --------------', '10000', '------', '15000'],
    ['01', '2024-05-20', '4859585', 'ACC123', '2', '              --------------', '------', '10000', '15000'],
    // Add more rows as needed
  ];

  const collapsedTableData = fullTableData.map(row => [row[1], row[5], row[6], row[7]]);

  return (
    <SafeAreaView className="flex-1 items-center bg-[#4e2d87]">
      <View className="bg-white w-[92%] h-[95%] rounded-2xl mt-5">
        <View className="flex-row justify-between items-center">
          <View className="flex-col">
            <Text className="underline text-lg font-bold ml-5 mt-5">
              Royality Account - Tripti [7634728]
            </Text>
          </View>
        </View>

        <View className="p-4">
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)} className="mb-3">
            <Text className="text-[#4e2d87] text-base">{isExpanded ? 'Collapse' : 'Expand'}</Text>
          </TouchableOpacity>
          <ScrollView horizontal>
            <DataTable>
              <DataTable.Header className="bg-[#4e2d87] rounded-2xl">
                {(isExpanded ? fullTableHead : collapsedTableHead).map((title, index) => (
                  <DataTable.Title key={index} className="justify-center px-1">
                    <Text className="text-white text-lg font-bold">{title}</Text>
                  </DataTable.Title>
                ))}
              </DataTable.Header>

              {(isExpanded ? fullTableData : collapsedTableData).map((row, rowIndex) => (
                <DataTable.Row key={rowIndex} className={rowIndex % 2 === 0 ? "bg-[#ddd6fe]" : "bg-[#e2e8f0]"}>
                  {row.map((cell, cellIndex) => (
                    <DataTable.Cell key={cellIndex} className="justify-center px-2">
                      <Text className={cellIndex === 0 ? "text-left" : "text-right"}>{cell}</Text>
                    </DataTable.Cell>
                  ))}
                </DataTable.Row>
              ))}
            </DataTable>
          </ScrollView>
          <View>
            <TouchableOpacity>
              <View className="flex-row justify-start w-[90%] py-2 px-2">
                <Text className="text-black text-lg font-bold mr-3">Total Debit</Text>
                <Text className="w-24 h-6 bg-[#F096A1] text-[#151B54] text-lg font-semibold text-center rounded-2xl ml-1 mt-3">1000</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex-row justify-start w-[90%] py-2 px-2">
                <Text className="text-black text-lg font-bold mr-3">Total Credit</Text>
                <Text className="w-24 h-6 bg-[#FEFE38] text-[#151B54] text-lg font-semibold text-center rounded-2xl ml-1">1000</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View className="flex-row justify-start w-[90%] py-2 px-2">
                <Text className="text-black text-lg font-bold mr-3">Balance</Text>
                <Text className="w-24 h-6 bg-[#4CBB16] text-[#151B54] text-lg font-semibold text-center rounded-2xl ml-3">1000</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DistributorRoyalityAccount;
