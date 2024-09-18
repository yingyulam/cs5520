import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//update  the Header with its 
const Header = ( { name} ) => {
    
  return (
    <View>
      <Text style={styles.title}>Welcome to {name}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    borderRadius: 6,
    borderWidth: 2,
    borderColor: "#800080",
    paddingVertical: 4,
    padding: 4,
    textAlign: 'center',
    fontSize: 25,
    color: "#800080"
  }
});