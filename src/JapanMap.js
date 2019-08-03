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

export default class JapanMap extends React.Component {

  voteNumToColor(n) {
    return "#2b6";
  }

  constructor(props) {
    super(props);
    this.svgFilePath = process.env.PUBLIC_URL + '/japanmap.svg';
    this.randomPrefecture = japanesePrefecture[Math.floor( Math.random()*japanesePrefecture.length )];
  }

  render() {
    var list = [];

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
