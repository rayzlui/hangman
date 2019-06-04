import React from 'react';
import logo from './logo.svg';
import './App.css';
import wordArray from './5desk'
import {giphyKey} from './APIKEYS'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      turns: 8,
      word: this.newWord(),
      guesses: [], 
      input: "",
      gameover: false,
      winner: false,
      image: null
    }
    this.setUp()
  }

  setUp(){  
    this.obtainGiphy.bind(this)(8)
  }
  newWord(){
    
    return wordArray[Math.floor(Math.random() * wordArray.length)].trim()
  }

  turnsRemaining(){
    return(
      <h3 className = "turns-remaining">Guesses Remaining: {this.state.turns}</h3>
    )
  }

  wordDisplay(){
    let result = []
    this.state.word.split("").forEach(letter=>{
      if (this.state.guesses.includes(letter)){
        result.push(` ${letter} `)
      }else{
        result.push(" _ ")
      }
    })
    result.map(letter=><h3 className = "word-display">{letter}</h3>)
    return (
      <div>{result}</div>
      )
  }

  guessedLetters(){
    return(
      <h4>{this.state.guesses}</h4>
    )
  }

  async obtainGiphy(num){
    let response = await fetch("http://api.giphy.com/v1/gifs/search?q="+num+"&api_key="+giphyKey+"&limit=5",{mode:"cors"})
    let result = await response.json()
    let random = Math.floor(Math.random() * 5)
    let giphy = await result.data[random].images.original.url
    this.setState({image: giphy})
  }

  hangManImage(){
    let image = this.state.image
    return (
      <img className = "hangman-image" src = {image} alt = {this.state.turns}/>
    )
  }

  enterLetter(e){
    let letter = e.target.value
    if (this.state.guesses.includes(letter)){
      alert ("You've already tried this letter")
    }else if (this.notLetter(letter)){
      alert("Please type a letter in the English alphabet")
      this.setState({input: ""})
    }else{
      
      this.setState({input: e.target.value})
    }
  }

  notLetter(letter){
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    return !alphabet.includes(letter.toLowerCase())
  }

  submitLetter(){
    let guesses = this.state.guesses
    let turns = this.state.word.slice().split("").includes(this.state.input) ? this.state.turns : this.state.turns - 1
    guesses.push(this.state.input)
    let gameover = this.gameOver(turns)
    this.setState({guesses: guesses, input: "", turns: turns, gameover: gameover})
    let search = turns === 0 ? "GAME OVER" : turns
    this.obtainGiphy(search)
    
  }

  gameOver(turns){
    if (this.state.word.split("").every(letter => this.state.guesses.includes(letter))){
      this.setState({winner: true})
      return true
    }
    if (turns === 0){
      return true
    }
    return false
  }

  newGame(){
    this.setState({turns: 7, gameover: false, winner: false, input: "", word: this.newWord(), guesses: []})
  }

  playGame(){
    if (this.state.gameover===true){
      let display = this.state.winner ? <h4>You Win!</h4> : <h4>You Lose!</h4>
      return (
        <section className = "game-over">
          <h3>Word was {this.state.word}</h3>
          {display}
          <button onClick = {this.newGame.bind(this)}>New Game!</button>
        </section>
        )
    }else{
      return( 
        <section className = "input">
          <input type = "text" onChange = {this.enterLetter.bind(this)} value = {this.state.input}/>
          <input onClick = {this.submitLetter.bind(this)} type = "submit" value = "Submit"/>
        </section>
      )
    }
  }

  render(){
    
    return(
      <div className = "container">
        <header className = "header">
          <h1>Hangman</h1>
        </header>
        <div className = "hangman-image">
            {this.hangManImage()}
        </div>
        <div className = "hangman-core">
          <section className = "turns-remaining">
              {this.turnsRemaining.bind(this)()}
          </section>
          <section className = "word">
              {this.wordDisplay.bind(this)()}
          </section>
          <section className = "failed-letter">
              {this.guessedLetters.bind(this)()}
          </section>
          {this.playGame.bind(this)()}
          
          
        </div>
        
      </div>
    )
  }
}

export default App;
