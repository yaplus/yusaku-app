import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

import Card from './Card';

const API_GET_EPISODES_ENDPOINT = '/api/episodes';

let cards = [];

const EPISODES_PARAMS_SAMPLE = [
{
    id: 0,
    prefecture: '北海道',
    year: 10,
    content: 'ああああああああああああああああああああ',
    name: 'K',
    reactionMe: '[["hokkaido",0],["aomori",0],["iwate",0],["miyagi",0],["fukushima",0],["akita",0],["yamagata",0],["nigata",0],["tochigi",0],["ibaraki",0],["chiba",0],["kanagawa",0],["gunma",0],["saitama",0],["tokyo",0],["shizuoka",0],["toyama",0],["yamanashi",0],["nagano",0],["fukui",0],["shiga",0],["mie",0],["kyoto",0],["nara",0],["wakayama",0],["osaka",0],["hyogo",0],["okayama",0],["tottori",0],["shimane",0],["hiroshima",0],["yamaguchi",0],["tokushima",0],["kagawa",0],["kochi",0],["ehime",0],["miyazaki",0],["oita",0],["kumamoto",0],["saga",0],["fukuoka",0],["nagasaki",0],["kagoshima",0],["okinawa",0]]',
    reactionFriend: '[["hokkaido",0],["aomori",0],["iwate",0],["miyagi",0],["fukushima",0],["akita",0],["yamagata",0],["nigata",0],["tochigi",0],["ibaraki",0],["chiba",0],["kanagawa",0],["gunma",0],["saitama",0],["tokyo",0],["shizuoka",0],["toyama",0],["yamanashi",0],["nagano",0],["fukui",0],["shiga",0],["mie",0],["kyoto",0],["nara",0],["wakayama",0],["osaka",0],["hyogo",0],["okayama",0],["tottori",0],["shimane",0],["hiroshima",0],["yamaguchi",0],["tokushima",0],["kagawa",0],["kochi",0],["ehime",0],["miyazaki",0],["oita",0],["kumamoto",0],["saga",0],["fukuoka",0],["nagasaki",0],["kagoshima",0],["okinawa",0]]',
    reactionLike: 10,
  },
  {
    id: 1,
    prefecture: '神奈川県',
    year: 20,
    content: 'いいいいいいいいいいいいいいいいいいいい',
    name: 'H',
    reactionMe: '[["hokkaido",0],["aomori",0],["iwate",0],["miyagi",0],["fukushima",0],["akita",0],["yamagata",0],["nigata",0],["tochigi",0],["ibaraki",0],["chiba",0],["kanagawa",0],["gunma",0],["saitama",0],["tokyo",0],["shizuoka",0],["toyama",0],["yamanashi",0],["nagano",0],["fukui",0],["shiga",0],["mie",0],["kyoto",0],["nara",0],["wakayama",0],["osaka",0],["hyogo",0],["okayama",0],["tottori",0],["shimane",0],["hiroshima",0],["yamaguchi",0],["tokushima",0],["kagawa",0],["kochi",0],["ehime",0],["miyazaki",0],["oita",0],["kumamoto",0],["saga",0],["fukuoka",0],["nagasaki",0],["kagoshima",0],["okinawa",0]]',
    reactionFriend: '[["hokkaido",0],["aomori",0],["iwate",0],["miyagi",0],["fukushima",0],["akita",0],["yamagata",0],["nigata",0],["tochigi",0],["ibaraki",0],["chiba",0],["kanagawa",0],["gunma",0],["saitama",0],["tokyo",0],["shizuoka",0],["toyama",0],["yamanashi",0],["nagano",0],["fukui",0],["shiga",0],["mie",0],["kyoto",0],["nara",0],["wakayama",0],["osaka",0],["hyogo",0],["okayama",0],["tottori",0],["shimane",0],["hiroshima",0],["yamaguchi",0],["tokushima",0],["kagawa",0],["kochi",0],["ehime",0],["miyazaki",0],["oita",0],["kumamoto",0],["saga",0],["fukuoka",0],["nagasaki",0],["kagoshima",0],["okinawa",0]]',
    reactionLike: 20,
  },
];

class Timeline extends React.Component {

  componentWillMount() {
    axios.get(API_GET_EPISODES_ENDPOINT)
    .then(response => {
      // handle success
      this.setState({
        response: response.data,
        loading: false
      });
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
      response: [],
      loading: true
    }
  }

  render() {
    // 表示する
    let response = this.state.response;
    return (
      <div className="timeline">
        {this.state.loading && <CircularProgress style={{ 
          display: 'block',
          position: 'relative',
          margin: '10px auto',
        }}/>}
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
