import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './App.css';
import Card from './Card'

const API_GET_EPISODES_ENDPOINT = '/api/episodes';

let cards = [];

const EPISODES_PARAMS_SAMPLE = [
  {
    id: 0,
    prefecture: '北海道',
    year: 10,
    content: 'ああああああああああああああああああああ',
    name: 'K',
    reactionMe: {},
    reactionFriend: {},
    reactionLike: 10,
  }, 
  {
    id: 1,
    prefecture: '神奈川県',
    year: 20,
    content: 'いいいいいいいいいいいいいいいいいいいい',
    name: 'H',
    reactionMe: {},
    reactionFriend: {},
    reactionLike: 20,
  }, 
];

class Timeline extends React.Component {

  componentWillMount() {
    axios.get(API_GET_EPISODES_ENDPOINT)
    .then(response => {
      // handle success
      this.setState({response: response.data});
      console.log(this.state.response);
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      response: []
    }
  }

  render() {
    // 表示する
    let response = this.state.response;
    return (
      <div className="timeline">
      {
        response.map((value) => {
          return (
            <Card
              id={value.id}
              prefecture={value.prefecture}
              year={value.year}
              content={value.content}
              name={value.name}
              reactionMe={value.reactionMe}
              reactionFriend={value.reactionFriend}
              reactionLike={value.reactionLike}
            />)
        })
      }
      </div>
    );
  }
}

export default Timeline;
