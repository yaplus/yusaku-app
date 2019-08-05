import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Button } from "@blueprintjs/core";
import './App.css';
import Card from './Card'
var data = ["神奈川県", "千葉県", "埼玉県"];
var job = ["小","中","高","大","社"];

let cards = [];
class Timeline extends React.Component {

  componentWillMount() {
    axios.get('/api')
    .then(response => {
      // handle success
      this.setState({response: response.data});
      console.log(this.state.response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });

    console.log(this.state.response);
  }

  constructor(props) {
    super(props);
    // propsからTweetのリストを作る
    this.state = {
      response: []
    }
    console.log(this.props.cards);

    /*
    this.cardList = props.cards.map((cd) => (
      <Card
        key={cd.id}
        displayName={cd.displayName}
        content={cd.content}
        clicked={cd.clicked}
      />
    ));
    */
  }

  render() {
    // 表示する
    return <div className="timeline">{
      this.state.response.map((value) => {
        return (
          <Card
            key={value.id}
            displayName={value.displayName}
            content={value.content}
            clicked={value.clicked}
          />)
      })
    }</div>;
  }
}

export default Timeline;
