import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../src/assets/css/App.css';
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import ItemList from './components/ItemsList'
import Details from './components/Details'
import Cart from './components/Cart'
import DefaultPage from './components/DefaultPage'
import Login  from './components/Login'
import SignUp from './components/SignUp'
import CheckoutForm from './components/CheckoutForm'
import Home from './components/Home'
import AboutUs from './components/AboutUs';


//import Home from './components/Home';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
     products: [],
      isLoading: false,
      displayproducts:[],
      selecteditem: {},
    }
  }
  
  UNSAFE_componentWillMount(){
  if(localStorage.getItem('cartItems')){
    this.setState({CartItems: JSON.parse(localStorage.getItem('cartItems'))});
  }
}

Search = (event) => {
  let value = event.target.value
  console.log(event.target.value)
  if (value !=="") {
  
  this.setState({
    displayproducts: this.state.displayproducts.filter(item => (item.name.toLowerCase().includes(value.toLowerCase()))
      || (item.artist.toLowerCase().includes(value.toLowerCase()))
      )
  })
    
}else{
  this.setState({displayproducts:this.state.products})
  }}

filter = (e) => {
  let x
  console.log(e.target.value)
if(e.target.value==='name'){
  x = this.state.displayproducts.sort((a,b)=>{ return a.name < b.name ? -1 : 1 })

} else if(e.target.value==='price1') {
  x= this.state.displayproducts.sort((a,b)=> { return a.price < b.price ? 1 : -1 })
} else  {
  x= this.state.displayproducts.sort((a,b)=> { return a.price < b.price ? -1 : 1 })
}
this.setState({displayproducts:x})

}

 componentDidMount(){
    fetch(`http://localhost:3000/items`)
    .then(res => res.json())
    .then(data => {
       console.log(data)
    this.setState({
      products: data,
      displayproducts: data,
      isLoading: false,})
  })
  }

  handleDetail = (product) => {
    console.log("clicked:",product.id)
     this.setState({
       ...this.state,
       selecteditem: product
     })
  }
   render(){
    return(
      <React.Fragment>
      <Router>
      <Navbar Search={this.Search} />
      <Switch>
      <Route exact path="/Home" render={ () => <Home/> }/>
      <Route exact path="/AboutUs" render={ () => <AboutUs/> }/>
      <Route exact path="/Products" render={ () => <ItemList displayproducts={this.state.displayproducts} handleDetail={this.handleDetail} addToCart={this.addToCart}/> }/>
      <Route path="/Details" render={ () => <Details item={this.state.selecteditem} inCart={this.state.inCart} addToCart={this.addToCart}/> }/>
      <Route path="/cart" component={Cart}/>
      <Route path="/login" component={Login} />
      <Route path="/SignUp" component={SignUp} />
      <Route path="/CheckoutForm" component={CheckoutForm}/>
      <Route component={DefaultPage}/>
      </Switch>
      </Router>
      </React.Fragment>
    )
  }
}