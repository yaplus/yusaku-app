import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

import './InputForm.css';

const API_POST_EPISODE_ENDPOINT = '/api/episode';

const japanesePrefecture = [
  '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県', '茨城県', '栃木県',
  '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県', '富山県', '石川県', '福井県',
  '山梨県', '長野県', '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県', '京都府', '大阪府',
  '兵庫県', '奈良県', '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県', '香川県',
  '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

const nameInitial = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
  'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

class InputForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      prefecture: null,
      year: null,
      content: null,
      name: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePrefectureChange = this.handlePrefectureChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePrefectureChange(event) {
    this.setState({ prefecture: event.target.value });
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleChange(event) {
    switch (event.target.id) {
      case "Content":
        this.setState({content: event.target.value});
        break;
      case "Year":
        let newValue = event.target.value;
        if (newValue < 1) {
          newValue = 1;
        } else if (newValue > 99) {
          newValue = 99;
        }
        this.setState({year: newValue});
        break;
      case "Name":
        this.setState({name: event.target.value});
        break;
    }
  }

  handleSubmit(event) {
    if(  this.state.prefecture!=null
      && this.state.year!= null
      && this.state.prefecture!= null
      && this.state.name!= null) {
      axios.post(API_POST_EPISODE_ENDPOINT, {
        prefecture: this.state.prefecture,
        year: this.state.year,
        content: this.state.content,
        name: this.state.name
      }).then(res => {
        alert(this.state.year + ' 年くらい前に ' + this.state.prefecture + ' で\n'
              + this.state.content + 'してた' + this.state.name + ' くんのエピソードを投稿しました！');
        console.log(res.data.id);
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
          <Paper className="InputForm" style={{padding:20}}>
          <form>
            <label>
              <TextField
                id="Year"
                label="年数"
                type="number"
                style = {{width: 80}}
                value={this.state.year}
                onChange={this.handleChange}
              />
              年くらい前に
              <TextField
                select
                id="Prefecture"
                label="都道府県"
                style = {{width: 120}}
                value={this.state.prefecture}
                onChange={this.handlePrefectureChange}
              >
              {
                japanesePrefecture.map(option => (
                  <MenuItem value={option}>
                    {option}
                  </MenuItem>
                ))
              }
              </TextField>
              で
              <TextField
                id="Content"
                label="エピソード"
                fullWidth
                multiline="true"
                rows="3"
                value={this.state.content}
                onChange={this.handleChange}
              />
              してた
              <TextField
                select
                id="Name"
                label="名前のイニシャル"
                style = {{width: 160}}
                value={this.state.name}
                onChange={this.handleNameChange}
              >
              {
                nameInitial.map(option => (
                  <MenuItem value={option}>
                    {option}
                  </MenuItem>
                ))
              }
              </TextField>
              くん のこと知らない？
            </label>

            <div>
            <Button
              id="Submit"
              type="submit"
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              🚀 送信
            </Button>
            </div>
          </form>

          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
      </div>
    );
  }
}

export default InputForm;
