import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg'
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import Searchbar from './Searchbar';
import login from './login'
import SignUp from './SignUp'
import ItemList from './ItemList'


export default class Navbar extends Component {
render() {
        return (
            
        <nav className="navbar navbar-expand-sm bg-light navbar-lightpx-sm-5">
            
    <Link to='/'>PAINTINGS</Link>

   <Link to='/SignUp' className="ml-auto">SignUp</Link>

<Link to="/login" className="ml-auto">Login/Logout</Link>

<Searchbar Search={this.props.Search}/>

<Link to='/cart' className="ml-auto">
    <ButtonContainer>
<span className="mr-2">
My cart</span>
    </ButtonContainer>
</Link>

</nav>
         
            
         
        )
    }
}
