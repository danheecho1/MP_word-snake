# Word Snake v1

## About the game

Word Snake is an English version of 끝말잇기 (direct translation would be something along the lines of 'connecting the last word'). Your goal is to continue submitting a word that starts with a letter that the previous word ended with. For example, if the previous word was 'apple', then you can submit 'elephant' as the next word since 'apple' ended with an 'e', and 'elephant' starts with the same letter. Then, you submit a word that starts with a 't', and so on. 

For your word to be valid and count towards your score, 1) it has to be a real word EXCLUDING pronouns, 2) it has to start with the letter that the previous word ended with, and 3) it must not have been submitted already. Plural versions of nouns (i.e. window and windows), different parts of the speech using the same root word (i.e. quick and quickly, run and running, or exhibit and exhibition), and different tenses of verbs (i.e. grow, grew, grown) are acceptable and will add up to the total score separately. 

Game will start as soon as the first word is loaded, and the timer will start at 5 seconds. Each valid word submission will reset the timer back to 5 seconds. No submission within the 5 seconds will also end the game. 

Each valid word submission will add (remaining seconds * number of letters in the word) to the total score. 

## Build with

- React with JavaScript
- Next.js 13

## APIs used

- http://random-word-api.herokuapp.com/home to receive a random word at the beginning of the game
- https://dictionaryapi.dev/ to verify that the words submitted are real words

## What I learned/felt

- When updating states in React, providing a callback function to setState is probably better (i.e. setState(() => {}) vs. setState([])) in most cases. 
  - https://stackoverflow.com/questions/64361342/what-difference-between-direct-argument-and-callback-in-setstate
  - https://legacy.reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous
- Next.js 13's app router is very intuitive to use!
- For importing from components folder, I can simply create one index.jsx file that imports and exports all other components. From pages or layouts, I can then pick and choose what I want to import in a single line as below: 
  
  ```
  import { Component1, Component2 } from "@/components";
  ```
- Maybe BEM isn't so necessary when using Next.js' app router.

## Future development

- I want to try using a database (most likely MySQL). When I planned for this project, I wanted to create a leaderboard as well. 
- I started wondering if I could modularize my codes. 
- How can I add a dark mode feature? Maybe for the next project. 