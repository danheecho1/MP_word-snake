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

	// Logics needed = Countdown timer, verify word, end game
	useEffect(() => {
		sessionStorage.clear();
		const fetchStartingWord = async () => {
			const response = await fetch(
				"https://random-word-api.herokuapp.com/word"
			);
			const word = await response.json();
			return word[0];
		};
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

	if (timeLeft === 0) {
		sessionStorage.setItem("score", score);
		sessionStorage.setItem("numberOfWords", wordBank.length - 1);
		router.push("/result");
		alert("You took too long!")
	}

	function calculateScore(currentWord, remainingSeconds) {
		return currentWord.length * remainingSeconds;
	}

	async function validateWord(word) {
		// Making sure the new word submitted starts with the letter that the previous word ended with
		const lastWord = wordBank[wordBank.length - 1]
		if(word[0] === lastWord[lastWord.length - 1]) {
			// Checking that the word does exist in dictionary
			const fetchWord = async (word) => {
				const response = await fetch(
					`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
				);
				const result = await response.json();
				return result[0];
			};
			try {
				const response = await fetchWord(word);
				if(response === undefined) {
					return false;
				} else {
					return true;
				}
			} catch (error) {
				console.error(error);
				return false;
			}
		} else {
			sessionStorage.setItem("score", score);
			sessionStorage.setItem("numberOfWords", wordBank.length - 1);
			router.push("/result");
			alert("You submitted a word(?) that doesn't start with the letter that the previous word ended with!")
		}
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const isValid = await validateWord(newWord)
		if (isValid) {
			// Add submitted word to the word bank
			setWordBank((currentWordBank) => {
				return [...currentWordBank, newWord];
			});
			// Reset the timer back to 10 seconds
			setTimeLeft(5);
			setNewWord("");
			// Calculate and update the score
			setScore((currentScore) => {
				return currentScore + calculateScore(newWord, timeLeft);
			});
		} else {
			sessionStorage.setItem("score", score);
			sessionStorage.setItem("numberOfWords", wordBank.length - 1);
			router.push("/result");
			alert("The word you submitted doesn't exist!")
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
