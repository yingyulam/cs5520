import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Header from "./Components/Header";
import Input from './Components/Input';
import { useState } from 'react';

export default function App() {
  
  const appName = "My awesome app";
  
  const [receivedData, setReceivedData] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false)

  //This function will be passed as a prop to the Input Component
  const handleInputData = (text) => {
    setReceivedData(text)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName}/>
      <View style={styles.button}>
        <Button 
          title="Add a goal"
          onPress={() => {
            setIsModalVisible(true)
          }}
        />
      </View>
      <Input isFocused={true} handleInputData={handleInputData} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>


      <Text style={styles.receivedData}>{receivedData}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  receivedData: {
    textAlign: 'center',
    fontSize: 20,
    color: "#800000"
  },
  button: {
    width: '30%',
    margin: 12,
  },
});
