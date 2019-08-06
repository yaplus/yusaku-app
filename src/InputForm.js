import React from 'react';
import axios from 'axios';

import './InputForm.css';

const API_POST_EPISODE_ENDPOINT = '/api/episode';

const japanesePrefecture = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県',
  '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県',
  '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府',
  '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県',
  '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

class InputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prefecture: japanesePrefecture[0],
      year: 10,
      content: 'ここにエピソードを入力してください',
      name: 'K'
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
      case "Year":
        this.setState({year: event.target.value});
        break;
      case "Name":
        this.setState({name: event.target.value});
        break;
    }
  }

  handleSubmit(event) {
    // /api に対してPOST送信
    alert(this.state.year + ' 年くらい前に ' + this.state.prefecture + ' で\n'
      + this.state.content + 'してた' + this.state.name + ' くんのエピソードを投稿しました！');
    axios.post(API_POST_EPISODE_ENDPOINT, {
      prefecture: this.state.prefecture,
      year: this.state.year,
      content: this.state.content,
      name: this.state.name
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className="InputForm">
        <form>
          <label>
            <input id="Year" type="number" value={this.state.year} min='0' max='99' onChange={this.handleChange}/>
            年くらい前に
            <select id="Prefecture" value={this.state.prefecture} onChange={this.handleChange}>
              {japanesePrefecture.map(p => <option>{p}</option>)}
            </select>
            で
            <textarea id="Content" value={this.state.content} onChange={this.handleChange}></textarea>
            してた
            <input id="Name" type="text" value={this.state.name} pattern="^[A-Z]$" maxlength='1' onChange={this.handleChange}/>
            くん のこと知らない？
          </label>
          <div><input id="Submit" type="submit" value="🚀送信" onClick={this.handleSubmit}/></div>
        </form>
        <div className ="alart"> 😢本当に人探しをしたいときは探偵を雇った方がいいです... </div>
        <div className ="alart"> 😢人が傷つくことは言わない方がいいです... </div>
      </div>
    );
  }
}

export default InputForm;
