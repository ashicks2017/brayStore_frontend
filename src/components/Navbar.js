import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { ButtonContainer } from './Button';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: blue;
    }
  }
`;
export default class NavigationBar extends Component {
render() {
    return (
    <Styles>
    <Navbar expand="Large">
    <Navbar.Brand href='/Home'>Bray's Fly Shop</Navbar.Brand>
   <div>
   
   <nav className="navbar navbar-expand-sm bg-light navbar-lightpx-sm-7">
   <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/Products">Products</Link>
         <Link to="/SignUp">SignUp</Link>
         <Link to="/login">Login/Logout</Link>
          <ButtonContainer>
          <Link to="/cart">My Cart</Link>
         </ButtonContainer>
      </Nav>
      </Navbar.Collapse>
      </nav>
   </div>
   </Navbar>
   </Styles>
)}
 }

