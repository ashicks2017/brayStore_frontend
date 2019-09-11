import React, { Component } from 'react';
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Home extends Component {
render() {
        return(
            <div>
             <div>
              <h1 className="display-3  jumbo-head-text">Shopping on the Fly</h1>
               <Carousel />
               
                <hr className="my-2" />
              {/* </Jumbotron> */}
            </div>
        </div>
        );
       }}

