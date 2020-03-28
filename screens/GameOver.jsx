import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const GameOver = ({restartGameHandler, rounds}) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
      <Text>{`Number of Rounds: ${rounds}`}</Text>
      <Button title="RESTART GAME" onPress={restartGameHandler} />
    </View>
  )
}

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
