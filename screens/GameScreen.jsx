import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.ceil(max);

	const rand = Math.floor(Math.random() * (max - min) + min);
	if (rand === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rand;
	}
};
const GameScreen = ({ userChoice, onGameOver }) => {
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, userChoice)
	);
	const [rounds, setRounds] = useState(0);
	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		if (userChoice === currentGuess) {
			onGameOver(rounds);
		}
	}, [userChoice, currentGuess, onGameOver]);

	const nextGuessHandler = direction => {
		if (
			(direction === 'lower' && currentGuess < userChoice) ||
			(direction === 'greater' && currentGuess > userChoice)
		) {
			Alert.alert('Why Lie?', 'You Know that this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'lower') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}

		const nextNum = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess
		);
		setCurrentGuess(nextNum);
		setRounds(prevRounds => prevRounds + 1);
	};

	return (
		<View style={styles.screen}>
			<Text>Opponent's Guess</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={styles.buttonContainer}>
				<Button title='LOWER' onPress={() => nextGuessHandler('lower')} />
				<Button title='GREATER' onPress={() => nextGuessHandler('greater')} />
			</Card>
		</View>
	);
};

export default GameScreen;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
});
