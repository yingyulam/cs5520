import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Components/Header";
import Input from './Components/Input';
import { useState } from 'react';

export default function App() {
  
  const appName = "My app!";
  
  const [receivedData, setReceivedData] = useState("")

  //This function will be passed as a prop to the Input Component
  const handleInputData = (text) => {
    setReceivedData(text)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName}/>
      <Input isFocused={true} handleInputData={handleInputData}/>
      <Text>{receivedData}</Text>
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
});
