import React, { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

class NavBar extends React.Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      ...this.state,
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar color='dark' light expand='md'>
          <NavbarBrand href='/'>React Basic</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <Link to='/post'>
                  <NavLink>Post</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/user'>
                  <NavLink>User</NavLink>
                </Link>
              </NavItem>
            </Nav>
            <NavbarText>LogOut</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
