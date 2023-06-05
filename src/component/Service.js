import React from "react";
import Image1 from "../assets/cloths.png";
import Image2 from "../assets/Rectangle 4.png";
import Image3 from "../assets/Rectangle 5.png";

const Service = () => (
  <div className="services-section">
    <h2 className="services-section-header">Our services</h2>
    <div className="services-grid-cont">
      <div className="services-grid">
        <img src={Image1} alt="" />
        <h4>Professional Laundry and Dry Cleaning Services</h4>
        <p>
          Our laundry services provide professional cleaning, pressing and
          folding of your garments, ensuring they look their best and last
          longer.
        </p>
      </div>
      <div className="services-grid">
        <img src={Image2} alt="" />
        <h4>Convenient Online Booking and Tracking</h4>
        <p>
          Our online booking and tracking system offers a convenient way of
          dropping your clothes and tracking the pick up date.
        </p>
      </div>
      <div className="services-grid services-grid-3">
        <img src={Image3} alt="" />
        <h4>Advanced Dry Cleaning Solutions</h4>
        <p>
          Our advanced solutions offer different cleaning solutions to different
          cloth types to prevent fading or wear and tear, making your clothes as
          longer.
        </p>
      </div>
    </div>
  </div>
);

export default Service;
