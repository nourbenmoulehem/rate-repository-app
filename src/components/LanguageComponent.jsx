import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import theme from '../theme'

const LanguageComponent = ({language}) => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.textStyle}>{language}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 4,
  },
  
})

export default LanguageComponent

