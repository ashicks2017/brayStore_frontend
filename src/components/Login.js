
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Button, Container } from 'reactstrap';

// let img = './public/images/jens-kreuter-IBb0U6k0PAY-unsplash';

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: "url(" + { img } + ")"
// };


export default class Login extends Component {
  state = {
    name: "",
    loggedIn: true
          };

    componentDidMount() {
    const token = localStorage.token;
      console.log(token)
      fetch("http://localhost:3000/profile", {
      method: "GET",
      headers: {
      Authorization: `Bearer ${token}`
      }
    })

    .then(resp => resp.json())
    .then(data => {
    console.log(data)
      if (!data.error) {
      this.setState({
      currentCustomer: data
       });
      }
     });
    }

  login = (e) => {
      e.preventDefault()
      let name = e.target[0].value
      let password = e.target[1].value
      //  debugger

      fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify({
      name: name, 
      password: password
    })
  })
      .then(res => res.json())
      .then(data => {
      // debugger
      localStorage.setItem("customer",data.customerId)
      console.log(data)
        if (!data.error){
        localStorage.token = data.token;

        this.setState({
        name: data.name
     });
     this.props.history.push('/Products')
    }

       else {
      console.log("error")
      this.setState({
      loginError: data.error})}

  })
  }

  handleClick(event) {
  localStorage.clear()
  event.preventDefault()
  this.setState({
  loggedIn: false
  })
  }

    render() {
     
    //  if (this.state.loggedIn) {
    //   return (<Redirect to={'/home'}/>)
    // }
   
    // if(sessionStorage.getItem('userData')){
    //   return (<Redirect to={'/home'}/>)
   // }
    return(
      <Container style={{backgroundColor: '#E3AFBC'}}>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <form className="form-signin lower-content" onSubmit={this.login}>
      <h1 className="h3 mb-3 font-weight-normal">Login</h1>
      <label className="sr-only">Username</label>
      <input className="form-control" type="text" name="name" placeholder="Username"/>
      <br />
      <input className="form-control" type="password" name="name" placeholder="Password"/>
      <br />
      <Button className="btn btn-lg btn-primary btn-block white-button" type="submit">
      Log In
      </Button>
      </form>
      <br />
      Or <Link to="/Signup">Create Account</Link>
      </Col>
      </Container>
     
      );
     }
    } 
  

     