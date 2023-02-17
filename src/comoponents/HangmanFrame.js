
import state1 from "../imgs/state1.png"
import state2 from "../imgs/state3.png"
import state3 from "../imgs/state4.png"
import state4 from "../imgs/state5.png"
import state5 from "../imgs/state6.png"
import state6 from "../imgs/state7.png"
import state7 from "../imgs/state8.png"
import state8 from "../imgs/state9.png"
import state9 from "../imgs/state10.png"
import state10 from "../imgs/state11.png"


let arraysPic = [state1,state2,state3,state4,state5,state6,state7,state8,state9,state10]

const HangmanFrame = (props)=>{
    //const navigate = useNavigate()
    if(props.tries <10){
        return(
        
            <div className="hangmanFrame">
                {/* each wrong guess the tries increment by 1 which is the index of the array
                 (pictures are in sorted states within the array)*/}
                <img id="hangmanPic" src={arraysPic[props.tries]} alt="hangmanPic"/>
            </div> 
        )
    }


}

export default HangmanFrame
