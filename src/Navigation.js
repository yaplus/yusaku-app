// React
import React from 'react'
/*import {
    Alignment,
    Button,
    Colors,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";*/

import "./Navigation.scss"

import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

class Navigation extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <header>
        <AppBar title="My App" positin="static">
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}></Grid>
          <Grid item xs={3}></Grid>
        </Grid>
          <Toolbar>
            {/* <Tabs aria-label="simple tabs example">
              <Tab label="Item 1" value="0" />優作について
              <Tab label="Item 2" value="1" />
              <Tab label="Item 3" value="2" />
              <Tab label="Item 4" value="3" />
            </Tabs> */}
            <Grid container>
              <Grid item xs={3}>
                <Typography variant="h6" className="aa">
                  ゆうさく
                </Typography>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Button className="Note" color="inherit" id="Note">このアプリについて</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default Navigation;
