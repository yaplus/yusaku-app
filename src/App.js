
// React
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Node
import Home from './Home';
import InputForm from './InputfForm';
// Please import your JS File here
import Timeline from './Timeline';
import Navigation from './Navigation';

let cards = [];

class App extends React.Component {

  constructor(){
    super();
    this.counter = 0;
    
    cards = [
      {
        id:0,
        displayName: 'A県B中学校 Y.Kくんのエピソード',
        countMetal: 100,
        content: '公園の遊具で股間を強打して笑われた',
        clicked: new Map([["hokkaido", 3],
                  ["aomori", 4]])
      },

      {
        id: 1,
        displayName: 'C県D中学校 K.Kくんのエピソード',
        countMetal: 100,
        content: 'かにみそたべたい',
        clicked: new Map([["kanagawa", 3],
                  ["tokyo", 4]])
      },

      {
        id: 2,
        displayName: 'E県F中学校 K.Kくんのエピソード',
        countMetal: 100,
        content: '失恋した',
        clicked: new Map([["chiba", 3],
        ["ibaraki", 4]])
      }
    ];

    let ret = [];


    //console.log(this.state.response);

    /*
          //var receivedJSONCard = JSON.parse(response);
          response.data[0].clicked = eval(response.data[0].clicked);
          // console.log(response.data[0]);
          let obj = response.data[0];
          Object.keys(obj).forEach(function(key) {
            ret[key] = this[key]; // this は obj
            // console.log(key, val);
          }, obj);
          
          console.log(ret);
          cards.push(ret);
          console.log(cards);
          */
  }

  
  render() {
    return (
        <Router>
            <div>
                <Route path="/" exact component={Home} />
                <Route path="/submitter/" component={InputForm} />
                {/* Please Write Code Here */}
                <Route path="/viewer/" render={props => <Timeline />} /> 
            </div>
            <Navigation />
        </Router>
    );
  }
}

export default App;