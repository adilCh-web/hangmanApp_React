import {words} from "../database"
import Header from "../comoponents/Header"





const Capitals= ()=>{

    let capitalsToDisplay = []

    while(capitalsToDisplay.length !==10){
        let index = Math.floor(Math.random()*words.length)
        let city = words[index]
        if(capitalsToDisplay.includes(city) === false){
            capitalsToDisplay.push(city)

        }
}
    return(
        <div>
            <Header />
            <p>10 Random Capitals to learn</p>
            <table>
                <thead>
                    <tr>
                        <th>Contry</th>
                        <th>Capital</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{capitalsToDisplay[0][1]}</td>
                        <td>{capitalsToDisplay[0][0]}</td>
                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[1][1]}</td>
                        <td>{capitalsToDisplay[1][0]}</td>
                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[2][1]}</td>
                        <td>{capitalsToDisplay[2][0]}</td>
                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[3][1]}</td>
                        <td>{capitalsToDisplay[3][0]}</td>
                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[4][1]}</td>
                        <td>{capitalsToDisplay[4][0]}</td>

                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[5][1]}</td>
                        <td>{capitalsToDisplay[5][0]}</td>
                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[6][1]}</td>
                        <td>{capitalsToDisplay[6][0]}</td>
                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[7][1]}</td>
                        <td>{capitalsToDisplay[7][0]}</td>
                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[8][1]}</td>
                        <td>{capitalsToDisplay[8][0]}</td>
                    </tr>
                    <tr>
                        <td>{capitalsToDisplay[9][1]}</td>
                        <td>{capitalsToDisplay[9][0]}</td>
                    </tr>


                </tbody>
        </table>

        <p>ALL THE DATA I USED FOR THIS APP IS FROM THIS <a className ="site" href="https://www.countries-ofthe-world.com/capitals-of-the-world.html">SITE</a></p>

    </div>

    )
}

export default Capitals