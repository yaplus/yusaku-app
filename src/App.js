
// React
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Node
import Home from './Home';
import InputForm from './InputfForm';
// Please import your JS File here
import Timeline from './Timeline';

class App extends React.Component {

  render() {
    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get('/api')
      .then(function (response) {
        // handle success
        // console.log(response);
        var receivedJSONCard = JSON.parse(response);
        cards.push(receivedJSONCard);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });

    // Optionally the request above could also be done as
    // axios.get('/API', {
    //     params: {
    //       ID: 12345
    //     }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // always executed
    //   });  

    // Want to use async/await? Add the `async` keyword to your outer function/method.
    // async function getUser() {
    //   try {
    //     const response = await axios.get('/user?ID=12345');
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    
    const cards = [
      {
        id:0,
        displayName: 'A県B中学校 Y.Kくんのエピソード',
        content: '公園の遊具で股間を強打して笑われた',
        clicked: new Map([["hokkaido", 3],
                  ["aomori", 4]])
      },

      {
        id: 1,
        displayName: 'C県D中学校 K.Kくんのエピソード',
        content: 'かにみそたべたい',
        clicked: new Map([["kanagawa", 3],
                  ["tokyo", 4]])
      },

      {
        id: 1,
        displayName: 'E県F中学校 K.Kくんのエピソード',
        content: '失恋した',
        clicked: new Map([["chiba", 3],
        ["ibaraki", 4]])
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
}

export default App;

