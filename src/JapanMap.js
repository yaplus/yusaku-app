import React from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';
import './JapanMap.css';

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

export default class JapanMap extends React.Component {

  constructor(props) {
    super(props);
    this.svgFilePath = process.env.PUBLIC_URL + '/japanmap.svg';

  }

  accessCntToColor(meCnt, friendCnt) {
    // 0xc8 == 200
    let r = 0xc8;
    let g = 0xc8;
    let b = 0xc8;

    g = g - meCnt * 20;
    b = b - meCnt * 20;

    r = r - friendCnt * 20;
    b = b - friendCnt * 20;

    r = (r < 0) ? 0 : r;
    g = (g < 0) ? 0 : g;
    b = (b < 0) ? 0 : b;

    const colorStr = "#" + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
    // console.log(colorStr);
    return colorStr;
  }

  render() {
    var list = [];

    const reactionMe = JSON.parse(this.props.reactionMe);
    const reactionFriend = JSON.parse(this.props.reactionFriend);

    for (let i = 0; i < reactionMe.length; i++) {
      list.push(<SvgProxy selector={"#" + reactionMe[i][0]} fill={this.accessCntToColor(reactionMe[i][1], reactionFriend[i][1])} />);
    }

    return (
        <div>
        <SvgLoader id="japanmap" path={this.svgFilePath}>
          {list}
        </SvgLoader>
        </div>
    );
  }
}
