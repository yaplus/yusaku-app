import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './App.css';
import Card from './Card'

const API_GET_EPISODES_ENDPOINT = '/api/episodes';

let cards = [];
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
    return (
      <div className="timeline">
      {
        this.state.response.map((value) => {
          return (
            <Card
              key={value.id}
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
