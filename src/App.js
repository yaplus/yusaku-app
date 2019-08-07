import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import Home from './Home';
import InputForm from './InputForm';
import Timeline from './Timeline';
import Navigation from './Navigation';

const VIEW_INPUT_FORM = 0;
const VIEW_TIMELINE = 1;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currentView: VIEW_INPUT_FORM,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    // console.log(newValue);
    this.setState({currentView: newValue});
    // console.log(this.currentView);
    event.preventDefault();
  }

  render() {
    // トグルの値によって表示するComponentを切り替える
    console.log(this.state.currentView);
    let currentViewComponent = (() => {
      switch (this.state.currentView) {
        case VIEW_INPUT_FORM:
          return <InputForm />;
        case VIEW_TIMELINE:
          return <Timeline />;
      }
    })();
    console.log(currentViewComponent);
    return (
          <div>
            <Navigation />
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={10}>
                  <Tabs
                    value={this.state.currentView}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    aria-label="disabled tabs example"
                    variant="fullWidth"
                  >
                    <Tab label="エピソードを投稿する" />
                    <Tab label="みんなのエピソードを見る" />
                  </Tabs>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
            { currentViewComponent /*現在のビューに対応したコンポーネントを表示*/ }
            <div style={{textAlign:'center', marginTop:'20px', color:'#6e6e6e'}}>
              &copy; 2019 優作
            </div>
          </div>
    );
  }
}

export default App;