import { Link } from "react-router-dom"


const GameOver = (props)=>{


    return (
        <div>
            <div className="gameOverDiv">
                <img id="gOver" src={props.src} alt ="gameover" />
                <p>The Correct Answer is <span>{props.capital}</span> ..Capital of {props.country}</p>
                <p>Do you want to play Agan ?</p>
                <button className = "start" onClick = {props.startAgain}>Play Again</button>
               <Link className="start" to="/">Back to instructions</Link>
            </div>

    
        </div>

    )

}


export default GameOver