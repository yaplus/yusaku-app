import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';


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

class InputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: 'ここにエピソードを入力してください',
      name: 'K',
      prefecture: '宮城県',
      year: '0'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePrefectureChange = this.handlePrefectureChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePrefectureChange(event) {
    this.setState({ prefecture: event.target.value });
  }

  handleChange(event) {
    switch (event.target.id) {
      case "Year":
        this.setState({ year: event.target.value });
        break;
      case "Content":
        this.setState({ content: event.target.value });
        break;
      case "Prefecture":
        this.setState({ prefecture: event.target.value });
        break;
      case "Name":
        this.setState({ name: event.target.value });
        break;
    }
  }

  handleSubmit(event) {
    // 表示名
    const displayName = this.state.year + '年前に' + this.state.prefecture + 'で' + this.state.content +'してた' +  this.state.name + 'さん';
    // /api に対してPOST送信
    alert(displayName + ' についての次のエピソードを送信しました: \n' + this.state.content);
    axios.post(API_ENDPOINT, {
      displayName: displayName,
      content: this.state.content
    });
    event.preventDefault();
  }

  render() {

    // const classes = useStyles();

    return (


      <div className="App" id="InputForm">
        <form>
          <label>
            <div id = "inputSeries">
              <TextField
                id="Year"
                label="年数"
                type="number"
                required={true}
                value={this.state.year}
                onChange={this.handleChange}>
              </TextField>
            </div>
            {/* <textarea id="Content" value={this.state.content} onChange={this.handleChange}></textarea> */}
            <TextField
              id="Content"
              label="エピソード"
              fullWidth
              value={this.state.content}
              onChange={this.handleChange}>
            </TextField>

            {/* <select id="Prefecture" value={this.state.prefecture} onChange={this.handleChange}>
              {japanesePrefecture.map(p => <option>{p}</option>)}
            </select> */}
            <div id = "inputSeries">
              <TextField
                select
                id="Prefecture"
                label="都道府県"
                value={this.state.prefecture}
                onChange={this.handlePrefectureChange}
              >


                {/* {japanesePrefecture.map(p => <option>{p}</option>)} */}
                {japanesePrefecture.map(option => (
                  <MenuItem value={option}>
                    {option}
                  </MenuItem>
                ))
                }
              </TextField>

              <TextField
                id="Name"
                label="名前のイニシャル"
                type="text"
                value={this.state.name}
                onChange={this.handleChange} />
              のこと知らない？
            </div>
          </label>
          {/* <div><input id="Submit" type="submit" value="🚀送信" onClick={this.handleSubmit} /></div> */}
          <div id="submit">
            <Button
              id="Submit"
              type="submit"
              //fullWidth
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              送信
            </Button>
          </div>
        </form>
        <div id="alart"> 😢本当に人探しをしたいときは探偵を雇った方がいいです... </div>
        <div id="alart"> 😢人が傷つくことは言わない方がいいです... </div>
      </div>

    );
  }
}

export default InputForm;
