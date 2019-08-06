import React from 'react';
import axios from 'axios';
import JapanMap from './JapanMap'

import './Card.css';

const API_EPISODE_ENDPOINT_PREFIX = '/api/episode/';
const API_REACTION_ME_ENDPOINT = '/api/reaction/me';
const API_REACTION_FRIEND_ENDPOINT = '/api/reaction/friend';
const API_REACTION_LIKE_ENDPOINT = '/api/reaction/like';

const PREFECTURE_PARAMS_SAMPLE = 'ibaraki';

class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props,
      isMeClicked: false,
      isFriendClicked: false,
      isLiked: false,
    };

    this.handleLiked = this.handleLiked.bind(this);
    this.handleTogleChanged = this.handleTogleChanged.bind(this);
  }

  handleLiked (event) {
    /* like が押された時の処理 */
    let id = this.state.data.id;
    this.setState({isLiked: true});
    axios.post(API_REACTION_LIKE_ENDPOINT, {
      id: id
    }).then( response => {
      /* この辺にsuccessかどうかチェックするコードがいるかも */
      axios.get(API_EPISODE_ENDPOINT_PREFIX + id).then( newData => {
        this.setState({data: newData.data});
      });
    });
  }

  handleTogleChanged (event) {
    /* 「自分のこと？」/「知り合いにいるかも？」が切り替わった時の処理 */
    let endpoint = null;
    switch (event.target.id) {
      case "Me":
        this.setState({isMeClicked: true, isFriendClicked: false});
        endpoint = API_REACTION_ME_ENDPOINT;
        break;
      case "Friend":
        this.setState({isMeClicked: false, isFriendClicked: true});
        endpoint = API_REACTION_FRIEND_ENDPOINT;
        break;
    }
    if (endpoint != null) {
      let id = this.state.data.id;
      axios.post(endpoint, {
        id: id,
        prefecture: PREFECTURE_PARAMS_SAMPLE
      }).then( response => {
        /* この辺にsuccessかどうかチェックするコードがいるかも */
        axios.get(API_EPISODE_ENDPOINT_PREFIX + id).then( newData => {
          this.setState({data: newData.data});
        });
      });
    }
  }

  render() {
    return (
      <div className="Card">
        <span id="Year" className="strong"> {this.state.data.year} </span> 年くらい前に

        <span id="Prefecture" className="strong"> {this.state.data.prefecture} </span> で

        <div id="Content" className="strong"> {this.state.data.content} </div> してた

        <span id="Name" className="strong"> {this.state.data.name} </span> くん

        <div id="ReactionButtons">
          <input id="Me"
                 type="button"
                 value="自分のこと？"
                 onClick={this.handleTogleChanged}
                 disabled={this.state.isMeClicked}
          />

          <input id="Friend"
                 type="button"
                 value="知り合いのこと？"
                 onClick={this.handleTogleChanged}
                 disabled={this.state.isFriendClicked}
          />

          <input id="Like"
                 type="button"
                 value={'🤟' + this.state.data.reactionLike}
                 onClick={this.handleLiked}
                 disabled={this.state.isLiked}
          />
        </div>

        このエピソードに聞き覚えがある人はここにいます：
        <div id="JapanMap">
          <JapanMap reactionMe={this.state.data.reactionMe} reactionFriend={this.state.data.reactionFriend}/> 
        </div>
      </div>
    );
  }
}

export default Card;
