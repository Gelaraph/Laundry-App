import React from "react";
import StarRating from "./StarRating";

const ClientReview = () => (
  <div className="client-review-section">
    <h2>What clients are saying</h2>
    <div className="client-review-grid">
      <div>
        <p>
          &quot;FreshPress is a game-changer! Their pickup and delivery service
          is convenient, and the quality is impeccable. My clothes come back
          looking and smelling amazing. I highly recommended them for top-notch
          laundry care and exceptional service!&rdquo;
        </p>
        <div className="client-review-grid-footer">
          <p className="client-review-grid-name">Oluchi Adebayo</p>
          <StarRating />
        </div>
      </div>

      <div>
        <p>
          &quot;FreshPress Laundry&apos;s customer service is outstanding. They
          go above and beyond to accommodate my requests and ensure my complete
          satisfaction. Their friendly staff makes the entire laundry experience
          enjoyable.&rdquo;
        </p>
        <div className="client-review-grid-footer">
          <p className="client-review-grid-name">Ibukun Abejide</p>
          <StarRating />
        </div>
      </div>

      <div>
        <p>
          &quot;FreshPress&apos; s eco-friendly approach caught my attention,
          and their service exceeded my expectations. Their commitment to using
          environmentally friendly products makes me feel good about my
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
);

export default ClientReview;
