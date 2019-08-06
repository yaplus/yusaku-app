import React from 'react';
import axios from 'axios';
import JapanMap from './JapanMap';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

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
    this.handleChange = this.handleChange.bind(this);
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

  a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  handleChange(event, newValue) {
    console.log(event.target.innerText);
    this.setState({currentView: newValue});
    // console.log(this.currentView);
    /* 「自分のこと？」/「知り合いにいるかも？」が切り替わった時の処理 */
    let endpoint = null;
    switch (event.target.innerText) {
      case "自分のこと？":
        this.setState({isMeClicked: true, isFriendClicked: false});
        endpoint = API_REACTION_ME_ENDPOINT;
        break;
      case "知り合いのこと？":
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
    event.preventDefault();
  }

  render() {
    return (
        <div className="Card">
            <Grid container>
                <Grid xs="2"></Grid>
                <Grid xs="8">
                    <Paper style={{padding:10}}>
                        <Typography>
                            <span id="Year" className="strong"> {this.state.data.year} </span> 年くらい前に

                            <span id="Prefecture" className="strong"> {this.state.data.prefecture} </span> で

                            <div id="Content" className="strong"> {this.state.data.content} </div> してた

                            <span id="Name" className="strong"> {this.state.data.name} </span> くん

                            <div id="ReactionButtons">
                                <Tabs
                                    value={this.state.currentView}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    onChange={this.handleChange}
                                    aria-label="disabled tabs example"
                                    variant="fullWidth"
                                >
                                    <Tab id="Me" label="自分のこと？" />
                                    <Tab id="Friend" label="知り合いのこと？" />
                                </Tabs>

                            <Button id="Like"
                                    type="button"
                                    onClick={this.handleLiked}
                                    disabled={this.state.isLiked}
                            >
                                🤟{this.state.data.reactionLike}
                            </Button>
                            </div>

                            このエピソードに聞き覚えがある人はここにいます：
                            <div id="JapanMap">
                            <JapanMap reactionMe={this.state.data.reactionMe} reactionFriend={this.state.data.reactionFriend}/> 
                            </div>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid xs="2"></Grid>
            </Grid>
        </div>
    );
  }
}

export default Card;
