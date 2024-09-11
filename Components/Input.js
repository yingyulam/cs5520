import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput } from 'react-native'

const Input = ( {isFocused} ) => {
    
  const [text, setText] = useState("");
  return (
    <TextInput
        placeholder="Type something"
        autoCorrect={true}
        autoFocus={isFocused}
        keyboardType="default"
        value={text}
        style={{borderBottomColor: "purple", borderBottomWidth:2}}
        onChangeText={function (changedText) {
          setText(changedText);
        }}
       />
  )
}

export default Input

const styles = StyleSheet.create({})