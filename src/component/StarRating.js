import React, { useState } from "react";
import styled from "styled-components";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <StarRatingStyle>
      <div className="star-rating">
        {[...Array(5)].map((_, index) => {
          const starIndex = index + 1;
          return (
            <button
              type="button"
              key={`star-${starIndex}`}
              className={starIndex <= (hover || rating) ? "on" : "off"}
              onClick={() => setRating(starIndex)}
              onMouseEnter={() => setHover(starIndex)}
              onMouseLeave={() => setHover(rating)}>
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    </StarRatingStyle>
  );
};
const StarRatingStyle = styled.div`
  button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .on {
    color: #d2b040;
    padding: 2px;
  }
  .off {
    color: #ccc;
  }
`;

export default StarRating;
