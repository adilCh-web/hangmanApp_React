import Header from "../comoponents/Header"
import { Link } from "react-router-dom";



const Home = () => {
    return(
        <div>
        <Header />
        <div className="gameInstructions">
            <p>
            Capital City Hangman is a simple, fun and addictive game - and one that helps you learn!  Guess a capital city letter by letter - each time the letter isn't featured, part of the 'hangman' drawing will appear... There are nine parts to the drawing and if you guess the country before all nine parts appear, you win! And if you don't, you'll find out the city and the country it belongs to, and you can click to play again!
            </p>
            <p>If you are in the middle of a game but would like to start a new one, click 'help' and then 'play the game' and a fresh one will appear.
            </p>
            
            <Link className="start" to="/Game">Play The Game</Link>
            
        </div>
        </div>

    )
}

export default Home



