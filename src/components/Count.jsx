import { StyleSheet, View } from 'react-native'
import React from 'react'
import Text from './Text'

const Count = ({name, count}) => {
  return (
    <View style = {styles}>
      <Text fontWeight= "bold">{name}</Text>
      <Text color= "textSecondary" fontSize = "subheading">{count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gap: 10,
})

export default Count

