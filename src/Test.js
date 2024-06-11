import { View, Text } from 'react-native'
import React, {useEffect, useState } from 'react';

const Test = () => {
    const [data, setData] = useState(undefined);

    const getAPIData = async () => {

        //api call
        const url ='https://jsonplaceholder.typicode.com/posts/1';
        let result = await fetch(url);
        result = await result.json();
        setData(result)
    }


    useEffect(() => {
        getAPIData();
    },[]) 

  return (
    <View>
      <Text style={{ fontSize:30}}>API CAll</Text>
      {
        data ? <View>
            <Text style={{ fontSize:30}}>{data.id}</Text>
            <Text style={{ fontSize:30}}>{data.userId}</Text>
            <Text style={{ fontSize:30}}>{data.title}</Text>
            <Text style={{ fontSize:30}}>{data.body}</Text>
        </View>:null
      }
    </View>
  )
}

export default Test