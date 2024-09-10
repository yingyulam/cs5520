import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from "./Components/Header"

export default function App() {
  const [text, setText] = useState("");
  const appName = "My app!";
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header name={appName}/>
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
      <Text>{text}</Text>
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
