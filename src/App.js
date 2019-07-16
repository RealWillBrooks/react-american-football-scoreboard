//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import styled from "styled-components";
import Scoreboard from "./Components/Scoreboard"

const teamName = styled.h2`
height: 100%;
display: flex;
flex-direction: column;
justify-content: space-around;
place-items: center;
border: 3px solid white;
border-radius: 0.5rem;
width: 15rem;
`

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

 const [ homeScore, setHomeScore ] = useState(0)
 const [ awayScore, setAwayScore ] = useState(0) 

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
           <teamName>Bears</teamName>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{ homeScore }</div>
          </div>
          <div className="timer">13:21</div>
          <div className="away">
            <teamName>Packers</teamName>
            <div className="away__score">{ awayScore }</div>
          </div>
        </div>
        <BottomRow />
      </section>

      <Scoreboard />

    </div>
  );
}

export default App;
