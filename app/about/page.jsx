import { Snake } from "@/components";
import Link from "next/link";
import styles from "./page.module.css";
import React from "react";

const About = () => {
	return (
		<>
			<Snake />
			<div className={styles.descriptionDiv}>
				<p className={styles.description}>
					Word Snake is an English version of 끝말잇기 (direct
					translation would be something along the lines of
					'connecting the last word'). Your goal is to continue
					submitting a word that starts with a letter that the
					previous word ended with. For example, if the previous word
					was 'apple', then you can submit 'elephant' as the next word
					since 'apple' ended with an 'e', and 'elephant' starts with
					the same letter. Then, you submit a word that starts with a
					't', and so on.
				</p>
				<p className={styles.description}>
					Game will start as soon as the first word is loaded from <Link href="http://random-word-api.herokuapp.com/home" target="_blank">here</Link>, and the
					timer will start at 5 seconds. Each valid word submission
					will reset the timer back to 5 seconds. No submission within
					the 5 seconds will also end the game.
				</p>
				<p className={styles.description}>
					For your word to be valid and count towards your score, 1)
					it has to be a real word EXCLUDING pronouns (verified <Link href="https://dictionaryapi.dev" target="_blank">here</Link>), 2) it has to start with
					the letter that the previous word ended with, and 3) it must
					not have been submitted already. Plural versions of nouns
					(i.e. window and windows), different parts of the speech
					using the same root word (i.e. quick and quickly, run and
					running, or exhibit and exhibition), and different tenses of
					verbs (i.e. grow, grew, grown) are acceptable and will add
					up to the total score separately.
				</p>
				<p className={styles.description}>
					Each valid word submission will add (remaining seconds *
					number of letters in the word) to the total score.
				</p>
			</div>
			<Link href="/play" className={styles.linkToPlay}>
				Click here if your brain is ready to play
			</Link>
		</>
	);
};

export default About;
