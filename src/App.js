import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import EditRoundedIcon from '@material-ui/icons/EditRounded';
import SmsRoundedIcon from '@material-ui/icons/SmsRounded';

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
              <Grid item xs={4}></Grid>
              <Grid item xs={4}>
                <Paper square>
                  <Tabs
                    value={this.state.currentView}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={this.handleChange}
                    aria-label="disabled tabs example"
                    variant="fullWidth"
                  >
                    <Tab icon={< EditRoundedIcon />} label="エピソードを投稿する" />
                    <Tab icon={< SmsRoundedIcon />}label="みんなのエピソードを見る" />
                  </Tabs>
                </Paper>
              </Grid>
              <Grid item xs={4}></Grid>
            </Grid>
            { currentViewComponent /*現在のビューに対応したコンポーネントを表示*/ }
          </div>
    );
  }
}

export default App;