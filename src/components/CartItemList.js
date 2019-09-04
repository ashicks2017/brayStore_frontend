import React, { Component } from 'react';
import {Col } from 'reactstrap';
import '../assets/css/App.css';

export default class CartItemList extends Component {
    
    render() {
        console.log(this.props.cartlist)
        return(       
         <div>
            <img src={`../../Product/${this.props.cartlist.image_url}`} style={{width: "5rem",height:"5rem"}} className="img-fluid" alt="product"/>
                <h2>Name:{this.props.cartlist.name}</h2>
                  <h2>Price:{this.props.cartlist.price}</h2>
                 <Col>
                <button onClick={() => this.props.removeitem(this.props.cartlist.id)}>Delete</button> 
                </Col>
                </div>
                )}
             }
