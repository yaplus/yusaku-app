import React from 'react';
import axios from 'axios';

import './InputForm.css';

import logo from './logo.svg';

const API_ENDPOINT = '/api';

const japanesePrefecture = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県'
];

var belongs = ["小","中","高","大","社"]

class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: 'ここにエピソードを入力してください',
      name: 'Y.K',
      prefecture: '北海道',
      belongsInitial: 'X',
      belongs: '小'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch (event.target.id) {
      case "Content":
        this.setState({content: event.target.value});
        break;
      case "Prefecture":
        this.setState({prefecture: event.target.value});
        break;
      case "BelongsInitial":
        this.setState({belongsInitial: event.target.value});
        break;
      case "Belongs":
        this.setState({belongs: event.target.value});
        break;
      case "Name":
        this.setState({name: event.target.value});
        break;
    }
  }

  handleSubmit(event) {
    // 表示名
    const displayName = this.state.prefecture + this.state.belongsInitial + this.state.belongs + this.state.name + 'さん';
    // /api に対してPOST送信
    alert(displayName + ' についての次のエピソードを送信しました: \n' + this.state.content);
    axios.post(API_ENDPOINT, {
      displayName: displayName,
      content: this.state.content
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="App" id="InputForm">
        <form>
          <label>
            <textarea id="Content" value={this.state.content} onChange={this.handleChange}></textarea>
            <select id="Prefecture" value={this.state.prefecture} onChange={this.handleChange}>
              {japanesePrefecture.map(p => <option>{p}</option>)}
            </select>
            <input id="BelongsInitial" type="text" pattern="^[A-Z]$" maxlength='1' value={this.state.belongsInitial} onChange={this.handleChange} />
            <select id="Belongs" value={this.state.belongs} onChange={this.handleChange}>
              {belongs.map(j => <option>{j}</option>)}
            </select>
            <input id="Name" type="text" value={this.state.name} onChange={this.handleChange}/>
            のこと知らない？
          </label>
          <div><input id="Submit" type="submit" value="🚀送信" onClick={this.handleSubmit}/></div>

        </form>
        <div id ="alart"> 😢本当に人探しをしたいときは探偵を雇った方がいいです... </div>
        <div id ="alart"> 😢人が傷つくことは言わない方がいいです... </div>
      </div>
    );
  }
}

export default InputForm;
