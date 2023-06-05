import React from "react";
import ClientReview from "../component/ClientReview";
import HeroSection from "../component/HeroSection";
import Best from "../component/Best";
import Service from "../component/Service";

const Home = () => (
  <div>
    <HeroSection />
    <Service />
    <ClientReview />
    <Best />
  </div>
);

export default Home;
