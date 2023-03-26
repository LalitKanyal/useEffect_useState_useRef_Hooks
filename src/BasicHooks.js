import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

//Hooks in react js useState, useEffect and useRef

const BasicHooks = () => {

  const [value, setValue] = useState(0);
  
  // useEffect(function, dependency)
  //without adding dependency useEffect will repeat everytime
  useEffect(() => {
    console.log('hello');
  });
  
  //always use dependency
  //calling on screen load only
  useEffect(() => {
    console.log('hello1');
  }, []);

    //will work because value is changing 

  useEffect(() => {
    console.log('hello2');
  }, [value]);

  //useRef hook for reference a particular component 

  const ref = useRef();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{value}</Text>
      <TouchableOpacity
      style={{
        marginTop: 40,
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.4,
        backgroundColor: 'cyan',
      }}
      onPress={() => setValue(value+1)}
      >
        <Text style={{fontSize: 12, fontWeight: 800}}>Increase Count</Text>
      </TouchableOpacity>
      <TextInput 
      ref={ref}
      placeholder="type here"
      style={{width: 320, height: 60, borderWidth: 0.8, marginTop: 40, textAlign: 'center', justifyContent: 'center'}}
      />

      <TouchableOpacity
      style={{
        marginTop: 5,
        width: 100,
        height: 50,
        borderWidth: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'cyan'
      }}
      onPress = {() => 
        ref.current.clear()
        // ref.current.focus()
      }
      >
        <Text style={{fontSize:12, fontWeight: 800}}>Clear Input</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BasicHooks