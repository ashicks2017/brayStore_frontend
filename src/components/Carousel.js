import React from "react";
import { Carousel } from "react-responsive-carousel";


export default () => (
  <Carousel autoPlay>
    <div>
      <img src="nice.jpg" />
      <p className="legend">Unique Gifts for Everyone</p>
    </div>
    <div>
      <img src="manyshopping.jpg" />
      <p className="legend">Shopping On the Go</p>
    </div>
    <div>
      <img src="couple.jpg" />
      <p className="legend">Shopping for a Love One</p>
    </div>
    <div>
      <img src="airport.jgp.jpeg" />
      <p className="legend">Nice Finds While Flying</p>
    </div>
    <div>
      <img src="time.jpg" />
      <p className="legend">It's Shopping Time</p>s
    </div>
    <div>
      <img src="shoe.jpg" />
      <p className="legend">Stepping out with Unique Gifts</p>
    </div>
  </Carousel>
);
