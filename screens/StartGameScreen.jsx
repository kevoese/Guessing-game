import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Button,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({onStartGame}) => {
	const [enteredText, setEnteredText] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState(0);

	const handleChangeText = inputText => {
		setEnteredText(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredText('');
	};

	const confirmInputHandler = () => {
		const selected = parseInt(enteredText);
		if (isNaN(selected) || selected <= 0 || selected > 99) {
			Alert.alert('invalid Number', 'Number has to be a number from 1 to 99', [
				{ text: 'Okay', style: 'destructive', onPress: resetInputHandler },
			]);
			return;
		}
		setSelectedNumber(selected);
		setConfirmed(true);
		setEnteredText('');
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a new game</Text>
				<Card style={styles.inputWrap}>
					<Text>Select a number</Text>
					<Input
						value={enteredText}
						onChangeText={handleChangeText}
						style={styles.input}
						blurOnSubmit
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='number-pad'
						maxLength={2}
					/>
					<View style={styles.buttonWrap}>
						<View style={styles.button}>
							<Button
								onPress={resetInputHandler}
								title='RESET'
								color={Colors.accent}
							/>
						</View>
						<View style={styles.button}>
							<Button
								onPress={confirmInputHandler}
								title='CONFIRM'
								color={Colors.primary}
							/>
						</View>
					</View>
				</Card>
				{confirmed && (
					<Card style={styles.confirmedCard}>
						<Text>You Selected</Text>
						<NumberContainer>{selectedNumber}</NumberContainer>
						<Button
								title='START GAME'
								onPress={() => onStartGame(selectedNumber)}
							/>
					</Card>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputWrap: {
		width: 300,
		maxWidth: '80%',
		alignItems: 'center',
	},
	buttonWrap: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		textAlign: 'center',
		marginBottom: 20,
	},
	confirmedCard: {
		marginTop: 20,
		alignItems: 'center'
	},
});

export default StartGameScreen;
