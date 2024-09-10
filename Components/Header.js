import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//update  the Header with its 
const Header = ( { name} ) => {
    
  return (
    <View>
      <Text>Welcome to {name}!</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})