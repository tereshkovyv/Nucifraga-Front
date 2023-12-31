import React, { Component } from 'react';
// import { Collapse, Navbar } from 'reactstrap';
// import { LoginMenu } from './api-authorization/LoginMenu';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        {/*<LoginMenu>*/}
        {/*</LoginMenu>*/}
      </header>
    );
  }
}
