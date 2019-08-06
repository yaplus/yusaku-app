import React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';

const japanesePrefecture = ["hokkaido",
                            "aomori",
                            "iwate",
                            "miyagi",
                            "fukushima",
                            "akita",
                            "yamagata",
                            "nigata",
                            "tochigi",
                            "ibaraki",
                            "chiba",
                            "kanagawa",
                            "gunma",
                            "saitama",
                            "tokyo",
                            "shizuoka",
                            "toyama",
                            "yamanashi",
                            "nagano",
                            "fukui",
                            "shiga",
                            "mie",
                            "kyoto",
                            "nara",
                            "wakayama",
                            "osaka",
                            "hyogo",
                            "okayama",
                            "tottori",
                            "shimane",
                            "hiroshima",
                            "yamaguchi",
                            "tokushima",
                            "kagawa",
                            "kochi",
                            "ehime",
                            "miyazaki",
                            "oita",
                            "kumamoto",
                            "saga",
                            "fukuoka",
                            "nagasaki",
                            "kagoshima",
                            "okinawa"
                            ];

const colorToMap = ["#777","#596","#3b5","#0f3"]

export default class JapanMap extends React.Component {

  /*voteNumToColor(mapClicked, sumMapClicked) {
    return colorToMap[Math.round(mapClicked/sumMapClicked*4) - 1];
  }*/ //こちらは割合のヒートマップを表示します

  constructor(props) {
    super(props);
    this.svgFilePath = process.env.PUBLIC_URL + '/japanmap.svg';

  }

  voteNumToColor(mapClicked) {
    var clickRateStr = "#c8" + (0xff & Math.floor(200 - mapClicked)).toString(16).padStart(2, '0') + (0xff & Math.floor(200 - mapClicked)).toString(16).padStart(2, '0');
    return clickRateStr;
  }



  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  render() {
    var list = [];
    var sumMapClicked = 0;

    const reactionMe = JSON.parse(this.props.reactionMe);
    /*this.props.clicked.forEach((value) => {
      sumMapClicked += value;
    });*/ //clickした数を合計してsumMapClickedを作成

    // fucking fucked codes fuck JapanMap.
    // let clicked = this.props.clicked
    let clicked = new Map([ [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)],
                                    [japanesePrefecture[this.getRandomInt(47)], this.getRandomInt(200)]
                                  ]);

    reactionMe.map(me => {
      list.push(<SvgProxy selector={"#" + me[0]} fill={this.voteNumToColor(me[1] * 20)} />);
    });

    return (
        <div>
        <SvgLoader id="japanmap" path={this.svgFilePath}>
          {list}
        </SvgLoader>
        </div>
    );
  }

}
