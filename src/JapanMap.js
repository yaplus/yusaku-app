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

  constructor(props) {
    super(props);
    this.svgFilePath = process.env.PUBLIC_URL + '/japanmap.svg';

  }

  voteNumToColor(mapClicked) {
    var clickRateStr = "#c8" + (0xff & Math.floor(200 - mapClicked)).toString(16).padStart(2, '0') + (0xff & Math.floor(200 - mapClicked)).toString(16).padStart(2, '0');
    return clickRateStr;
  }

  render() {
    var list = [];

    const reactionMe = JSON.parse(this.props.reactionMe);

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
