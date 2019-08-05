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

  voteNumToColor(mapClicked) {
    var clickRateStr = "#" + (0xff & Math.floor(mapClicked*2)).toString(16) + "0000";
    return clickRateStr;
  }

  constructor(props) {
    super(props);
    this.svgFilePath = process.env.PUBLIC_URL + '/japanmap.svg';
    this.randomPrefecture = japanesePrefecture[Math.floor( Math.random()*japanesePrefecture.length )];
  }

  render() {
    var list = [];
    var sumMapClicked = 0;

    /*this.props.clicked.forEach((value) => {
      sumMapClicked += value;
    });*/ //clickした数を合計してsumMapClickedを作成

    this.props.clicked.forEach((value, key) => { 
      list.push(<SvgProxy selector={"#" + key} fill={this.voteNumToColor(value)} />);
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
