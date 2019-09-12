import React, {Component} from 'react';
import {Form, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { ButtonContainer } from './Button';
// import {CardElement, injectStripe} from 'react-stripe-elements';

const stripe = "hi"//window.Stripe('pk_test_F2DSfJBqAcWxlGCvAj7eZSmJ006ANFkrys');

class CheckoutForm extends Component {
  render(){
  const onAdd = async (e) => {
  e.preventDefault()
  const cardholderName = document.getElementById('cardholder-name');
  const { paymentMethod, error } = await stripe.createPaymentMethod('card', this.card, {
    billing_details: { name: cardholderName.value }
    });
  if(error) {
    // Show error in payment form
  }else {
    // Send paymentMethod.id to your server (see Step 2)
  const response = await fetch(`http://localhost:3000/customers/${this.props.currentCustomer.id}/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ payment_method_id: paymentMethod.id })
    });
  const json = await response.json();
    }
  alert('Transaction completed!')
  this.props.clearCartItems()
  this.props.history.push("/items")
  } 
  return(<div>
  <Form>
  <Form.Row>
  <Form.Group as={Col} controlId="formGridEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
  <Form.Label>Address</Form.Label>
  <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
  <Form.Label>Address 2</Form.Label>
  <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
  <Form.Group as={Col} controlId="formGridCity">
  <Form.Label>City</Form.Label>
  <Form.Control />
  </Form.Group>

  <Form.Group as={Col} controlId="formGridState">
  <Form.Label>State</Form.Label>
  <Form.Control as="select">
  <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
  <option>...</option>
  </Form.Control>
  </Form.Group>

  <Form.Group as={Col} controlId="formGridZip">
  <Form.Label>Zip</Form.Label>
  <Form.Control />
  </Form.Group>
  </Form.Row>

  <Form.Group id="formGridCheckbox">
  <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  </Form>
  <form action="/charge" method="post" id="payment-form">
  <div class="form-row">
  <label for="card-element">
  Credit or debit card
  </label>
  <div id="card-element">
  {/* <!-- A Stripe Element will be inserted here. --> */}

  <input placeholder="Card number" type="tel" name="number"/>
  <input placeholder="Full name" type="text" name="name"/>
  <input placeholder="MM/YY" type="tel" name="expiry"/>
  <input placeholder="CVC" type="number" name="cvc"/>
  </div>
  {/* <!-- Used to display Element errors. --> */}
  <div id="card-errors" role="alert"></div>
  </div>
  <ButtonContainer>
          <Link to="/Confirmation.js">Submit</Link>
         </ButtonContainer>
  </form>
  </div>)
  }
  }
// export default injectStripe(CheckoutForm);
export default CheckoutForm;