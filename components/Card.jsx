import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = ({children, style: customStyles}) => {
  return (
    <View style={{...styles.card, ...customStyles}}>
      {children}
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 7,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  }
})
