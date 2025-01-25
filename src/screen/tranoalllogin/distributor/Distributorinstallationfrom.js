// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { TextInput, Button } from 'react-native-paper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ImageCropPicker from 'react-native-image-crop-picker';
// import useApi from '../../../customhook/useApi'; 
// import { useRoute } from '@react-navigation/native'; // Assuming you have a custom hook for API calls

// const DistributorInstallationForm = () => {
//     const [token, setToken] = useState(null);
//     const [vehicleMake, setVehicleMake] = useState('');
//     const [vehicleModel, setVehicleModel] = useState('');
//     const [image, setImage] = useState(null);
//     const [showVehicleMakeSuggestions, setShowVehicleMakeSuggestions] = useState(false); // Separate state for vehicle make suggestions
//     const [showVehicleModelSuggestions, setShowVehicleModelSuggestions] = useState(false); // Separate state for vehicle model suggestions
    

//     const route = useRoute();
//     const userId = route.params?.userId;

//     const { data: vehicleMakes, fetchData: fetchVehicleMakes, setData: setVehicleMakes } = useApi(
//         'http://testing-only-erp-api.containe.in/VehicleMake/AutoCompleteVehicleMake',
//         token
//     );

//     const { data: vehicleModels, fetchData: fetchVehicleModels, setData: setVehicleModels } = useApi(
//         'http://testing-only-erp-api.containe.in/VehicleModel/AutoCompleteVehicleModel',
//         token
//     );

//     const vehicleMakeInputRef = useRef(null);
//     const vehicleModelInputRef = useRef(null);

//     useEffect(() => {
//         const fetchToken = async () => {
//             try {
//                 const storedToken = await AsyncStorage.getItem('userToken');
//                 if (storedToken) setToken(storedToken);
//             } catch (error) {
//                 console.error('Failed to fetch token:', error);
//             }
//         };
//         fetchToken();
//     }, []);

//     const handleImageSelection = async () => {
//         try {
//             const pickedImage = await ImageCropPicker.openPicker({
//                 width: 300,
//                 height: 400,
//                 cropping: true,
//                 includeBase64: true,
//             });
//             setImage({ uri: `data:${pickedImage.mime};base64,${pickedImage.data}` });
//         } catch (error) {
//             console.error('Error selecting image:', error);
//         }
//     };

//     const handleVehicleMakeChange = (text) => {
//         setVehicleMake(text);
//         if (text.length >= 3) fetchVehicleMakes({ prefix: text });
//         setShowVehicleMakeSuggestions(true); // Ensure suggestions are shown when typing
//     };

//     const handleVehicleModelChange = (text) => {
//         setVehicleModel(text);
//         if (text.length >= 3) fetchVehicleModels({ prefix: text });
//         setShowVehicleModelSuggestions(true); // Ensure suggestions are shown when typing
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 ref={vehicleMakeInputRef}
//                 mode="outlined"
//                 label="Vehicle Make"
//                 value={vehicleMake}
//                 onChangeText={handleVehicleMakeChange}
//                 style={{ marginBottom: 27 }}
//             />
//             {showVehicleMakeSuggestions && vehicleMakes?.map((make, index) => (
//                 <TouchableOpacity
//                     key={index}
//                     onPress={() => {
//                         setVehicleMake(make);
                       
//                         setShowVehicleMakeSuggestions(false); // Hide suggestions
//                         vehicleMakeInputRef.current.blur();
//                     }}
//                 >
//                     <Text style={styles.suggestion}>{make}</Text>
//                 </TouchableOpacity>
//             ))}

//             <TextInput
//                 ref={vehicleModelInputRef}
//                 mode="outlined"
//                 label="Vehicle Model"
//                 value={vehicleModel}
//                 onChangeText={handleVehicleModelChange}
//                 style={{ marginBottom: 27 }}
//             />
//             {showVehicleModelSuggestions && vehicleModels?.map((model, index) => (
//                 <TouchableOpacity
//                     key={index}
//                     onPress={() => {
//                         setVehicleModel(model);
                
//                         setShowVehicleModelSuggestions(false); // Hide suggestions
//                         vehicleModelInputRef.current.blur();
//                     }}
//                 >
//                     <Text style={styles.suggestion}>{model}</Text>
//                 </TouchableOpacity>
//             ))}

//             <Button mode="contained" onPress={handleImageSelection} style={styles.button}>
//                 Select Image
//             </Button>
//             {image && <Text>Image Selected</Text>}
//         </View>
//     );
// };

// const styles = {
//     container: {
//         flex: 1,
//         padding: 16,
//     },
//     suggestion: {
//         padding: 10,
//         fontSize: 16,
//         backgroundColor: '#f1f1f1',
//         marginTop: 5,
//         color: 'black',
//     },
//     button: {
//         marginTop: 20,
//     },
// };

// export default DistributorInstallationForm;


// import React, { useState, useEffect, useCallback } from 'react';
// import { View,FlatList, Text, StyleSheet } from 'react-native';
// import { useRoute } from '@react-navigation/native'; // Import useRoute for route access
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import useApi from '../../../customhook/useApi'; // Custom hook to fetch data
// import { TextInput, Button } from 'react-native-paper';

// const DistributorInstallationForm = () => {
//   const [searchText, setSearchText] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [token, setToken] = useState(null); // State to store the token

//   // Access route params using useRoute hook
//   const route = useRoute();

//   useEffect(() => {
//     // Fetch token from AsyncStorage
//     const fetchToken = async () => {
//       try {
//         const storedToken = await AsyncStorage.getItem('userToken'); // Fetch the token
//         if (storedToken) {
//           setToken(storedToken); // Set token if it exists
//         }
//       } catch (error) {
//         console.error('Failed to fetch token:', error); // Handle errors
//       }
//     };

//     fetchToken();
//   }, []); // Only run on component mount

//   // Use the useApi hook with the dynamic token
//   const { data, loading: apiLoading, error, fetchData } = useApi(
//     'http://testing-only-erp-api.containe.in/User/GetDealersbyParent',
//     token
//   );

//   console.log(data.data);
//   // Handle input change and call fetchData
//   const handleInputChange = useCallback(
//     (text) => {
//       setSearchText(text);

//       if (!text) {
//         setSuggestions([]); // Reset suggestions if text is empty
//         return;
//       }

//       setLoading(true);
//       fetchData({
//         clientRoleId: 3,
//         parentId: 171,
//       }).finally(() => setLoading(false)); // Fetch data on input change
//     },
//     [fetchData]
//   );

//   // Filter suggestions based on search text
//   const filteredSuggestions = data.filter((dealer) =>
//     dealer.usersBusinessName.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <View style={styles.container}>
//       <TextInput
      
//         placeholder="Search for dealers"
//          mode="outlined"
//           label="Dealer Name"
//         value={searchText}
//         onChangeText={handleInputChange}
//         style={{ marginBottom: 27 }}
//       />

//       {loading || apiLoading ? (
//         <Text style={styles.loadingText}>Loading...</Text>
//       ) : (
//         <FlatList
//           data={filteredSuggestions}
//           keyExtractor={(item) => item.usersId.toString()}
//           renderItem={({ item }) => (
//             <Text style={styles.suggestionItem}>{item.usersBusinessName}</Text>
//           )}
//         />
//       )}

//       {error && <Text style={styles.errorText}>{error}</Text>}


//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     color: 'black', // Changed text color to black
//   },
//   loadingText: {
//     textAlign: 'center',
//     marginTop: 10,
//     fontSize: 16,
//     color: '#666',
//   },
//   suggestionItem: {
//     padding: 10,
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     color: 'black', // Changed text color to black
//   },
//   errorText: {
//     textAlign: 'center',
//     marginTop: 10,
//     color: 'red',
//   },
// });

// export default DistributorInstallationForm;




// import React, { useState, useEffect, useCallback } from 'react';
// import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { useRoute } from '@react-navigation/native'; // Import useRoute for route access
// import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
// import useApi from '../../../customhook/useApi'; // Custom hook to fetch data
// import { TextInput, Button } from 'react-native-paper';

// const DistributorInstallationForm = () => {
//   const [searchText, setSearchText] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [token, setToken] = useState(null); // State to store the token

//   // Access route params using useRoute hook
//   const route = useRoute();

//   useEffect(() => {
//     // Fetch token from AsyncStorage
//     const fetchToken = async () => {
//       try {
//         const storedToken = await AsyncStorage.getItem('userToken'); // Fetch the token
//         if (storedToken) {
//           setToken(storedToken); // Set token if it exists
//         }
//       } catch (error) {
//         console.error('Failed to fetch token:', error); // Handle errors
//       }
//     };

//     fetchToken();
//   }, []); // Only run on component mount

//   // Use the useApi hook with the dynamic token
//   const { data, loading: apiLoading, error, fetchData } = useApi(
//     'http://testing-only-erp-api.containe.in/User/GetDealersbyParent',
//     token
//   );

//   console.log(data.data);
//   // Handle input change and call fetchData
//   const handleInputChange = useCallback(
//     (text) => {
//       setSearchText(text);

//       if (!text) {
//         setSuggestions([]); // Reset suggestions if text is empty
//         return;
//       }

//       setLoading(true);
//       fetchData({
//         clientRoleId: 3,
//         parentId: 171,
//       }).finally(() => setLoading(false)); // Fetch data on input change
//     },
//     [fetchData]
//   );

//   // Filter suggestions based on search text
//   const filteredSuggestions = data.filter((dealer) =>
//     dealer.usersBusinessName.toLowerCase().includes(searchText.toLowerCase())
//   );

//   // Handle suggestion item click
//   const handleSuggestionSelect = (item) => {
//     setSearchText(item.usersBusinessName); // Set the input field to the selected item
//     setSuggestions([]); // Close the suggestion list
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Search for dealers"
//         mode="outlined"
//         label="Dealer Name"
//         value={searchText}
//         onChangeText={handleInputChange}
//         style={{ marginBottom: 27 }}
//       />

//       {loading || apiLoading ? (
//         <Text style={styles.loadingText}>Loading...</Text>
//       ) : (
//         <FlatList
//           data={filteredSuggestions}
//           keyExtractor={(item) => item.usersId.toString()}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => handleSuggestionSelect(item)}>
//               <Text style={styles.suggestionItem}>{item.usersBusinessName}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       )}

//       {error && <Text style={styles.errorText}>{error}</Text>}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     color: 'black', // Changed text color to black
//   },
//   loadingText: {
//     textAlign: 'center',
//     marginTop: 10,
//     fontSize: 16,
//     color: '#666',
//   },
//   suggestionItem: {
//     padding: 10,
//     borderBottomColor: '#ccc',
//     borderBottomWidth: 1,
//     color: 'black', // Changed text color to black
//   },
//   errorText: {
//     textAlign: 'center',
//     marginTop: 10,
//     color: 'red',
//   },
// });

// export default DistributorInstallationForm;




import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Import useRoute for route access
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import useApi from '../../../customhook/useApi'; // Custom hook to fetch data
import { TextInput, Button } from 'react-native-paper';

const DistributorInstallationForm = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState(null);

  const route = useRoute();

  // Fetch the token on component mount
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('userToken'); // Fetch the token
        if (storedToken) {
          setToken(storedToken); // Set token if it exists
        }
      } catch (error) {
        console.error('Failed to fetch token:', error); // Handle errors
      }
    };

    fetchToken();
  }, []); // Only run on component mount

  // Use the useApi hook with the dynamic token
  const { data, loading: apiLoading, error, fetchData } = useApi(
    'http://testing-only-erp-api.containe.in/User/GetDealerByTechnicianForInstalation',
    token
  );

  console.log(data?.data); // Avoid errors in case data is undefined

  // Handle input change and call fetchData
  const handleInputChange = useCallback(
    (text) => {
      setSearchText(text);

      if (!text) {
        setSuggestions([]); // Reset suggestions if text is empty
        return;
      }

      setLoading(true);
      fetchData({
        clientRoleId: 15,
        technicianId: 220,
      }).finally(() => setLoading(false)); // Fetch data on input change
    },
    [fetchData]
  );

  // Filter suggestions based on search text
  const filteredSuggestions = data
    ? data.filter((Technician) =>
        Technician.usersBusinessName.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  // Handle suggestion item click
  const handleSuggestionSelect = (item) => {
    setSearchText(item.usersBusinessName); // Set the input field to the selected item
    setSuggestions([]); // Close the suggestion list
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search for dealers"
        mode="outlined"
        label="Technician Name"
        value={searchText}
        onChangeText={handleInputChange}
        style={{ marginBottom: 27 }}
      />

      {loading || apiLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={filteredSuggestions}
          keyExtractor={(item) => item.usersId.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSuggestionSelect(item)}>
              <Text style={styles.suggestionItem}>{item.usersBusinessName}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black', // Changed text color to black
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    color: 'black', // Changed text color to black
  },
  errorText: {
    textAlign: 'center',
    marginTop: 10,
    color: 'red',
  },
});

export default DistributorInstallationForm;
