import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput, Button } from 'react-native'

const Input = ( {isFocused, handleInputData} ) => {
    
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirm = () => {
    console.log(text)
    handleInputData(text)
  }

  return (
    <View>
      <TextInput
          placeholder="Type something"
          autoCorrect={true}
          autoFocus={isFocused}
          keyboardType="default"
          value={text}
          style={{borderBottomColor: "purple", borderBottomWidth:2}}
          onChangeText={function (changedText) {
            setText(changedText);
            setStatus("");
            setIsSubmitted(false);
          }}
          onBlur={()=>{
            setStatus(text.length >= 3 ? 
              "Thank you"
              :
              "Please type more than 3 characters"
            )
            setIsSubmitted(true)
          }}
        />
        {text.length > 0 && !isSubmitted ? (
          <Text>{text.length}</Text>) : <Text></Text>}
        {status.length > 0? (
          <Text>{status}</Text>) : <Text></Text>}

      <Button
        title="Confirm"
        onPress={handleConfirm}
        />
    </View>
  )
}


export default Input

const styles = StyleSheet.create({})