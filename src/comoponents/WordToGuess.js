



const WordToGuessComponent = (props)=>{


    return(
        <div>
            <h1>App Hangman using React t52</h1>
            <p>Hyperiondev Project February 2023</p>
            <div className="wordToGuessContainer">
           
                {
                    props.capital.split("").map((char,index)=>{
                        if(char===" "){
                            return <div className = "whiteSpace" key={"toguessChar"+ index}>{props.wordToGuess[index]}</div>
                        }
                        else{
                            return <div className = "letterDivToGuess" key={"toguessChar"+ index}>{props.wordToGuess[index]}</div>}
                    })
                }
            </div>
            
        </div>
    )
}


export default WordToGuessComponent