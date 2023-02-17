import { Link } from "react-router-dom"


const Header= (props) => {
    return(
        <header>
            <nav>
                <ul>
                    <Link to="/Game">Play The Game</Link>
                    <Link to="/">Help</Link>
                    <Link to="/Capitals">Random Capitals</Link>
                    <label>HangMan {props.tries}/9</label>
                </ul>
            </nav>
            <label>HANGMAN App</label>
        </header>

        
    )
}

export default Header