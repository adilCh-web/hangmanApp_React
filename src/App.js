import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
   } from "react-router-dom";

import Game from "./Game";
import Home from "./Pages/Home";
import Capitals from "./Pages/Capitals"
import GameOver from "./Pages/GameOver";


const App = () =>{
  
    return (
            <Router basename="/hangmanApp_React">
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Game" element={<Game />} />
                <Route path="/GameOver" element={<GameOver />} />
                <Route path="/Capitals" element={<Capitals />} />
              </Routes>
            </Router>
          );
        }
export default App