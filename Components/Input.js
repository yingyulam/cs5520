import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Input = () => {
    
  const [text, setText] = useState("");
  return (
    <TextInput >
        placeholder="Type something"
        autoCorrect={true} 
        keyboardType="default"
        value={text}
        style={{borderBottomColor: "purple", borderBottomWidth:2}}
        onChangeText={function (changedText) {
          setText(changedText);
        }}
      </TextInput>
  )
}

export default Input

const styles = StyleSheet.create({})