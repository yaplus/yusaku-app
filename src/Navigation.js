// React
import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

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
            <Grid container>
              <Grid item xs={3}>
                <Typography variant="h6" className="aa">
                  ゆうさく
                </Typography>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs={3}>
                <Button className="Note" color="inherit" id="Note" onTouchTap={this.handleOpen}>このアプリについて</Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default Navigation;
