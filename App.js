import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
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
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <Header name={appName}/>
        <View style={styles.button}>
          <Button 
            title="Add a goal"
            onPress={() => {
              setIsModalVisible(true)
            }}
          />
        </View>
      </View>

      <Input isFocused={true} handleInputData={handleInputData} isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible}/>

      <View style={styles.bottomSection}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{receivedData}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomSection: {
    flex: 4,
    width: "100%",
    backgroundColor: "#e6e6fa",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  textContainer: {
    alignItems:"center",
    marginTop: 10,
    padding: 3,
    borderRadius: 3,
    backgroundColor: "#c0c0c0",
  },
  text: {
    fontSize: 20,
    color: "#800000",
  },
  button: {
    width: '30%',
    margin: 12,
  },
});
