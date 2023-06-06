import React from "react";
import styled from "styled-components";
import Button from "./Button";
import HeroBackgroundImg from "../assets/hero-img.png";

const HeroSection = () => (
  <HeroStyle>
    <div className="hero-section">
      <div className="background-image" />
      <div className="hero-section-content">
        <h1>Fresh, Clean, and Effortless</h1>
        <p className="hero-section-content-intro">
          Freshen up your wardrobe with FreshPress - the ultimate choice <br />
          for busy professionals, offering advanced cleaning <br />
          methods and seamless booking and tracking.
        </p>
        <div className="hero-section-content-btn-div">
          <Button className="book-btn">Place booking now</Button>
        </div>
      </div>
    </div>
  </HeroStyle>
);

const HeroStyle = styled.div`
  .hero-section {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url(${HeroBackgroundImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .hero-section-content {
    padding-top: 1em;
    text-align: center;
    width: 50%;
    margin: 0 auto;
    color: #f8fbff;
    padding-bottom: 5em;
  }
  @media (max-width: 845px) {
    .hero-section-content {
      width: 90%;
    }
  }
  .hero-section-content-btn-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
  }
  .hero-section-content h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 96px;
  }
  .hero-section-content-intro {
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.015em;
  }
  .book-btn {
    background: #44bfad;
    color: #0e2623;
    font-weight: 600;
    width: 197px !important;
    padding: 5px 5px;
  }
`;

export default HeroSection;
