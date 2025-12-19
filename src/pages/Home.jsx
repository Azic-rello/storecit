import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import User from "../components/User";
import Phone from "../components/Phone";
import Info from "../components/Info";
import Cards from "../components/Cards";
import Futer from "../components/Futer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <User />
      <Phone />
      <Info />
      <Cards />
      <Futer />
    </div>
  );
};

export default Home;
