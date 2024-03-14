import React from "react";
import Hero from "../component/Hero";
import "./Home.css";
import Main from "../component/Main";
import Cards from "../component/Cards";
import Navbar from "../component/Navbar";
import ModelCard from "../component/Modalcard/ModelCard";

function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Hero />
      <Main />
      <Cards />
      <ModelCard/>
    </div>
  );
}

export default Home;
