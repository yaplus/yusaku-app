// React
import React from 'react';

// CSS
import "./Home.css"

class Home extends React.Component {

  constructor(props){
    super(props)
  }
  submitOnclickHandler = event => {
    this.props.history.push("/submitter");
  };
  viewOnclickHandler = event =>{
    this.props.history.push("/viewer");
  };

  render(){

    return (
      <div className="Home">
        <div className="Title">
          <h1>
            ゆうさく
                </h1>
        </div>
        <div className="Caution">
          😢本当に人探しをしたいときは探偵を雇った方がいいです...<br />
          😢人が傷つくことは言わない方がいいです...<br />
        </div>
        {/* <div><button value="エピソードを投稿する" id="submitter" /></div> */}
        <div>
          <button id="submitter" onClick={this.submitOnclickHandler}>エピソードを投稿する</button>
          <button id="viewer" onClick={this.viewOnclickHandler}>エピソードを見る</button>
        </div>

        <form>

        </form>
      </div>
    );
  }
  
}

export default Home;
