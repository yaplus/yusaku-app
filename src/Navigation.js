// React
import React from 'react';
import {
    Alignment,
    Button,
    Colors,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading
} from "@blueprintjs/core";

import "./Navigation.scss"

class Navigation extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Navbar>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Yusaku-App(仮)</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <Navbar.Divider />
          <Button className="bp3-minimal" icon="person" text="優作について" />
          <Button className="bp3-minimal" icon="help" text="よくある質問" />
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default Navigation;
