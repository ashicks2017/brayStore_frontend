import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom'
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
// import pic from './http://cdn.shopify.com/s/files/1/0065/4917/6438/products/a-woman-smiles-in-pleasure-after-a-shopping-spree-and-airplane-taking-off-background_1200x1200.jpg?v=1535495132';
// // import editedd from './editedd.png';
// // import aa from './aa.png';

// // import fishs from './fishs.png';

export default class Home extends Component {
render() {
        return(
            <div>
            <div>
              {/* <Jumbotron className="jumbo-image small-jumbo-image"> */}
                <h1 className="display-3  jumbo-head-text">Shopping on the Fly</h1>
                {/* <p className="lead jumbo-body-text">
                  Created to elevate your wardrobe and your mood.
                </p> */}

    <img class="center-fit" src= 'https://www.canva.com/learn/wp-content/uploads/2015/09/visual-design-composition-tb-1320x743.jpg'/>
                <hr className="my-2" />
              {/* </Jumbotron> */}
            </div>
       </div>
        );
            }}

