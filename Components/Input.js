import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { TextInput, Button, Modal } from 'react-native'

const Input = ( {isFocused, handleInputData, isModalVisible, setIsModalVisible} ) => {
    
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleConfirm = () => {
    console.log(text)
    handleInputData(text)
    setIsModalVisible(false)
  }

  return (
    <Modal animationType="slide" visible={isModalVisible}>
      <View style={styles.container}>
        <TextInput style={styles.input}
            placeholder="Type something"
            autoCorrect={true}
            autoFocus={isFocused}
            keyboardType="default"
            value={text}
            // style={{borderBottomColor: "purple", borderBottomWidth:2}}
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
            <Text style={styles.feedback}>{text.length}</Text>) : <Text style={styles.feedback}></Text>}
          {status.length > 0? (
            <Text style={styles.feedback}>{status}</Text>) : <Text style={styles.feedback}></Text>}
        <View style={styles.button}>
          <Button
            title="Confirm"
            onPress={handleConfirm}
          />
          </View>
      </View>
    </Modal>
  )
}


export default Input

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: "#800080",
    paddingVertical: 4,
    padding: 4,
    textAlign: 'center',
    fontSize: 15,
    color: "#007AFF"
  },
  feedback: {
    fontSize: 15
  },
  button: {
    width: '30%',
    margin: 1,
  },
})