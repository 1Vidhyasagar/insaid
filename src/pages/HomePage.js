import React from 'react';
import "../styles/styles.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import i1 from "../imgs/download (1).jpg";
import i2 from "../imgs/images (1).jpg";
import i3 from "../imgs/images (2).jpg";
import i4 from "../imgs/images (3).jpg";

const HomePage = () => {
  return (
    <div className="home">
    
      <h2>Welcome to the Painting Gallery</h2>
      <p>Here is an overview of our service</p>
      <section className="main">
        <div className="description">
          <p style={{ textAlign: "left" }}>
            Artiste: 14,000 Indian paintings. Explore styles, colors, sizes.
            Watercolor, charcoal, gouache, oil, acrylic. Buy online. Start your artistic journey now!
          </p>{" "}
         
          <p style={{ textAlign: "left" }}>
            Let us deliver it right to your doorstep. Embark on your artistic
            journey with Artiste today!
          </p>
        </div>
        <>
          <Carousel className="img">
            <div>
              <img src={i1} alt="img" height="150px" width="150px" />
            </div>
            <div>
              <img src={i2} alt="img" height="150px" width="150px" />
            </div>
            <div>
              <img src={i3} alt="img" height="150px" width="150px" />
            </div>
            <div>
              <img src={i4} alt="img" height="150px" width="150px" />
            </div>
          </Carousel>
        </>
      </section>
    </div>
  );
}

export default HomePage;
