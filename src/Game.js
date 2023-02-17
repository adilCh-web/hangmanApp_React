import  Header from "./comoponents/Header.js";
//import state1 from "./imgs/state10.gif"
import WordToGuessComponent from "./comoponents/WordToGuess";
import {words} from "./database"
import { useState } from "react";
import HangmanFrame from "./comoponents/HangmanFrame";
import KeyBoardComponent from "./comoponents/keyBoardComponent";
import GameOver from "./Pages/GameOver.js";
import gameOver from "./imgs/gameover.png"
import youWin from "./imgs/youWin.gif"




function Game() {


  let index = Math.floor(Math.random()*words.length)
  const [capital,setCapital] =useState(words[index][0])
  console.log(capital)

  let hiddenWord = ""
  for(let i=0;i<capital.length;i++){
    hiddenWord+=" "
  }
  const [wordToGuess, setWordToGuess] = useState(hiddenWord)
 
  const [country,setCountry] = useState(words[index][1])
  const [tries, setTries] = useState(0)
  console.log( wordToGuess);
 


  // we render the following when we still have possibility to play
  if(tries <9 && capital !== wordToGuess){
    return(
      <div className="App">
        <Header tries = {tries}/>
        <div className="wrap">
          <HangmanFrame tries={tries} />
          <WordToGuessComponent wordToGuess = {wordToGuess} setWordToGuess= {setWordToGuess} capital = {capital} hiddenWord={hiddenWord}/>
        </div>
        <KeyBoardComponent wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} tries={tries} setTries = {setTries} capital={capital} />
      </div>

  )
  }
  // if the hangman is hanged (Game Over)
  if(tries===9){
    // a function to reset all the variable 
    const startAgain=()=>{
      let index = Math.floor(Math.random()*words.length)
      setCapital(words[index][0])
      setCountry(words[index][1])
        
      
      //let country = words[index][1]
      let hiddenword = "";
      for(let i=0;i<capital.length;i++){
      hiddenword+=" "
      }
      setTries(0)
      setWordToGuess(hiddenword)
    }
    // we render the following
    return(
      
      <div className="App">
        <Header tries={tries}/>
        <GameOver   src = {gameOver} wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} tries={tries} setTries = {setTries} capital={capital} setCapital = {setCapital} startAgain={startAgain} country={country}/>
      </div>
    )

  }
  if(capital === wordToGuess){
    // a function to reset all the variable 
    const startAgain=()=>{
      let index = Math.floor(Math.random()*words.length)
      setCapital(words[index][0])
      setCountry(words[index][1])
        
      
      //let country = words[index][1]
      let hiddenword = "";
      for(let i=0;i<capital.length;i++){
      hiddenword+=" "
      }
      setTries(0)
      setWordToGuess(hiddenword)
    }
    // we render the following
    return(
      
      <div className="App">
        <Header />
        <GameOver  src = {youWin} wordToGuess={wordToGuess} setWordToGuess={setWordToGuess} tries={tries} setTries = {setTries} capital={capital} setCapital = {setCapital} startAgain={startAgain} country={country}/>
      </div>
    )
  }


}

export default Game;


