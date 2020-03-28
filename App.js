import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

export default function App() {
	const [userNumber, setUserNumber] = useState(null);
	const [rounds, setRounds] = useState(0);

	const startGameHandler = selectedNumber => {
		setUserNumber(selectedNumber);
	};

	const handleGameOver = rounds => {
		setRounds(rounds);
	};

	const restartGameHandler = () => {
		setRounds(0);
		setUserNumber(null);
	};

	return (
		<View style={styles.screen}>
			<Header title='Guess a Number' />
			{!userNumber ? (
				<StartGameScreen onStartGame={startGameHandler} />
			) : rounds > 0 ? (
				<GameOver restartGameHandler={restartGameHandler} rounds={rounds} />
			) : (
				<GameScreen onGameOver={handleGameOver} userChoice={userNumber} />
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
	},
});
