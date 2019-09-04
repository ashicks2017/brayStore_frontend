import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import '../assets/css/App.css';


export default class Details extends Component {
  constructor(){
    super()
    this.state = {
      // cartItems: [],
    }
  }
 
addToCart = (e,id) => {
  e.preventDefault()
  console.log(`hello from add to cart',${this.props.item.id}, ${this.props.item.name}`);
  

fetch('http://localhost:3000/cart_Items', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    item_id: this.props.item.id,
    customer_id: parseInt(localStorage.customer)
     })
  })
  } 
    render() {
      console.log(this.props.item)
        return (
      <div>
      <h3>{this.props.item.name}</h3>
      <div className="image-container">
      <img src={this.props.item.img_url} className="img-fluid img-thumbnail" alt="Product" className="card-img-top"/>
      <h3>{this.props.item.title}</h3>
      <p>{this.props.item.description}</p>
      <Link to="/">
      <ButtonContainer>Back to the products</ButtonContainer>
      </Link>
      <Link to="/cart">
      <button onClick={(id)=>{this.addToCart(id)}}>Add to the Cart</button>
      </Link>
      </div>
      </div>
        )}}
