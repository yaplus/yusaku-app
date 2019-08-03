import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Button } from "@blueprintjs/core";
import './App.css';
import Card from './Card'
var data = ["神奈川県", "千葉県", "埼玉県"];
var job = ["小","中","高","大","社"]

function Timeline(props) {
    // propsからTweetのリストを作る
    const cardList = props.cards.map((cd) => (
      <Card
        key={cd.id}
        displayName={cd.displayName}
        content={cd.content}
        clicked={cd.clicked}
      />
    ));
  
    // 表示する
    return <div className="timeline">{cardList}</div>;
  }

export default Timeline;
