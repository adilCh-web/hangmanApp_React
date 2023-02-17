//assigning variable to create all the buttons for our keyboard
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//console.log(letters.split(""))



const KeyBoardComponent = (props)=> {


    console.log("done")

 
    const guessALetter = (e) => {

        //the buttons clicked
        let char = e.target.textContent
        //alert(char)
        //assigning a variable to the wordToGuess (in array format) so we can manipulate it 
        //using split to converting it in array
        let newValue = props.wordToGuess.split("")
        let letterFounded = 0
        //looping through the word we should guess 
        for(let i=0;i<props.capital.length;i++){
            if(props.capital[i] === char){//if one or multiple letters are found
                letterFounded+=1
                //assign the letter in the correct index
                newValue[i] = char   
                console.log(newValue)   
            }
            //setting the new value (format string) =>new state
            props.setWordToGuess(newValue.join(""))

        }
        // we disabled the button and make the following
        e.target.disabled=true; 
        //We make the following styling based on if the letter found or not

        if (letterFounded===0){

            e.target.style.color="gray"
            e.target.style.border="2px solid gray"
            //we increment the number of tries once the letter is incorrect 
            props.setTries(props.tries+1)
            console.log(`...doesnt found........${props.tries}................`)
            
        }
        else{

            e.target.style.backgroundColor="blue"
            console.log("found a number")
        }



    }





    return(
        <div className="keyBoardDiv">
            <div className="splitter"></div>
            {
             
                letters.split("").map((char,index) =>
       
                    <button className = "lettersBtn" key={index.toString()} onClick = {guessALetter} >{char}</button>
                )
            }
        </div>

    )
    
}

export default KeyBoardComponent