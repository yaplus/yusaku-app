import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import { Button } from "@blueprintjs/core";
import './App.css';
import Card from './Card';
import Timeline from './Timeline';

var data = ['北海道',
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
'沖縄県'];
var job = ["小","中","高","大","社"]

function App() {
  const cards = [
    {
      id:0,
      displayName: 'A県B中学校 Y.Kくんのエピソード',
      content: '公園の遊具で股間を強打して笑われた',
      clicked: {"kanagawa" : 3,
                "ibaraki" : 4 }
    },

    {
      id: 1,
      displayName: 'C県D中学校 K.Kくんのエピソード',
      content: 'かにみそたべたい'
    },

    {
      id: 1,
      displayName: 'E県F中学校 K.Kくんのエピソード',
      content: '失恋した'
    }
  ];
  return (
    <div className="App">
      {/*<form>
        <label>
          <textarea></textarea>
          してた
          <select>
            {data.map(d => <option>{d}</option>)}
          </select>
          <input type="text" pattern="^[A-Z]$" maxlength='1'/>
          <select>
            {job.map(j => <option>{j}</option>)}
          </select>
          <input type="text" />
          のこと知らない？
        </label>
        <div><input type="submit" value="🚀送信" id="submit" /></div>
        <div id ="alart">
        😢本当に人探しをしたいときは探偵を雇った方がいいです...
        </div>
        <div id ="alart">
        😢人が傷つくことは言わない方がいいです...
        </div>
      </form>*/}
      <div>
        <Timeline cards={cards}/>
      </div>
    </div>
  );
}

//ReactDOM.render(<Timeline />, document.getElementById('note'));

export default App;
