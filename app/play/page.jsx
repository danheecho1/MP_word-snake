"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const Play = () => {
	const [timeLeft, setTimeLeft] = useState(5);
	const [newWord, setNewWord] = useState("");
	const [wordBank, setWordBank] = useState([]);
	const [score, setScore] = useState(0);
	const router = useRouter();

	// This code block should run only once at initial render
	useEffect(() => {
		// When game starts, clear session data from previous game
		sessionStorage.clear();
		// Set up an api call to receive a random starting word
		const fetchStartingWord = async () => {
			const response = await fetch(
				"https://random-word-api.herokuapp.com/word"
			);
			const word = await response.json();
			return word[0];
		};
		// Call random word api, set the response as the first word in the wordBank, and start the timer
		fetchStartingWord()
			.then((response) => {
				setWordBank((current) => {
					return [...current, response];
				});
			})
			.then(() => {
				const interval = setInterval(() => {
					setTimeLeft((timeLeft) => {
						if (timeLeft === 1) {
							clearInterval(interval);
						}
						return timeLeft - 1;
					});
				}, 1000);
			});
	}, []);

	// End game when time runs out - save score and number of words submitted.
	if (timeLeft === 0) {
		sessionStorage.setItem("score", score);
		sessionStorage.setItem("numberOfWords", wordBank.length - 1);
		alert("You took too long!");
		router.push("/result");
	}

	// This is how score is calculated for each valid word submitted: length of the word times remaining time in seconds
	function calculateScore(currentWord, remainingSeconds) {
		return currentWord.length * remainingSeconds;
	}

	// This is where the logic for validating word submissions is
	async function validateWord(word) {
		// First, make sure the new word submitted starts with the letter that the previous word ended with
		const lastWord = wordBank[wordBank.length - 1];
		if (word[0] === lastWord[lastWord.length - 1]) {
			// Second, make sure the word has not been already submitted
			if (!wordBank.includes(word)) {
				// Lastly, make sure that the word does exist in the dictionary api
				const fetchWord = async (word) => {
					const response = await fetch(
						`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
					);
					const result = await response.json();
					return result[0];
				};
				try {
					const response = await fetchWord(word);
					if (response !== undefined) {
						return true;
					} else {
						alert("The word you submitted doesn't exist!");
						return false;
					}
				} catch (error) {
					console.error(error);
				}
			} else {
				alert("You already submitted that word!");
				return false;
			}
		} else {
			alert("Your word does not start with the correct letter!");
			return false;
		}
	}

	// What happens when a user submits a word?
	async function handleSubmit(e) {
		// Do not reload the page
		e.preventDefault();
		// If the submitted word passes validation process...
		const isValid = await validateWord(newWord);
		if (isValid) {
			// Add submitted word to the word bank
			setWordBank((currentWordBank) => {
				return [...currentWordBank, newWord];
			});
			// Reset the timer back to 10 seconds
			setTimeLeft(5);
			// Clear the text input field for new submission
			setNewWord("");
			// Calculate and update the score
			setScore((currentScore) => {
				return currentScore + calculateScore(newWord, timeLeft);
			});
		} 
		// If the submitted word does not pass validation process, save the final score and the number of words submitted, and move on to the result page
		else {
			sessionStorage.setItem("score", score);
			sessionStorage.setItem("numberOfWords", wordBank.length - 1);
			router.push("/result");
		}
	}

	return (
		<>
			<div className={styles.currentInfoDiv}>
				<div className={styles.currentScore}>
					<p>
						Current score: <span>{score}</span>
					</p>
				</div>
				<div className={styles.currentWord}>
					<p>
						Current word:{" "}
						<span>{wordBank[wordBank.length - 1]}</span>
					</p>
				</div>
			</div>
			<div className={styles.timer}>
				<p>
					Time remaining: <span>{timeLeft}</span>
				</p>
			</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<label className={styles.label}>New word:</label>
				<input
					type="text"
					className={styles.input}
					value={newWord}
					onChange={(e) => setNewWord(e.target.value)}
				/>
				<button className={styles.button}>Submit</button>
			</form>
			<div className={styles.wordSnakeBody}>
				<span className={styles.snakeHead}>🐍</span>
				<p className={styles.snakeTail}>
					{wordBank.map((word) => {
						return `${word} - `;
					})}
				</p>
			</div>
		</>
	);
};

export default Play;
