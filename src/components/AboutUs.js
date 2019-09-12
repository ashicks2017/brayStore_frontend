import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Video from './Video'

export default class AboutUs extends Component {
render() {
        return(
            <div>
             <div>
              <h1 className="display-3  jumbo-head-text">Shopping on the Fly</h1>
               <h3>About Us</h3>
               <Video />
                <hr className="my-2" />
              {/* </Jumbotron> */}
            </div>
        </div>
        );
       }}

