import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="bg-hero">
      <img
        className="bg-background"
        src="https://plus.unsplash.com/premium_photo-1661758940574-866d0f600af4?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      

      <h1>
        <Typewriter
          options={{
            strings: ["On a le covoit' en commun"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}

export default Hero;
