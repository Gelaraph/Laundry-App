import React from "react";
import HeroSection from "../component/HeroSection";
import Image1 from "../assets/cloths.png";
import Image2 from "../assets/Rectangle 4.png";
import Image3 from "../assets/Rectangle 5.png";
import StarRating from "../component/StarRating";
import Best from "../component/Best";


const Home = () => (
  <div>
    <HeroSection />
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
            Our advanced solutions offer different cleaning solutions to
            different cloth types to prevent fading or wear and tear, making
            your clothes as longer.
          </p>
        </div>
      </div>
    </div>
    <div className="client-review-section">
      <h2>What clients are saying</h2>
      <div className="client-review-grid">
        <div>
          <p>
            &quot;FreshPress is a game-changer! Their pickup and delivery
            service is convenient, and the quality is impeccable. My clothes
            come back looking and smelling amazing. I highly recommended them
            for top-notch laundry care and exceptional service!&rdquo;
          </p>
          <div className="client-review-grid-footer">
            <p className="client-review-grid-name">Oluchi Adebayo</p>
            <StarRating />
          </div>
        </div>

        <div>
          <p>
            &quot;FreshPress Laundry&apos;s customer service is outstanding.
            They go above and beyond to accommodate my requests and ensure my
            complete satisfaction. Their friendly staff makes the entire laundry
            experience enjoyable.&rdquo;
          </p>
          <div className="client-review-grid-footer">
            <p className="client-review-grid-name">Ibukun Abejide</p>
            <StarRating />
          </div>
        </div>

        <div>
          <p>
            &quot;FreshPress&apos; s eco-friendly approach caught my attention,
            and their service exceeded my expectations. Their commitment to
            using environmentally friendly products makes me feel good about my
            choice.&rdquo;
          </p>
          <div className="client-review-grid-footer">
            <p className="client-review-grid-name">Adekunle Ciroma</p>
            <StarRating />
          </div>
        </div>

        <div>
          <p>
            &quot;FreshPress Laundry is my secret to looking sharp and
            professional. Their expert ironing and pressing service give my
            clothes a crisp finish that lasts. I feel confident and put-together
            every time I wear them.&rdquo;
          </p>
          <div className="client-review-grid-footer">
            <p className="client-review-grid-name">Ayomide Olukoga</p>
            <StarRating />
          </div>
        </div>
      </div>
    </div> 
    <Best />
  </div>
);

export default Home;
