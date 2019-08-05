
// React
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Node
import Home from './Home'
import InputForm from './InputfForm';
// Please import your JS File here
import Timeline from './Timeline';

function App() {
  const cards = [
    {
      id:0,
      displayName: 'A県B中学校 Y.Kくんのエピソード',
      content: '公園の遊具で股間を強打して笑われた',
      clicked: new Map([["hokkaido", 3],
                ["aomori", 3],["okinawa", 51],["osaka", 101],["shiga",151]])
    },

    {
      id: 1,
      displayName: 'C県D中学校 K.Kくんのエピソード',
      content: 'かにみそたべたい',
      clicked: new Map([["kanagawa", 3],
                ["tokyo", 3]])
    },

    {
      id: 1,
      displayName: 'E県F中学校 K.Kくんのエピソード',
      content: '失恋した',
      clicked: new Map([["chiba", 3],
      ["ibaraki", 3]])
    }
  ];

    return (
        <Router>
            <div>

                <Route path="/" exact component={Home} />
                <Route path="/submitter/" component={InputForm} />
                {/* Please Write Code Here */}
                <Route path="/viewer/" render={props => <Timeline cards={cards}/>} /> 
            </div>
        </Router>
    );
}

export default App;

