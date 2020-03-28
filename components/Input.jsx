import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = ({style, ...rest}) => {
  return (
    <TextInput {...rest} style={{...styles.input, ...style}} />
  )
}

export default Input

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  }
})
