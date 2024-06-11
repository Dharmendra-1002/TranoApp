// import { View, Text } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';
// import { ScrollView } from 'react-native-gesture-handler';

// const Test2 = () => {
//     const [data, setdata] = useState([]);

//     const getApiData = async () => {

//         const url = "https://jsonplaceholder.typicode.com/posts";
//         let result = await fetch(url);
//         result = await result.json();
//         setdata(result);
//     }

//     useEffect(() => {
//         getApiData()
//     }, []);


//     return (
//         <ScrollView>
//             <Text style={{ fontSize: 30 }}>List with Api Call</Text>
//             {data.length ? data.map((Item) => <View style={{padding:10,borderbuttomColor:"#4e2d87",borderBottomWidth:1}}>
//                 <Text style={{ fontSize: 20, backgroundColor:"#ddd"}}> id :{Item.id}</Text>
//                 <Text style={{ fontSize: 20 }}> Title :{Item.Title}</Text>
//                 <Text style={{ fontSize: 20 }}> Body: {Item.body}</Text>











//             </View>) : null}
//         </ScrollView>
//     )
// }

// export default Test2


import React from 'react';
import { View, StyleSheet } from 'react-native';

const Test2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
    
        {/* Your content here */}
    
      </View>



      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 250,
    height: 250,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
});

export default Test2;
